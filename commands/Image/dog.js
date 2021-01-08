let api = require('nekos-image-api');
exports.run = (client,message) => {
api.image.dog().then(res => {
message.channel.send({file: res.url});
});
}
module.exports.help = {
name: "dog",
alias: "doggo"
}