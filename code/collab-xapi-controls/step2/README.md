# Step 2

We'll now initialize a custom in-room control.

To start with, load and deploy the `control.xml` panel on your device.

The panel contains 2 widgets: a Text and a Slider, as documented in the [Customization guide](https://www.cisco.com/c/dam/en/us/td/docs/telepresence/endpoint/ce92/sx-mx-dx-room-kit-customization-guide-ce92.pdf)

Then, restart the [control.js](./control.js) code logic from folder `step2`.

You should see the panel updated to the current volume's value, as displayed in the console.

```shell
$ node control.js
connexion successful
current volume is: 60
```