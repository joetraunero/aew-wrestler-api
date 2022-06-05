const express = require('express')
const app = express()
// const cors = require('cors')
const PORT = 8000

// app.use(cors())
const wrestlers = {
    'aaron solo':{
        'birthName':'Aaron Solow',
        'finisher' :'Cradle DDT'
    },
    'adam cole':{
        'birthName':'Austin Kirk Jenkins',
        'finisher' :'Last Shot/The Boom, Panama Sunrise '
    },
    'adam page':{
        'birthName':'Stevie Woltz',
        'finisher' :'The Buckshot Lariat'
    },
    'alan angels':{
        'birthName':'Trey Tucker',
        'finisher' :'27 Club'
    },
    'alex reynolds':{
        'birthName':'Alex Reynolds',
        'finisher' :'Honk Honk'
    },
    'andrade el idolo':{
        'birthName':'Manuel Alfonso Andrade Oropeza ',
        'finisher' :'La Sombra'
    },
    'angélico':{
        'birthName':'Adam Bridle',
        'finisher' :'Fall of the Angels'
    },
    'angelo parker':{
        'birthName':'Jeffrey Parker',
        'finisher' :'Lungblower'
    },
    'anthony bowens':{
        'birthName':'Anthony Bowens',
        'finisher' :'Crossface'
    },
    'anthony ogogo':{
        'birthName':'Alex Reynolds',
        'finisher' :"The Guv'nor's Hammer"
    },
    'austin gunn':{
        'birthName':'Austin Sopp',
        'finisher' :'Fame-Ass-er'
    },
    'billy gunn':{
        'birthName':'Monty Kip Sopp',
        'finisher' :'Gunnslinger, Famouser '
    },
    'bobby fish':{
        'birthName':'Bobby Fish',
        'finisher' :'Fish Hook Deluxe Edition, Flying Fish Hook, Sleeping With The Fishes'
    },
    'brandon cutler':{
        'birthName':'Brandon Bogle',
        'finisher' :'Wipeout'
    },
    'brian cage':{
        'birthName':'Brian Christopher Button',
        'finisher' :'Drill Claw, Weapon X'
    },
    'brian pillman jr.':{
        'birthName':'Brian Zachary Pillman',
        'finisher' :'Dying Promise'
    },
    'brock anderson':{
        'birthName':'Brock Alexander Lunde ',
        'finisher' :'Spinebuster'
    },
    'brody king':{
        'birthName':'Nate Blauvelt',
        'finisher' :'All Seeing Eye '
    },
    'bryan danielson':{
        'birthName':'Bryan Lloyd Danielson',
        'finisher' :'Bridging dragon suplex, Cattle Mutilation, Regal-Plex '
    },
    'buddy matthews':{
        'birthName':'Matthew Adams',
        'finisher' :"Murphy's Law"
    },
    'cash wheeler':{
        'birthName':'Daniel Marshall Wheeler',
        'finisher' :'Gory Bomb'
    },
    'chris jericho':{
        'birthName':'Christopher "Chris" Keith Irvine',
        'finisher' :'Judas Effect, Liontamer, Walls of Jericho, Codebreaker'
    },
    'christian cage':{
        'birthName':'William Jason "Jay" Reso',
        'finisher' :'Spear'
    },
    'christopher daniels':{
        'birthName':'Daniel Christopher Covell',
        'finisher' :'Best Moonsault Ever, Angels Wings '
    },
    'chuck taylor':{
        'birthName':'Dustin Lee Howard',
        'finisher' :'Awful Waffle / Omega Driver, Sole Food, Cross Crab'
    },
    'cm punk':{
        'birthName':'Phillip Jack "Phil" Brooks',
        'finisher' :'Anaconda Vise, GTS (Go To Sleep)'
    },
    'colt cabana':{
        'birthName':'Scott Colton',
        'finisher' :'Colt .45, Chicago Skyline, Superman Pin'
    },
    'colten gunn':{
        'birthName':'Colten Sopp',
        'finisher' :'colt .45'
    },
    'danhausen':{
        'birthName':'Donovan Danhausen',
        'finisher' :'Very Nice, Very Knee-vil, GoodnightHausen'
    },
    'daniel garcia':{
        'birthName':'Daniel Garcia',
        'finisher' :'450° Splash, Springboard Cutter'
    },
    'daunte martin':{
        'birthName':'Daunte Martin',
        'finisher' :'Last Shot/The Boom, Panama Sunrise '
    },
    'darby allin':{
        'birthName':'Samuel Ratsch',
        'finisher' :'Coffin Drop, Last Supper'
    },
    'darius martin':{
        'birthName':'Darius Martin',
        'finisher' :'Howl at the Moon'
    },
    'dax harwood':{
        'birthName':'David Hardwood',
        'finisher' :'Cradle DDT, Inverted Figure Four'
    },
    'dustin rhodes':{
        'birthName':'Dustin Runnels',
        'finisher' :'Final Reckoning'
    },
    'eddie kingston':{
        'birthName':'Edward Moore',
        'finisher' :'Uraken'
    },
    'ethan page':{
        'birthName':'Julian Micevski',
        'finisher' :'Egos Edge'
    },
    'evil uno':{
        'birthName':'Nicolas Dansereau',
        'finisher' :'Flatliner'
    },
    'frankie kazarian':{
        'birthName':'Frank Gerdelman',
        'finisher' :"Wave of the Future, Flux Capacitor "
    },
    'fuego del sol':{
        'birthName':'Fuego Del Sol',
        'finisher' :'450 splash'
    },
    'griff garrison':{
        'birthName':'Garrett Griffith',
        'finisher' :'The Ivy League Destroyer'
    },
    'hook':{
        'birthName':'Tyler Senerchia',
        'finisher' :'REDRUM'
    },
    'isiah kassidy':{
        'birthName':'Isiah Kassidy',
        'finisher' :'Gin and Juice'
    },
    'jake atlas':{
        'birthName':'Kenny Marquez',
        'finisher' :'Rainbow DDT'
    },
    'jake hager':{
        'birthName':'Donald Hager Jr.',
        'finisher' :"Hager Bomb"
    },
    'jay lethal':{
        'birthName':'Jamar Shipman',
        'finisher' :'Lethal Injection'
    },
    'jeff hardy':{
        'birthName':'Jeffrey Hardy',
        'finisher' :'Swanton Bomb, Twist of Fate '
    },
    'John Silver':{
        'birthName':'John Silver',
        'finisher' :'Spinning backbreaker'
    },
    'jonathan gresham':{
        'birthName':'Jonathan Gresham',
        'finisher' :"Octopus Hold, Figure-four leglock"
    },
    'jon moxley':{
        'birthName':'Jonathan Good',
        'finisher' :'Paradigm Shift'
    },
    'jungle boy':{
        'birthName':'Jack Perry',
        'finisher' :'Snare Trap, '
    },
    'keith lee':{
        'birthName':'Keith Lee',
        'finisher' :'Spirit Bomb, Ground Zero'
    },
    'kenny omega':{
        'birthName':'Tyson Smith',
        'finisher' :'One-Winged Angel, V-Trigger, Dragon Suplex'
    },
    'kip sabian':{
        'birthName':'Simon Kippen',
        'finisher' :'Deathly Hallows'
    },
    'kyle oreilly':{
        'birthName':'Kyle Greenwood',
        'finisher' :'Diving knee drop'
    },
    'lance archer':{
        'birthName':'Lance Hoyt',
        'finisher' :'Blackout, EBD Claw'
    },
    'lee johnson':{
        'birthName':'Julian Moriarty',
        'finisher' :'One Shot'
    },
    'lee moriarty':{
        'birthName':'Donovan Danhausen',
        'finisher' :'Taiga Driver 18'
    },
    'luchasaurus':{
        'birthName':'Austin Matelson',
        'finisher' :'Chokeslam'
    },
    'luther':{
        'birthName':'Len Olson',
        'finisher' :'Big Boot'
    },
    'malakai black':{
        'birthName':'Tom Büdgen',
        'finisher' :'Black Mass'
    },
    'marq quen':{
        'birthName':'DeQuentin Redden',
        'finisher' :'Gin and Juice'
    },
    'matt hardy':{
        'birthName':'Matthew Hardy',
        'finisher' :'Twist of Fate'
    },
    'matt jackson':{
        'birthName':'Matthew Massie',
        'finisher' :'BTE Trigger, Meltzer Driver'
    },
    'matt menard':{
        'birthName':'Matthew Menard-Lee',
        'finisher' :'2 For the Show'
    },
    'matt sydal':{
        'birthName':'Matthew Korklan',
        'finisher' :'Lightning Spiral'
    },
    'max caster':{
        'birthName':'Max Caster',
        'finisher' :'Mic Drop'
    },
    'michael nakazawa':{
        'birthName':'Masatsugu Nakazawa',
        'finisher' :"Spear"
    },
    'miro':{
        'birthName':'Miroslav Barnyashev',
        'finisher' :'Game Over'
    },
    'mjf':{
        'birthName':'Maxwell Friedman',
        'finisher' :'Heat Seaker, Double Cross, Salt of the Earth '
    },
    'nick comoroto':{
        'birthName':'Nicholas Comoroto',
        'finisher' :'Powerbomb'
    },
    'nick jackson':{
        'birthName':'Nicholas Massie',
        'finisher' :'BTE Trigger, Meltzer Driver'
    },
    'orange cassidy':{
        'birthName':'James Cipperly',
        'finisher' :'Beach Break, Orange Punch'
    },
    'ortiz':{
        'birthName':'Miguel Molina',
        'finisher' :'Street Sweeper'
    },
    'pac':{
        'birthName':'Benjamin Satterly',
        'finisher' :'Black Arrow, Brutalizer'
    },
    'penta oscuro':{
        'birthName':'Undisclosed',
        'finisher' :'Fear Factor'
    },
    'peter avalon':{
        'birthName':'Peter Hernandez',
        'finisher' :'Marti-knees'
    },
    'powerhouse hobbs':{
        'birthName':'William Hobson',
        'finisher' :'Powerhouse Slam'
    },
    'pres10 vance':{
        'birthName':'Cody Vance',
        'finisher' :'Ripcord Clothesline, Powerbomb'
    },
    'qt marshall':{
        'birthName':'Michael Cuellari',
        'finisher' :'QT Cutter'
    },
    'rey fenix':{
        'birthName':'Undisclosed',
        'finisher' :"Frog Splash, Black Fire Driver"
    },
    'ricky starks':{
        'birthName':'Richard Starks',
        'finisher' :'Roshambo'
    },
    'sammy guevara':{
        'birthName':'Samuel Guevara',
        'finisher' :'630, GTH '
    },
    'samoa joe':{
        'birthName':'Nuufolau Seanoa',
        'finisher' :'Muscle Buster'
    },
    'santana':{
        'birthName':'Michael Sanchez',
        'finisher' :'Street Sweeper'
    },
    'scorpio sky':{
        'birthName':'Schuyler Andrews',
        'finisher' :'TKO'
    },
    'serpentico':{
        'birthName':'Jay Cruz',
        'finisher' :'Diving knee drop'
    },
    'shawn spears':{
        'birthName':'Ronnie Arneill',
        'finisher' :'C4'
    },
    'sonny kiss':{
        'birthName':'unknown',
        'finisher' :'Split Leg Drop'
    },
    'sting':{
        'birthName':'Steve Borden',
        'finisher' :'Scorpion Death Drop'
    },
    'tony nese':{
        'birthName':'Anthony Nese',
        'finisher' :'Pumphandle Michinoku Driver, The Running Kneese'
    },
    'trent beretta':{
        'birthName':'Gregory Marasciulo',
        'finisher' :'Crunchy'
    },
    'wardlow':{
        'birthName':'Michael Wardlow',
        'finisher' :'F-10'
    },
    'wheeler yuta':{
        'birthName':'Paul Gruber',
        'finisher' :'The Seatbelt'
    },
    'unknown':{
        'birthName':'unknown',
        'finisher' :'unknown'
    }
}
app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})
app.get('/api/:name', (request, response)=>{
    const wrestlerName = request.params.name.toLowerCase()
    
    if(wrestlers[wrestlerName]){
        response.json(wrestlers[wrestlerName])
    }else{
        response.json(wrestlers['unknown'])
    }
    response.json(wrestlers)
})


app.listen(process.env.Port || PORT, ()=>{
    console.log(`The server is now running on port ${PORT}`)
})