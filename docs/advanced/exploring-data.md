---
id: exploring-data
title: Exploring Garie Data
---

Garie runs [Chronograf](https://www.influxdata.com/time-series-platform/chronograf/) against the InfluxDB database.

## Viewing Data

After you have Garie running if you go to [http://localhost:8888](http://localhost:8888) you will be shown the Chronograf dashboard.

Make sure you setup the `Connection String` to point to `http://influxdb:8086` as seen in the photo below.

![Setup](/img/docs/chronograf/setup.png "Setup")

## Data explorer

Once setup, click on the icon on the left `Data Explorer`

![Data-explorer](/img/docs/chronograf/data-explorer.png "Data-explorer")

You should then been shown a screen that allows you to view all the data in the InfluxDB database, for example you should be able to see lighthouse, pagespeed-insights and browsertime data in the database.

![Querys](/img/docs/chronograf/query.png "query")

That's it.

If you are interesting in reading more about chronograf make sure you checkout the docs.

[https://docs.influxdata.com/chronograf/v1.6/](https://docs.influxdata.com/chronograf/v1.6/)
