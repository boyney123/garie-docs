---
id: how-it-works
title: How it works
---

## Architecture

![alt text](/img/architecture.png "Logo Title Text 1")

The architecture of Garie is quite simple. It utilises Docker containers and creates an out the box solution that setups up dashboards, reports, videos and more.

### Garie's core:

- [Docker](https://www.docker.com/) _(Architecture)_
- [InfluxDB](https://www.influxdata.com/) _(Store data)_
- [Grafana](https://grafana.com/) _(View data)_
- [Chronograf](https://github.com/influxdata/chronograf) _(Explore Data)_

### Garie supports:

- [Lighthouse](https://github.com/boyney123/garie-lighthouse)
- [Pagespeed Insights](https://github.com/boyney123/garie-pagespeed-insights)
- [Browsertime](https://github.com/boyney123/garie-browsertime)

Each plugin writes into InfluxDB and the data is then visualised with Grafana. You can create custom plugins and also custom dashboards to suit your own needs.
