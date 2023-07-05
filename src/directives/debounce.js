const debounce = {
  inserted: function (el, binding) {
    let timer;
    el.addEventListener("click", () => {
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 1000);
    });
  },
};

export default debounce;