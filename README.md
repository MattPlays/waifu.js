# @mattplays/waifu.js
> @mattplays/waifu.js is an **unoffical** wrapper that utilizes the [waifu.pics](https://waifu.pics/) API to return high quality sfw and nsfw pictures of waifu's

# Installation
```bash
npm i @mattplays/waifu.js
```

# Usage
Valid Type Endpoints are 
> **sfw**, **nsfw**

Valid SFW Endpoints are:
> **waifu, neko, shinobu, megumin, bully, cuddle, cry, hug, awoo, kiss, lick, pat, smug, bonk, yeet, blush, smile, wave, highfive, handhold, nom, bite, glomp, slap, kill, kick, happy, wink**

Valid NSFW Endpoints are:
> **waifu, neko, trap, blowjob**

```javascript
const {get, getMany} = require("@mattplays/waifu.js");
get("sfw", "waifu").then((data) => {
    console.log(url);
    /*
        {
            "url": "https://i.waifu.pics/Tj6Wzwo.png"
        }
    */
});
getMany("sfw", "pat").then((data) => {
    console.log(data);
    /*
    {
        "files": 
            [
                "https://i.waifu.pics/qUY7BBo.jpg"
            ]
    }
    */
})
```

# License
@mattplays/waifu.js is Licensed under the [MIT License](https://github.com/MattPlays/waifu.js/blob/main/LICENSE).

Any and **all** data returned from this package is hereby owned by [waifu.pics](https://wafiu.pics, "Waifu Pics Website") and leaves me under **no** obligation to take responsibility for the images returned.

Any and **all** complains/issues or requests should be made **directly** to [wafiu.pics](https://github.com/Waifu-pics/waifu-api, "Waifu Pics Github").