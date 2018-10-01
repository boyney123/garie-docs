---
id: lighthouse
title: Lighthouse
---

Github Url: [https://github.com/boyney123/garie-lighthouse](https://github.com/boyney123/garie-lighthouse)

![Logos](/img/docs/plugins/garie-lighthouse/logo.png "Logo")

## Features

- Poll for lighthouse performance metrics on any website and stores the data into InfluxDB
- Webhook support
- Understand your performance metrics with recommend improvements thanks to lighthouse reports
- View all historic lighthouse reports.
- Setup within minutes

## Overview

Garie-lighthouse was developed as a plugin for the [Garie](https://github.com/boyney123/garie) Architecture.

[Garie](https://github.com/boyney123/garie) is an out the box web performance toolkit, and `garie-lighthouse` is a plugin that generates and stores lighthouse data into `InfluxDB`.

`Garie-lighthouse` can also be run outside the `Garie` environment and run as standalone.

If your interested in an out the box solution that supports multiple performance tools like `lighthouse`, `google-speed-insight` and `web-page-test` then checkout [Garie](https://github.com/boyney123/garie).

## Data collected

Lighthouse comes with loads of audits out the box. You can view all metrics in the reports.

Garie-lighthouse filters what data is stored into influxDB and returned in the webhook.

| Property                | Type     | Description                             |
| ----------------------- | -------- | --------------------------------------- |
| `performance-score`     | `number` | Overall performance score.              |
| `pwa-score`             | `number` | Overall progressive web app score.      |
| `accessibility-score`   | `number` | Overall accessibility score.            |
| `best-practices-score`  | `number` | Overall best practices score.           |
| `seo-score`             | `number` | Overall seo score.                      |
| `time-to-first-byte`    | `number` | Number of ms to first byte.             |
| `firstContentfulPaint`  | `number` | Number of ms to first contentful paint. |
| `firstMeaningfulPaint`  | `number` | Number of ms to first meaningful paint. |
| `interactive`           | `number` | Number of ms to interactive.            |
| `firstCPUIdle`          | `number` | Number of ms to CPU idle.               |
| `speedIndex`            | `number` | Google speed index.                     |
| `estimatedInputLatency` | `number` | Input Latency.                          |
| `errors-in-console`     | `number` | Number of errors in the console.        |
| `redirects`             | `number` | Number of redirects.                    |
| `redirects`             | `number` | Number of redirects.                    |

## Viewing reports

Viewing lighthouse reports is straight forward. Once you have your application running just go to `localhost:3000/reports` and you should see all the reports lighthouse has generated.

## Using Webhooks

Garie-lighthouse also supports webhooks. You will need to `POST` to `localhost:3000/collect`.

**Payload**

| Property | Type                 | Description                                            |
| -------- | -------------------- | ------------------------------------------------------ |
| `url`    | `string` (required)  | Url to get metrics for.                                |
| `report` | `boolean` (optional) | When set to true a lighthouse report will be generated |

**Payload Example**

```javascript
{
  "url": "https://www.bbc.co.uk",
  "report": true
}
```
