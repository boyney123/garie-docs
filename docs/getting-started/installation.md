---
id: installation
title: Installation
---

## Prerequisites

- Docker: 18.0 or greater
- Node 8.10.0 or greater.
- [Free Pagespeed insight key](https://developers.google.com/speed/docs/insights/v4/first-app) _(required if you want to use pagespeed insights module)_

## Cloning the project

```bash
git clone git@github.com:boyney123/garie.git
```

## Running the project

### Setup your environment variables

You will just need to make a small change to `start.sh`.

You will have to change `PAGESPEED_INSIGHTS_KEY=YOUR_KEY` and replace `YOUR_KEY` with your [Pagespeed Insight key](https://developers.google.com/speed/docs/insights/v4/first-app).

```bash
#!/usr/bin/env bash

# Required for garie-browsertime (needs to know where to map reports back too as its docker in docker...)
REPORT_DIR=$(pwd)/plugins/garie-browsertime PAGESPEED_INSIGHTS_KEY=YOUR_KEY docker-compose up
```

### Configuring Websites

In the root of the application there is a `garie-config.json` file.

Add your `urls` to the config and Garie will run audits against them.

_example: garie-config.json_

```javascript
{
	"cron": "0 */10 * * * *",
	"urls": [
		{
			"url": "https://www.google.com",
			"plugins": [
				{
					"name": "lighthouse",
					"report": true
				}
			]
        },
        {
			"url": "https://www.bbc.co.uk",
			"plugins": [
				{
					"name": "lighthouse",
					"report": true
				}
			]
		}
	]
}
```

## Starting Garie

Once you have configured your websites, go into the Garie directory and run:

```bash
sh start.sh
```

_This runs docker-compose with environment variables set. First time round this might take a few minutes as it has to install all the docker images._

## Viewing Dashboards

Now go to [http://localhost](http://localhost) to see your Grafana dashboard.

- username: admin
- password: secret
