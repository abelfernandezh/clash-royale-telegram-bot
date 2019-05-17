const TOKEN = require("../config").TOKEN;
const AUTH = require("../config").AUTH;

const BASE_URL = "https://api.royaleapi.com/";

const CLAN_TAG = "PPUUUP2Y";

const OPTIONS = {
  method: "get",
  headers: {
    auth: AUTH
  }
};

const ENDPOINTS = {
  clan: "clan/",
  player: "player/"
};

module.exports.BASE_URL = BASE_URL;
module.exports.TOKEN = TOKEN;
module.exports.CLAN_TAG = CLAN_TAG;
module.exports.OPTIONS = OPTIONS;
module.exports.ENDPOINTS = ENDPOINTS;
