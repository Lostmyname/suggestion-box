# Suggestion Box

This is a Slack integration to allow team members to anonymously post to a given Slack channel.

## Getting Started

- Create a Slack [bot user](https://my.slack.com/services/new/bot) that you want to receive messages and take note of its API token
- Create a Slack [incoming webhook](https://my.slack.com/services/new/incoming-webhook/) that will post to the channel you want your anonymous messages to appear in and take not of its API
- Deploy this code to Heroku (or elsewhere) and set the following environment variables:
  - `SLACK_TOKEN` should be the API token of your bot user
  - `SLACK_INCOMING_WEBHOOK_URL` should be the URL of your incoming webhook
- ???
- Profit!
