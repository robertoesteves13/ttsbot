const fs = require('fs');
const textFormatter =  require('./libs/text-formatter');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const cmd = require('node-cmd');
const users = require('./libs/user');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async (message) => {
  users.array.forEach((user) => {
    if (message.author.id == user.ID && message.member.voice.channel && !message.content.startsWith(prefix) && !message.member.voice.mute) {
      var text = textFormatter.removeSpoilers(message);
      text = textFormatter.fixMentions(text, message);
      text = textFormatter.fixEmotes(text);
      text = textFormatter.removeURLs(text);
      cmd.run(`espeak ${user.parameters} "${text}" --stdout > /tmp/ttsbot.wav`);
      async function play(voiceChannel) {
        const connection = await voiceChannel.join();
        connection.play('/tmp/ttsbot.wav');
      }
      play(message.member.voice.channel);
    }
  });

  if (!message.content.startsWith(prefix) || message.author.bot) return;

 	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase(); 

  try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

client.login(token);

