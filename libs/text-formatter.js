function removeSpoilers(msg) {
  const spoilerPattern = /(\|\|).*(\|\|)/g;
  console.log(msg.content);

  var newMessage = msg.content.replace(spoilerPattern, '');

  return newMessage;
}

function fixMentions(text, msg) {
  const mentionPattern = /(<)@![0-9]*?(>)/g;
  const numberPattern = /([0-9])\w+/g;

  if (!text.match(mentionPattern)) return text;

  var mention = text.match(mentionPattern)
  mention.forEach((id) => {
    id = id.match(numberPattern);
    var username = msg.guild.members.cache.get(id[0]).user.username
    text = text.replace(`!${id[0]}`, username);
  })
  return text;
}

function fixEmotes(text) {
  const emotePattern = /(<)(:.*?:)[0-9]*?(>)/g;
  const numberPattern = /([0-9])\w+/g;

  if (!text.match(emotePattern)) return text;

  var emotes = text.match(emotePattern);
  emotes.forEach((emote) => {
    var emoteId = emote.match(numberPattern);
    text = text.replace(emoteId, '');
  })
  return text
}

function removeURLs(text) {
  const URLPattern = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g;

  if (!text.match(URLPattern)) return text;
  text = text.replace(URLPattern, '');
  return text;
}

exports.removeURLs = removeURLs;
exports.removeSpoilers = removeSpoilers;
exports.fixMentions = fixMentions;
exports.fixEmotes = fixEmotes;
