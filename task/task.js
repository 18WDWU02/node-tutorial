const fs = require('fs');

process.stdout.write('\n\nHello and welcome to the Quiz\n\n');

var questions = [
    'What is your name?',
    'What is your email address?',
    'How many sides does a square have?',
    'What is the capital of New Zealand?',
    'What is 2 x 2?'
];
var answers = [
    null,
    null,
    '4',
    'Wellington',
    '4'
];
var usersAnswers = [];

if(!fs.existsSync("./quizResults")){
	fs.mkdirSync("./quizResults");


function askQuestion(i){
    process.stdout.write(`\n\n${questions[i]}\n\n`);
};

var name;
var email;
process.stdin.on('data', function(answer){
    var questionNumber = usersAnswers.length;
    if(!name){
        name = answer.toString().trim();
        usersAnswers.push(name);
        askQuestion(usersAnswers.length);
    } else if(!email){
        email = answer.toString().trim();
        usersAnswers.push(email);
        if(!fs.existsSync(`./quizResults/${email}.txt`)){
            fs.writeFileSync(`./quizResults/${email}.txt`, `Quiz results for ${name}\n\n`);
            askQuestion(usersAnswers.length);
        } else {
            console.log("You have already completed the quiz, you can only complete it once");
            process.exit();
        }
    } else {
        var questionNumber = usersAnswers.length;
        var inputAnswer = answer.toString().trim();
        usersAnswers.push(inputAnswer);
        if(usersAnswers.length < answers.length){
            askQuestion(usersAnswers.length);
        } else {
            process.exit();
        }
    }
});

process.on('exit', function(){
    var correctCount = 0;
    for (var i = 2; i < questions.length; i++) {
        if(answers[i] == usersAnswers[i]){
            var content = `${questions[i]}: ${usersAnswers[i]} -- correct\n`;
            correctCount++
        } else{
            var content = `${questions[i]}: ${usersAnswers[i]} -- incorrect, the answer is ${answers[i]}\n`;
        }
        fs.appendFileSync(`./quizResults/${email}.txt`, content);
    }
    process.stdout.write(`\nThank you for taking the quiz, please look at your file for the results.\n`);
});

 askQuestion(0);
