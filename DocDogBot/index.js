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
            name: "romper culos ( ͡° ͜ʖ ͡°)",
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

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.cache.find(ch => ch.name === 'id ');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});


  client.on("message", (message) => {
    //poner en chat: k
    if(message.content.startsWith("k")){
     message.channel.send("k");
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
    }); //se pueden poner cualquier if pero tiene que ser antes de esta linea
    
    const Distube = require("distube")
    client.distube = new Distube(client,{
      emitNewSongonly: true,
      serachSongs: false,
      leaveOnStop: true,
      leaveOnFinish: true,
      leaveOnEmpty: true
    });
    client.distube.on("addlist",(playlist) => {
      message.channel.send('xd')
    })
    client.distube.on("addsong",(song)=>{
      message.channel.send('xd')
    })
    client.distube.on("playsong",(playsong)=>{
      message.channel.send('xd')
    })
    client.distube.on("playlist",(playlist)=>{
      message.channel.send('xd')
    })
    client.distube.on("error",(error)=>{
      message.channel.send('xd')
    })

    client.login(token); 
