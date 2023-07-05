const longPress = {
  bind: function (el, binding) {
    if (typeof binding.value !== "function") {
      throw "callback must be a function";
    }
    let pressTimer = null;
    let start = (e) => {
      if (e.type === "click" && e.button != 0) {
        return;
      }
      if (pressTimer == null) {
        pressTimer = setTimeout(() => {
          handler();
        }, 2000);
      }
    };
    let cancel = () => {
      if (pressTimer != null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    let handler = () => {
      binding.value();
    };
    el.addEventListener("mousedown", start);
    el.addEventListener("touchstart", start);
    el.addEventListener("mouseout", cancel);
    el.addEventListener("touchend", cancel);
    el.addEventListener("click", cancel);
  },
};
export default longPress;
