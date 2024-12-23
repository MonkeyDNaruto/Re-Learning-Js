// Project - Coding Task 3
const addInput = document.getElementById("add-input");
const addBtn = document.getElementById("add-btn");

const ul = document.getElementById("list");

addBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (addInput.value != "") {
    const li = document.createElement("li"),
      firstPar = document.createElement("p"),
      secondPar = document.createElement("p"),
      firstIcon = document.createElement("i"),
      secondIcon = document.createElement("i"),
      input = document.createElement("input");

    firstIcon.className = "fa fa-pencil-square-o";
    secondIcon.className = "fa fa-times";
    input.className = "edit-note";
    input.setAttribute("type", "text");

    firstPar.innerText = addInput.value;

    secondPar.appendChild(firstIcon);
    secondPar.appendChild(secondIcon);

    li.appendChild(firstPar);
    li.appendChild(secondPar);
    li.appendChild(input);

    ul.appendChild(li);

    addInput.value = "";
  }
});

ul.addEventListener("click", function (e) {
  if (e.target.classList[1] === "fa-pencil-square-o") {
    var parentPar = e.target.parentNode;
    parentPar.style.display = "none";

    var note = parentPar.previousElementSibling;
    var input = parentPar.nextElementSibling;

    input.style.display = "block";
    input.value = note.textContent;

    input.addEventListener("keypress", function (e) {
      if (e.keyCode == 13) {
        if (input.value !== "") {
          note.textContent = input.value;

          input.style.display = "none";
          parentPar.style.display = "block";
        } else {
          var li = input.parentNode;
          li.parentNode.removeChild(li);
        }
      }
    });
  } else if (e.target.classList[1] === "fa-times") {
    var list = e.target.parentNode.parentNode;
    list.parentNode.removeChild(list);
  }
});
