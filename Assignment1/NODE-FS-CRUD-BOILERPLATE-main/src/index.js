const fs = require("fs/promises");

const myFileWriter = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name
  try {
    await fs.writeFile(fileName, fileContent);
    console.log(`${fileName} is created`);
  } catch (error) {
    console.error(`Got an error trying to create the file: ${error.message}`);
  }
  
};

const myFileReader = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    const data = await fs.readFile(fileName);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
};

const myFileUpdater = async (fileName, fileContent) => {
  // write code here
  // dont chnage function name

  try {
    await fs.appendFile(fileName, fileContent);
    console.log(`${fileName} is Updated`);
  } catch (error) {
    console.error(`Got an error trying to Upadate the file: ${error.message}`);
  }

};

const myFileDeleter = async (fileName) => {
  // write code here
  // dont chnage function name
  try {
    await fs.unlink(fileName);
    console.log(`${fileName} is Deleted`);
  } catch (error) {
    console.error(`Got an error trying to delete the file: ${error.message}`);
  }
};

myFileWriter("file1.txt","Hello")
// myFileReader("file1.txt")
// myFileUpdater("file1.txt", "world")
// myFileDeleter("file1.txt");

module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };
