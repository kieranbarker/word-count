(function(d) {
  
  "use strict";

  //
  // Variables
  //

  var content = d.getElementById("content");
  var wordCount = d.getElementById("word-count");

  //
  // Functions
  //

  var countWords = function(element) {
    if (element.nodeName.toLowerCase() !== "textarea" && element.nodeName.toLowerCase() !== "input" && element.type.toLowerCase() !== "text") return;

    var wordCount = element.value.trim();
    if (!wordCount) return 0;

    wordCount = wordCount.split(/\s+/).length;
    return wordCount;
  };

  var updateWordCount = function(content, wordCount) {
    if (!content || !wordCount) return;
    wordCount.textContent = countWords(content);
  };

  //
  // Init
  //

  content.addEventListener("input", function() {
    updateWordCount(this, wordCount);
  }, false);

})(document);