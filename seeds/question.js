const {Category } = require('../models');

const categoryData = [
  {
    id: 1,
    name: 'FAA Drone Pilot'
  },
  {
    id: 2,
    name: 'Pharmacy Tech'
  },
  {
    id: 3,
    name: 'node.js'
  },
]

const Category = () => Category.bulkCreate(categoryData);
module.exports = seedDatabase



    const { Flashcard } = require('../models');

    const quizData = 
    [
      
    {
     quiz_id: 1,
    category: 1,
    question:  'UA.I.A.K4 A small UA causes an accident and your crew member loses consciousness. When do you report the accident?',
    options:[
    
        'A.No accidents need to be reported, B. When requested by the UA owner. [You might be confused. If there is a deviation from the regulations, only upon request from the FAA, do you need to provide a report. 107.21 says, “(b) Each remote pilot in command who deviates from a rule under paragraph (a) of this section must, upon request of the Administrator, send a written report of that deviation to the Administrator.”',

        'B. When requested by the UA owner. [You might be confused. If there is a deviation from the regulations, only upon request from the FAA, do you need to provide a report. 107.21 says, “(b) Each remote pilot in command who deviates from a rule under paragraph (a) of this section must, upon request of the Administrator, send a written report of that deviation to the Administrator.”]',

        'C. Within 10 days of the accident. [107.9 Accident reporting. “No later than 10 calendar days after an operation that meets the criteria of either paragraph (a) or (b) of this section[.]”'
    ],
        answer:  'C. Within 10 days of the accident. [107.9 Accident reporting. “No later than 10 calendar days after an operation that meets the criteria of either paragraph (a) or (b) of this section[.]”'
    },

    {
    // quiz_id: 1,
    category: 'regulations',
    question:  'UA.I.B.K1 Registration requirements for small unmanned aircraft systems. Under what condition would a small UA not have to be registered before it is operated in the United States?',
    options:  'A. When the aircraft weighs less than .55 pounds on takeoff, including everything that is on-board or attached to the aircraft.', 
        'B. When the aircraft has a takeoff weight that is more than .55 pounds, but less than 55 pounds, not including fuel and necessary attachments. [This is weight range for Part 48. Remember that Part 47 is for the 55lbs and heavier drones!', 
        'C. All small UAS need to be registered regardless of the weight of the aircraft before, during, or after the flight. [Nope.]',
    
  correct_option_index:  1;
},
    
 {   
    // quiz_id: 1,
    category: 'regulations',
    question: 'UA.I.B.K1 Registration requirements for small unmanned aircraft systems. According to 14 CFR part 48, when would a small UA owner not be permitted to register it?',
    options: 'A. The owner is less than 13 years of age. [48.25 says, “(b) A small unmanned aircraft must be registered by its owner using the legal name of its owner, unless the owner is less than 13 years of age. If the owner is less than 13 years of age, then the small unmanned aircraft must be registered by a person who is at least 13 years of age.” Keep in mind that they are trying to make you know Part 48. There are other answers as to why a person could not register via Part 47 such as being a foreign citizen.]',
        'B. All persons must register their small UA.',
        'C. If the owner does not have a valid United States drivers license. [Part 48 doesnt require this and Part 47 doesnt require it either.]',
  
    correct_option_index :1,
},   
{    
    // quiz_id: 1,
    category: 'regulations',
    question:  'UA.I.B.K1 Where must a small unmanned aircrafts serial number be listed when using either standard remote identification or a broadcast module?',
    options: 'A. The aircrafts Document of Compliance.',
        'B. The manufacturers Method of Compliance',
        'C. The Certificate of Aircraft Registration. [ Read 48.110]',
    
    "correct_option_index": 1,
},
]   



const { Question } = require('../models');

    const quizData2 =

quiz_id: 2,
category:'Pharmacy Tech',
question:  '',
options:'',

const question = () => Category.bulkCreate(categoryData);
module.exports = seedDatabase
//     "quiz_id": 1,
//     "category": "FAA Drone Pilot test question ",
//     "question 5":  "UA.I.B.K6a A small UA must be operated in a manner which",
//     "options":[
//         "A. does not endanger the life or property of another. [Just looking at this. If you knew you one of these was correct, this is the most important of all 3 of them.]",
//         "B. requires more than one visual observer. [You dont need a visual observer unless you are doing something special like over in 107.31 such as FPV racing]",
//         "C. never exceeds 200 feet AGL",
//     ]
//     "correct_option_index": 1
    
//     //     "question": "UA.I.A.K4 A small UA causes an accident and your crew member loses consciousness. When do you report the accident?",
        
//     //     "options": ["A. No accidents need to be reported.", "B. When requested by the UA owner. [You might be confused. If there is a deviation from the regulations, only upon request from the FAA, do you need to provide a report. 107.21 says, “(b) Each remote pilot in command who deviates from a rule under paragraph (a) of this section must, upon request of the Administrator, send a written report of that deviation to the Administrator.”]", "C. Within 10 days of the accident. [107.9 Accident reporting. “No later than 10 calendar days after an operation that meets the criteria of either paragraph (a) or (b) of this section[.]”]"],
        
//     //     "correct_option_index": 1
//     // 
    
        
    
//    // FAA question answers

//    FAA Drone Pilot TEST Answers

// [
// "question 1": "UA.I.A.K4 A small UA causes an accident and your crew member loses consciousness. When do you report the accident?"
// "correctOptionIndex": "C. Within 10 days of the accident. [107.9 Accident reporting. “No later than 10 calendar days after an operation that meets the criteria of either paragraph (a) or (b) of this section[.]”"


// "question 2":  "UA.I.B.K1 Registration requirements for small unmanned aircraft systems. Under what condition would a small UA not have to be registered before it is operated in the United States?"
// "correctOptionIndex": "A. When the aircraft weighs less than .55 pounds on takeoff, including everything that is on-board or attached to the aircraft."


// "question 3": "UA.I.B.K1 Registration requirements for small unmanned aircraft systems. According to 14 CFR part 48, when would a small UA owner not be permitted to register it?"
// "correctOptionIndex": "A. The owner is less than 13 years of age. [48.25 says, “(b) A small unmanned aircraft must be registered by its owner using the legal name of its owner, unless the owner is less than 13 years of age. If the owner is less than 13 years of age, then the small unmanned aircraft must be registered by a person who is at least 13 years of age.” Keep in mind that they are trying to make you know Part 48. There are other answers as to why a person could not register via Part 47 such as being a foreign citizen."


// "question 4":  "UA.I.B.K1 Where must a small unmanned aircrafts serial number be listed when using either standard remote identification or a broadcast module?"
// "correctOptionIndex": "C. The Certificate of Aircraft Registration. [ Read 48.110]"


// "question 5": "UA.I.B.K6a A small UA must be operated in a manner which?"
// "correctOptionIndex": "A. does not endanger the life or property of another. [Just looking at this. If you knew you one of these was correct, this is the most important of all 3 of them.]"
// ]