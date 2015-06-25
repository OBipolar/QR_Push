chrome.contextMenus.create({
    title:"Decode QR and push to phone",
    contexts:["image"],
    onclick:function(info) {
        handleImageURL(info.srcUrl);
    }
});

function handleImageURL(url) {
    console.log(url);
}

chrome.contextMenus.create({
    title:"Encode as QR and push to phone",
    contexts:["selection"],
    onclick:function(info) {
        encodeSelection(info);
    }
});

function encodeSelection(text) {
    console.log(text);
}
