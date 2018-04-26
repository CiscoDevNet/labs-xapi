//
// Copyright (c) 2018 Cisco Systems
// Licensed under the MIT License
//

const jsxapi = require('jsxapi')
const xapi = jsxapi.connect("ssh://192.168.1.32", {
    username: 'integrator',
    password: 'integrator'
})
xapi.on('error', (err) => {
    console.error(`connexion failed: ${err}, exiting`)
    process.exit(1)
})

// Max Ultrasound Volume
const MAX = 90 // for a DX80
//const MAX = 70 // for a RoomKit

xapi.on('ready', () => {
    console.log("connexion successful")

    // Initialize Widgets with current volume
    xapi.config.get('Audio Ultrasound MaxVolume').then(updateUI)

    // Update configuration from UI actions
    xapi.event.on('UserInterface Extensions Widget Action', (event) => {
        if (event.WidgetId !== 'volume_slider') return
        if (event.Type !== 'changed') return

        // Update Ultrasound configuration
        const volume = Math.round(parseInt(event.Value) * MAX / 255);
        console.log(`updating Ultrasound configuration to: ${volume}`)
        xapi.config.set('Audio Ultrasound MaxVolume', volume)
    })

    // Update UI from configuration changes
    xapi.config.on('Audio Ultrasound MaxVolume', updateUI)
})

function updateUI(volume) {
    console.log(`updating UI to new Ultrasound configuration: ${volume}`)

    // Update text
    xapi.command('UserInterface Extensions Widget SetValue', {
        WidgetId: 'volume_text',
        Value: volume
    })

    // Update slider 
    const level = Math.round(parseInt(volume) * 255 / MAX)
    xapi.command('UserInterface Extensions Widget SetValue', {
        WidgetId: 'volume_slider',
        Value: level
    })
}