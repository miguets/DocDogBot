const Discord = require('discord.js')

module.exports = {
  name: "play",
  alias: ["p"],

execute(client, message, args){

  const cancion = args.join(" ")
  if(!cancion) return message.channel.send("debes escribir una cancion")
  if(!message.member.voice.channel) return message.channel.send("tienes que estar en el canal de voz")
  if(message.guild.me.voice.channel && message.memever.voice.channel.id !== message.guild.me.voice.channel.id) return essage.channel.send("tienes que estar en el canal de voz")
  client.distube.play(message, cancion)
 }
}