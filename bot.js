var fila = []
const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

var name;
var usrAuth = 0;

bot.login(process.env.BOT_TOKEN);

bot.on("ready", function() {

    console.log("ready");
});

bot.on('message', function (message) {

    var achar = fila.indexOf(message.author.id)
    if (achar >= 0 ) return
    else if (0 >= achar){
    fila.push(message.author.id)
    setTimeout(() =>{
    var achar2 = fila.indexOf(message.author.id)
    if (achar2 == null ) return
    fila.splice(achar2,1)
    },3000)
}

    console.log(message.content);

    if ( message.author.equals(bot.user)) 
    return;


if( !message.content.startsWith(PREFIX))
    return;


var argv = message.content.substr(PREFIX.length).split(" ");
console.log("argv: "+argv+", argv[1]: "+argv[1]+"");


switch(argv[0].toLowerCase()) {
    case "ajuda":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos:", "https://i.imgur.com/3TPfKR5.jpg")
        .addField("!loja", ":video_game: Loja de Minecraft Original por `R$29,99`")
        .addField("!convite", ":page_facing_up: Criar um convite para um amigo em nosso discord")
        .addField("!membros", ":bust_in_silhouette: Contador de membros em nosso Discord")
        .setFooter("Lista de Comandos do LuiiBot")
        .setThumbnail("https://i.imgur.com/wgCLuyp.png")
        .setColor("DF7401")
        message.member.sendEmbed(embedd);

        var embeddd = new Discord.RichEmbed()
        .addField("Okay!", "Foi enviado uma lista com todos os Comandos do servidor em seu privado :slight_smile:")
        .setColor("DF7401")
        message.channel.sendEmbed(embeddd);
        break;

    case "loja":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Compre Minecraft por R$29,99!!!", "https://i.imgur.com/YV3rAwM.png")
        .setTitle(`Clique aqui para acessar a loja! :dollar:`)
        .setURL("https://mineluii.com")
        .setColor("14DDDA")
        message.channel.sendEmbed(embedd);
        break;

    case "convite":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Convite do nosso Discord", "https://i.imgur.com/Pjc0LJk.png")
        .setTitle(`Clique aqui para abrir o link do convite`)
        .setURL("https://discord.gg/czY9ncR")
        .setColor("2E9AFE")
        message.channel.sendEmbed(embedd);
        break;

    case "membros":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Informações do Servidor:", "https://i.imgur.com/3TPfKR5.jpg")
        .setColor("14DDDA")
        .setThumbnail(message.guild.iconURL)
        .addField("Nome:", message.guild.name)
        //.addField("Criado em:", message.guild.createdAt)
       // .addField("Você entrou em:", message.member.joinedAt)
        .addField("Quantidade de membros:", message.guild.memberCount)
        message.channel.sendEmbed(embedd);
        break;


}});


bot.on('ready', () => {
    bot.user.setActivity('www.mineluii.com | !ajuda', {type: 'PLAYING'});
});

//bot.on('guildMemberAdd', member => {
//    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage(`Bem-Vindo ${member} ao ${member.guild.name}\n \n:star2: MINECRAFT ORIGINAL E BARATO :star2:\n \nConta FULL ACESSO TOTAL!!!\n- Acesso para alterar o email\n- Acesso para alterar perguntas de segurança\n- Acesso para alterar senha\n- Acesso para alterar nick\n- Acesso para alterar a skin\n \n Loja Confiável de minha autoria. | GustavoLuii ©\nGrupo do Discord: https://discord.gg/BcnX29f\nSite: https://mineluii.com/\n \nDeseja comprar uma? chame o @!GustavoLuii#9510 em seu privado ou acesse nosso site!`);
//
//})

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🔮novos-membros');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Bem-Vindo!', `Bem-Vindo ${member} ao ${member.guild.name}! agora nós temos **${member.guild.memberCount}** Players em nosso servidor`)

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});

