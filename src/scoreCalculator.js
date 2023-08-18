export function scoreCalculator(quiz, userAnswers) {
    let score = 0;
    for (const question of quiz) {
        if (userAnswers[question.name] === question.correctAnswer) {
            score++;
        }
    }
    return score;
}
