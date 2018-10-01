---
id: pagespeed-insights
title: Pagespeed Insights
---

Github Url: [https://github.com/boyney123/garie-pagespeed-insights](https://github.com/boyney123/garie-pagespeed-insights)

![Logos](/img/docs/plugins/garie-pagespeed-insights/logo.png "Logo")

## Features

- Poll for page-speed-insights performance metrics on any website and stores the data into InfluxDB
- Webhook support
- Get page weight data
- View all historic reports.
- Setup within minutes

## Overview

garie-pagespeed-insights was developed as a plugin for the [Garie](https://github.com/boyney123/garie) Architecture.

[Garie](https://github.com/boyney123/garie) is an out the box web performance toolkit, and `garie-pagespeed-insights` is a plugin that generates and stores page-speed-insights data into `InfluxDB`.

`garie-pagespeed-insights` can also be run outside the `Garie` environment and run as standalone.

If your interested in an out the box solution that supports multiple performance tools like `page-speed-insights`, `google-speed-insight` and `lighthouse` then checkout [Garie](https://github.com/boyney123/garie).

## Using Webhooks

garie-pagespeed-insights also supports webhooks. You will need to `POST` to `localhost:3000/collect`.

**Payload**

| Property | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `url`    | `string` (required) | Url to get metrics for. |

**Payload Example**

```javascript
{
  "url": "https://www.bbc.co.uk"
}
```
