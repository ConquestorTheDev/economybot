const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    
  message.channel.send("You have withdrawn all your coins from your bank, beware for robbers ")
  
  } else {

  
  if (!args[0]) {
      return message.channel.send("u gotta tell me an amount to withraw u cant withraw air breh")
  }
  
  if (message.content.includes('-')) { 
      return message.channel.send("You can't withdraw negative money")
  }


  if (member2 < args[0]) {
      return message.channel.send("You don't have that much money in the bank and u know it broke shit head")
  }

  const embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have withdrawn ${args[0]} coins from your bank`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}


module.exports.help = {
  name:"withdraw",
  aliases: ["wd"]
}