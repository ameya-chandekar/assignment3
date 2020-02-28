$(function() {


    $("#fnameerr").hide();
    $("#passerr").hide();
    $("#lnameerr").hide();
    $("#phonenoerr").hide();
    $("#officenoerr").hide();
    $("#emailerr").hide();
    $("#passerr").hide();
    $("#cpasserr").hide();
    $("doberr").hide();
    $("#age").hide();
    $("#gendererr").hide();
    $("#aboutus").hide();
    $("#interesterr").hide();
    var error_fname = false;
    var error_lname = false;
    var error_phoneno = false;
    var error_officeno = false;
    var error_password = false;
    var error_cpassword = false;
    var error_date = false;

    $("#btn").click(function() {
        event.preventDefault();
        check_userfname();
        check_userlname();
        check_phoneno();
        check_officeno();
        check_email();
        check_password();
        confirm_password();
        select_date();
        interest();
        about();
        $("#fname").focus();
        $("#lname").focus();
        $("#phoneno").focus();
        $("#officeno").focus();
        $("#email").focus();
        $("#pass").focus();
        $("#cpass").focus();
        $("#about").focus();
    });
    //calling function for first name
    $("#fname").blur(function() {

        check_userfname();

    });


    //calling function for lastname
    $("#lname").blur(function() {

        check_userlname();

    });

    //calling function for phoneno
    $("#phoneno").blur(function() {

        check_phoneno();

    });

    $("#officeno").blur(function() {

        check_officeno();

    });



    $("#email").blur(function() {

        check_email();

    });

    //calling function for password
    $("#pass").blur(function() {

        check_password();

    });

    //calling function for password
    $("#cpass").blur(function() {

        confirm_password();

    });



    //caaling function to select date compalsory
    $("#year").blur(function() {

        select_date();
        // agecal();

    });
    $("#month").blur(function() {

        select_date();
        // agecal();

    });

    $("#day").blur(function() {

        select_date();


    });




    // calling function  for calculating age


    $("#year").blur(function() {

        agecal();
        // agecal();

    });

    $("#btn").click(function() {

        interest();

    });

    $("#about").blur(function() {

        about();

    });




    /* function declarations starts from here */

    //function for first name
    function check_userfname() {

        var username_length = $("#fname").val().length;

        if (username_length < 1) {
            $("#fnameerr").html("*Required!!!");
            $("#fnameerr").show();
            error_fname = true;
        } else {
            $("#fnameerr").hide();
        }

    }


    //function for last name

    function check_userlname() {

        var userlname_length = $("#fname").val().length;

        if (userlname_length < 1) {
            $("#lnameerr").html("*Required!!!");
            $("#lnameerr").show();
            error_lname = true;
        } else {
            $("#lnameerr").hide();
        }

    }
    //function declaration for phone no
    function check_phoneno() {
        var phonenumber = $("#phoneno").val();
        if (phonenumber.length < 10) {
            $("#phonenoerr").html("*enter correct number");
            $("#phonenoerr").show();
            error_phoneno = true;
        } else if (!phonenumber.match(/^[0-9]/)) {
            $("#phonenoerr").html("only numbers are allowed and only upto 10 digits");
            $("#phonenoerr").show();
            error_phoneno = true;

        } else { $("#phonenoerr").hide() }
    }


    //function declaration for office no
    function check_officeno() {
        var officenumber = $("#officeno").val();
        if (officenumber == "") {
            $("#officenoerr").html("cannot be blank");
            $("#officenoerr").show();
            error_officeno = true;
        } else if (!officenumber.match(/^[0-9]/)) {
            $("#officenoerr").html("only numbers are allowed ");
            $("#officenoerr").show();
            error_officeno = true;

        } else { $("#officenoerr").hide() }
    }


    //function declaration for email
    function check_email() {
        var email = $("#email").val();
        if (email == "") {
            $("#emailerr").html("cannot be blank");
            $("#emailerr").show();
            error_email = true;
        } else if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
            $("#emailerr").html("* Please Enter Valid Email!");
            $("#emailerr").show();
            error_email = true;

        } else { $("#emailerr").hide() }
    }


    //function for password


    function check_password() {
        cond = /^[A-Za-z]\w{7,11}$/;

        var password = $("#pass").val();
        if (!password.match(/^[A-Za-z]\w{7,11}$/)) {
            $("#passerr").html("* password compulsary!! with 8-12 characters and should contain only aplhanumeric values");
            $("#passerr").show();
            error_password = true;
        } else {
            $("#passerr").hide();
        }

    }

    function confirm_password() {
        var cpassword = $("#pass").val();
        var cpass = $("#cpass").val();
        if (cpass != cpassword) {
            $("#cpasserr").html("* should be same as password");
            $("#cpasserr").show();
            error_cpassword = true;
        } else {
            $("#cpasserr").hide();
        }

    }




    function select_date() {
        var day = $("#day").val();
        var month = $("#month").val();
        var year = $("#year").val();


        if (day == "0" || month == "-1" || year == "0") {

            $("#doberr").html("*select full date!!");
            $("#doberr").show();
            error_date = true;
        } else { $("#doberr").hide(); }

    }

    //function declaration which calculates age based on slected dob
    function agecal() {
        var day = document.getElementById('day').value;
        var month = document.getElementById('month').value;
        var year = document.getElementById('year').value;
        var dob = new Date(year, month, day);
        var todaydate = new Date();
        var todaysYear = todaydate.getFullYear();
        var dobyear = dob.getFullYear();
        var ageyears = todaysYear - dobyear;
        var todaysmonth = todaydate.getMonth() + 1;
        var dobmonth = dob.getMonth() + 1;
        var agemonths = todaysmonth - dobmonth;
        var todaysDay = todaydate.getDay();
        var dobDay = dob.getDay();

        //this condition is for checking if birthmonth > currentdatesmonth
        if (dobmonth > todaysmonth) {
            ageyears = ageyears - 1;
            if (dobDay > todaysDay) {
                agemonths = agemonths + 11;
            } else {
                agemonths = agemonths + 12;
            }
        }



        //this condition is for checking if birthmonth = currentdatesmonth
        else if (dobmonth == todaysmonth) {
            if (dobDay <= todaysDay) {

                agemonths = 0;
            } else {
                ageyears = ageyears - 1;
                agemonths = dobmonth;
            }
        }


        //this condition is for checking if birthmonth < currentdatesmonth
        else {
            if (dobDay > todaysDay) {

                agemonths = agemonths - 1;

            } else {

                agemonths = agemonths;
            }

        }

        let age = " " + ageyears + "." + agemonths + " years";

        $("#age").val(age);
        $("#age").show();
    }

    //aboutus compulsary


    function interest() {
        var cbox = $("input[name='interest']").serializeArray();
        if (cbox.length === 0) {
            $("#interesterr").html("*Atleast one interest is required!");
            $("#interesterr").show();
        } else {
            $("#interesterr").hide();

        }
    }

    function about() {
        var value = $("#about").val();
        if (value == "") {
            $("#abouterr").html("required!!!");
            $("#abouterr").show();
        }


    }

});