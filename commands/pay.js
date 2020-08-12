const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`money_${message.guild.id}_${message.author.id}`)

  const embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Mention some one to pay noob`);

  if (!user) {
      return message.channel.send(embed1)
  }
  const embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` u gotta tell me an ammount to pay man`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  const embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` u broke shit head u cant pay negative money`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  const embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`u r broke u dont have that much money to pay breh`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  const embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You have payed ${user.user.username} ${args[1]} coins`);

  message.channel.send(embed5)
  db.add(`money_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`money_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"transfer",
  aliases: ["trans"]
}