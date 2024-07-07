const {readFileSync} = require('fs');

let returnMessage = {
    success: 'true',
    message: 'Login Successful'
}

const verifyLogin = (username, password)=>{
    const jsonFileString = readFileSync('./user-data/userdata.json', 'utf-8')
    jsonFile = JSON.parse(jsonFileString)
    console.log(username);
    const userExist = username in jsonFile
    if (userExist){
        const userPassword = jsonFile[username].password
        if(password === userPassword){
            returnMessage = {
                success: 'true',
                message: 'Login Successful'
            }
        }
        else{
            returnMessage = {
                success: 'false',
                message: 'password not correct'
            }
        }
    }
    else{
        returnMessage = {
            success: 'false',
            message: 'User does not exist'
        }
    }
    return(returnMessage)
}

module.exports = {verifyLogin}