const { exec } = require('child_process');
const path = require('path');

module.exports = function runYourPackage(inputFilePath, outputFilePath) {
  // Assuming main.py is in the same directory as your Node.js script
  // Adjust the path to where main.py is located relative to this script if necessary
  const scriptPath = path.join(__dirname, '../main.py');

  // Construct the command with the input and output file paths
  const command = `python ${scriptPath} --input "${inputFilePath}" --output "${outputFilePath}"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
};