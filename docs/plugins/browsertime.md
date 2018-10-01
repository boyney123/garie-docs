---
id: browsertime
title: Browsertime
---

Github Url: [https://github.com/boyney123/garie-browsertime](https://github.com/boyney123/garie-browsertime)

![Logos](/img/docs/plugins/garie-browsertime/logo.png "Logo")

## Features

- Poll for browsertime performance metrics on any website and stores the data into InfluxDB
- Webhook support
- Generates web performance videos
- View all historic reports.
- Setup within minutes

## Overview

Garie-browsertime was developed as a plugin for the [Garie](https://github.com/boyney123/garie) Architecture.

[Garie](https://github.com/boyney123/garie) is an out the box web performance toolkit, and `garie-browsertime` is a plugin that generates and stores browsertime data into `InfluxDB`.

`Garie-browsertime` can also be run outside the `Garie` environment and run as standalone.

If your interested in an out the box solution that supports multiple performance tools like `browsertime`, `google-speed-insight` and `lighthouse` then checkout [Garie](https://github.com/boyney123/garie).

## Viewing reports

Viewing browsertime reports is straight forward. Once you have your application running just go to `localhost:3001/reports` and you should see all the reports browsertime has generated.

## Using Webhooks

Garie-browsertime also supports webhooks. You will need to `POST` to `localhost:3001/collect`.

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
