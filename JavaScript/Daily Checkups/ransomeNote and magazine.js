var canConstruct = function (ransomNote, magazine) {
  let lettersObj = {};
  for (let i = 0; i < magazine.length; i++) {
    if (lettersObj.magazine[i] == undefined) {
      lettersObj.magazine[i] = 1;
    } else {
      lettersObj.magazine[i]++;
    }
  }
  console.log(lettersObj);
};
console.log(canConstruct("aa", "aab"));
