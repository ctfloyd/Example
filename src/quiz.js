'use strict';

import {Queue} from './queue.js';
import {QuizQuestion} from './quiz-question.js';

/** Thrown when wrong type passed into quiz */
class IllegalTypeException {
  /**
   * Creates a new exception with a message
   * @param {string} message
   */
  constructor(message) {
    this.message = message;
  }
}

/** The main driver for the quiz */
class Quiz {
  /**
   * no-arg constructor that creates a queue.
   */
  constructor() {
    /** @private */
    this.questions = new Queue();
  }

  /**
   * Adds a question to the quiz queue
   * @param {QuizQuestion} question
   */
  addQuestion(question) {
    if (question instanceof QuizQuestion) {
      this.questions.enqueue(question);
    } else {
      throw new IllegalTypeException('Quiz only accepts type: QuizQuestion');
    }
  }

  /**
   * Shuffles the questions via {@see Queue} shuffle method.
   */
  shuffle() {
    this.questions.shuffle();
  }
}

