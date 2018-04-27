# Step 2

We'll now initialize a custom in-room control.

To start with, load and deploy the `control.xml` panel on your device.

- go to your device's web interface 
- choose the "Integration -> In-Room Controls" menu entry
- click "Launch Editor" 
- in the Editor Menu (top right), choose "Import from file", and pick the `control.xml` proposed in the step2 folder.
- then click "Export configuration to video system"

The panel contains two widgets: a Text and a Slider. These components are documented in the [Customization guide](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce92/sx-mx-dx-room-kit-customization-guide-ce92.pdf)

Restart the [control.js](./control.js) code logic from folder `step2`.
_Make sure to update the connection settings to your device's ip address and credentials in [controls.js](./control.js)_


You should see the panel updated to the current volume's value, as displayed in the console.

```shell
$ cd step2
$ node control.js
connexion successful
current volume is: 60
```