/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : "") + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: "_self"
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <div>
    {/* <h2 className="projectTitle">{siteConfig.title}</h2> */}
    <div className="projectImage">
      {/* <img src={imgUrl("garie-transparent.png")} /> */}
      <img width="60%" src={imgUrl("garie-dark.png")} />
    </div>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || "";
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="/docs/using-garie/introduction">Getting Started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container padding={["bottom", "top"]} id={props.id} background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn">
    {[
      {
        content: "Collects performance metrics using Garie Plugins (Lighthouse, Google Pagespeed-insights, Browsertime, and more...)",
        image: "https://image.flaticon.com/icons/svg/1055/1055687.svg",
        imageAlign: "top",
        title: "Monitor Web Performance"
      },
      {
        content: "Configurable, Automatic collection of metrics, Webhook support, Lighthouse Reports, Performance Videos and more...",
        image: "https://image.flaticon.com/icons/svg/190/190411.svg",
        imageAlign: "top",
        title: "Features"
      },
      {
        content: "Preconfigured dashboards out the box. Review lighthouse reports at any time & view audit videos",
        image: "https://image.flaticon.com/icons/svg/1035/1035688.svg",
        imageAlign: "top",
        title: "Dashboards, Reports & Videos"
      }
    ]}
  </Block>
);

const FeatureCallout = () => (
  <div className="productShowcaseSection" style={{ textAlign: "center" }}>
    <h2>Out the box dashboards</h2>
    <MarkdownBlock>These are features of this project</MarkdownBlock>
  </div>
);

const LearnHow = () => (
  <Block background="light">
    {[
      {
        content: "Talk about learning how to use this",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Learn How"
      }
    ]}
  </Block>
);

const TryOut = () => (
  <Block id="try">
    {[
      {
        content: "Talk about trying this out",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "left",
        title: "Try it Out"
      }
    ]}
  </Block>
);

const Description = () => (
  <Block background="dark">
    {[
      {
        content: "This is another description of how this project is useful",
        image: imgUrl("docusaurus.svg"),
        imageAlign: "right",
        title: "Description"
      }
    ]}
  </Block>
);

const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Who is Using This?</h2>
      <p>This project is used by all these people</p>
      <div className="logos">{showcase}</div>
      <div className="more-users">
        <a className="button" href={pageUrl("users.html", props.language)}>
          More {siteConfig.title} Users
        </a>
      </div>
    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || "";

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <div className="darkest">
            <Features />
          </div>
          <div className="features">
            <div className="space-bg">
              <div class="content row">
                <div class="col">
                  <h3>How it works</h3>
                  <p>Garie is built on a Docker architecture. Data is collected inside each of Garies plugin's (containers) and Garie reads the performance data collected.</p>
                  <p>All the plugins collect data and save it into InfluxDB. Garie then uses Grafana to help visualise the data.</p>
                  <p>Each plugin also has its own API, some even collect reports & videos which are all accessible.</p>

                  <a class="learnmore" href="/docs/using-garie/introduction">
                    Learn more
                  </a>
                </div>
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/919/919853.svg" />
                </div>
              </div>
            </div>

            <div className="darkest space-bg">
              <div class="content row">
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/174/174249.svg" />
                </div>
                <div class="col">
                  <h3>Contribute to Garie</h3>
                  <p>Garie was built to help people get a better understanding of web performance and an easy way to start monitoring your applications.</p>
                  <p>If you would like to contribute feel free to checkout the repository.</p>

                  <a class="learnmore" href="/docs/contribute">
                    Learn more
                  </a>
                </div>
              </div>
            </div>

            {/* <div className="space-bg">
              <div class="content row">
                <div class="col">
                  <h4>Data Providers</h4>
                  <h3>Lighthouse, Google Page Speed, Web Page Test</h3>
                  <p>We fully support contributors from all over. If you would like to get involved checkout our code and get started!</p>
                  <a class="learnmore" href="https://github.com/ComparetheMarket/meerstrap.universe">Learn more</a>
                </div>
                <div class="col center">
                  <img src="http://axonix.com/wp-content/uploads/2014/12/whats-in-it-for-you.png" />
                </div>
              </div>
            </div> */}

            {/* <div className="space-bg">
              <div class="content row">
                <div class="col">
                  <h4>Performance</h4>
                  <h3>Why it matters</h3>
                  <p>We fully support contributors from all over. If you would like to get involved checkout our code and get started!</p>
                  <a class="learnmore" href="https://github.com/ComparetheMarket/meerstrap.universe">Learn more</a>
                </div>
                <div class="col center">
                  <img src="http://axonix.com/wp-content/uploads/2014/12/whats-in-it-for-you.png" />
                </div>
              </div>
            </div>  */}
          </div>
          {/* <FeatureCallout /> */}
          {/* <LearnHow />
          <TryOut />
          <Description />
          <Showcase language={language} /> */}
        </div>
      </div>
    );
  }
}

module.exports = Index;
