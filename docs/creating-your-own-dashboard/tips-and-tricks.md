---
id: tips-and-tricks
title: Tips & Tricks
---

## Changing time range in Grafana

You can change the time series on your dashboard by clicking the icon in the top right of the screen, and changing to which ever dates suits you.

![Browsertime](/img/docs/grafana/time-series.png "Grafana time series")

## Setting up performance budgets in Grafana

Setting performance budgets is almost best practice when dealing with your performance data. Luckily for us Grafana has some great visual ways for us to set these.

### Gauge

Gauge's are a great way to visualise your performance budgets.

![Gauge](/img/docs/grafana/gauge/gauge.png "Gauge")

#### Setting up your Gague

If you click on a Singlestat panel, and go into the panel settings.

- Click **Show** in the Gauge setting
- Set your threshold values. _For example in the screenshot below you can see if the value is below 60 its red, if its between 60 and 80 its orange, anything above 80 is green._

![Browsertime](/img/docs/grafana/gauge/gauge-settings.png "Gauge Settings")

> Play around with extra settings to get the best visualisation of your data. For example if you click **Threshold labels** this will show the labels next to the gague.

### More coming soon...
