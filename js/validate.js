function validate() {
    //this code snippet is for firstname 
    var firstName = document.getElementById('fname').value;
    if (firstName == "") {
        document.getElementById("fnameerr").innerHTML = "* First Name is required!";
        document.getElementById("fname").focus();
    }
    //this code snippet is for lastname 
    var lastName = document.getElementById('lname').value;
    if (lastName == "") {
        document.getElementById("lnameerr").innerHTML = "* Last Name is required!";
        document.getElementById("lname ").focus();
    }
    //this code snippet is for phonenumber 
    var phoneNumber = document.getElementById('phoneno').value;
    if (phoneNumber == "" && ) {
        document.getElementById("phonenoerr").innerHTML = "* Number required!";
    }
}
