const fs = require ('fs')


if(!fs.existsSync('./minhapasta')){
    console.log("Não existe a pasta!");
    fs.mkdirSync("minhapasta")
}

if(fs.existsSync('./minhapasta')){
    console.log("Existe a pasta indicada");
}
