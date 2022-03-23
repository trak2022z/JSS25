'use strict';
(function() {

  window.addEventListener('load', init);

  /**
   * initiates page upon load
   */
  function init() {

    timeoutOne();
  //  timeoutTwo();

    
  //interval();
    
    
  }







// ********************************** Timeout Solutions ********************************** //
/**
 * This solution creates all of the timeouts at once, and uses console.log as
 * a function itself to make the code much simpler. The third argument is
 * passed along to console.log.
 * A loop is used to reduce redundancy with setting up the numbers
 */

const START = 3;
function timeoutOne() {
  let delay = 1000;
  for (let i = START; i > 0; i--) {
    setTimeout(console.log, delay, i);
    delay += 1000;
  }
  setTimeout(console.log, delay, "Go!");
}

/**
 * This solution uses timeouts to recursively call itself.
 * the great thing about this solution is that it works for any number
 * and there is only ever one timeout running at a time.
 */
function timeoutTwo() {
  setTimeout(printStage, 1000, START);
}

/**
 * prints out the current num to the console
 * @param {String} currentNum - the current number
 */
function printStage(currentNum) {
  if (currentNum <= 0) {
    console.log("Go!");
  } else {
    console.log(currentNum);
    setTimeout(printStage, 1000, currentNum - 1);
  }
}

// ********************************** Interval Solutions ********************************** //
/**
 * This solution clears the timer so that it stops running at the end.
 */
function interval() {
  let currentNum = 3;
  let timerId = setInterval(function() {
    if (currentNum <= 0) {
      console.log("Go!");
      clearInterval(timerId);
    } else {
      console.log(currentNum);
      currentNum--;
    }
  }, 1000);
}






})();