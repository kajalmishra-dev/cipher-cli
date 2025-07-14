// script.js

const charMap = {
  'a': '@', 'b': '8', 'c': '(', 'd': ')', 'e': '#', 
  'f': '!', 'g': '9', 'h': '&', 'i': '*', 'j': '%',
  'k': '<', 'l': '$', 'm': '^', 'n': '~', 'o': '+', 
  'p': '0', 'q': '1', 'r': '2', 's': '3', 't': '4',
  'u': '5', 'v': '6', 'w': '7', 'x': '=', 'y': '?', 'z': '/'
};

// Reverse the mapping for decoding
const reverseMap = {};
for (let key in charMap) {
  reverseMap[charMap[key]] = key;
}

// Encode function
function encode() {
  const input = document.getElementById("inputText").value.toLowerCase();
  let result = "";

  for (let char of input) {
    result += charMap[char] || char;  // Use mapped char or keep original
  }

  document.getElementById("outputText").value = result;
}

// Decode function
function decode() {
  const input = document.getElementById("inputText").value;
  let result = "";

  for (let char of input) {
    result += reverseMap[char] || char;  // Use reverse-mapped or keep original
  }

  document.getElementById("outputText").value = result;
}
