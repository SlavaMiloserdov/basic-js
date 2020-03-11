const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(value) {
    this.reverse = value;
  }
  generateKey(text, key) {
    let arr = key.split("");
    for (let i = 0; arr.length < text.split("").length; i++) {
      if (i > key.split("")) i = 0;
      arr.push(arr[i]);
    }
    return arr.join("");
  }
  encrypt(message, key) {
    if (!message || !key) throw Error();
    key = this.generateKey(message, key)
      .toUpperCase()
      .split("");
    message = message.toUpperCase().split("");
    let result = [];
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt(0) > 90 || message[i].charCodeAt(0) < 65) {
        result.push(message[i]);
        key.unshift(" ");
      } else {
        let x =
          alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]) > 25
            ? alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]) - 26
            : alphabet.indexOf(message[i]) + alphabet.indexOf(key[i]);
        x = alphabet[x];
        result.push(x);
      }
    }
    return this.reverse !== false ? result.join("") : result.reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error();
    key = this.generateKey(encryptedMessage, key)
      .toUpperCase()
      .split("");
    encryptedMessage = encryptedMessage.toUpperCase().split("");
    let result = [];
    for (let i = 0; i < encryptedMessage.length; i++) {
      if (
        encryptedMessage[i].charCodeAt(0) > 90 ||
        encryptedMessage[i].charCodeAt(0) < 65
      ) {
        result.push(encryptedMessage[i]);
        key.unshift(" ");
      } else {
        let x =
          alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[i]) < 0
            ? alphabet.indexOf(encryptedMessage[i]) -
              alphabet.indexOf(key[i]) +
              26
            : alphabet.indexOf(encryptedMessage[i]) - alphabet.indexOf(key[i]);
        x = alphabet[x];
        result.push(x);
      }
    }
    return this.reverse !== false ? result.join("") : result.reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
