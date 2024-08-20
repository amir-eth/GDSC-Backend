const { isUtf8 } = require('buffer');
const fs = require('fs').promises;

async function processFiles(filePaths) {
    let totalSum = 0;
    let errors = [];

    for (const filePath of filePaths) {
        try {
            const data = await fs.readFile(filePath, 'utf-8');
            const lines = data.split('\n');
            let numSum = 0;
            for (const line of lines) {
                const num = parseFloat(line.trim());
                if (isNaN(num)) {
                    throw new Error('Invalid number format');
                }
                numSum += num;
            }
            totalSum += numSum;
        } catch (err) {
            console.error(`Error processing file ${filePath}: ${err.message}`);
            errors.push({ filePath, error: err.message });
        }
    }
    return { totalSum, errors };
}

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

async function main() {
    const filePaths = ['./numberOne.txt'];
    const result = await processFiles(filePaths);

    console.log('Total Sum:', result.totalSum);
    console.log('Errors:', result.errors);
}

main().catch(err => {
    console.error('An unexpected error occurred:', err);
});
