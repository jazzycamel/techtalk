import { html, lazy } from "utils";

const Neon = lazy("neon");

const HomePage = () => html`<a href="/about"><${Neon}>OPTIMOVE</Neon></a>`;

export default HomePage;
