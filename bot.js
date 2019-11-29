const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.user.setGame ("Hello!")

    answered = true;
    cAnswer = "";
    userAnswer = "";
});

if (answered == false) {
  userasnwer = msg;
  if (userAnswer == cAnswer) {
    message.reply ("That's Correct! :smile:");
  }
  else {
    message.reply ("That's Incorrect.")
  }
  answered = true; cAnswer = ""; userAnswer = ""
}

if (msg.startsWith(prefix + "quiz")) {
    number = 3;
    var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    swith (random) {
      case 1: message.channel.send ("(Topic - Literature)\nOne of his works notes, 'Poets themselves must fall, like those they sung' and another states 'In my breast the serpent Love abides' and is addressed to Dr. Garth. In addition to Pastorals and Elegy to the Memory of an Unfortunate Lady, one of his works states 'curse on all laws but those which love has made' and another that seeks to 'vindicate the waysof God to mand'. In addition to writing Eloisa to Abelard, another of his works, written in heroic couplet, has characters that name moons of Uranus such as Umbriel, Ariel and Belinda, and he also wrote and Essay on Man and the Dunciad. FTP, identify this British poet who wrote about the cutting of a piece of hair in The Rape of the Lock: \nA ) Alexander Pope \nB) John Keats \nC ) William Wordsworth \nD ) Thomas Hardy"); cAnswer = "a"; break;
      case 2: message.channel.send ("(Topic - Geography)\nThe Capital of this country is Wellington. What is the nickname of the people that live in this country?: \nA ) Kiwis \nB ) Crow-Eaters \nC ) Top Enders \nD ) Banana Benders"); cAnswer = "a"; break;
      case 3: message.channel.send ("Topic - Science)\nWhat is the formula for Hardy-Weinberg equilibrium?:\nA ) P^2 + PQ^2 + 2Q= 1 \nB ) 2P + 2PQ + 2Q =1 \nC ) P^2 +2PQ + 2Q=1 \nD ) 2P + 2PQ^2 + 2Q =1"); cAnswer = "c"; break;
    }
    answered = false;
  }

});
client.login(auth.token);
