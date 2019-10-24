;(function(d) {
  
  "use strict";

  /**
   * Variables
   */

  var content = d.getElementById("content"),
      count   = d.getElementById("count");

  /**
   * Functions
   */

  function countWordsOrChars(element, countChars) {
    if (!element) return;

    var count = (countChars) ? element.value.length : element.value.trim();
    if (!count) return 0;

    if (!countChars) {
      count = count.split(/\s+/).length;
    }

    return count;
  }

  function updateCount(content, count) {
    if (!content || !count) return;
    count.textContent = "You've written " + countWordsOrChars(content) + " words ";
    count.textContent += "and " + countWordsOrChars(content, true) + " characters."
  }

  /**
   * Init
   */

  // Reset the text area when the page loads because Firefox caches its value
  content.value = "";

  content.addEventListener("input", function() {
    updateCount(this, count);
  }, false);

})(document);