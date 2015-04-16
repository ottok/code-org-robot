# A robot that executes the Code.org semi-JavaScript code #

Robot hardware: RTK-000-003 Budget Robotics Kit

Software:

## Creating the basis ##

First install 0.10 on newer version of Node.js and the Cylon modules:

```
# Raspbian-compatible version of Node (source http://weworkweplay.com/play/raspberry-pi-nodejs/)
wget http://node-arm.herokuapp.com/node_latest_armhf.deb
sudo dpkg -i node_latest_armhf.deb

# Install Cylon.js with Raspberry Pi compatibility
npm install cylon cylon-gpio cylon-raspi
```
