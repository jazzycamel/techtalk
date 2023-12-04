(() => {
  const importMapElement = document.createElement("script");
  importMapElement.type = "importmap";
  importMapElement.textContent = JSON.stringify({
    imports: {
      preact: "https://unpkg.com/preact@10.16.0/dist/preact.module.js",
      "preact/compat": "https://unpkg.com/preact@10.16.0/compat/dist/compat.module.js",
      "preact/hooks": "https://unpkg.com/preact@10.16.0/hooks/dist/hooks.module.js",
      "preact-router": "https://unpkg.com/preact-router@4.1.2/dist/preact-router.module.js",
      htm: "https://unpkg.com/htm@3.1.1/dist/htm.module.js",

      aboutPage: "/js/pages/about.js",
      footer: "/js/components/footer.js",
      homePage: "/js/pages/home.js",
      neon: "/js/components/neon.js",
      utils: "/js/utils.js",
    },
  });
  document.currentScript?.after(importMapElement);
})();
