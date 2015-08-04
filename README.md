# QR_Drop (Chrome Extension)
Right Click on the QR code and directly push the decoded information to your phone
* Notes
  * I used PushBullet.js for the communication between phone and desktop, so the most hardcore part has been solved, which at the same time restrictS flexibility on this thing. Thus I decided to no longer work on it.
  * Feel free to fork it and play with it.
* Usage
  * Install [PushBullet](https://www.pushbullet.com/) extension
  * Replace the PushBullet api key in background.js
  * Right click on any QR code image you found interesting, there will be push to phone option in the context menu.
