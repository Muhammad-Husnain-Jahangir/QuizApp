import chalk from 'chalk';
import { Question } from './question.js';

export function generateQuizSummary(quiz: Question[], userAnswers: Record<string, string>) {
  console.log(chalk.bgBlueBright('--- Quiz Summary ---'));
  for (const question of quiz) {
    const userAnswer = userAnswers[question.name];
    const result = userAnswer === question.correctAnswer ? 'Correct' : 'Incorrect';
    console.log(chalk.bgCyanBright(`Question: ${question.message}`));
    console.log(chalk.bgGreen(`Your answer: ${userAnswer}`));
    console.log(chalk.bgYellowBright(`Correct answer: ${question.correctAnswer}`));
    console.log(chalk.bgMagentaBright(`Result: ${result}\n`));
  }
}
