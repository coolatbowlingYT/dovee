
exports.run = (client,message) => {
		let url = message.content.split(' ').slice(1).join(' ');
		if(url[0].toLowerCase() == 'p'||url[0].toLowerCase() == 'play')url = message.content.split(' ').slice(2).join(' ');
		//gotta define the possible link or songname^
		//i did it that way so if the user mentions the bot	and tries to play the song, then the url would move a space over
		//EX: @botto play senzawa => if it wasn't like this it woyld read as 'play senzawa'
		//..play senzawa reads as 'senzawa', so das gud ... doubl spaces are bad tho and since this is just an example ... i don't need to make a space remover
		client.music.play(message,url, {
                      searchCount: 1, //plays the first video it found without asking you to choose (like rythm pretty much)
			novcMessage: 'u gota be in vc nig', //message when user not in vc
			nojoinpermMessage: 'sorry man, cant join that channel...', //message for when the bot cant join the vc the users in
			notalkpermMessage: 'hey yo, can u make sure that i can speak in this vc and try again?' //message for when the bot cant play moosik in the vc
		}
		);
	}
//there are options, but that's in the 'Musi
exports.help = {
	name: "play",
	alias: "p"
}