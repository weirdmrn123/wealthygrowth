function copyTextToClipboard(bitcoin) {
  /* Get the text field */
  var copyText = document.querySelector("." + bitcoin);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied Address: " + copyText.value);
}


function copyTextToClipboard(usdt) {
  /* Get the text field */
  var copyText = document.querySelector("." + usdt);

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  alert("Copied Address: " + copyText.value);
}