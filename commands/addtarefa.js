const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (bot, message, args) => {
      let tarefapara = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
          if(!tarefapara) return message.channel.send("Marque alguém ou use o comando `-tarefalivre`");
      let hora = message.createdAt;

      let prazo = parseInt(args[1]);
      let corte = prazo ? 2 : 1;
      let ttarefa = args.slice(corte).join(' ');

      let datas = {
          NaN: 'Sem prazo',
          1: 'Entregar hoje',
          2: 'Até amanhã',
          3: 'Até essa semana',
          4: 'Até semana que vem',
          5: 'Até mês que vem',
      };
      
      let data = datas[prazo];
  
      let tarefatEmbed = new Discord.RichEmbed()
      .setDescription("Nova tarefa adicionada")
      .setColor("#15f153")
      .setThumbnail(message.guild.iconURL)
      .addField("Tarefa adicionada por:", `${message.author}`, true)
      .addField("Tarefa para:", tarefapara, true)
      .addField("Hora:", moment(hora).format('L, LT'), true)
      .addField("Prazo:", datas[prazo], true)
      .addBlankField(true)
      .addField("Tarefa:", ttarefa);
  
      let canaleh = message.guild.channels.find(`name`, "bot-do-elohell");
      let canalb = message.guild.channels.find(`name`, "back-up-elohell");
  
      message.delete().catch(O_o=>{});
      canalb.send(tarefatEmbed);
      canaleh.send(tarefatEmbed);
      canalb.send(message.id);
      tarefapara.send(tarefatEmbed);
}
 
module.exports.help = {
  name: "addtarefa"
}