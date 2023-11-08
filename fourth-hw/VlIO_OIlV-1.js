function VigenèreCipher(key, abc) {
    this.encode = function (str) {
      let result = '';
      for(let i = 0; i < str.length; i++) {
        if(abc.indexOf(str[i]) != -1) {
          result += abc[(abc.indexOf(str[i]) + abc.indexOf(key[i % key.length])) % abc.length];
        } else {
          result += str[i];
        }
      }
      return result;
    };
    this.decode = function (str) {
      let result = '';
      for(let i = 0; i < str.length; i++) {
        if(abc.indexOf(str[i]) != -1) {
          result += abc[(abc.length + abc.indexOf(str[i]) - abc.indexOf(key[i % key.length])) % abc.length];
        } else {
          result += str[i];
        }
      }
      return result;
    };
}