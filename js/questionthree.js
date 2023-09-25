document.addEventListener("DOMContentLoaded", function () {
    // Get references to the input field and the "Add Shopping" button
    var addInput = document.getElementById("add_list");
    var addButton = document.getElementById("add_shopping_list");

    // Get reference to the unordered list
    var shoppingList = document.querySelector("ul");

    // Add a click event listener to the "Add Shopping" button
    addButton.addEventListener("click", function () {
      // Get the value from the input field
      var newItemValue = addInput.value.trim(); // Remove leading/trailing whitespace

      // Check if the input is not empty
      if (newItemValue !== "") {
        // Create a new list item
        var newItem = document.createElement("li");
        newItem.textContent = newItemValue;

        // Add the new list item to the beginning of the shopping list
        shoppingList.insertBefore(newItem, shoppingList.firstChild);

        // Clear the input field
        addInput.value = "";
      }
    });
  });