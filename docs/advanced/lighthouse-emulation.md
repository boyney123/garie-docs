---
id: lighthouse-emulation
title: Configuring Lighthouse Emulation
author: Harry Wigman
authorURL: http://twitter.com/harrywigman
---

## Why change the emulation mode?

Sometimes you want to test pages in the worst possible scenario, with emulation enabled Garie by default tests on a slow 4G phone.

However, if you want to take more realistic baselines of your pages then disabling emulation might be more preferable.

## Prerequisites

- [Docker Compose](https://docs.docker.com/compose/install/)
- [git](https://git-scm.com/)

## Garie-Lighthouse configuration: 

Garie supports the use of the [Garie-Lighthouse](https://github.com/boyney123/garie-lighthouse) plugin, providing the Lighthouse implementation. We can edit [src/routes/collect/index.js](https://github.com/boyney123/garie-lighthouse/blob/master/src/routes/collect/index.js) to allow for our preffered emulation mode when making the webhook request.

Pull down the [Garie-Lighthouse](https://github.com/boyney123/garie-lighthouse) repository and edit the file to contain the following code:

*(You will need to do this on the system you have/you are going to install Garie on.)*
 
```
const express = require('express');
const router = express.Router();
const { getData } = require('../../light-house');
const { saveData } = require('../../influx');
const logger = require('../../utils/logger');
const saveReport = require('../../utils/save-report');

router.post('/', async (req, res, next) => {

    const { body = {} } = req;
    const { url, report = false, config = {'extends': 'lighthouse:default', 'settings': {'emulatedFormFactor': 'desktop'} } } = body;

    if (!url) {
        logger.info('/collect missing `url` data');
        return res.sendStatus(400);
    }

    try {

        const { raw, filteredData } = await getData(url, config) || {};

        await saveData(url, filteredData);

        if (report) {
            await saveReport(url, raw);
        }

        res.status(201).send(filteredData)
    } catch (err) {
        logger.error(`Failed to get or save data for ${url}`, err);
        res.sendStatus(500);
    }


});

module.exports = router;
```

Once you have made the change you will need to build the plugin using the following command in Garie-lighthouse root directory:

``` docker build -t garie/lighthouse/custom . ```

Finally you will need to change the Docker Compose file in Garie so it takes our newly created custom plugin.

Edit [docker-compose.yml](https://github.com/boyney123/garie/blob/master/docker-compose.yml) so the Garie-Lighthouse plugin is the custom one:
```
garie-lighthouse:
	image: "garie/lighthouse/custom:latest"
```
Now when you start Garie, you should see it uses our new plugin instead.

## Webhook format

We can use the new functionality by changing the webhook request.

This was the old request body:

```
{
  "url": "https://google.com",
  "report": true
}
```

The new body looks like this:

```
{
  "url": "https://google.com",
  "report": true,
  "config": {"extends": "lighthouse:default", "settings": {"emulatedFormFactor": "none", "throttlingMethod": "provided"} }
}
```

We can change the setting provided for different options:

### Form Factor:
- ```"emulatedFormFactor": "none"```
- ```"emulatedFormFactor": "mobile"```
- ```"emulatedFormFactor": "desktop"```

###  Throttling:
- ```"throttlingMethod": "provided"```
- ```"throttlingMethod": "devtools"```
- ```"throttlingMethod": "simulate"```

(More information on these [here](https://www.debugbear.com/blog/network-throttling-methods))
