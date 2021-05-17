const qBank = [
  {
    question:
    'What is the minimum age for driving a motorcycle without gear?',
    answers: ["16 years", "18 years", "21 years" ],
    correct: "16 years",
    questionId: "099099"
  },
  {
    question:
      'The only vehicle which is allowed to drive at a speed of 60km/ hour is',
    answers: ["Motor Car", "Heavy bus/trucks", "All of the above" ],
    correct: "Motor Car",
    questionId: "183452"
  },
  {
    question:
      " If you see a yellow light at the traffic signal, you should",
    answers: ["Reduce your vehicle speed and proceed with caution", "Slow the vehicle", "Stop the vehicle"],
    correct: "Reduce your vehicle speed and proceed with caution",
    questionId: "267908"
  },
  {
    question: "If a vehicle is parked on the side of a road at night",
    answers: [
      "The vehicle should be locked",
      "Park light should remain on",
      "All of the above"
    ],
    correct: "All of the above",
    questionId: "333247"
  },
  {
    question: "You should never try to overtake a cyclist when",
    answers: ["Driving on a narrow road and just before you are about to turn left", "On a crowded street", "All of the above"],
    correct: "Driving on a narrow road and just before you are about to turn left",
    questionId: "496293"
  },
  {
    question:
      " Fog lamps should be used when",
    answers: [
      "There is mist",
      "At night",
      "When the vehicle opposite is not using the dim light"
    ],
    correct: "There is mist",
    questionId: "588909"
  },
  {
    question:
      'There is mist',
    answers: ["When approaching the red traffic light",
      "When signaled by a police officer or involved in an accident",
      "All of the above"],
    correct: "All of the above",
    questionId: "648452"
  },
  {
    question: "On a road designated as one way",
    answers: ["Parking is prohibited",
    "Overtaking is prohibited",
      "Should not drive in reverse gear"],
    correct: "Should not drive in reverse gear",
    questionId: "786649"
  },
  {
    question:
      "How can you distinguish a transport vehicle?",
    answers: ["By looking at the tyre size",
    "By colour of the vehicle",
    "By looking at the number plate of the vehicle "],
    correct: "By looking at the number plate of the vehicle ",
    questionId: "839754"
  },
  {
    question:
      "Validity of learners licence ",
    answers: [
      "Till the driving licence is obtained",
      "6 months",
      "30 days"
    ],
    correct: "6 months",
    questionId: "98390"
  },
  {
    question: " Vehicles proceeding from opposite direction should be allowed to pass through?",
    answers: ["Your right side",
    "Your left side",
    "The convenient side "],
    correct: "Your right side",
    questionId: "1071006"
  },
  {
    question: "Zebra lines are meant for..",
    answers: ["stopping vehicle",
    "pedestrians crossing",
    "for giving preference to vehicle"],
    correct: "pedestrians crossing",
    questionId: "1174154"
  },
  {
    question: "Red traffic light indicates",
    answers: ["vehicle can proceed with caution",
    "stop the vehicle",
    "slow down"],
    correct: "stop the vehicle",
    questionId: "1226535"
  },
  {
    question: "Parking a vehicle in front of entrance to hospital",
    answers: ["Proper",
    "Improper",
    "Proper if NO PARKING sign is not provided "],
    correct: "Improper",
    questionId: "1310938"
  },
  {
    question: "Drunken driving",
    answers: ["allowed in private vehicles",
    "allowed during night time",
    "prohibited in all vehicles"],
    correct: "prohibited in all vehicles. ",
    questionId: "1436873"
  },
  {
    question: "Use of horn prohibited ",
    answers: ["Mosque, Church and Temple",
    "Near Hospital, Courts of Law",
    "Near Police Station"],
    correct: "Near Hospital, Courts of Law",
    questionId: "1515110"
  },
  {
    question: "Boarding in and alighting from a vehicle while in motion",
    answers: ["Permitted in bus",
    "permitted in autorickshaw",
    "prohibited in all vehicles"],
    correct: "prohibited in all vehicles",
    questionId: "1642728"
  },
  {
    question:
      "Parking is permitted ",
    answers: ["In turnings",
    "On foot paths",
    "Where parking is not prohibited"],
    correct: "Where parking is not prohibited",
    questionId: "1747256"
  },
  {
    question:
      "When fuel is filled in a vehicle",
    answers: ["shall not check air pressure",
    "shall not smoke",
    "shall not use any light of the vehicle"],
    correct: "shall not smoke ",
    questionId: "1822532"
  },
  {
    question: "Mobile phones shall not be used",
    answers: [
      "in Government offices",
      "in Police Stations",
      "While driving a vehicle" 
    ],
    correct: "While driving a vehicle ",
    questionId: "195075"
  },
  {
    question: "Validity of P.U.C.C. Pollution Under Control Certificate ",
    answers: ["6 months",
    "One Year",
    "Two years"],
    correct: "6 months",
    questionId: "2019778"
  },
  {
    question: "The Signal while taking U-turn",
    answers: ["Left turn signal",
    "Right turn signal",
    "Slow down signal"],
    correct: "Right turn signal",
    questionId: "2134343"
  },
  {
    question: "A place where parking is prohibited",
    answers: [
      "In front of a parked vehicle",
      "On one-way road",
      "On foot-path"],
    correct: "On foot-path",
    questionId: "2210799"
  },
];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
