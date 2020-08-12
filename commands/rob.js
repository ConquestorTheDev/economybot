const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('m!'))return;  

const user = message.mentions.members.first()
const targetuser = await db.fetch(`money_${message.guild.id}_${user.id}`)
const author = await db.fetch(`rob_${message.guild.id}_${user.id}`)
const author2 = await db.fetch(`money_${message.guild.id}_${user.id}`)

const timeout = 600000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    const timeEmbed = new Discord.RichEmbed()
    .setColor("#FFFFFF")
    .setDescription(`MR robber u have already robbed someone pls take a chill pill\n\nTry again in ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

const moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You need atleast 200 coins in your wallet to rob someone bruh`);

if (author2 < 200) {
    return message.channel.send(moneyEmbed)

}
const moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` ${user.user.username} is broke af he doesnt have any money in his pocket for u to rob , feels sad man`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}



let vip = await db.fetch(`bronze_${user.id}`)
if(vip === true) random = Math.floor(Math.random() * 200) + 1;
if (vip === null) random = Math.floor(Math.random() * 100) + 1;

const embed = new Discord.MessageEmbed()
.setDescription(` You robbed ${user} and got away with ${random} coins, nice man`)
.setColor("#FFFFFF")
message.channel.send(embed)

db.subtract(`money_${message.guild.id}_${user.id}`, random)
db.add(`money_${message.guild.id}_${user.id}`, random)
db.set(`rob_${message.guild.id}_${user.id}`, Date.now())
  
};
}

module.exports.help = {
  name:"rob",
  aliases: [""]
}