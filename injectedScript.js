window.alert = function (message) {
  console.log("Alert has been overridden! Original message:", message);
};

(function () {
  const originalPush = Array.prototype.push;
  Array.prototype.push = function (...args) {
    console.log("(injected log) Push method called with arguments:", args);
    return originalPush.apply(this, args);
  };
})();
