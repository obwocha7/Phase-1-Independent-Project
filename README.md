# Language Translator Web App

This is a simple web application that allows users to translate text between different languages using the MyMemory Translation API. It also provides features such as text-to-speech for both input and translated text, as well as the ability to copy text to the clipboard.

## Features

1. Translate text from one language to another.
2. Text-to-speech functionality for both input and translated text.
3. Copy translated text to the clipboard.
4. Swap between input and output languages with a single click.

## Usage

1. Open the index.html file in your web browser.
2. Enter the text you want to translate in the left textarea
3. Select the input language from the dropdown menu on the left.
4. Select the desired output language from the dropdown menu on the right
5. Click the "Translate" button to translate the text.
6. The translated text will appear in the right textarea.
7. Use the speech icons to listen to the input and translated text, respectively.
8. Use the copy icons to copy the input and translated text to the clipboard, respectively.
9. Use the exchange icon to swap between input and output languages.

## Languages Supported

The application supports translation between various languages, including but not limited to English, French, Spanish, German, Italian, Swahili and more. The list of supported languages is dynamically populated from the countries.js file.

## How It Works

The application fetches translations from the MyMemory Translation API using the input text and selected languages. It then displays the translated text in the output textarea. The speech synthesis API is used to provide text-to-speech functionality, and the Clipboard API is used for copying text to the clipboard.

## Dependencies

- Bootstrap 5.3.2 (CSS and JS)
- Bootstrap Icons 1.11.1
- MyMemory Translation API (https://mymemory.translated.net/doc/spec.php)

## Credits

This Language Translation web application was created by Derrick Omori as an end-of-phase-1 project for Moringa School. It utilizes the Bootstrap framework for styling and the MyMemory Translation API for translation services.

## Licence

This project is licensed under the MIT License.
