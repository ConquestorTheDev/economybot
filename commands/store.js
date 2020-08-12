const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('m!'))return;  


    const embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [m!buy bronze]\n\n**Lifestyle Items**\n\n mobile phone : 600 [m!buy MOB]\nCar: 800 [m!buy car]\nMansion: 1200 [m!buy mansion]")
    .setColor("#FFFFFF")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}