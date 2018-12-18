const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let addtarefa = "`-addtarefa + @usuario + Prazo (de 1 até 5) + Objetivo`";
    let tarefaliv = "`-tarefalivre + Prazo (de 1 até 5) + Objetivo`";
    let finalizar = "`-finalizartarefa + ID da Tarefa`";

    let comandos = new Discord.RichEmbed()
        .setDescription("Embaixo estão todos os comandos e formas de uso!")
        .setColor("#15f153")
        .addField("Adicionar Tarefa:", addtarefa)
        .addField("Adicionar Tarefa Livre:", tarefaliv)
        .addField("Finalizar Tarefa:", finalizar);

    
    let canaleh = message.guild.channels.find(`name`, "bot-do-elohell");

    message.delete().catch(O_o=>{});
    canaleh.send(comandos);
}
module.exports.help = {
  name: "ajuda"
}