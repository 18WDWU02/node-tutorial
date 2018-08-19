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
    process.stdout.write(`\n\n${questions[i]}\n`);
};

process.stdin.on('data', function(answer){
    var questionNumber = usersAnswers.length;
    var inputAnswer = answer.toString().trim();
    usersAnswers.push(inputAnswer);
    if(usersAnswers.length < answers.length){
        askQuestion(usersAnswers.length);
    } else {
        process.exit();
    }
});

process.on('exit', function(){
    process.stdout.write(`\n\nYou answered:\n`);
    var correctCount = 0;
    for (var i = 0; i < questions.length; i++) {
        if(answers[i] == usersAnswers[i]){
            process.stdout.write(`${questions[i]}: ${usersAnswers[i]} -- correct\n`);
            correctCount++
        } else{
            process.stdout.write(`${questions[i]}: ${usersAnswers[i]} -- incorrect, the answer is ${answers[i]}\n`);
        }
    }
    process.stdout.write(`\nYou got ${correctCount}/${questions.length} correct\n`);
})


askQuestion(0);
