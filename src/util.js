const {
  API_URL,
  validTypeEndpoint,
  validSFWEndpoint,
  validNSFWEndpoint,
} = require("./constants.js");

function validateRequest(type, category) {
  if (!validTypeEndpoint.includes(type))
    throw new TypeError(
      `Unknown Endpoint: ${type} is an unknown Type Endpoint, Valid Endpoints are ${validTypeEndpoint.join(
        ", "
      )} `
    );
  if (!type || !category)
    throw new TypeError("Both Type and Category Must be Provided");
  if (type == "sfw" && !validSFWEndpoint.includes(category))
    throw new TypeError(
      `Invalid Endpoint: ${category} is not a SFW Endpoint, Try using the NSFW endpoint instead.\nValid SFW Endpoints are ${validSFWEndpoint.join(
        ", "
      )}`
    );
  if (type == "nsfw" && !validNSFWEndpoint.includes(category))
    throw new TypeError(
      `Invalid Endpoint: ${category} is not a NSFW Endpoint, Try using the SFW endpoint instead.\nValid NSFW Endpoints are ${validNSFWEndpoint.join(
        ", "
      )}`
    );

  return true;
}

function request(data) {
  let queryString = "";
  if (data.query) {
    queryString = "?" + objectToQuery(data.query);
  }
  const { url, ...req } = data;
  return fetch(`${API_URL}${url}${queryString}`, req);
}

module.exports = {
  validateRequest,
  request,
};
