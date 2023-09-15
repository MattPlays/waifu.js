const { request, validateRequest } = require("./util.js");

/**
 * Return 1 Waifu Picture
 * @param {string} type
 * @param {string} category
 * @returns {Promise<{url: string}>}
 */
async function get(type, category) {
  validateRequest(type, category);

  let response = await request({
    method: "GET",
    url: `/${type}/${category}`,
  });

  let data = await response.json();

  return data;
}

/**
 * Return 30 Waifu Pictures
 * @param {string} type
 * @param {string} category
 * @param {string[]} [exclude] - A list of URL's to not recieve from this endpoint.
 * @returns {Promise<{fields: string[]}>}
 */
async function getMany(type, category, exclude) {
  validateRequest(type, category);

  let response = await request({
    method: "POST",
    url: `/many/${type}/${category}`,
    body: JSON.stringify({
      exclude: exclude || [],
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await response.json();

  return data;
}

module.exports = {
  get,
  getMany,
};
