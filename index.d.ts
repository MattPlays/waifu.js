type validSFWEndpoint = "waifu" | "neko" | "shinobu" | "megumin" | "bully" | "cuddle" | "cry" | "hug" | "awoo" | "kiss" | "lick" | "pat" | "smug" | "bonk" | "yeet" | "blush" | "smile" | "wave" | "highfive" | "handhold" | "nom" | "bite" | "glomp" | "slap" | "kill" | "kick" | "happy" | "wink";
type validNSFWEndpoint = "waifu" | "neko" | "trap" | "blowjob";
type validCategoryEndpoint = validSFWEndpoint | validNSFWEndpoint;
type validTypeEndpoint = "sfw" | "nsfw";
export function get(type: validTypeEndpoint, category: validCategoryEndpoint): Promise<{url: string}>;
export function getMany(type: validTypeEndpoint, category: validCategoryEndpoint, exclude?: string[]): Promise<{files: string[]}>; 