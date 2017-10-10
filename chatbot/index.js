'use strict';

const Alexa = require('alexa-sdk');


const APP_ID =  'amzn1.ask.skill.710eb038-7785-4ca3-9351-d48e977471d2';



const SKILL_NAME = 'The wise one';

const GET_FACT_MESSAGE = "The wise one knows: ";

const HELP_MESSAGE = 'You can say tell me a true fact, or, you can say exit... What do you want to do?';

const HELP_REPROMPT = 'Want to know a true fact?';

const STOP_MESSAGE = 'Namaste!';



const data = [

    'The sun is more than two hundred years old.',

    'Before coffee, people used to drink really hot mud.',

    'The word cactus, is latin for penis plant.',

    'The first shoe was worn sarcastically.',

    'A group of three or more men, is called a group of men.',

    'After the first man climbed mount everest, he looked arround chuckled to himself and said, hashtag that happened.',

    'If you fart before when you cannon ball into a pool, you will hover over the air for a few seconds.',

    'Before being called forest gump, it was called the stupid southern man.',

    'Snakes cannot drive drive, so stop wasting your time asking them for a ride to the pizza parlour.',

    'The Mona Lisa is a very famous painting of an unattractive woman.',

    'When a snowman melts, its nose becomes its dinky.',

    'Vitamin C is spanish for vitamin yes.',

    'A nose is for smell, but a ear is for hear.',
    
    'Tide laundry detergent comes in three scents, original, fresh linen and curry chicken salad.',

    'Albert Einsteins mustache was fake, he bought it for halloween but accidentally used super glue.',
    
    'If the Earth was put on a scale, scientists would be puzzled by the presence of that scale.',
    
    'No death-row inmate has ever asked for tofu as his last meal.',
    
    'By law, all globes in Australia are displayed upside down.',
    
    'The lead role for the movie "Gandhi" originally was offered to Burt Reynolds',
    
    'If you notify the flight attendant that it is your birthday, most airlines will let you exit the plane on the inflatable slide.',
    
    'Rome was not built in a day, although the contractor told them it would be.',
    
    'You are most likely to be stung by a bee in windy weather.',
    
    'The first remote control took eight minutes to change a channel.',
    
    'The videogame Donkey Kong is based on a true story.',
];


exports.handler = function(event, context, callback) {

    var alexa = Alexa.handler(event, context);

    alexa.appId = APP_ID;

    alexa.registerHandlers(handlers);

    alexa.execute();

};


const handlers = {

    'LaunchRequest': function () {

        this.emit('GetNewFactIntent');

    },

    'AMAZON.HelpIntent': function () {

        const speechOutput = HELP_MESSAGE;

        const reprompt = HELP_REPROMPT;



        this.response.speak(speechOutput).listen(reprompt);

        this.emit(':responseReady');

    },
    

    'GetNewFactIntent': function () {

        const factArr = data;

        const factIndex = Math.floor(Math.random() * factArr.length);

        const randomFact = factArr[factIndex];

        const speechOutput = GET_FACT_MESSAGE + randomFact;



        this.response.cardRenderer(SKILL_NAME, randomFact);

        this.response.speak(speechOutput);

        this.emit(':responseReady');

    },


    'AMAZON.CancelIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },

    'AMAZON.StopIntent': function () {

        this.response.speak(STOP_MESSAGE);

        this.emit(':responseReady');

    },

};