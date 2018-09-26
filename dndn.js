const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "--"
console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
=================
فديتك يا قلبييء ممكن تدخل السيرفر
الدعوة خاصة لك
https://discord.gg/XM34Qq2
 ... [ ${member}  ]
**`) 
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
=================
فديتك يا قلبييء ممكن تدخل السيرفر
الدعوة خاصة لك
https://discord.gg/XM34Qq2
 ... [ ${member}  ]
**`) 
}).catch(console.error)
})






client.login(process.env.BOT_TOKEN);
