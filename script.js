let userName = document.getElementById("username-input")
let email = document.getElementById("email-input")
let password = document.getElementById("password-input")

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("clicked")
    validation()
})

const validation = () => {
    // debugger

    let userName1 = userName.value
    let email1 = email.value
    let password1 = password.value

    let userNameRegex = /^[a-zA-Z\-]+$/;
    if (userNameRegex.test(userName1)) {
        document.getElementById("username-validation").innerHTML = ""
        userName.style.border = "2px solid green"
        // console.log("success", userName1)
    } else {
        document.getElementById("username-validation").innerHTML = "Only characters are allowed"
        userName.style.border = "2px solid red"
    }

    if (email1 === "") {
        document.getElementById("email-validation").innerHTML = "Email id is Required"
        email.style.border = "2px solid red"
    } else {
        document.getElementById("email-validation").innerHTML = ""
        email.style.border = "2px solid green"
    }

    let pwRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (pwRegex.test(password1)) {
        document.getElementById("password-validation").innerHTML = ""
        password.style.border = "2px solid green"
    } else {
        document.getElementById("password-validation").innerHTML = "Password validation is at least 6 character"
        password.style.border = "2px solid red"
    }


    if (userNameRegex.test(userName1) && email1 !== "" && pwRegex.test(password1)) {
        setTimeout(() => {
            userName.value = ""
            email.value = ""
            password.value = ""
            userName.style.border = ""
            email.style.border = ""
            password.style.border = ""
            alert("You are successfully Signin")
        }, 1000);
    }



    // if (userName.value === "") {
    //     console.log("empty")
    //     document.getElementById("username-validation").innerHTML = "Username is Valid"
    //     userName.style.border = "1px solid red"
    // }
    // if (email.value === "") {
    //     console.log("empty-emailid")
    //     document.getElementById("email-validation").innerHTML = "Email id is Valid"
    //     email.style.border = "1px solid red"
    // } else {
    //     document.getElementById("email-validation").innerHTML = ""
    //     document.getElementById("username-validation").innerHTML = ""
    //     console.log("success")
    //     userName.style.border = ""
    //     email.style.border = ""
    // }



    // if (userName.value === "") {
    //     document.getElementById("username-validation").innerHTML = "Username is Valid"
    //     userName.style.border = "1px solid red"
    // } else if (email.value == "") {
    //     document.getElementById("email-validation").innerHTML = "Email id is Valid"
    //     email.style.border = "1px solid red"
    // } else {
    //     document.getElementById("username-validation").innerHTML = ""
    //     document.getElementById("email-validation").innerHTML = ""
    //     userName.style.border = ""
    //     email.style.border = ""
    // }



    // if (userName.value === "" || email.value === "" || password.value === "") {
    //     document.getElementById("username-validation").innerHTML = "Username is Valid"
    //     document.getElementById("email-validation").innerHTML = "Email id is Valid"
    //     document.getElementById("password-validation").innerHTML = "Password is valid"
    //     userName.style.border = "1px solid red"
    //     email.style.border = "1px solid red"
    //     password.style.border = "1px solid red"
    // } else {
    //     document.getElementById("username-validation").innerHTML = ""
    //     document.getElementById("email-validation").innerHTML = ""
    //     document.getElementById("password-validation").innerHTML = ""
    //     userName.style.border = ""
    //     email.style.border = ""
    //     password.style.border = ""
    //     console.log("success")
    // }

}
