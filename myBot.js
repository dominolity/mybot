//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botRem = new Discord.Client();

//Set listener on 'ready'
botRem.on('ready', () => {
  console.log('ปู๊ปๆ');
});

//Set listener on 'message'
botRem.on('message', message => {
  if (message.content === '') {
    message.reply('');
  }
});

botRem.login('YOUR BOT TOKEN HERE!!!');
