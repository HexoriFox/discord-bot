const Discord = require ("discord.js") ;
const bot = new Discord.Client() ;
const { waitForDebugger } = require("inspector");

const Client = new Discord.Client ;

Client.on("ready", () => {
    console.log("Le Bot est OK") ;
});

Client.on('ready', () => {
    Client.user.setActivity('dépenser toute sa tune', {type: 'PLAYING'});


});


Client.login("ODQ5NjI3MjE1NDA2ODI1NDgy.YLd7AQ.4NRQeYBAPHxgqxtzWfXnob_Gzss") ;
Client.login(process.env.TOKEN) ;
