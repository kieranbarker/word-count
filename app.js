;(function () {

  // Opt into ES5 strict mode
  "use strict";

  //
  // Variables
  //

  // Get the #text element
  var text = document.querySelector("#text");

  // Get the #count element
  var count = document.querySelector("#count");


  //
  // Functions
  //

  /**
   * Get the number of words in a text area
   * @param   {Object} textArea The text area
   * @returns {Number}          The word count
   */
  function getWordCount (textArea) {

    // Trim whitespace from the value
    var value = textArea.value.trim();
    
    // If it's an empty string, return zero
    if (!value) return 0;

    // Otherwise, return the word count
    return value.split(/\s+/).length;

  }

  /**
   * Get the number of characters in a text area
   * @param   {Object} textArea The text area
   * @returns {Number}          The character count
   */
  function getCharacterCount (textArea) {
    return textArea.value.length;
  }

  /**
   * Update the word and character counts
   */
  function updateCounts () {

    count.textContent = (
      "You've written " + getWordCount(this) + " words " +
      "and " + getCharacterCount(this) + " characters."
    );

  }


  //
  // Inits & Event Listeners
  //

  // Update both counts when the value of #text changes
  text.addEventListener("input", updateCounts);

})();