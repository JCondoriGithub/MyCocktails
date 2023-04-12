import { createJson } from "./generateJson.js";
import { sendPost } from "./requests.js";

document.getElementById('btnSendData').addEventListener('click', function() {
  let dataSend = createJson();
  sendPost(dataSend);
});

