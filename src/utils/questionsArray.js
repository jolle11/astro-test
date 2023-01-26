const questionsArray = [
	{
		nr: 1,
		question: "Inside which HTML element do we put the JavaScript?",
		answer1: {
			answer: "<scripting/>",
			isCorrect: "question__answer--incorrect",
		},
		answer2: {
			answer: "<script/>",
			isCorrect: "question__answer--correct",
		},
		answer3: {
			answer: "<js/>",
			isCorrect: "question__answer--incorrect",
		},
		answer4: {
			answer: "<javascript/>",
			isCorrect: "question__answer--incorrect",
		},
	},
	{
		nr: 2,
		question: 'How do you write "Hello World" in an alert box?',
		answer1: {
			answer: 'msgBox("Hello World");',
			isCorrect: "question__answer--incorrect",
		},
		answer2: {
			answer: 'alert("Hello World");',
			isCorrect: "question__answer--correct",
		},
		answer3: {
			answer: 'alertBox("Hello World");',
			isCorrect: "question__answer--incorrect",
		},
		answer4: {
			answer: 'msg("Hello World");',
			isCorrect: "question__answer--incorrect",
		},
	},
	{
		nr: 3,
		question: "How to write an IF statement in JavaScript?",
		answer1: {
			answer: "if i == 5 then",
			isCorrect: "question__answer--incorrect",
		},
		answer2: {
			answer: "if i = 5 then",
			isCorrect: "question__answer--incorrect",
		},
		answer3: {
			answer: "if i = 5",
			isCorrect: "question__answer--incorrect",
		},
		answer4: {
			answer: "if (i == 5}",
			isCorrect: "question__answer--correct",
		},
	},
];

export default questionsArray;
