const os = require('os')


console.log(os.cpus()); // cpus tem no servidor
console.log(os.freemem()); // memoria livre (ram)
console.log(os.homedir()); // diretório principal da máquina
console.log(os.type()); // tipo de sistema operacional está rodando na máquina