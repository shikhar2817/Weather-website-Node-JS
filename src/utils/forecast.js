const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/6cff08614ea11d65fe5755991d4b3e0a/' + latitude + ',' + longitude +'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. With the Maximum temperature of ' + body.daily.data[0].temperatureHigh + ' degree and with the Minimum temperature of ' + body.daily.data[0].temperatureLow + ' degree. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast