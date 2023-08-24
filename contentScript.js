const scriptEl = document.createElement("script");
scriptEl.src = chrome.runtime.getURL("injectedScript.js");
(document.head || document.documentElement).appendChild(scriptEl);
scriptEl.onload = () => {
  scriptEl.remove();
};
