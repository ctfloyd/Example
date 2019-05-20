'use strict';


/** This class is responsible for the tasks of a quiz question. */
export class QuizQuestion {
  /**
    * Initializes a quiz questions with the passed in properties.
    * @param {string} question
    * @param {string[]} answers An array of strings, containing possible answers
    * @param {Number} correctAnswer The index in answers of the correct answer
  */
  constructor(question, answers, correctAnswer) {
    /** @private */
    this.question = question;
    /** @private */
    this.answers = answers;
    /** @private */
    this.correctAnswer = correctAnswer;
  }
}
