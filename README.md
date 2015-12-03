# tmp-chrome-extension-bug

Temporary repo to demonstrate problem with Chrome extension.

See also http://stackoverflow.com/questions/34045969/chrome-extension-sometimes-undefined-in-background-js

To duplicate the problem:
- open chrome://extensions; load this extension (developer mode; load unpacked extension)
- Inspect the background page view
- Add watch of chrome.runtime.id
- Repeatedly press reload of this extension in chrome://extensions

If you do this a few dozen times, you should occassionally see chrome.runtime.id is undefined.
On rarer occassions, you'll see an error in the console window "Cannot read propery 'addListener' of undefined", from the line in background.js


This sample app is built from https://developer.chrome.com/extensions/getstarted, with very few changes.
You can see all the changes in commit diffs of this repo.
