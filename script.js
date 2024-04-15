// Selecting DOM elements
const fromText = document.getElementById('from-text');
const toText = document.getElementById('to-text');
const fromCopy = document.getElementById('from-copy');
const fromSpeak = document.getElementById('from-speak');
const exchangeLanguage = document.getElementById('exchange-languages');
const fromSelect = document.getElementById('from-select');
const toSelect = document.getElementById('to-select');
const toSpeak = document.getElementById('to-speak');
const toCopy = document.getElementById('to-copy');
const translateLanguage = document.getElementById('translate');

// Populate language dropdowns with options
for (language in countries) {
  let selectedLanguage = '';
  let option = `<option ${
    language === 'en-GB' ? selectedLanguage : ''
  } value ="${language}"> ${countries[language]} </option>`;
  fromSelect.insertAdjacentHTML('beforeEnd', option);
  toSelect.insertAdjacentHTML('beforeEnd', option);
}

// Event listeners for various actions

// Event listener for exchanging input and output languages
exchangeLanguage.addEventListener('click', exchange);

// Event listeners for copying text
fromCopy.addEventListener('click', copyFromText);
toCopy.addEventListener('click', copyToText);

// Event listeners for speaking text
fromSpeak.addEventListener('click', speakFromText);
toSpeak.addEventListener('click', speakTranslatedText);

// Event listener for translating text
translateLanguage.addEventListener('click', translate);

// Event listener to clear translated text when input text changes
fromText.addEventListener('keyup', ClearTranslatedText);

// Function to exchange input and output languages
function exchange() {
  let temp = fromText.value;
  fromText.value = toText.value;
  toText.value = temp;

  // Exchange the languages
  temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
}

// Function to translate text using MyMemory Translation API
async function translate() {
  try {
    // Fetch translation from MyMemory Translation API

    let fetched = await fetch(
      `https://api.mymemory.translated.net/get?q=${fromText.value}!&langpair=${fromSelect.value}|${toSelect.value}`
    );
    // Convert response to JSON
    let res = await fetched.json();
    // Extract translated text from response
    let translation = res.responseData.translatedText;
    //check if selected input language and translated language is the same
    if (translation === 'PLEASE SELECT TWO DISTINCT LANGUAGES') {
      alert('PLEASE SELECT TWO DISTINCT LANGUAGES');
      return;
    }
    //display translated language to the screen
    toText.value = translation;
  } catch (error) {
    alert('Retry! Language not translated.');
  }
}

// Function to copy input text to clipboard
function copyFromText() {
  if (!fromText.value) {
    return;
  }
  navigator.clipboard.writeText(fromText.value);
}

// Function to copy translated text to clipboard
function copyToText() {
  if (!toText.value) {
    return;
  }
  navigator.clipboard.writeText(toText.value);
}

// Function to speak input text
function speakFromText() {
  if (!fromText.value) {
    return;
  }
  let speech = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(fromText.value);
  speech.speak(utterance);
}

// Function to speak translated text
function speakTranslatedText() {
  if (!toText.value) {
    return;
  }
  let speech = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(toText.value);
  speech.speak(utterance);
}

// Function to clear translated text when input text changes
function ClearTranslatedText() {
  if (!fromText.value) {
    toText.value = '';
  }
}
