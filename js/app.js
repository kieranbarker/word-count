;(function(d) {
  
  "use strict";

  /**
   * Variables
   */

  var content        = d.getElementById("content"),
      wordCount      = d.getElementById("word-count"),
      characterCount = d.getElementById("character-count");

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

  function updateCount(content, count, chars) {
    if (!content || !count) return;
    count.textContent = countWordsOrChars(content, chars);
  }

  /**
   * Init
   */

  // Update both counts when the page loads because Firefox caches the textarea's value
  if (countWordsOrChars(content)) {
    updateCount(content, wordCount);
    updateCount(content, characterCount, true);
  }

  content.addEventListener("input", function() {
    updateCount(this, wordCount);
    updateCount(this, characterCount, true);
  }, false);

})(document);
