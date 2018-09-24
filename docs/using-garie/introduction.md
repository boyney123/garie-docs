---
id: introduction
title: Introduction
---

Garie is an open source tool to monitor web performance built on a Docker architecture.

There are plenty of open source tools avaiable to audit web performance, Garie bundles these tools up and gives developers an out the box solution that provides an easy to use interface for reports, videos and monitoring.

# How it works

![alt text](/img/architecture.png "Logo Title Text 1")

The architecture of Garie is quite simple. It utilises Docker containers and creates an out the box solution that setups up dashboards, reports, videos and more.

### Garie's core:

- [Docker](https://www.docker.com/) _(Architecture)_
- [InfluxDB](https://www.influxdata.com/) _(Store data)_
- [Grafana](https://grafana.com/) _(View data)_
- [Chronograf](https://github.com/influxdata/chronograf) _(Explore Data)_

### Garie supports:

- [Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Pagespeed Insights](https://developers.google.com/speed/pagespeed/insights/)
- [Browsertime](https://github.com/sitespeedio/browsertime)

Each plugin writes into InfluxDB and the data is then visualised with Grafana. You can create custom plugins and also custom dashboards to suit your own needs.
