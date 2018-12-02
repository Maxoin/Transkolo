const Discord = require('discord.js');

var bot = new Discord.Client();

bot.on('ready',() => {
    console.log('Bot Ready')

})

bot.login(process.env.TOKEN);

var i = 0

var initDuel = 0;

var degat = 0
var esquive = 0
var Bruproba = 0
var EggProba = 0

var Max = "258571960987025408"
var Louloup = "394217638701694986"
var Aly = "339848621908426752"
var Guendal = "358671289860227073"
var Altar = "352094433019166720"

function Jojcalc(pv){
    var i = 0
    var JoJ = ""
        while (i < 10)
    {
        i++;
        if (pv >= 10*i){
            JoJ+=':heart: '
        }
        else{
            JoJ+=':broken_heart: '
        }
    }
    return JoJ}

var duel = { 
    Un: {
        Channel: (""),
        Idj1: (""),
        PVj1: (100),
        Transj1: (""),
        Imoj1: (0),
        Poisj1: (0),
        Brulj1: (0),
        Idj2: (""),
        PVj2: (100),
        Transj2: (""),
        Imoj2: (0),
        Poisj2: (0),
        Brulj1: (0),
    }}

bot.on('message', message => { 
    if (message.content === "!smash"){
        duel.Un.Idj1 = message.author.id,
        message.channel.send('Qui sera votre Adversaire, <@' + duel.Un.Idj1 + '> ?')
        initDuel = 1;
        duel.Un.Channel =message.channel.id
        duel.Un.PVj1 =100
        duel.Un.PVj2 =100
        console.log(duel.Un.Channel)
    }
 })

bot.on('message', message => { 
    if (initDuel === 1 && duel.Un.Idj1 === message.author.id) {
        if(message.content === "Guendal"){
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj1 + "> !")
            duel.Un.Idj2 = "358671289860227073"
            initDuel = 2
        }else if(message.content === "Max"){
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj1 + "> !")
            duel.Un.Idj2 = "258571960987025408"
            initDuel = 2
        }else if(message.content === "Altar"){
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj1 + "> !")
            duel.Un.Idj2 = "352094433019166720"
            initDuel = 2
        }else if(message.content === "Aly"){
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj1 + "> !")
            duel.Un.Idj2 = "339848621908426752"
            initDuel = 2
        }
    }});

bot.on('message', message => {
    if (message.author.id === duel.Un.Idj1 && initDuel === 2) {        
        if (message.content === "Dragon"){
            duel.Un.Transj1 ="Draguen"
            message.channel.send('Le Draguen est laché !\n( https://media.discordapp.net/attachments/516686335755419648/516749082744586264/33a77d4d.gif?width=279&height=301 )')
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj2 + "> !")
            initDuel = 3
        }
        if (message.content === "Tokomon"){
            duel.Un.Transj1 = "Tokomon"
            message.channel.send('Le Tokomon sort les crocs !\n( https://media.discordapp.net/attachments/516686335755419648/517409564967174164/Patamon.PNG )')
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj2 + "> !")
            initDuel = 3
        }
        if (message.content === "Yoshi"){
            duel.Un.Transj1 = "Yoshi"
            message.channel.send('Le Yoshi dans la colle !\n( https://media.discordapp.net/attachments/516686335755419648/516686948153294870/8f9ed1e3c5a986038589b63211c27f3c.jpg?width=228&height=300 )')
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj2 + "> !")
            initDuel = 3
        }
        if (message.content === "Neko"){
            duel.Un.Transj1 = "Kawaly"
            message.channel.send('Le chat sort les griffes ! (et sa bouille toute kawaii >w<)\n( https://media.discordapp.net/attachments/516686335755419648/517335435530469376/fe089e7571a649c11ff8cbf73ba1b869.jpg?width=240&height=300 )')
            message.channel.send('Selectionnez votre Transformation, <@' + duel.Un.Idj2 + "> !")
            initDuel = 3
        }
    }})
    
