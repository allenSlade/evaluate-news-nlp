let names = [
    "Picard",
    "Janeway",
    "Kirk",
    "Archer",
    "Georgiou"
]

function checkForName(inputText, callback, name) {
    console.log("::: Running checkForName :::", inputText);

    // throw new Error('test');

    // let names = [
    //     "Picard",
    //     "Janeway",
    //     "Kirk",
    //     "Archer",
    //     "Georgiou"
    // ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!");
    }
    return inputText;
};

export { checkForName }
module.export = names;
