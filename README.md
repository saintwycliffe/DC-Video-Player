# Wycliffe Discovery Center Video Player
 A Video-player application for rotunda panel in Wycliffe's very own [Discovery Center](https://www.wycliffe.org/discovery-center).

# Technologies Used
- Node
- Express  
- EJS Layout
for Raspbian OS on Rasberry Pi with 24 inch 1080x1920 Elotouch-screen.

# Additional Node Modules
- [omx-manager](https://www.npmjs.com/package/omx-manager)

## To Run Locally
Make sure you have [Node.js](http://nodejs.org/).

Install proper fonts on local Raspberry Pi:
```
sudo cp GothamSSm-Book.ttf /usr/share/fonts/truetype/gotham/
```

Replace in /public folder relevant video and background. In /views/index.ejs change the title.

In root directory
```
npm install
npm run build
node index.js
```
