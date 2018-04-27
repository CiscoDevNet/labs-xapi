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
    console.error(`connexion failed: ${err}, exiting`);
    process.exit(1);
})

xapi.on('ready', () => {
    console.log("connexion successful")

    // Display current Ultrasound volume
    xapi.config.get('Audio Ultrasound MaxVolume')
        .then((volume) => {
            console.log(`current volume is: ${volume}`)

            // Ending script
            xapi.close()
        })
})