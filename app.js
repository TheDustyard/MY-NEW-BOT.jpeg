const Mechan = require('mechan.js');
const Client = new Mechan.Discord.Client();
const fs = require('fs');
const Config = require('./config.json');

var handler = new Mechan.CommandHandler({
    prefix: "nightmares.",
    helpMode: Mechan.HelpMode.Public
});

handler.on('debug', console.log);
handler.on('warn', console.warn);
handler.on('error', (message, error) => console.error(message + "\n" + error));

let files = fs.readdirSync('./commands');
for (let file of files) {
    require(`./commands/${file}`).init(handler);
}

handler.install(Client)
    .login(Config.token);