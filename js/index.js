import { render } from "preact";
import Router from "preact-router";

import { html, lazy } from "utils";

const AboutPage = lazy("aboutPage");
const Footer = lazy("footer");
const HomePage = lazy("homePage");

const App = () => html`
  
      <div class="wrapper">
          <${Router}>
            <${HomePage} path="/" />
            <${AboutPage} path="/about" />
          </Router>
          <div class="push"></div>
      </div>
      <${Footer}/>
  
`;

(() => render(App(), document.querySelector("#app")))();
