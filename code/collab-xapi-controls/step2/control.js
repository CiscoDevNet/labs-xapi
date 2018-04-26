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

xapi.on('ready', () => {
    console.log("connexion successful")

    // Initialize Widgets with current volume
    xapi.config.get('Audio Ultrasound MaxVolume')
        .then((volume) => {
            console.log(`current volume is: ${volume}`)

            xapi.command('UserInterface Extensions Widget SetValue', {
                WidgetId: 'volume_text',
                Value: volume
            })

            const level = Math.round(parseInt(volume) * 255 / MAX)
            xapi.command('UserInterface Extensions Widget SetValue', {
                WidgetId: 'volume_slider',
                Value: level
            })
        })
        .catch((err) => {
            console.log(`could not fetch volume: ${err.message}`)
        })
})



