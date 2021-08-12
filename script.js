function validateForm(){
    let firstName = document.getElementById("f_name").value;
    let lastName = document.getElementById("l_name").value;
    let age = document.getElementById("age").value;
    let phoneNum = document.getElementById("p_num").value;
    let email = document.getElementById("email").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let message = document.getElementById("message").value;

    if (firstName == '' || lastName == '' || age == '' || phoneNum == '' || email == ''
    || address == '' || city == '' || message == ''){
        document.getElementById("errorMessage").innerHTML = "All fields are required!";
        return false;
    }
    if(isNaN(age)){
        document.getElementById("errorMessage").innerHTML = "You must include a valid age!";
        return false;
    }else{
        alert("Form submitted");
    }

}