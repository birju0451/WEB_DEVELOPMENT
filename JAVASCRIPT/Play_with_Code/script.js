document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let text = document.getElementById("myParagraph");
    text.textContent = "changes";
  });

const change = document.getElementById("highlightFirstCity");
change.addEventListener("click", function () {
  let list = document.getElementById("citiesList");
  let changecolor = document.getElementById("chng");
  changecolor.style.color = "yellow";
});

const orderManipulation = document.getElementById("changeOrder");
orderManipulation.addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso by birju";
  coffeeType.style.background = "brown";
  coffeeType.style.padding = "10px";
});

const addNewIteam = document.getElementById("addNewItem");
addNewIteam.addEventListener("click", function () {
  let newIteam = document.createElement("li");
  newIteam.textContent = "Egg";
  let shoppingList = document.getElementById("shoppingList");
  shoppingList.appendChild(newIteam);
});

const remove = document.getElementById("removeLastTask");
remove.addEventListener("click", function () {
  let iteamList = document.getElementById("taskList");
  iteamList.lastChild.remove();
});

document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event.target.textContent);

  if (event.target && event.target.matches('.teaItem')){
    alert(event.target.textContent);
    console.log(event.target.textContent);
  }
});



// document.getElementById("addNewItem").addEventListener("click", function () {
//   let inp = document.getElementById("itemInput").value.trim();
//   let iteam = document.createElement("li");
//   iteam.textContent = inp;
//   let shoppingList = document.getElementById("shoppingList");
//   shoppingList.appendChild(iteam);
// });
// Example 11: Creating and Inserting Elements

// document.getElementById("addItemButton").addEventListener("click", function () {
//     let inp = document.getElementById("itemInput").value.trim();
//     if (inp === "") {
//         alert("Please enter an item");
//         return;
//     }
//     let item = document.createElement("li");
//     item.textContent = inp;
//     let shoppingList = document.getElementById("dynamicShoppingList");
//     shoppingList.appendChild(item);

//     document.getElementById("itemInput").value = "";

// });

const addIteam = document.getElementById("addItemButton");
addIteam.addEventListener("click", function () {
  let iteam = document.getElementById("itemInput").value.trim();
  if (iteam === "") {
    alert("Please enter an item");
    return;
  }

  let newIteam = document.createElement("li");
  newIteam.textContent = iteam;

  let shopingCart = document.getElementById("dynamicShoppingList");
  shopingCart.appendChild(newIteam);
  document.getElementById("itemInput").value = "";
});
