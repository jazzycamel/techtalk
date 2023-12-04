import { html } from "utils";

/**
 * @param {{children: string}} props
 */
const Neon = (props) => {
  return html`
      <h1 class="neon masthead">${props.children}</h1>
    `;
};

export default Neon;
