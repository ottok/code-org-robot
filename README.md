# A robot that executes the Code.org semi-JavaScript code #

## Hardware setup ##

 * Buy the Ryantek RTK-000-003 Budget Robotics Kit and assebmle it
 * For mobility, also get a USB battery pack and a USB Wifi module

Put all parts together and connect the robot via HDMI to a monitor, via USB to a keyboard and via ethernet cable to internet. Finally start the system by connecting power via USB.

## Software setup ##

Install the latest Rasbian as the operating system. Activate SSH and log in remotely so you can copy-paste the commands below from the comfort of you laptop or work station.

First install 0.10 on newer version of Raspbian-compatible of Node.js (source http://weworkweplay.com/play/raspberry-pi-nodejs/)

```
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb
```

Then install Phantom.js. It is not available as a ready-made binary for Raspbian, so we need to compile it manually:

```
sudo apt-get install build-essential g++ flex bison gperf ruby perl \
  libsqlite3-dev libfontconfig1-dev libicu-dev libfreetype6 libssl-dev \
  libpng-dev libjpeg-dev
wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.0.0-source.zip
unzip phantomjs-2.0.0-source.zip
cd phantomjs-2.0.0
./build.sh
```

When these dependencies are in place, finally install this Node.js app and run it:

```
git clone https://github.com/ottok/code-org-robot.git
cd code-org-robot
npm install
nodemon robot.js
```

## Wifi access point setup ##

Follow instructions at http://seravo.fi/2014/create-wireless-access-point-hostapd

Make the SSID 'Robot' so people will recognize which network is the Robot's.

## Running the robot ##

Once the robot is running, people can join the Robot WLAN. Once connected, they can open the in their browser the robot's site and enter their Code.org saved code identifier.


