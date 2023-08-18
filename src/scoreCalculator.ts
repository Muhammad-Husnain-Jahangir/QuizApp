import { Question } from './question.js';
export function scoreCalculator(quiz: Question[], userAnswers: Record<string, string>): number {
  let score = 0;
  for (const question of quiz) {
    if (userAnswers[question.name] === question.correctAnswer) {
      score++;
    }
  }
  return score;
}
