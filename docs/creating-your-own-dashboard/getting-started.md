---
id: getting-started
title: Building your first dashboard
---

Garie comes with some preconfigured dashboards, but creating your own is straight forward. Lets look at how we can create a basic dashboard.

# Step 1 - Create a new Dashboard

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-1.png "Creating a new dashboard")

Click the + icon and create a new dashboard. You should now be shown your own dashboard.

# Step 2 - Adding some panels

First lets add a single stat to our new dashboard.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-2.png "Selecting a panel")

Select `Single Stat` and your new panel will be added to the screen.

Next lets setup the panel to read some data from one of the Garie plugins.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-3.png "Editing a Panel")

When clicking `Edit` you should be shown the panel at the bottom with all the configurable options.

## Displaying performance data in your panel

Garie preconfigures the Grafana data sources out the box. This means displaying data should be straight forward.

First look at the available data sources.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-4.png "Data source")

> As you can see all the Garie Plugins have come through as data sources, which means you can read any data that is exported through the plugins.

Lets pick **Lighthouse** for now.

## Picking what metric to show

Once you pick **Lighthouse** you will see more options appear below.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-5.png "Panel options")

Lets go ahead a click **select measurement**.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-6.png "measurements")

As you can see these are all the metrics the [Garie Lighthouse plugin](https://github.com/boyney123/garie-lighthouse) collects.

Lets click on **performance-score**.

> You might start to see a value in your panel now. If not don't worry we still have to setup the url.

## Completing your panel

Down in the panel options, you should be able to see **WHERE** option in your query.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-7.png "where")

Click on the + icon, select `url`, then select which ever url you want to visualise the data for.

**That's it**

You panel should now be showing some data which represents your Lighthouse Performance Score.

![Grafana](/img/docs/grafana/tutorial/creating-a-dashboard/step-8.png "first panel")

> Try and go back through the small tutorial and change data-sources and metrics. Create more panels and graphs, and you should have your custom dashboard!

## Further Reading

Grafana has some great documentation, if your interested or want to know what else can be done, like alerting, graphs, panels, colours, setting baselines go checkout their documentation.

[http://docs.grafana.org/guides/getting_started/](http://docs.grafana.org/guides/getting_started/)
