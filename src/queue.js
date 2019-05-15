'use strict';

/** Exception used when an item can't be found */
class ItemNotFoundException {
  /**
   * Creates a new exception with the specified message
   * @param  {String} message
   */
  constructor(message) {
    /** @private */
    this.message = message;
  }
}

/** De-facto queue implemenatation using an array */
export class Queue {
  /**
   * Creates a queue, uses an array as backend
   */
  constructor() {
    /** @private */
    this.items = [];
  }

  /**
   * Adds an element of any type to the queue
   * @param  {T} element
   * @template T
   */
  enqueue(element) {
    this.items.push(element);
  }

  /**
   * Removes an element from the queue
   * @return {T} first element in queue
   * @template T
   */
  dequeue() {
    if (this.isEmpty()) {
      throw new ItemNotFoundException('Can\'t dequeue from an empty queue!');
    }
    return this.items.shift();
  }

  /**
   * Check if the queue has items
   * @return {boolean} true if queue is empty
   * @return {boolean} false if queue has items
   */
  isEmpty() {
    return this.items.length == 0;
  }

  /**
   * Creates a string representation of a queue.
   * @return {string} space-separated string of element in queue
   */
  toString() {
    let str = '';
    for (const item of this.items) {
      str += item + ' ';
    }
    return str;
  }

  /**
   * Returns the item to be dequeued next without modifying the queue.
   * @return {T} Item to be dequeued next
   * @template T
   */
  peek() {
    if (this.isEmpty()) {
      throw new ItemNotFoundException('Can\'t peek at an empty queue!');
    }
    return this.items[this.items.length];
  }

  /**
   * Modern implementation of the Fisher-Yates shuffle algorithm via:
   * https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
   */
  shuffle() {
    for (let j = this.items.length, i = j - 1; i > 0; i--) {
      const r = Math.floor(Math.random() * (i + 1));
      const temp = this.items[i];
      this.items[i] = this.items[r];
      this.items[r] = temp;
    }
  }
}
