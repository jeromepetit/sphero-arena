const sphero = require("sphero");
const readline = require('readline');

orb_chris = sphero("COM6");
orb_serli = sphero("COM4");

orb_chris.connect(function () {
    orb_chris.on("error", function(err, data) {
        if (err) { console.log(err); }
    });
    orb_chris.color('blue');
});

orb_serli.connect(function () {
    orb_serli.on("error", function(err, data) {
        if (err) { console.log(err); }
    });
    orb_serli.color('red');
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
    if (key.ctrl && key.name === 'c') {
    process.exit();
} else {
    console.log(`You pressed the "${str}" key`);
    if(key.name === '1'){
        console.log('orb serli')
    }
    else if(key.name === '2'){
        console.log('orb chris')
    }
    else if(key.name === 'up'){
        console.log('up')
    }
    else if(key.name === 'right'){
        console.log('right')
    }
    else if(key.name === 'left'){
        console.log('left')
    }

}
});
console.log('Press any key...');