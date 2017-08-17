class login
{
    username:string
    //to get the value of username
    getUserName():string
    {
        console.log("The username is ="+this.username)
        return this.username
    }
    //to set the value of user name
    setUserName1(value:string)
    {        
        this.username=value
        console.log("To set the username ="+this.username)
    }
}
// to set the obj to the class
let login1:login=new login()
login1.username="abi"
// to call the class function
login1.getUserName()
// to check the username is vlid or not
if(login1.username=="abi")
    {
        console.log(`The username ${login1.username} is valid`)
    }
else
    {
        console.log("The user is not valid")
    }
login1.setUserName1("raj")
