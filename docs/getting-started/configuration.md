---
id: configuration
title: Configuring Garie
---

## How it works

The `garie-config.json` is given to each Garie plugin, and each plugin reads the necessary configuration.

## Options

- [`cron` [string]](#cron-string)
- [`urls` [object]](#urls-object)

## Reference

### `cron` [string]

Default: `0 */4 * * *` _Every 4 hours_

This option is used to trigger the collection of metrics. For example by default Garie will get performance data for each `url` configured every 4 hours.

Here are some cron examples:

- `* 10 * * * *` - At 30 minutes
- `0 */10 * * * *` - Every 30 minutes
- `0 */30 9-17 * * *` - Every 30 minutes between 9:00am and 5:00pm
- `0 */30 9-17 * * *` - Every 30 minutes between 9:00am and 5:00pm
- `0 */4 * * *` - Every 4 hours
- `00 30 11 * * 1-5` - Mon-Fri at 11:30am

Some more examples can be found at [https://crontab.guru/examples.html](https://crontab.guru/examples.html)

### `urls` [object]

This option configures what websites are used to collect performance data from. You can also configure plugins for each url.

Example:

```javascript
{
    ...
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
    ...
}
```

In this example Garie will collect performance data for two websites `google` and `bbc`.

Each plugin supports configuration which you can checkout at the [plugin documentation](/docs/plugins/lighthouse)
