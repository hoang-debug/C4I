//Bai 1
let str = prompt('Nhap chuoi ki tu can ma hoa:')
let rot13Cipher = function (str){
    let input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
    let index     = x => input.indexOf(x);
    let translate = x => index(x) > -1 ? output[index(x)] : x;
  return alert(str.split('').map(translate).join(''));
}
rot13Cipher(str);
//Bai 3
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  console.log(translatePigLatin("california"));
//Bai 2