**Note: It only supports Linux. In order to work on Windows, use WSL**

# TTSBot
  This bot talks any text you typed on a discord server to generate audio and play it on the voice channel you're connected into. I made for **people that doesn't want to use their microphones.**

## Dependencies
  * nodejs
  * npm (for downloading packages)
  * espeak
  
## Setup
Clone this repo and add a `config.json` file and include your [Discord Token](https://discord.com/developers/applications) and a command prefix that you like. Your file should be something like this:
```json
{
  "prefix": "!",
  "token": "yourtokenhere"
}
```
Install all npm package dependencies by executing `npm i` and run `node main.js` to start the bot (I want to make a setup script but this is okay for now).

## Contribution
If you want to make any suggestions, such as adding commands, functionality, code refactoring and other things, you should make a commit and specify anything that you done. Any suggestion helps!
