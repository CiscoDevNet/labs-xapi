# Step 5

We now want our panel to intialize as soon as it is deployed to our device, without the need to restart our Node.js script.

To do so, we need to extend the code logic and listen to the `LayoutUpdated` event, then refresh the widgets when this event is fired.

Restart the [control.js](./control.js) code logic from folder `step5`.
_Make sure to update the connection settings to your device's ip address and credentials in [controls.js](./control.js)_

Deploy the `control.xml` panel once more, and check the widgets are now properly initialized.
