//
// Variables
//

// Get the #text element
const textArea = document.querySelector('#text');

// Get the #count element
const count = document.querySelector('#count');


//
// Functions
//

/**
 * Get the number of words inside a form field
 * @param {HTMLInputElement|HTMLTextAreaElement} field The form field
 * @returns {Number} The word count
 */
function getWordCount (field) {
  // Trim whitespace from the value
  const value = field.value.trim();
  
  // If it's an empty string, return zero
  if (!value) return 0;

  // Otherwise, return the word count
  return value.split(/\s+/).length;
}

/**
 * Get the number of characters inside a form field
 * @param {HTMLInputElement|HTMLTextAreaElement} field The form field
 * @returns {Number} The character count
 */
function getCharacterCount (field) {
  return field.value.length;
}

/**
 * Handle input events
 */
function handleInput () {
  count.textContent = `
    You've written ${getWordCount(this)} words
    and ${getCharacterCount(this)} characters.
  `;
}


//
// Inits & Event Listeners
//

// Handle input events
textArea.addEventListener('input', handleInput);