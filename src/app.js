import "./scss/app.scss";
let SVGs = {
  avatar: require("./assets/avatar-with-clothes.svg"),
  mail: require("./assets/mail-with-circle.svg"),
  linkedin: require("./assets/linkedin-with-circle.svg"),
  github: require("./assets/github.svg"),
  download: require("./assets/download.svg"),
  "external-link": require("./assets/external-link.svg")
};

/********************************
 ****** Insert inline SVGs ******
 ********************************/

const replaceElWithSvg = (selector, svg) => {
  const div = document.createElement("div");
  div.innerHTML = svg;
  const svgEl = div.firstChild;

  const elements = document.querySelectorAll(selector);
  if (!elements) {
    return;
  }

  elements.forEach(el => {
    const svgElClone = svgEl.cloneNode(true);
    svgElClone.classList.add(...el.classList);
    el.parentNode.replaceChild(svgElClone, el);
  });
};

for (const prop in SVGs) {
  replaceElWithSvg(`svg[data-svgid=${prop}]`, SVGs[prop]);
}

/**********************************
 ****** On Window load event ******
 **********************************/

window.addEventListener("load", () => {
  document.body.style.opacity = 1;
});
