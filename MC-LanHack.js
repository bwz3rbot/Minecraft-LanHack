const
    fs = require('fs'),
    path = `C:/Users/jayca/AppData/Roaming/.minecraft/`,
    filename = 'launcher_profiles.json';

fs.readFile(path + filename, (err, data) => {
    if (err) throw err;
    let d = JSON.parse(data);
    let str = JSON.stringify(d);
    let replaced = str.replace("buttscaffolder", "Zeke");
    let parsed = JSON.parse(replaced);
    let prettyPrinted = JSON.stringify(parsed, null, 2)

    fs.writeFile(path + "test.json", prettyPrinted, err => {
        console.log(err)
    })
})