const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/286aea35f69381b3a160b692ebcfe183/' + latitude + ',' + longitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weather Services!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary +  ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability * 100 + '% chance of rain.')
            // callback(undefined, {
            //     temperature: response.body.currently.temperature,
            //     rain: response.body.currently.precipProbability * 100
            // })
        }
    })
}

module.exports = forecast