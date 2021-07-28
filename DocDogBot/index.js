const Discord = require("discord.js") //package necesario
const client = new Discord.Client()  //conexion
const config = require("./config.json")
const token = config.token // no tocar :v
const prefix = config.prefix

function presence(){
  //lo que esta haciendo el bot
    client.user.setPresence({
      //estado dnd es no molestar
        status: "dnd",
        activity: {
            //nombre del juego
            name: "Mainkra ( ͡° ͜ʖ ͡°)",
            //accion (jugando)
            type: "PLAYING"
        }
    });
}

client.on("ready", () => {
  //el mensaje cuando el bot está prendido
    console.log("Bot listo!");
    presence();
 });

  client.on("message", (message) => {
    //poner en chat: k
    if(message.content.startsWith("k")){
     message.channel.send("webos al soria");
    }
    //poner en chat: orale @user
    if(message.content.startsWith("orale")){
        let user = message.mentions.users.first();
        const img = new Discord.MessageAttachment('https://thumbs.gfycat.com/DenseHiddenDunnart-max-1mb.gif');
        message.channel.send("No estoy viendo esa invitación <@"+ user.id + ">");
        message.channel.send(img);
    }
    //poner en chat: -insulto @usuario
    if(message.content.startsWith("-insulto")){
        let user = message.mentions.users.first();
        const img = new Discord.MessageAttachment('http://olegif.com/bin/gifs/00/46/78.gif');
        message.channel.send("¿Qué te tres contra mi?, yo se donde vives puto <@"+ user.id + ">" + "no se sienta un culo, acuerdese quien es mi perro.");
        message.channel.send(img);
    }
    //poner en chat: no?
    if(message.content.startsWith("no?")){
        message.channel.send("ci :D");
    }

    });//se pueden poner cualquier if pero tiene que ser antes de esta linea

    //mensajes de bienvenida
    client.on("guildMemberAdd", miembro =>{
      var channel = client.channels.find(channel => channel-id === ("la id del canal a mandar el mensaje de bienvenida"))
      channel.send("Bienvenido <@" + miembro.id + "> al sevidor :hot_face:  \n\n")
    });

    
    client.login(token); //configurar token en config.json
