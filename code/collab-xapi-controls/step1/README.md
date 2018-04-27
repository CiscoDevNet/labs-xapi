# Step 1

Let's start from the sample code proposed in the learning lab: [Introduction to xAPI and Cisco CE Software Customization - Step 7](https://learninglabs.cisco.com/lab/collab-xapi-intro/step/7)

Update the connection settings to your device's ip address and credentials in [controls.js](./control.js)

_Note that the script has been adapted to read the current 'Ultrasound' configuration setting._

Type `node control.js` in the `step1` folder.
You should get an input such as:

```shell
$ cd step1
$ node control.js
connexion successful
current volume is: 60
```