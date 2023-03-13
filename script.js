//  ------------------------- Validation Part -------------------------------------- // 
let flag =1;
 function emailValidation() 
 {
  var x = document.forms["myForm"]["email"].value;

  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");

    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
    {
        document.getElementById("mail").style.color="red";
        return false;
        
    }
 }

function numberValidation(){
    var a = document.getElementById('number').value;
    if(a==""){
        document.getElementById("no").style.color="red";
       return false;
       
    }
    if(isNaN(a)){
        document.getElementById("no").style.color="red";
        //document.getElementById("star").innerHTML="*Only Numbers are allowed";
        return false;
        
    }
    if((a.length<10)){
        document.getElementById("no").style.color="red";
       return false;
        
    }
}
var row = null;
function Onsubmit() {
    //emailValidation();
    //numberValidation();
    // if((emailValidation() == true)&&(numberValidation() == true)){
    var dataEntered = retrieveData();
    var readData = readingDataFromLocalStorage(dataEntered);
    if (row == null) {
        insert(readData);
        msg.innerHTML = "Data Inserted !"
    }
    else {
        update();
        msg.innerHTML = "Data Updated !"
    }
// }
// else{
    // alert("Please... fill Currect Detailes  !");
// }
}


function retrieveData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var date = document.getElementById("date").value;
    var time = document.getElementById("time").value;
    var color = document.getElementById("color").value;
    var radio = document.getElementById("radio").value;
    var slider = document.getElementById("slider").value;
    var checkbox = document.getElementById("checkbox").value;
    var file = document.getElementById("file").value;
    formData = [name, email, number, date, time, color, radio, slider, checkbox, file];
    return formData;
}
function readingDataFromLocalStorage(dataEntered) {
    var name = localStorage.setItem("name", dataEntered[0]);
    var email = localStorage.setItem("email", dataEntered[1]);
    var number = localStorage.setItem("number", dataEntered[2]);
    var date = localStorage.setItem("date", dataEntered[3]);
    var time = localStorage.setItem("time", dataEntered[4]);
    var color = localStorage.setItem("color", dataEntered[5]);
    var radio = localStorage.setItem("radio", dataEntered[6]);
    var slider = localStorage.setItem("slider", dataEntered[7]);
    var checkbox = localStorage.setItem("checkbox", dataEntered[8]);
    var file = localStorage.setItem("file", dataEntered[9]);

    // Getting values from local to table

    var name1 = localStorage.getItem("name", name);
    var email1 = localStorage.getItem("email", email);
    var number1 = localStorage.getItem("number", number);
    var date1 = localStorage.getItem("date", date);
    var time1 = localStorage.getItem("time", time);
    var color1 = localStorage.getItem("color", color);
    var radio1 = localStorage.getItem("radio", radio);
    var slider1 = localStorage.getItem("slider", slider);
    var checkbox1 = localStorage.getItem("checkbox", checkbox);
    var file1 = localStorage.getItem("file", file);

    var arr = [name1, email1, number1, date1, time1, color1, radio1, slider1, checkbox1, file1];
    return arr;

}
function insert(readData) {
    //  var table = document.getElementById("table");//.getElementsByTagName('tbody')[0];
    var row = table.insertRow(table.length);
    row.insertCell(0).innerHTML = readData[0];
    row.insertCell(1).innerHTML = readData[1];
    row.insertCell(2).innerHTML = readData[2];
    row.insertCell(3).innerHTML = readData[3];
    row.insertCell(4).innerHTML = readData[4];
    row.insertCell(5).innerHTML = readData[5];
    row.insertCell(6).innerHTML = readData[6];
    row.insertCell(7).innerHTML = readData[7];
    row.insertCell(8).innerHTML = readData[8];
    row.insertCell(9).innerHTML = readData[9];
    row.insertCell(10).innerHTML = `<button onclick = edit(this) style="height: 40px;width: 100px;font-size: 18px;
    background-color: blue;color:white;border-radius:10px">Edit</button>
    <button onclick = remove(this) style="height: 40px; width: 100px;font-size: 18px;background-color: red;color:white;border-radius:10px">Delete</button>`;
}

function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("email").value = row.cells[1].innerHTML;
    document.getElementById("number").value = row.cells[2].innerHTML;
    document.getElementById("date").value = row.cells[3].innerHTML;
    document.getElementById("time").value = row.cells[4].innerHTML;
    document.getElementById("color").value = row.cells[5].innerHTML;
    document.getElementById("radio").value = row.cells[6].innerHTML;
    document.getElementById("slider").value = row.cells[7].innerHTML;
    document.getElementById("checkbox").value = row.cells[8].innerHTML;
    document.getElementById("file").value = row.cells[9].innerHTML;

}

function update() {
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("email").value;
    row.cells[2].innerHTML = document.getElementById("number").value;
    row.cells[3].innerHTML = document.getElementById("date").value;
    row.cells[4].innerHTML = document.getElementById("time").value;
    row.cells[5].innerHTML = document.getElementById("color").value;
    row.cells[6].innerHTML = document.getElementById("radio").value;
    row.cells[7].innerHTML = document.getElementById("slider").value;
    row.cells[8].innerHTML = document.getElementById("checkbox").value;
    row.cells[9].innerHTML = document.getElementById("file").value;
    row = null;
}

function remove(td) {
    var ans = confirm("Are you sure you want to delete this record ?");
    if (ans == true) {
        row = td.parentElement.parentElement;
        document.getElementById("table").deleteRow(row, rowIndex)
    }

}
