// Os is a built in module
const os = require('os')
// info about the user
const user = os.userInfo()
console.log(user);

console.log(`This is the uptime of the system: ${os.uptime()}`);

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem() / 1024,
    freeMe}