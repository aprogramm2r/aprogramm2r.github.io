import UserModule from "./Modules.js"
let Users = [
    {

        Username: "AProgramm_R",
        Pass: "AProgramm_RPass"
    }
] 


let Usertaken = false
let loggedin = false
let InvaildLogin = false
if (loggedin === false) {
    const User = document.createElement("textarea")
    const Password = document.createElement("textarea")
    const TxtStatus = document.createElement("h1")
    const loggedout = document.createElement("button")
    const login = document.createElement("button")
    login.innerText = "Log in"
    loggedout.innerText = "Log out"
    TxtStatus.innerText = "Username Already In Used"
    User.innerText = "Username"
    Password.innerText = "Password"
    document.body.appendChild(User)
    document.body.appendChild(Password)
    document.body.appendChild(login)

    const signup = document.createElement("button")
    signup.innerText = "Sign Up"
    document.body.appendChild(signup)
    login.addEventListener("click",function() {
        for (var count = 0; count < Users.length; count++) {
            if (User.value === Users[count].Username) {
                if (Password.value === Users[count].Pass) {
                    loggedin = true
                    document.body.removeChild(User)
                    document.body.removeChild(Password)
                    document.body.removeChild(signup)
                    document.body.removeChild(login)
        
                    document.body.appendChild(loggedout)  
                    document.body.removeChild(TxtStatus)
                }else{
                    InvaildLogin = true
                }

            }
                
        }
        if (InvaildLogin === true) {
            alert('Incorrect Username Or Password')
            InvaildLogin = false
        }
    })
    signup.addEventListener("click", function() {
        for (var count = 0; count < Users.length; count++) {
            if (User.value === Users[count].Username) {
                    Usertaken = true
                
                
            }
            if (Password.value === User.value) {Usertaken = true}

        }
        if (Usertaken) {
            document.body.appendChild(TxtStatus)
            TxtStatus.innerText = "Username Already In Used Or User Cannot Be Same As The Password"

            Usertaken = false
        }else{
            Users.push(
                {
                    Username: User.value,
                    Pass: Password.value
                }
            )
            const NewUser = new UserModule(User.value,Password.value)
            StoreAccounts(NewUser)
            loggedin = true
            document.body.removeChild(User)
            document.body.removeChild(Password)
            document.body.removeChild(signup)
            document.body.appendChild(TxtStatus)
            document.body.removeChild(login)
            alert("Account Created")
            TxtStatus.innerText = "Account Created"
            console.log(Users)
            document.body.appendChild(loggedout)      
        }
    })
    loggedout.addEventListener("click",function() {
        loggedin = false
        document.body.appendChild(User)
        document.body.appendChild(Password)
        document.body.appendChild(signup)
        document.body.appendChild(login)
        Password.value = ""
        TxtStatus.innerText = ""
        document.body.removeChild(loggedout)      


    })

}