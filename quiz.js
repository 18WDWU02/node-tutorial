process.stdout.write('\n\nHello and welcome to the Quiz\n\n');

var questions = [
    'How many sides does a square have?',
    'What is the capital of New Zealand?',
    'What is 2 x 2?'
];
var answers = [
    '4',
    'Wellington',
    '4'
];
var usersAnswers = [];

function askQuestion(i){
    process.stdout.write(`\n\n${questions[i]}\n\n`);
};

process.stdin.on('data', function(answer){
    var questionNumber = usersAnswers.length;
    var inputAnswer = answer.toString().trim();
    if(inputAnswer == answers[questionNumber]){
        process.stdout.write(`Correct`);
        usersAnswers.push(inputAnswer);

        if(usersAnswers.length < answers.length){
            askQuestion(usersAnswers.length);
        } else {
            process.exit();
        }

    } else {
        process.stdout.write(`\n${inputAnswer} is incorrect, please try again\n\n`);
    }

});


 askQuestion(0);


process.on('exit', function(){
    process.stdout.write(`\n\n\n Congrates, you have completed the quiz\n\n\n`);
});












//
