const {readFileSync, writeFileSync} = require('fs')

const readFileOut = (fileName)=>{
    const value = readFileSync(`./user-data/${fileName}`, 'utf8')
    return value
}
const writeFileOut = (fileName, data)=>{
    writeFileSync(`./userdata/${fileName}`, data)
}

module.exports = {readFileOut, writeFileOut}