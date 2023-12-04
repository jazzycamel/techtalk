import htm from "htm";
import { h } from "preact";

import { useEffect, useState } from "preact/hooks";

export const html = htm.bind(h);

/**
 *
 * @param {string} modulePath
 * @return {(function(*): (*))|*}
 */
export const lazy = (modulePath) => {
  // @ts-ignore
  return (props) => {
    const [component, setComponent] = useState(null);

    useEffect(() => {
      if (component !== null) return;
      import(modulePath).then((m) => setComponent(() => m.default));
    }, []);

    if (component === null) return html`<span>Loading...</span>`;
    return component(props);
  };
};
