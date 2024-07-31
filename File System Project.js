const fs = require('fs')
const path = require('path')
function executor(command) {
    const commandParts = command.split(' ')
    const action = commandParts[0]
    const fileName = commandParts[3]
    const additionalTxt = commandParts.slice(3).join(' ')
    if (action === 'create'){
        fs.writeFile(fileName, additionalTxt, (err) => {
            if (err) throw err;
            console.log(`${fileName} is successfully created!`)
    } )
}
    else if (action === 'delete'){
        fs.unlink(fileName, (err)=> {
            if (err) throw err;
            console.log(`${fileName} is successfully deleted!`)
        })
    }
    else if (action === 'rename'){
        const oldName = commandParts[3]
        const newName = commandParts[5]
        fs.rename(oldName, newName, (err)=> {
            if (err) throw err;
            console.log(`${fileName} is successfully renamed to ${newName}`)
        })
    }
    else if (action === 'add'){
        fs.appendFile(fileName, additionalTxt, (err) => {
            if (err) throw err;
            console.log(`${additionalTxt} is succesfully added to ${fileName}`)
        })
    }
    else {
        console.log("oops! unknown command!");
    }
}
fs.watchFile('./command.txt', (eventType, name) => {
    console.log('command.txt is changed');
    fs.readFile('./command.txt', 'utf8', (err, data) => {
        if (err) throw err;
        let commands = data.split('\n');
        commands.forEach(command => { 
            executor(command.trim());
        });
    });
});
console.log("Watching the changes being made now...")
//When running the code please disable auto-save for a proper function