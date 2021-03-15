module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 == 0) {
    for (let i = str.length - 1; i >= 0; i--) {
      for (let j = 0; j < bracketsConfig.length; j++) {
        if (str[i] == bracketsConfig[j][0] || str[i] == bracketsConfig[j][1]) {
          let a = bracketsConfig[j].join('');
          str = str.replace(a,'');
        }
      }
    }
    if (str.length == 0) {
      return true;
    }
  }
  return false;
}