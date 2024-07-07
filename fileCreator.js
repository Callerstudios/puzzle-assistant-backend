const {readFileSync, writeFileSync, existsSync} = require('fs')
const path = require('path')

const readFileOut = (fileName)=>{
    try{
        filePath = path.join('./user-data', fileName)
        if(existsSync(filePath) && filePath.length > 0){
        
            const value = readFileSync(`./user-data/${fileName}`, 'utf8')
            return value
        }
        else{
            return `Filepath ${fileName} does not exist`
        }
    }
    catch(err){
        console.log(err);
    }
}
const writeFileOut = (fileName, key, value)=>{
    try{
        if(existsSync(path.join('./user-data',fileName)) && fileName.length > 0){
            const initVal = readFileOut(fileName)
            let jsonData = JSON.parse(initVal);
            jsonData[key] = value
            const data1 = JSON.stringify(jsonData, null, 2)
            console.log(data1);
            writeFileSync(`./user-data/${fileName}`, data1, 'utf-8')
            return "Success"
        }
        else{
            return `Path ${fileName} does not exist`
        }
    }catch (err){
        console.log(err);
        return err
    }
}

module.exports = {readFileOut, writeFileOut}