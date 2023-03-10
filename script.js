function onFormSubmit(){
    nameValidation();
    emailValidation();
    numberValidation();
    // if((emailValidation == true) && (nameValidation == true) && (numberValidation == true)){
    // var formData = readFormData();
    // insertNewRecord(formData);
    // insertData(formData);
    // }
    var formData = readFormData();
    insertNewRecord(formData);
    insertData(formData);    
}

function nameValidation(){
    var name = document.getElementById('name').value;
    if(name=="")
    {
         document.getElementById("nm").style.color="red";
        // return false;
    }      
}

 function emailValidation() 
 {
  var x = document.forms["myForm"]["email"].value;
 
  var atpos = x.indexOf("@");
  var dotpos = x.lastIndexOf(".");
 
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) 
    {
        document.getElementById("mail").style.color="red";
        //return false;
    }
 }
 
function numberValidation(){
    var a = document.getElementById('number').value;
    if(a==""){
        document.getElementById("no").style.color="red";
       //return false;
    }
    if(isNaN(a)){
        document.getElementById("no").style.color="red";
        //document.getElementById("star").innerHTML="*Only Numbers are allowed";
        //return false;
    }
    if((a.length<10)){
        document.getElementById("no").style.color="red";
       // return false;
    }
}
function readFormData(){

    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["number"] = document.getElementById("number").value;
    formData["date"] = document.getElementById("date").value;
    formData["time"] = document.getElementById("time").value;
    formData["color"] = document.getElementById("color").value;
    formData["radio"] =document.getElementsByClassName("radio").value;
    formData["slider"] = document.getElementById("slider").value;
    formData["checkbox"] = document.getElementById("checkbox").value;
    formData["file"] ="Photo"//document.getElementById("file ").value;
    return formData;
}
function insertNewRecord(data){
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.number;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.date;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.time;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.color;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.radio;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.slider;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = data.checkbox;
    cell10 = newRow.insertCell(9);
    cell10.innerHTML = data.file;
    cell11 = newRow.insertCell(10);
    cell11.innerHTML = `<a href="#">Update</a>
                        <a href="#">Delete</a>`; // " " ''

}
function insertData(formData)
{
    var nm=localStorage.setItem("name",formData[0]);
    var em=localStorage.setItem("email",formData[1]);
    var no=localStorage.setItem("number",formData[2]);
    var no=localStorage.setItem("date",formData[3]);
    var no=localStorage.setItem("time",formData[4]);
    var no=localStorage.setItem("color",formData[5]);
    var no=localStorage.setItem("radio",formData[6]);
    var no=localStorage.setItem("slider",formData[7]);
    var no=localStorage.setItem("checkbox",formData[8]);
    var no=localStorage.setItem("file",formData[9]);
}