document.getElementById("sub-btn").addEventListener("click", submit);
document.getElementById("rst-btn").addEventListener("click",reset)

function reset(){
  errormsg.innerHTML=""
  
}


var row = null;
function submit() {

  let dataEntered = retrieveData();
  let readData = readLocalStorage(dataEntered);

  if(dataEntered == false){
    errormsg.innerHTML="Please Enter Data"
  }

else{

    if (row == null) {
        insert(readData);
    errormsg.innerHTML=""

    }
    else {

        update();
    errormsg.innerHTML=""


    }
}

document.getElementById("form").reset();

}


function retrieveData() {

  let account = document.getElementById("account").value;
  let category = document.getElementById("category").value;
  let amount = document.getElementById("amount").value;
  let note = document.getElementById("note").value;


  let arrlist = [account, category, amount, note];

  if(arrlist.includes("")){
    return false;
  }
else{
    return arrlist;
}
}



function readLocalStorage(dataEntered) {
  // store in localStorage

  let setAccount = localStorage.setItem("account", dataEntered[0]);
  let setCategory = localStorage.setItem("category", dataEntered[1]);
  let setAmount = localStorage.setItem("amount", dataEntered[2]);
  let setNote = localStorage.setItem("note", dataEntered[3]);

  // getting from localStorage to table
  let getAccount = localStorage.getItem("account", setAccount);
  let getAmount = localStorage.getItem("amount", setAmount);
  let getCategory = localStorage.getItem("category", setCategory);
  let getNote = localStorage.getItem("note", setNote);

  let arrOfLocalStorage = [getAccount, getCategory, getAmount, getNote];
  return arrOfLocalStorage;
}

// insert Data

function insert(readData) {
  let row = table.insertRow();
  row.insertCell(0).innerHTML = readData[0];
  row.insertCell(1).innerHTML = readData[1];
  row.insertCell(2).innerHTML = readData[2];
  row.insertCell(3).innerHTML = readData[3];
  row.insertCell(
    4
  ).innerHTML = `<button class="edt-btn" onclick= edit(this)>Edit</button> <button onclick= deleteData(this) class="del-btn" >Delete</button>`;
}

// Edit Data

function edit(td) {
  row = td.parentElement.parentElement;

  document.getElementById("account").value = row.cells[0].innerHTML;

  document.getElementById("category").value = row.cells[1].innerHTML;

  document.getElementById("amount").value = row.cells[2].innerHTML;
  document.getElementById("note").value = row.cells[3].innerHTML;
}

// update

function update() {
  row.cells[0].innerHTML = document.getElementById("account").value;
  row.cells[1].innerHTML = document.getElementById("category").value;
  row.cells[2].innerHTML = document.getElementById("amount").value;
  row.cells[3].innerHTML = document.getElementById("note").value;
  row = null;
}

// delete

function deleteData(td) {
  row = td.parentElement.parentElement;
  document.getElementById("table").deleteRow(row.rowIndex);
}




