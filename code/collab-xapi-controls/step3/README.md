# Step 3

Let's now update the component as the slider is moved.

Restart the [control.js](./control.js) code logic from folder `step3`.

Move the slider, and check the console for logs showing the new volume request.

Open your device's admin Web UI to check the Ultrasoundvalue is now set the last value displayed in the console,
or simply restart the Node.js code logic for the panel to initialize with the new value.

```shell
$ node control.js
connexion successful
current volume is: 60
updating Ultrasound configuration to: 56
updating Ultrasound configuration to: 41
```