bot.on('message', message => { 
    if (message.author.id === duel.Un.Idj2 && initDuel === 3) {
            if (message.content === "Dragon"){
                duel.Un.Transj2 = "Draguen"
                message.channel.send('Le Draguen est laché !\n( https://media.discordapp.net/attachments/516686335755419648/516749082744586264/33a77d4d.gif?width=279&height=301 )')
                message.channel.send("Bien, combatants ! Que le combat commence !!")
                initDuel = 4
            }
            if(message.content === "Tokomon"){
                duel.Un.Transj2 = "Tokomon"
                message.channel.send('Le Tokomon sort les crocs !\n( https://media.discordapp.net/attachments/516686335755419648/517409564967174164/Patamon.PNG )')
                message.channel.send("Bien, combatants ! Que le combat commence !!")
                initDuel = 4
            }
            if (message.content === "Yoshi"){
                duel.Un.Transj2 = "Yoshi"
                message.channel.send('Le Yoshi dans la colle !\n( https://media.discordapp.net/attachments/516686335755419648/516686948153294870/8f9ed1e3c5a986038589b63211c27f3c.jpg?width=228&height=300 )')
                message.channel.send("Bien, combatants ! Que le combat commence !!")
                initDuel = 4
            }
            if (message.content === "Neko"){
                duel.Un.Transj2 = "Kawaly"
                message.channel.send('Le chat sort les griffes ! (et sa bouille toute kawaii >w<)\n( https://media.discordapp.net/attachments/516686335755419648/517335435530469376/fe089e7571a649c11ff8cbf73ba1b869.jpg?width=240&height=300 )')   
                message.channel.send("Bien, combatants ! Que le combat commence !!")
                initDuel = 4}}})

bot.on('message', message => {
    if (initDuel === 4){
            if (duel.Un.Transj1 === "Draguen" && message.author.id === duel.Un.Idj1 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
                message.channel.send("<@" + duel.Un.Idj1 + `>\n-Griffure\n-Fireball\n-\n-`)
            }
            if(duel.Un.Transj1 === "Draguen" && message.author.id === duel.Un.Idj1 && message.content === "Griffure"){
                esquive = Math.floor(Math.random() * Math.floor(100))
                console.log(esquive)
                message.channel.send("<@" + duel.Un.Idj1 + "> utilise Griffure !")
                if(duel.Un.Imoj1 >= 0){
                    duel.Un.Imoj1 -= 1
                    message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                    console.log(duel.Un.Imoj1)
                }else{
                    if(esquive <= 95 ){
                        degat = Math.floor(Math.random() * Math.floor(20 - 5)+ 5)
                        duel.Un.PVj2 -= degat
                        message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                    }else{
                        message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
                    }
            }}
            if(duel.Un.Transj1 === "Draguen" && message.author.id === duel.Un.Idj1 && message.content === "Fireball"){
                esquive = Math.floor(Math.random() * Math.floor(100))
                console.log(esquive)
                message.channel.send("<@" + duel.Un.Idj1 + "> lance une boule de feu !")
                if(duel.Un.Imoj1 >= 0){
                    duel.Un.Imoj1 -= 1
                    message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                    console.log(duel.Un.Imoj1)
                }else{
                    if(esquive <= 95 ){
                        degat = Math.floor(Math.random() * Math.floor(10 - 5)+ 5)
                        duel.Un.PVj2 -= degat
                        message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies et est brulé !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                        Bruproba = Math.floor(Math.random() * Math.floor(2))
                        console.log(Bruproba)
                        if(Bruproba === 0){
                            duel.Un.Brulj2 = 2
                            message.channel.send("<@" + duel.Un.Idj2 + "> est brulé !")
                        }
                    }else{
                        message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
                    }
                }}

            if (duel.Un.Transj2 === "Draguen" && message.author.id === duel.Un.Idj2 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
                message.channel.send("<@" + duel.Un.Idj2 + `>\n-Griffure\n-Fireball\n-\n-`)
            }
            if(duel.Un.Transj2 === "Draguen" && message.author.id === duel.Un.Idj2 && message.content === "Griffure"){
                esquive = Math.floor(Math.random() * Math.floor(100))
                console.log(esquive)
                message.channel.send("<@" + duel.Un.Idj2 + "> utilise Griffure !")
                if(duel.Un.Imoj2 >= 0){
                    duel.Un.Imoj2 -= 1
                    message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                    console.log(duel.Un.Imoj2)
                }else{
                    if(esquive <= 95 ){
                        degat = Math.floor(Math.random() * Math.floor(20 - 5)+ 5)
                        duel.Un.PVj1 -= degat
                        message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                    }else{
                        message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                    }
            }}
            if(duel.Un.Transj2 === "Draguen" && message.author.id === duel.Un.Idj2 && message.content === "Fireball"){
                esquive = Math.floor(Math.random() * Math.floor(100))
                console.log(esquive)
                message.channel.send("<@" + duel.Un.Idj2 + "> lance une boule de feu !")
                if(duel.Un.Imoj2 >= 0){
                    duel.Un.Imoj2 -= 1
                    message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                    console.log(duel.Un.Imoj2)
                }else{
                if(esquive <= 95 ){
                    degat = Math.floor(Math.random() * Math.floor(10 - 5)+ 5)
                    duel.Un.PVj1 -= degat
                    message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                    if(Bruproba === 0){
                        duel.Un.Brulj1 = 2
                        message.channel.send("<@" + duel.Un.Idj1 + "> est brulé !")
                    }
                }else{
                    message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }
            }}}})

