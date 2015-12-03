console.log("In background, chrome.runtime.id = " + chrome.runtime.id);



chrome.runtime.onMessage.addListener(
  function(request, _sender, _sendResponse) {
    console.log("In handler");
  });
