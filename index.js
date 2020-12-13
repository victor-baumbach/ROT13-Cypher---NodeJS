function rot13(message){
  let result = "";

  for (character in message) {
    let thing = message.charCodeAt(character);
    if ((65 <= thing && thing <= 77) || (97 <= thing && thing <= 109)) {
      result = result + String.fromCharCode(thing + 13);
    } else if ((78 <= thing && thing <= 90) || (110 <= thing && thing <= 122)) {
      result = result + String.fromCharCode(thing - 13);
    } else {
      result = result + message.charAt(character);
    }
  }
  return result;
}

console.log(rot13("abcdefghigklmnopqrstuvwxyz"));
console.log(rot13("abcdefghigklmnopqrstuvwxyz".toUpperCase()));

console.log(rot13("Test"));