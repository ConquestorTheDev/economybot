const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  

  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

  

    if(money === 0) return message.channel.send("You dont have any money to deposit bruh")

    db.add(`bank_${message.guild.id}_${user.id}`, money)
    db.subtract(`money_${message.guild.id}_${user.id}`, money)
    
  message.channel.send("You have deposited all your coins into your bank, youre safe now" )
  
  } else {
  
  
  if (!args[0]) {
      return message.channel.send("u gotta tell me an ammount to deposit buddy :)")
      .catch(err => console.log(err))
  }

  if (message.content.includes('-')) { 
      return message.channel.send("negative money is that even possible u broke shithead")
  }


  if (member < args[0]) {
      return message.channel.send("cmeon u know u dont have that much money to deposit breh")
  }

  const embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`<:Check:618736570337591296> You have deposited ${args[0]} coins into your bank`);

  message.channel.send(embed5)
  db.add(`bank_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
  }
}
module.exports.help = {
  name:"deposit",
  aliases: ["dep"]
}