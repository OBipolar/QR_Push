// init relevant help methods
var qr = new QCodeDecoder();
PushBullet.APIKey = "[YOUR OWN API KEY]"
var deviceInfo = PushBullet.devices();
var deviceId = deviceInfo.devices[0].iden;

// decode process
chrome.contextMenus.create({
  title:"Decode QR and push to phone",
  contexts:["image"],
  onclick:function(info) {
    handleImageURL(info.srcUrl);
  }
});

function handleImageURL(imgUrl) {
  console.log(imgUrl);
  qr.decodeFromImage(imgUrl, function(err, result) {
    if (err) throw err;
    console.log(result);
    PushBullet.push("link",null,"", {title: imgUrl, url: result, body: ""})
  });
}

// encode process
// chrome.contextMenus.create({
//   title:"Encode as QR and push to phone",
//   contexts:["selection"],
//   onclick:function(info) {
//     encodeSelection(info);
//   }
// });

// function encodeSelection(text) {
//   console.log(text);
// }
