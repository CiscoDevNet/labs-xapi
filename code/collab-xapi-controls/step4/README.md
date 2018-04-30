# Step 4

We will now update our controller so that it receives events when our device's Ultrasound settings are modified.
That way, the controller will make sure the widgets stay in sync with the latest settings for our device.

Restart the [control.js](./control.js) code logic from folder `step4`.
_Make sure to update the connection settings to your device's ip address and credentials in [controls.js](./control.js)_

Move the slider, and check the value of the text updates simultaneously

Then open your device's admin Web UI and update the Ultrasound value: the widgets should update instantly.
Check the logs for Device's Configuration to Widgets UI update notifications.

```shell
$ cd step3
$ node control.js
connexion successful
updating UI to new Ultrasound configuration: 38
updating Ultrasound configuration to: 51
updating UI to new Ultrasound configuration: 51
updating Ultrasound configuration to: 53
updating UI to new Ultrasound configuration: 53
```
