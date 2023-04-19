
//csvtojson needs to be installed (npm install cvstojson).
const csvToJsonConverter = require('csvtojson');
const fs = require('fs/promises');
const path = require('path');
console.log(__dirname);
console.log('hi');
// Define input and output file paths
const inputFile = path.join(__dirname, '..', '..', 'Documents', 'fires2021.csv');
const outputFile = path.join(__dirname, '..', '..', 'Documents', 'output.json');


// Function to convert CSV to JSON
async function convertCsvToJson(input, output) {
    try {
        // Read the input CSV file and convert it to JSON
        const jsonArray = await csvToJsonConverter().fromFile(input);

        // Write the JSON array to the output file
        await fs.writeFile(output, JSON.stringify(jsonArray, null, 2));

        console.log(`CSV file converted to JSON successfully. Output file: ${output}`);
    } catch (error) {
        console.error('Error during conversion:', error);
    }
}

// Call the function to start the conversion
convertCsvToJson(inputFile, outputFile);
