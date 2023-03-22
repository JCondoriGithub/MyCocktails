import { createJson, sendPost } from "./utils.js";

document.getElementById('btnSendData').addEventListener('click', function() {
  let dataSend = createJson();
  sendPost(dataSend);
});

