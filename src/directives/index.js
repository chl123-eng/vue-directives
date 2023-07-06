import debounce from "./debounce";
import longPress from "./longPress";
import lazyLoad from "./lazyLoad";

const directives = {
  debounce,
  longPress,
  lazyLoad,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
