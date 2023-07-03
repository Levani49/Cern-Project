function reverseSentence() {
  const text = document.getElementById("text-input").value;
  const reversed = text.split(" ").reverse().join(" ");
  document.getElementById("result").textContent = reversed;
}

function reverseWords() {
  const text = document.getElementById("text-input").value;
  const reversed = text
    .split(" ")
    .map((word) => reverseString(word))
    .join(" ");
  document.getElementById("result").textContent = reversed;
}

function removeVowels() {
  const text = document.getElementById("text-input").value;
  const removed = text.replace(/[aeiou]/gi, "");
  document.getElementById("result").textContent = removed;
}

function changeCase() {
  const text = document.getElementById("text-input").value;
  const changed = text
    .split("")
    .map((char) => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    })
    .join("");
  document.getElementById("result").textContent = changed;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
