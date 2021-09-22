const axios = require("axios").default;
const instance = axios.create({
    baseURL: "https://api.waifu.pics",
    responseType: "json"
})
const validSFWEndpoint = ["waifu" , "neko" , "shinobu" , "megumin" , "bully" , "cuddle" , "cry" , "hug" , "awoo" , "kiss" , "lick" , "pat" , "smug" , "bonk" , "yeet" , "blush" , "smile" , "wave" , "highfive" , "handhold" , "nom" , "bite" , "glomp" , "slap" , "kill" , "kick" , "happy" , "wink"];
const validNSFWEndpoint = ["waifu" , "neko" , "trap" , "blowjob"];
const validTypeEndpoint = ["sfw" , "nsfw"];
module.exports = {
    /**
     * Return 1 Waifu Picture
     * @param {string} type 
     * @param {string} category 
     * @returns {Promise<{url: string}>}
     */
    async get(type, category) {
        if(!validTypeEndpoint.includes(type)) throw new TypeError(`Unknown Endpoint: ${type} is an unknown Type Endpoint, Valid Endpoints are ${validTypeEndpoint.join(", ")} `)
        if(!type || !category) throw new TypeError("Both Type and Category Must be Provided");
        if(type == "sfw" && !validSFWEndpoint.includes(category)) throw new TypeError(`Invalid Endpoint: ${category} is not a SFW Endpoint, Try using the NSFW endpoint instead.\nValid SFW Endpoints are ${validSFWEndpoint.join(", ")}`);
        if(type == "nsfw" && !validNSFWEndpoint.includes(category)) throw new TypeError(`Invalid Endpoint: ${category} is not a NSFW Endpoint, Try using the SFW endpoint instead.\nValid NSFW Endpoints are ${validNSFWEndpoint.join(", ")}`);
        return instance({
            method: "GET",
            url: `/${type}/${category}`
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)})
    },
    /**
     * Return 30 Waifu Pictures
     * @param {string} type 
     * @param {string} category 
     * @param {string[]} [exclude] - A list of URL's to not recieve from this endpoint.
     * @returns {Promise<{fields: string[]}>}
     */
    async getMany(type, category, exclude) {
        if(!validTypeEndpoint.includes(type)) throw new TypeError(`Unknown Endpoint: ${type} is an unknown Type Endpoint, Valid Endpoints are ${validTypeEndpoint.join(",")} `)
        if(!type || !category) throw new TypeError("Both Type and Category Must be Provided");
        if(type == "sfw" && !validSFWEndpoint.includes(category)) throw new TypeError(`Invalid Endpoint: ${category} is not a SFW Endpoint, Try using the NSFW endpoint instead.`);
        if(type == "nsfw" && !validNSFWEndpoint.includes(category)) throw new TypeError(`Invalid Endpoint: ${category} is not a NSFW Endpoint, Try using the SFW endpoint instead.`);
        return instance({
            method: "GET",
            url: `/many/${type}/${category}`,
            data: JSON.stringify({
                "exlcude": exclude || []
            }),
        }).then(({data}) => {
            return data;
        }).catch((err) => {throw new Error(err)})
    }
}