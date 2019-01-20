const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("/");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: 'faire /beta-test', type: 0} });
    console.log("Bot Ready !");
});

bot.login(process.env.TOKEN);

bot.on('message', message => {
    if (message.content === "test"){
        message.reply("test");
        console.log('test');
        
    }

    if (message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#CD3404')
            .addField("Aide" , "Les commandes seront bientôt disponible !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + "palmarès"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#CD3404')
            .addField("Palmarès" , "Les palmarès des équipes seront bientôt disponible !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

//LINK


    if (message.content === prefix + `link PC ${member}`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#0BD72F')
            .addField("__Link {PC}__" , "Votre **link** à bien était effectué !  \n Vous pouvez maintenant voir vos stats => ;stats !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `link PS4 ${member}`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#0BD72F')
            .addField("__Link {PS4}__" , "Votre **link** à bien était effectué ! \n Vous pouvez maintenant voir vos stats => ;stats !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `link ${member}`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#EC1016')
            .addField("__Link {PC ou PS4}__" , "Veuillez préciser votre platforme !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + "stats"){
        var help_embed = new Discord.RichEmbed()
            .setColor('#FFEE49')
            .addField("__Stats__" , "Tu peux regarder tes message privés ! Tu viens de recevoir tes statistiques !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `link`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#0BD72F')
            .addField("__Link__" , "**Pour vous link il suffit juste de faire cela =>** \n ;link PC (__PSEUDO DISCORD__) \n **ou** \n ;link PS4 (__PSEUDO DISCORD__) \n **selon votre plateforme !**")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }

    if (message.content === prefix + `unlink`){
        var help_embed = new Discord.RichEmbed()
            .setColor('#C5370A')
            .addField("__Unlink__" , "Votre **unlink** à bien était prise en compte !")
        message.channel.sendEmbed(help_embed);
        //messagechannel
        console.log("Commande Help demandée !");
    }


//STATS



    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "stats":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#EC1016")
        .setTitle(`Statistiques de l'utilisateur : ${member}`)
        .addField(`Maintenance ...`, "C'est une commande en cours de développement juste l'id est envoyé !")
        .addField(`ID de l'utilisateur :id:`, msauthor, true)
        .setThumbnail(message.author.avatarURL)
        message.author.send({embed : stats_embed});
        break;
                     //PING
                     case "efefefefefefef":
                     if (message.member.hasPermission("MANAGE_MESSAGES")){
                         message.channel.fetchMessages()
                             .then(function(list){
                                 message.channel.bulkDelete(list);
                             }, function(err){message.channel.send("Erreur")})}
                     break;
        
        
     }

});
