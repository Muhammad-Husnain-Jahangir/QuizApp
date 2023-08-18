import inquirer from "inquirer";
import {scoreCalculator} from "./scoreCalculator.js";
import { generateQuizSummary } from "./quizSummary.js";
export interface Question {
  type: string;
  name: string;
  message: string;
  choices: string[];
  correctAnswer: string;
}


export const questions: Question[] =  ([

      {
        type: 'list',
        name: 'question1',
        message: 'The age of Hazrat Muhammad(SAW) when he was went to syria with Hazrat Abu-Talib__________. ',
        choices: ['24 years', '12 years', '15 years', '35 years'],    
        correctAnswer: '12 years',  
    },
    {
      type: 'list',
      name: 'question2',
      message: 'The country which has highest per capita income in the Muslim world?',
      choices: [`Kuwait`,`Turkey`,`Iran`,`Saudi Arabia`],
      correctAnswer: `Kuwait`,
    },
    {
      type: 'list',
      name: 'question3',
      message: 'When Habshah migration take place?',
      choices: ['620 AD', '640 AD', '635 AD', '615 AD'],
      correctAnswer: '615 AD',
    },
    {
      type: 'list',
      name: 'question4',
      message: 'Year of sorrow___________?',
      choices: ['10th Nabvi', '7th Nabvi', '11th Nabvi', '13th Nabvi'],
      correctAnswer: '10th Nabvi',
    },
    {
      type: 'list',
      name: 'question5',
      message: 'Qibla changed in which Hijri?',
      choices: ['4th Hijri', '5th Hijri', '2nd Hijri', '1st Hijri'],
      correctAnswer: '2nd Hijri',
    },
    {
      type: 'list',
      name: 'question6',
      message: 'What is the capital of Pakistan?',
      choices: ['Punjab', 'Sindh', 'Islamabad', 'Balochistan'],    
      correctAnswer: 'Islamabad',  
    },
    {
    type: 'list',
    name: 'question7',
    message: 'Which planet is known as the Red Planet?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Mercury'],
    correctAnswer: 'Mars',
    },
    {
    type: 'list',
    name: 'question8',
    message: 'What is the largest mammal in the world?',
    choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswer: 'Blue Whale',
    },
    {
    type: 'list',
    name: 'question9',
    message: 'Which famous scientist developed the theory of relativity?',
    choices: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nicolaus Copernicus'],
    correctAnswer: 'Albert Einstein',
    },
    {
    type: 'list',
    name: 'question10',
    message: 'Which gas do plants use for photosynthesis?',
    choices: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Hydrogen'],
    correctAnswer: 'Carbon Dioxide',
    } 
  ])

