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
     quiz_id: 1,
    category: 1,
    question:  'UA.I.B.K1 Registration requirements for small unmanned aircraft systems. Under what condition would a small UA not have to be registered before it is operated in the United States?',
    options: [ 'A. When the aircraft weighs less than .55 pounds on takeoff, including everything that is on-board or attached to the aircraft.', 
        'B. When the aircraft has a takeoff weight that is more than .55 pounds, but less than 55 pounds, not including fuel and necessary attachments. [This is weight range for Part 48. Remember that Part 47 is for the 55lbs and heavier drones!', 
        'C. All small UAS need to be registered regardless of the weight of the aircraft before, during, or after the flight. [Nope.]',
    ], 
  answer: 'A. When the aircraft weighs less than .55 pounds on takeoff, including everything that is on-board or attached to the aircraft.',
},
    
 {   
    quiz_id: 1,
    category: 1,
    question: 'UA.I.B.K1 Registration requirements for small unmanned aircraft systems. According to 14 CFR part 48, when would a small UA owner not be permitted to register it?',
    options: ['A. The owner is less than 13 years of age. [48.25 says, “(b) A small unmanned aircraft must be registered by its owner using the legal name of its owner, unless the owner is less than 13 years of age. If the owner is less than 13 years of age, then the small unmanned aircraft must be registered by a person who is at least 13 years of age.” Keep in mind that they are trying to make you know Part 48. There are other answers as to why a person could not register via Part 47 such as being a foreign citizen.]',
        'B. All persons must register their small UA.',
        'C. If the owner does not have a valid United States drivers license. [Part 48 doesnt require this and Part 47 doesnt require it either.]',
 ],
  answer: 'A. The owner is less than 13 years of age. [48.25 says, “(b) A small unmanned aircraft must be registered by its owner using the legal name of its owner, unless the owner is less than 13 years of age. If the owner is less than 13 years of age, then the small unmanned aircraft must be registered by a person who is at least 13 years of age.” Keep in mind that they are trying to make you know Part 48. There are other answers as to why a person could not register via Part 47 such as being a foreign citizen.]',
},   
{    
    quiz_id: 1,
    category: 1,
    question:  'UA.I.B.K1 Where must a small unmanned aircrafts serial number be listed when using either standard remote identification or a broadcast module?',
    options: [ 'A. The aircrafts Document of Compliance.',
        'B. The manufacturers Method of Compliance',
        'C. The Certificate of Aircraft Registration. [ Read 48.110]',
], 
    answer: 'C. The Certificate of Aircraft Registration. [ Read 48.110]',
},
   

     {
quiz_id: 2,
category: 2,
question:  'Which of the following is a medication is used to treat hyperlipidemia?',
options: ['A. Pravachol', 'B. Procardia', 'C. Prinivil', 'D. Cardura'],
answer: 'Pravachol',
},
{
quiz_id: 2,
category: 2,
question:  'All the following are reasons why covered entities may disclose protected health information (PHI) to law enforcement officials except?',
options: ['A. When the covered entity believes that individuals may have contracted a communicable disease when notification is authorized by law.', 'To alert law enforcement of a person’s death, if suspects that a criminal activity caused the death.', 'To identify a suspect or missing person.', 'When the covered entity believes that PHI is evidence of a crime occurred on its premises'],
answer: 'A. When the covered entity believes that individuals may have contracted a communicable disease when notification is authorized by law.',
},
{
quiz_id: 2,
category: 2,
question:  'The physician prescribes 500mg of a drug with is available as 1gm / 2ml, how many milliliters should this patient receive?',
options: ['5ml.', '2ml.', '0.5ml.', '1ml.'],
answer: '1ml.',
},
{
  quiz_id: 2,
category: 2,
question:  'Which of the following would be a solution to a patient identifiers error caused by nurses?',
options: ['A. Read the label three times', 'B. Use bar coding to identify the patient and medication', 'C. Avoid borrowing medications', 'D. Use unit dose medications when available'],
answer: 'B. Use bar coding to identify the patient and medication',
},
{
  quiz_id: 2,
category: 2,
question:  'Which of the following is not part of the personal protective equipment?',
options: ['A. Gloves', 'B. Mask', ' C. Goggles', ' D. Jacket'],
answer: 'D.Jacket',
},  


 
  
      {
quiz_id: 3,
category: 3,
question:  'Node.js is written in which language?',
options: ['A.C++', 'B. JavaScript', 'C. C', 'D. Java'],
answer: 'JavaScript',
      },
      {       
        quiz_id: 3,
        category: 3,
        question:  'How do we install the node body-parser module?',
        options: ['A. npm installbody-parser', 'B. Node install body-parser', 'C. Node.js install body-parser', 'D. All of the above'],
        answer: 'npm install body-parser',
              },
             {
              quiz_id: 3,
        category: 3,
        question:  'Which of the following are examples of node modules?',
        options: ['A.Express', 'B. Body-parser', 'C. Socket.io', 'D. All of the above'],
        answer: 'D. All of the above',
              },
             {
              quiz_id: 3,
        category: 3,
        question:  'To include the HTTP server in the node modeule, what function do we use?',
        options: ['A. get', 'B. require()', 'C. createServer()', 'D. None of the above'],
        answer: 'B. require()',
              },
             {
              quiz_id: 3,
        category: 3,
        question:  'Default scope in Node.js application is?',
        options: ['A. Global', 'B. Local', 'C. Local to Object', 'D. None of the above'],
        answer: 'Local',
              },
             
              
    ]
const Flashcard = () => Category.bulkCreate(categoryData);
module.exports = seedDatabase