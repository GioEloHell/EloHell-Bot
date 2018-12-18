const Discord = require("discord.js");
const moment = require('moment')

module.exports.run = async (bot, message, args) => {
  
    let prazo = parseInt(args[0]);
        let datas = {
          NaN: 'Sem prazo',
          1: 'Entregar hoje',
          2: 'Até amanhã',
          3: 'Até essa semana',
          4: 'Até semana que vem',
          5: 'Até mês que vem',
      };
      
      let data = datas[prazo];
    let ttarefa = args.slice(prazo ? 1 : 0).join(' ');
    
    let tarefalivr = "Disponível à todos."
      
    let hora = message.createdAt;
    let tarefatEmbed = new Discord.RichEmbed()
    .setDescription("Nova tarefa livre")
    .setColor("#15f153")
    .setThumbnail(message.guild.iconURL)
    .addField("Tarefa adicionada por:", `${message.author}`, true)
    .addField("Tarefa para:", tarefalivr, true)
    .addField("Hora:", moment(hora).format('L, LT'), true)
    .addField("Prazo:", datas[prazo], true)
    .addBlankField(true)
    .addField("Tarefa:", ttarefa);

    let canaleh = message.guild.channels.find(`name`, "bot-do-elohell");
    let canalb = message.guild.channels.find(`name`, "back-up-elohell");

    message.delete().catch(O_o=>{});
    canaleh.send(tarefatEmbed);
    canalb.send(tarefatEmbed);    

}
 
module.exports.help = {
  name: "tarefalivre"
}