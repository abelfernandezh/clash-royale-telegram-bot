const fetch = require("node-fetch");

const bot = require("./bot/bot");
const collectionDayFormat = require("./../utils/string_format")
  .collectionDayFormat;
const constants = require("./../constants/index");
const url = constants.BASE_URL;
const clan = constants.ENDPOINTS.clan;
const tag = constants.CLAN_TAG;
const options = constants.OPTIONS;

const getCollectionDay = chatId => {
  console.log(`${url}${clan}${tag}/war`);
  fetch(`${url}${clan}${tag}/war`, options)
    .then(res => res.json())
    .then(data =>
      data.participants.map(participant => ({
        name: participant.name,
        cards: participant.cardsEarned,
        played: participant.collectionDayBattlesPlayed
      }))
    )
    .then(array =>
      array.map(obj => [obj.name, `${obj.cards}`, `${obj.played}`])
    )
    .then(resp => collectionDayFormat(resp))
    .then(resp => {
      bot.sendMessage(chatId, resp.join("\n"));
    })
    .catch(err => {
      bot.sendMessage(chatId, err.message);
    });
};

module.exports = getCollectionDay;
