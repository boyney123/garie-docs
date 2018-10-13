/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return `${baseUrl}docs/${language ? `${language}/` : ""}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && <img src={this.props.config.baseUrl + this.props.config.footerIcon} alt={this.props.config.title} width="66" height="58" />}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("using-garie/motivation.html", this.props.language)}>Motivation</a>
            <a href={this.docUrl("getting-started/installation.html", this.props.language)}>Getting Started</a>
          </div>
          <div>
            <h5>Examples</h5>
            <a href="http://example.garie.io/?orgId=1&from=now-2d&to=now">Dashboard</a>
            <a href="http://example.garie.io:3000/reports">Lighthouse Reports</a>
            <a href="http://example.garie.io:3001/reports">Videos</a>
          </div>
          <div>
            <h5>More</h5>
            <a href="https://github.com/boyney123/garie">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>

        <section className="copyright">
          Made with love by <a href="https://twitter.com/boyney123" target="_blank"> @boyney123 </a>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