bot.on('message', message => {
    if (initDuel === 4){
        if (duel.Un.Transj1 === "Kawaly" && message.author.id === duel.Un.Idj1 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
            message.channel.send("<@" + duel.Un.Idj1 + `>\n-Griffure\n-Kawaii\n-\n-`)
        }
        if(duel.Un.Transj1 === "Kawaly" && message.author.id === duel.Un.Idj1 && message.content === "Griffure"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            message.channel.send("<@" + duel.Un.Idj1 + "> utilise Griffure !")
            if(duel.Un.Imoj1 >= 0){
                duel.Un.Imoj1 -= 1
                message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                console.log(duel.Un.Imoj1)
            }else{
                if(esquive <= 85 ){
                    degat = Math.floor(Math.random() * Math.floor(20 - 5)+ 5)
                    duel.Un.PVj2 -= degat
                    message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }else{
                    message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
                }
        }

        if(duel.Un.Transj1 === "Kawaly" && message.author.id === duel.Un.Idj1 && message.content === "Kawaii"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            if(duel.Un.Imoj1 >= 0){
                duel.Un.Imoj1 -= 1
                message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                console.log(duel.Un.Imoj1)
            }else{
                if(esquive <= 60 ){
                    duel.Un.Imoj2 = Math.floor(Math.random() * Math.floor(4 - 2)+ 2)
                    message.channel.send("<@" + duel.Un.Idj1 + "> fait une bouille toute kawaii ! <@" + duel.Un.Idj2 + "> est completement confus !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }else{
                    message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                }
        }}

        if (duel.Un.Transj2 === "Kawaly" && message.author.id === duel.Un.Idj2 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
            message.channel.send("<@" + duel.Un.Idj2 + `>\n-Griffure\n-Kawaii\n-\n-`)
        }
        if(duel.Un.Transj2 === "Kawaly" && message.author.id === duel.Un.Idj2 && message.content === "Griffure"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            message.channel.send("<@" + duel.Un.Idj2 + "> utilise Griffure !")
            if(duel.Un.Imoj2 >= 0){
                duel.Un.Imoj2 -= 1
                message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                console.log(duel.Un.Imoj2)
            }else{
                if(esquive <= 95 ){
                    degat = Math.floor(Math.random() * Math.floor(20 - 5)+5)
                    duel.Un.PVj1 -= degat
                    message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }else{
                    message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }
        }}

        if(duel.Un.Transj2 === "Kawaly" && message.author.id === duel.Un.Idj2 && message.content === "Kawaii"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            if(duel.Un.Imoj2 >= 0){
                duel.Un.Imoj2 -= 1
                message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                console.log(duel.Un.Imoj2)
            }else{
                if(esquive <= 60 ){
                    duel.Un.Imoj1 = Math.floor(Math.random() * Math.floor(4 - 2)+ 2)
                    message.channel.send("<@" + duel.Un.Idj2 + "> fait une bouille toute kawaii ! <@" + duel.Un.Idj1 + "> est completement confus !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }else{
                    message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                }
        }}
    }}})

bot.on('message', message => {
    if (initDuel === 4){
        if(duel.Un.Transj1 === "Yoshi" && message.author.id === duel.Un.Idj1 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
            message.channel.send("<@" + duel.Un.Idj1 + `>\n-Coud'pied\n-Lanc'oeuf\n-\n-`)
               }
        if(duel.Un.Transj1 === "Yoshi" && message.author.id === duel.Un.Idj1 && message.content === "Coud'pied"){
        esquive = Math.floor(Math.random() * Math.floor(100))
        console.log(esquive)
        message.channel.send("<@" + duel.Un.Idj1 + "> utilise Coud'pied !")
        if(duel.Un.Imoj1 >= 0){
            duel.Un.Imoj1 -= 1
            message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
            console.log(duel.Un.Imoj1)
        }else{
            if(esquive <= 95 ){
                degat = Math.floor(Math.random() * Math.floor(15))
                duel.Un.PVj2 -= degat
                message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            }else{
                message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
            }
    }}
    if(duel.Un.Transj1 === "Yoshi" && message.author.id === duel.Un.Idj1 && message.content === "Lanc'oeuf"){
        esquive = Math.floor(Math.random() * Math.floor(100))
        console.log(esquive)
        message.channel.send("<@" + duel.Un.Idj1 + "> lance un oeuf sur son adversaire !")
        if(duel.Un.Imoj1 >= 0){
            duel.Un.Imoj1 -= 1
            message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
            console.log(duel.Un.Imoj1)
        }else{
            if(esquive <= 75 ){
                degat = Math.floor(Math.random() * Math.floor(15 - 5)+ 5)
                duel.Un.PVj2 -= degat
                message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                Eggproba = Math.floor(Math.random() * Math.floor(2))
                if(EggProba === 1){
                    duel.Un.Imoj2 = Math.floor(Math.random() * Math.floor(3 - 1)+ 1)
                }
            }else{
                message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
            }
    }}
        if (duel.Un.Transj2 === "Yoshi" && message.author.id === duel.Un.Idj2 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
            message.channel.send("<@" + duel.Un.Idj2 + `>\n-Coud'pied\n-Lanc'oeuf\n-\n-`)
    }
        if(duel.Un.Transj2 === "Yoshi" && message.author.id === duel.Un.Idj2 && message.content === "Coud'pied"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            message.channel.send("<@" + duel.Un.Idj2 + "> utilise Coud'pied !")
            if(duel.Un.Imoj2 >= 0){
                duel.Un.Imoj2 -= 1
                message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                console.log(duel.Un.Imoj2)
            }else{
                if(esquive <= 95 ){
                    degat = Math.floor(Math.random() * Math.floor(15))
                    duel.Un.PVj1 -= degat
                    message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }else{
                    message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            }}}
            if(duel.Un.Transj2 === "Yoshi" && message.author.id === duel.Un.Idj2 && message.content === "Lanc'oeuf"){
                esquive = Math.floor(Math.random() * Math.floor(100))
                console.log(esquive)
                message.channel.send("<@" + duel.Un.Idj2 + "> lance un oeuf sur son adversaire !")
                if(duel.Un.Imoj2 >= 0){
                    duel.Un.Imoj2 -= 1
                    message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                    console.log(duel.Un.Imoj2)
                }else{
                    if(esquive <= 75 ){
                        degat = Math.floor(Math.random() * Math.floor(15 - 5)+ 5)
                        duel.Un.PVj1 -= degat
                        message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                        Eggproba = Math.floor(Math.random() * Math.floor(2))
                        if(EggProba === 1){
                            duel.Un.Imoj1 = Math.floor(Math.random() * Math.floor(3 - 1)+ 1)
                        }
                    }else{
                        message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !")
                    }
            }}
    }})

bot.on('message', message => {
    if (initDuel === 4){
        if(duel.Un.Transj1 === "Tokomon" && message.author.id === duel.Un.Idj1 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
            message.channel.send("<@" + duel.Un.Idj1 + `>\n-Morsure\n-Infect\n-\n-`)
            console.log(duel.Un.Transj1 + " " + duel.Un.Transj2)
        }
        if(duel.Un.Transj1 === "Tokomon" && message.author.id === duel.Un.Idj1 && message.content === "Morsure"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            message.channel.send("<@" + duel.Un.Idj1 + "> utilise Morsure !")
            if(duel.Un.Imoj1 >= 0){
                duel.Un.Imoj1 -= 1
                message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                console.log(duel.Un.Imoj1)
            }else{
                if(esquive <= 95 ){
                    degat = Math.floor(Math.random() * Math.floor(20 -5)+ 5)
                    duel.Un.PVj2 -= degat
                    message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                }else{
                    message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
                }
            }}
            if(duel.Un.Transj1 === "Tokomon" && message.author.id === duel.Un.Idj1 && message.content === "Infect"){
                esquive = Math.floor(Math.random() * Math.floor(100))
                console.log(esquive)
                message.channel.send("<@" + duel.Un.Idj1 + "> utilise sa Morsure Infectée !")
                if(duel.Un.Imoj1 >= 0){
                    duel.Un.Imoj1 -= 1
                    message.channel.send("<@" + duel.Un.Idj1 + "> rate son attaque !")
                    console.log(duel.Un.Imoj1)
                }else{
                    if(esquive <= 95 ){
                        degat = Math.floor(Math.random() * Math.floor(10 - 1)+ 1)
                        duel.Un.Poisj2 = Math.floor(Math.random() * Math.floor(5 - 1)+ 1)
                        duel.Un.PVj2 -= degat
                        message.channel.send("<@" + duel.Un.Idj2 + "> a perdu **" + degat +"** points de vies et est infecté par le poison !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
                    }else{
                        message.channel.send("<@" + duel.Un.Idj2 + "> esquive l'attaque !")
                    }
                }}

        if(duel.Un.Transj2 === "Tokomon" && message.author.id === duel.Un.Idj2 && message.content[0]+ message.content[1]+ message.content[2] === "atk"){
            message.channel.send("<@" + duel.Un.Idj2 + `>\n-Morsure\n-Infect\n-\n-`)
        }
        if(duel.Un.Transj2 === "Tokomon" && message.author.id === duel.Un.Idj2 && message.content === "Morsure"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            message.channel.send("<@" + duel.Un.Idj2 + "> utilise Morsure !")
            if(duel.Un.Imoj2 >= 0){
                duel.Un.Imoj2 -= 1
                message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                console.log(duel.Un.Imoj2)
            }else{
            if(esquive <= 95 ){
                degat = Math.floor(Math.random() * Math.floor(20 - 5)+ 5)
                duel.Un.PVj1 -= degat
                message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            }else{
                message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            }
        }}        
        if(duel.Un.Transj2 === "Tokomon" && message.author.id === duel.Un.Idj2 && message.content === "Infect"){
            esquive = Math.floor(Math.random() * Math.floor(100))
            console.log(esquive)
            message.channel.send("<@" + duel.Un.Idj2 + "> utilise sa Morsure Infectée !")
            if(duel.Un.Imoj2 >= 0){
                duel.Un.Imoj2 -= 1
                message.channel.send("<@" + duel.Un.Idj2 + "> rate son attaque !")
                console.log(duel.Un.Imoj2)
            }else{
            if(esquive <= 95 ){
                degat = Math.floor(Math.random() * Math.floor(10 - 1)+ 1)
                duel.Un.Poisj1 = Math.floor(Math.random() * Math.floor(5 - 1)+ 1)
                duel.Un.PVj1 -= degat
                message.channel.send("<@" + duel.Un.Idj1 + "> a perdu **" + degat +"** points de vies  et est infecté par le poison !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            }else{
                message.channel.send("<@" + duel.Un.Idj1 + "> esquive l'attaque !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            }
        }}}})
        
bot.on('message', message => {
    if(duel.Un.PVj1 <= 0){
        message.channel.send("<@" + duel.Un.Idj1 + "> est K.O !\n<@" + duel.Un.Idj2 + "> remporte la victoire !!")
        initDuel = 0
        duel.Un.Channel = ""
        duel.Un.PVj1 = 100
        duel.Un.PVj2 = 100
        duel.Un.Idj1 = ""
        duel.Un.Idj2 = ""
        duel.Un.Transj1 = ""
        duel.Un.Transj2 = ""
    }else if(duel.Un.PVj2 <= 0){
        message.channel.send("<@" + duel.Un.Idj2 + "> est K.O !\n<@" + duel.Un.Idj1 + "> remporte la victoire !!")
        initDuel = 0
        duel.Un.Channel = ""
        duel.Un.PVj1 = 100
        duel.Un.PVj2 = 100
        duel.Un.Idj1 = ""
        duel.Un.Idj2 = ""
        duel.Un.Transj1 = ""
        duel.Un.Transj2 = ""
    }})

bot.on('message', message => {
    if(message.author.id === duel.Un.Idj1 && message.content === "!giveup"){
        duel.Un.PVj1 -= 168451768365486354
    }
    if(message.author.id === duel.Un.Idj2 && message.content === "!giveup"){
        duel.Un.PVj2 -= 438754318635486534
    }})
bot.on('message', message => {
    if(message.author.id === duel.Un.Idj1 && duel.Un.Poisj1 > 0){
        degatP = Math.floor(Math.random() * Math.floor(15 - 5)+ 5)
        console.log(duel.Un.Poisj1)
        duel.Un.PVj1 -= degatP
        duel.Un.Poisj1 -= 1
        message.channel.send("<@" + duel.Un.Idj1 + "> souffre du poison (**" + degatP + "** PV) !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
        console.log(duel.Un.Poisj1)
    }
    if(message.author.id === duel.Un.Idj2 && duel.Un.Poisj2 > 0){
        degatP = Math.floor(Math.random() * Math.floor(15 - 5)+ 5)
        console.log(duel.Un.Poisj2)
        duel.Un.PVj2 -= degatP
        duel.Un.Poisj2 -= 1
        message.channel.send("<@" + duel.Un.Idj2 + "> souffre du poison (**" + degatP + "** PV) !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
        console.log(duel.Un.Poisj2)}})

bot.on('message', message => {
    if(message.author.id === duel.Un.Idj1){
        if(duel.Un.Brulj1 > 0){
            degatF = Math.floor(Math.random() * Math.floor(15 - 5)+ 5)
            console.log("AAA" + duel.Un.Brulj1)
            duel.Un.PVj1 -= degatF
            duel.Un.Brulj1 -= 1
            message.channel.send("<@" + duel.Un.Idj1 + "> souffre des brûlures ! (**" + degatF + "**PV)\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            console.log("AAA" + duel.Un.Brulj1)
    }}
    if(message.author.id === duel.Un.Idj2){
        if(duel.Un.Brulj2 > 0){
            degatF = Math.floor(Math.random() * Math.floor(15 - 5)+ 5)
            console.log("AAA" + duel.Un.Brulj2)
            duel.Un.PVj2 -= degatF
            duel.Un.Brulj2 -= 1
            message.channel.send("<@" + duel.Un.Idj2 + "> souffre des brûlures ! (**" + degatF + "**  PV) !\nPv <@" + duel.Un.Idj1 +"> = " + Jojcalc(duel.Un.PVj1) + "\nPv <@" + duel.Un.Idj2 + "> = " + Jojcalc(duel.Un.PVj2))
            console.log("AAA" + duel.Un.Brulj2)}}})
