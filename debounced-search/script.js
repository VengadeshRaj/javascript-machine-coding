const FRUITS = [
  "Apple",
  "Banana",
  "Orange",
  "Mango",
  "Pineapple",
  "Grapes",
  "Watermelon",
  "Strawberry",
  "Papaya",
  "Guava",
  "Kiwi",
  "Blueberry",
  "Cherry",
  "Peach",
  "Pear",
  "Lemon",
  "Fig",
  "Pomegranate",
  "Lychee",
  "Dragonfruit",
];

const DELAY = 300;

const searchBox = document.getElementById("search-box");
const suggestionsList = document.getElementById("suggested-fruits");
let timerId;

const onSuggestionClick = (e) => {
  const selectedFruit = e.target.innerHTML;
  searchBox.value = selectedFruit;
  suggestionsList.innerHTML = "";
};

// There is no dedicated onchange event in text box, We need to use "input"
searchBox.addEventListener("input", function (e) {
  const input = e.target.value;
  suggestionsList.innerHTML = "";
  
  if (timerId) clearTimeout(timerId);

  if (input) {
    timerId = setTimeout(() => {
      const suggestions = FRUITS.filter((fruit) => {
        if (fruit.toLowerCase().startsWith(input.toLowerCase())) return fruit;
      });

      suggestions.forEach((fruit) => {
        const li = document.createElement("li");
        li.textContent = fruit;
        li.id = "fruit-list";
        li.onclick = onSuggestionClick;
        suggestionsList.appendChild(li);
      });

      timerId = null;
    }, DELAY);
  }
});
