//Create Div
let div1 = document.getElementById('div1')
let div2 = document.createElement('div')
div1.append(div2)
div1.style = 'width: 100%; height:990px; background-color:rgb(240, 240, 240); display:flex; justify-content:center; align-items: center;'
div2.style = 'width: 400px; height: 500px; background-color:white;'

//Create New Account
let header1 = document.createElement('p')
header1.innerText = 'Create New Account'
header1.style = 'position:relative;font-size: 30px; font-family: arial; font-weight:bold; text-align:center; margin-top:40px'
div2.append(header1)

//Inputs
let email = document.createElement('input')
let username = document.createElement('input')
let password = document.createElement('input')

//Email
div2.append(email)
email.setAttribute('placeholder', 'Email')

//Verification -email
let emailVer = document.createElement('p')
emailVer.innerText = ''
div2.append(emailVer)
emailVer.style = 'font-size: 12px;position:absolute; width: 75%; margin:-10px 0 0 30px; padding: 15px 15px;'

//Username
div2.append(username)
username.setAttribute('placeholder', 'Username')


//Verification -username
let usernameVer = document.createElement('p')
usernameVer.innerText = ''
div2.append(usernameVer)
usernameVer.style = 'font-size: 12px;position:absolute; width: 75%; margin:-10px 0 0 30px; padding: 15px 15px;'

//Password
div2.append(password)
password.setAttribute('placeholder', 'Password')


//Password - verification
let passwordVerificaion = document.createElement('p')
passwordVerificaion.innerText = ''
div2.append(passwordVerificaion)
passwordVerificaion.style = 'font-size: 12px;position:absolute; width: 75%; margin:-10px 0 0 30px; padding: 15px 15px;'


//Input Style
email.style = ' font-size: 13px;position:relative; width: 75%; margin:40px 0 0 32px; padding: 15px 15px; border: none; border-radius: 10px; background-color:rgb(238, 237, 241);'
username.style = 'position:relative; width: 75%; margin:25px 0 0 32px; padding: 15px 15px; border: none; border-radius: 10px; background-color:rgb(238, 237, 241);'
password.style = 'position:relative; width: 75%; margin:25px 0 0 32px; padding: 15px 15px; border: none; border-radius: 10px; background-color:rgb(238, 237, 241);'



//Email Function
email.addEventListener('input', function (event){
   let email = event.target.value

   if(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    emailVer.innerText = ''  
    }
    else{
        emailVer.innerText = 'Invalid Email Address'
        emailVer.style.color = 'red'
    }

    if(email===""){
        emailVer.innerText = ''
    }
})


//Username Function
username.addEventListener('input', function (event){
    let username = event.target.value
 
    if(username.match("Kent101")){
        usernameVer.innerText = 'This username is already taken'
        usernameVer.style.color = 'red'
     }
     else{

         usernameVer.innerText = ''  
     }
 
     if(username===""){
         usernameVer.innerText = ''
     }
 })



//Password Function
password.addEventListener('input', function (event){
    let password = event.target.value
 
    if(password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/gi)){
        passwordVerificaion.innerText = 'Strong'
        passwordVerificaion.style.color = 'Green' 
     
     }
     else if(password.match(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/gi)){
        passwordVerificaion.innerText = 'Medium'
        passwordVerificaion.style.color = 'Orange'
     }

     else{
         passwordVerificaion.innerText = 'Weak'
         passwordVerificaion.style.color = 'Red'
         
     }
 
     if(password===""){
         passwordVerificaion.innerText = ''
     }
 })