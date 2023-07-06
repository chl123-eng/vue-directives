import debounce from "./debounce";
import longPress from "./longPress";
import lazyLoad from "./lazyLoad";
import permission from "./permission";

const directives = {
  debounce,
  longPress,
  lazyLoad,
  permission,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
