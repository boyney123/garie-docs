---
id: using-webhooks
title: Using Webhooks
---

Garie collects data automatically based on the CRON you setup, but Garie also supports webhooks.

For example you can trigger Garie to collect performance data on each of your releases!.

## Using the webhooks

### Lighthouse Webhook

`POST` `http://localhost:3000/collect`

This will trigger a lighthouse audit on the given url. The data collected will be stored into InfluxDB and assessable through the dashboards.

**Payload**

| Property | Type                 | Description                                            |
| -------- | -------------------- | ------------------------------------------------------ |
| `url`    | `string` (required)  | Url to get metrics for.                                |
| `report` | `boolean` (optional) | When set to true a lighthouse report will be generated |

**Example**

```javascript
{
  "url": "https://www.bbc.co.uk",
  "report": true
}
```

### Pagespeed Insight Webhook

`POST` `http://localhost:3002/collect`

This will trigger a pagespeed insight audit on the given url. The data collected will be stored into InfluxDB and assessable through the dashboards.

**Payload**

| Property | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `url`    | `string` (required) | Url to get metrics for. |

**Example**

```javascript
{
  "url": "https://www.bbc.co.uk"
}
```

### Browsertime Webhook

`POST` `http://localhost:3001/collect`

This will trigger a browsertime audit on the given url. The data collected will be stored into InfluxDB and assessable through the dashboards.

**Payload**

| Property | Type                | Description             |
| -------- | ------------------- | ----------------------- |
| `url`    | `string` (required) | Url to get metrics for. |

**Example**

```javascript
{
  "url": "https://www.bbc.co.uk"
}
```
