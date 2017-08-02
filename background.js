chrome.browserAction.onClicked.addListener(function(tab) {
  var tabUrl  = tab.url;
  var originalUrl = tabUrl.replace(/google-chrome.*/," ");
  console.log(originalUrl);
});
