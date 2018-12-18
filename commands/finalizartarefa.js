const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let msgid = args.join(" ");
    let msg = await message.channel.fetchMessage(msgid);
    message.delete().catch(O_o=>{});
    msg.delete();

    let canalb = message.guild.channels.find(`name`, "back-up-elohell");
    canalb.send(`${message.author} Finalizou a tarefa ${msgid}`);
}
 
module.exports.help = {
  name: "finalizartarefa"
}