import xlsx from 'xlsx'
import fs from 'fs'

const fileToConvert = './csvTest.csv'
const copyFilePath = './renamedFiles/'
const workbook = xlsx.readFile('./fileNames.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];

const names = Object.keys(worksheet).filter(x => /^A\d+/.test(x)).map(x => worksheet[x].v)

names.map(name => {
    if (!fs.existsSync(copyFilePath)){
        fs.mkdirSync(copyFilePath);
    }
    if (name !== "Nombre Archivo")
    fs.copyFile(fileToConvert, copyFilePath+name, (err) => {
        if (err) throw err;
        console.log(`csvTest.csv renamed to ${name} and saved in renamedFiles`);
      });
})