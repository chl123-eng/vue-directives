import debounce from "./debounce";
import longPress from "./longPress";

const directives = {
  debounce,
  longPress,
};

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
