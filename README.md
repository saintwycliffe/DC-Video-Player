# Wycliffe Discovery Center Video Player
 A video player application for rotunda panel in Wycliffe's very own [Discovery Center](https://www.wycliffe.org/discovery-center) running on a raspberry pi

## Technologies Used
- [Node](https://nodejs.org)
- [Express](https://expressjs.com/)
- [EJS Layout](https://ejs.co/)
- [Raspbian OS](https://www.raspberrypi.org/downloads/raspbian/) on Rasberry Pi 3b with 16Gb on a 24" 1080x1920 Elotouch-screen
  - pi configuration files @ https://github.com/Wycliffe-USA/pi-kiosk-video
- [OMXPlayer](https://www.raspberrypi.org/documentation/raspbian/applications/omxplayer.md)

## Additional Node Modules
- [omx-manager](https://www.npmjs.com/package/omx-manager) for managing video on the raspberry pi
- [node-config](https://github.com/lorenwest/node-config) for configuring different videos

## Prerequisites
- Make sure you have [Node.js](https://nodejs.org/).
- Install proper fonts on local Raspberry Pi:
```
sudo cp GothamSSm-Book.ttf /usr/share/fonts/truetype/gotham/
```
- Run `./install_git_lfs.sh` in the root directory to install Git LFS (for getting video files)
- Get omxplayer `sudo apt-get install omxplayer`

## Files
Replace in `/public/videos` folder relevant video and `/public/img` for backgrounds and add a new JSON config file in `config`.

## Execution (in root directory)
```
npm install
npm run build
npm run {configuration_name}
```
## Rebuilding
```
npm run reinstall
```
## Clean
```
npm run clean
```
