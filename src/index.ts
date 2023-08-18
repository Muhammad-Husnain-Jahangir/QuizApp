import chalk from 'chalk';
import inquirer from 'inquirer';
import  {questions}  from './question.js';
import { scoreCalculator } from './scoreCalculator.js';
import { generateQuizSummary } from './quizSummary.js';

async function startQuiz() {
  const userAnswers: Record<string, string> = {};

  for (const question of questions) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: question.name,
        message: question.message,
        choices: question.choices,
      },
    ]);
    userAnswers[question.name] = answer[question.name];
  }
  const userScore = scoreCalculator(questions, userAnswers); // Calculate the user's score
  console.log(chalk.bgBlue(`Your score: ${userScore} / ${questions.length}\n`)); // Display the user's score
  
  generateQuizSummary(questions, userAnswers);
}

startQuiz();
