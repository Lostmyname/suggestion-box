const express = require('express')
const request = require('request')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('short'))
app.use(bodyParser.json())

app.post('/', (req, res) => {
  if (req.body.challenge && req.body.token === process.env.SLACK_TOKEN) {
    return res.send(req.body.challenge)
  }

  if (typeof req.body.event === 'undefined' || req.body.event.type !== 'message') {
    return res.sendStatus(400)
  }

  const msg = req.body.event.text

  request({
    method: 'POST',
    uri: process.env.SLACK_INCOMING_WEBHOOK_URL,
    body: JSON.stringify({ text: msg })
  }, (err, slackResponse, body) => {
    if (err) {
      return res.sendStatus(500)
    }

    res.sendStatus(slackResponse.statusCode)
  })
})

app.listen(process.env.PORT || 3000)
