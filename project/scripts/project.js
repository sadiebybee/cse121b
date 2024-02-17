const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")
const addButton = document.getElementById("add-button");

addButton.addEventListener("click", addTask);

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    `<span>${inputBox.value}</span>
    <span class="close">\u00d7</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = '';

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
    saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
      saveData();

  }
  else if(e.target.tagName === "SPAN"){
      e.target.parentElement.remove();
      saveData();
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();