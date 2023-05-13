var selectedRow = null;

function onFormSubmit(e){
  event.preventDefault();
  var formData = readFormData();
  if(selectedRow === null){
    insertNewRecord(formData);
  }
  else{
    updateRecord(formData);
  }
  resetForm();
}

function insertNewRecord(data){
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perPrice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<button onClick= 'onEdit(this)'>Edit</button><button onClick= 'onDelete(this)'>Delete</button>`
 }

