const validSFWEndpoint = [
  "waifu",
  "neko",
  "shinobu",
  "megumin",
  "bully",
  "cuddle",
  "cry",
  "hug",
  "awoo",
  "kiss",
  "lick",
  "pat",
  "smug",
  "bonk",
  "yeet",
  "blush",
  "smile",
  "wave",
  "highfive",
  "handhold",
  "nom",
  "bite",
  "glomp",
  "slap",
  "kill",
  "kick",
  "happy",
  "wink",
  "poke",
  "dance",
  "cringe",
];
const validNSFWEndpoint = ["waifu", "neko", "trap", "blowjob"];
const validTypeEndpoint = ["sfw", "nsfw"];
const API_URL = "https://api.waifu.pics";

module.exports = {
  validTypeEndpoint,
  validSFWEndpoint,
  validNSFWEndpoint,
  API_URL,
};
