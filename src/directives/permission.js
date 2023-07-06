function checkArray(key) {
  let arr = ["1", "2", "3"];
  let index = arr.indexOf(key);
  if (index > -1) {
    return true;
  } else {
    return false;
  }
}
const permission = {
  inserted: function (el, binding) {
    let permission = binding.value;
    if (permission) {
      let hasPermission = checkArray(permission);
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    }
  },
};

export default permission;
