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
    <h2 className="projectTitle">{siteConfig.title}</h2>
    <div className="projectImage">
      <img width="20%" src={imgUrl("garie.png")} />
    </div>
    <h2 className="projectTitle">
      <small>{siteConfig.tagline}</small>
    </h2>
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
            <Button href="/docs/doc1">View Example</Button>
            <Button href="/docs/doc1">Getting Started</Button>
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
        content: "Automaticlly collects performance data using Lighthouse, Google page insights & web page test.",
        image: 'https://image.flaticon.com/icons/svg/1055/1055687.svg',
        imageAlign: "top",
        title: "Monitor Web Performance"
      },
      {
        content: "Trigger performance audits when it suits you. Call Garie's API to trigger audits from any environment and repository.",
        image: "https://image.flaticon.com/icons/svg/461/461013.svg",
        imageAlign: "top",
        title: "Webhooks"
      },
      {
        content: "Out the box dashboards to help you get setup. Fully customisable dashboards.",
        image: 'https://image.flaticon.com/icons/svg/1035/1035688.svg',
        imageAlign: "top",
        title: "Dashboards"
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
          <Features />
          <div className="features">
            {/* <div className="content row">
              <div class="col"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///8+OUj/y0f/UE0AyeDm5uYxKz2trLEsJjnMy84nIDX/zkc7NUU1MECLiJD6+vozMUguLkhiX2pPSlihg0fAm0dDPk03OEgpOEh8P0ndTEx8eYIEwdfx8PI/MEAA0Og4RlXY19lHQEignqS6ub2SkJehRErASEtHOkhrPkkogpRrWkjpTUzdsUckHDJaVmJvbHW/vsGBfoZeW2ZbPEnf3uBraHKko6gZDilSTlt/aUiOQUoUByaxsLSxRkv/1EdbTkhIkC4LAAAKxUlEQVR4nO2de5ujthWHYbvIoJXwxk6ZbV0lJTa9pcWXie11k+nm+3+qeqwjQFwMEmLA8+j3T7L7eGW9ljg6F0k4jpWVVYOO+5eXfTwfuxtDKdhh7CPk+3ixH7svQyi+YOKCiB8FptplU5kRSZrx3RjT0Ey7zF2YaaivVr5bEjqZaJdFBE0CMawAXhFX/du9Al4bmgDiC85mJ6XZbPXXfdtl7q2x8RGZGEGEdmG4owj+mHo9243g1xodMaTQkbXHXnWGcaS7Xs3CCE4AcZ7ybtCAeTexGDqG+wxiNoLm7JauNnyS4j0AXhXwiYrO+q1KgCMjHm6TlOxyQI/B3+l3qwQ4LuKFG7yNV1DAxxXptlkBHBUx4mvDsUjocUJf0+WqARwRcc47Q2RC3kWfaTXJlrQKOKJF5WOIZELUYwznYgQJ/FfwjjWKSz5ce1PPYTaCdMFXWrrOlv5xEFe8G6uiLU24LX3WaG4eCcCtw5tBe0ZGRZzxGYmDnDCG9VDDM81HcOsIwo0zLiIDnyaKM0I+cd30qN5aAIHmK2BOmCES2tPZ1dKOgl3YsNeZyvbw2GhNUie+Id4AC4SASFw969xTRwieiL9NzrPkWYQaaazVXIwFYJHwhkjIKICOsxZMhCKUBYjooNlcjBEHlAiviDQaCdBxFiIkLIhetJuLL7COSoSONx6g45wqXha9GEiSyYSj6lweRP9kIgs4HUImZ6II8mdG2p0OYYLAmCJKke9Ha0MPzGQIGV8uyHZ/TpL1xtyaPBlCHtFf/TbTDU+F0IMhNB++TYUQvDas4YW2aCKEMfe8e2ZHazURwgUEEgM4/dMgDPhTSHW90HsyRTj34iDWXsEgFtRMOmWKgxqtiAFCdr5Q7PvYj1Zawc4eMjJJr15czVXqV8V/vF6E8zBFwmmm+KLBCNGubmY006o2gdibMKaSx6xRm57BEPaoUHANQ7hPy435qokeiHeJdh+EBiEMKoDX1tRWtTVkfl90+5BpCEIvq027hGQRrK9iMuYQU0SaXSgICAmtCusSbkXu3F8uTlskfsOvCuYGoibfwA6hFdTjVlXtND36PQwhWgSvxeljgpRzgBD4kq1eDyRxQt9keHIBM5/ktWn+N7jzIJqMmswTeuAvh4XaNIW/UmvCTNRknhCqDW6hYAT1lM6m32jUZJ6QzzCaFCpG3pE/V2k3FzMGl9tM1GSecFFTfWdLlUF5hsfWTNRknpD3zw8kQp7Y9TuZGhE1GdqEKBN6cbO6BjGLOkKO3W0MwRZ3nNKtkgkPdZEG19euLjA3E+hcU33vNO9MRU1CMmF4x4frmmzmHiU5FS0N7G5Ku/x7+D5qaguvecJA7NUqEPKJ12knk7GoScg8oQPLNclq0+wA1fcOgcJc+LS6QBUNQBiK2jTfcceOO/ABSIeJZy5qEqolJLIUCZkA8k/n/f4lpPCzkUu7dZyDy73UBqqojpD8/nNRvxM1QmctZgJByEf5tCCoNRiCqAkbPFdRR/jdH78V9f1nRcJlze44LtyS+8xqTT2Iyqon/PQh1ydVwnVN7T17mqO7i/4QtSbzhKwmSZNvrCbpne1MxyFqTeYJxTafglkmeJdve/QXjQYH/qnmdpkGGScMxDisCUaUEEp9fAqc+SpLT9Gm7IuoNRk4MVKQccIoz1jE58NpsUr2fMw2fjZVGwzOwmjUJGSaEMxMXejDttnGChTVTETDUZOQYUJRl673m9fZOTuCq36noVpTWYYJT9xWNDldsdtscExHTUJmCYO2FbvG4MzjlyQMk/3SUK2pLLOEYGbumfsNlgyOl9Cryb0K0sbmoiYho4R3zEyuosFZJl9pycUzASXJJCGc9midaOvs4GvRLeDMirUSr1VsR8wRCjPT2ss4KpMJqR5oclPcJni8TRC2mplcBYNTHkQ1xOYwpiQjhMLMdEoZFjwceYuzr2Rq3pSwk5nJxfIq42n98pJk9sdXcdrekhCCpgZvpkaQ+KVLfkKUbcQRWBXH+y0Jd/e9mYrEU/ucWb0YOoMV3DZBSNqEexOKDnfeRw8poeLZO2hDpbQNhMtWRb0JRZm3c8mP9w2ti8e24CiXQnDBW1EYdW1CRTPjiLwxlg4XbnhBQCGJAYTdjZMuoQiaUGe3GbJqtFjdgJNpKsnSNyNsCZpqBL9JVEPoKmyieStCBW9GCBYXJBP6Ux3DSNXMXAV2UyqkzqAw172VNyJUNzOO2DhV3JMiKsVUIcqXCdkdzXsQiqCpu5l5FWxAQfkgsjOctVfIeMuEW9xYwv6tz3qobmZeJfLbbiy2Tm1EeKnQiky4aPbh+nhtGmam2B2CzrerWY6h2A6ncop5aMLj5rw+860y6oePY1HfQOQUHp6zKpxSAX9QwuuPjtFV0C/1PG6S5WuKVySlSnWnAQmvUbqcidBIAp5qynBYLV06HOGRljMtOlXbU+Umr3u1t86E/5CkRxj4lV8r1dlbEGKpHYpVG6kj/PLnPxT1pycNwmNdHinVGcUgwtkjSNOFctVpIMJ5tj2d0DyFpFkVC1bktk7jKNQojA5EGObbSZJzsvPFjRqad2fMj8F+H+gVDYchhD3KLjrd3BF2PIDBMH+YdSRC4VEehNPM4HIHMsBRyFEIeaxEFnlUAHeMma+MjUMIk1SK7I5A+ObTdBBCvruSXIrROWTJFPZNTZmQJ8Sk0NXz+PUVKrHrhAlnAFMEhPyD6W0UIxHCGB7e7xjCc7iUn0OewTa373VMwrezpfNWDbUe3mjIc2E9XA2xHs5pa0UJfGLjPg3sS8/uwmMQrRu+3iF38Ntk3C/NT1Ay5jEWizu3u58v7EjYEXDI2GIbrsNF39higoTZJZm348PZ/5vecjcioXOs2+isliSbOKETo8q3ayUxuhG2WtTUPKHjuXImkA4QVohbdlmHddE84XXNwBkjoelqgMhQEHZv2iyhw9bR65tDkI9pYv4iJ2cChFd5wWw22w+C50yDcFhZwqosoTNtwmXUKDTAejgCYd2N+KAhVvwxCBsBh/DaLKEltIR3CH+Q9A4Jf/hLUR//+h4JPxb0oyW0hJbQElpCS2gJLaEltISD67EJvQ5nBt3HJky7FukflrDpuHpFltASWsKhCVuvtcDpYxNKu+Ma5DwyocqBWEtoCS2hJbSE9wnZdtGsh14PM0LcHGHQ90FYOUya67G9NktoCR+P8DtJ75Dwp/9Ien+E5KdPRX148GxiPeGHoiyhJbSEltASWkJLaAkt4diE7LEJ413Ni1tLr3ElD00YpDUv35UFvX9YwjshuyRLaAkt4dCEpPG+VCEcPTQhOQXtemhChVcAWEJLaAktoSVsIfQOYaOSd0EYN0ca6LFX/Iyw2Yd7cK/NElrCxyP8UtTTOyT85e9F/e/p3RE+/VP63n9/sYSW0BJaQktoCS2hJbSElnCqhN/ad19+/LEobcLiN30r3zq/bhV/oUc5tvhbUb/WxBZu9L0kt4aQ/EvSUw3h06/SN/3iVgk//1f6op+JRDhLUZv49dfl+PBJkltD6H6WVEfY4a6vui8qEZa+iP+z0tsfOkg5xm/4jOp9bbUqEdbJElZlCd3JErZbGi4sCL82fsQXOe/mjyDxSgna/JHfgHDrN37kqyDEjR9JBWE86yq4pZ2dmz8CLzWZ3/lI9ss26ww3+m/ufAR+hOBOM2Zf7WBlNZT+D2g9cBYskFScAAAAAElFTkSuQmCC" width="80%" /></div>
              <div className="col">
                <h4>Dashboards</h4>
                <h3>Out the box</h3>
                <p>Preconfigured dashboards out the box.</p>
                <a className="learnmore" href="/docs/introdution.html">
                  Learn more
                            </a>
              </div>

            </div> */}

            <div className="space-bg">
              <div class="content row">
                <div class="col">
                  <h3>How it works</h3>
                  <p>Built on a Docker architecture, data is collected inside each of our plugin's (containers) and Garie reads the performance data collected.</p>
                  <p> All the plugins push performance data into InfluxDB and Grafana is used to visualise the data.</p>
                  <p>Each plugin has its own API and container, so they can even be run outside of Garie's environment if you wanted to experiment or run them individually.</p>
                  <a class="learnmore" href="https://github.com/ComparetheMarket/meerstrap.universe">Learn more</a>
                </div>
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/186/186303.svg" />
                </div>
              </div>
            </div>

            <div className="test">
              <div class="content row">
                <div class="col center">
                  <img width="50%" src="https://image.flaticon.com/icons/svg/25/25231.svg" />
                </div>
                <div class="col feature-list">
                  <h3>Contributing to Garie</h3>
                  <p>Garie and all supported Plugins are open sourced and MIT licensed. This enables you to see and understand how we are building plugins, and of course join the community and help improve Garie. </p>
                  <a class="learnmore" href="https://github.com/ComparetheMarket/meerstrap.universe">Learn more</a>
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
