const { get, getMany } = require("../src/index.js");

describe("get 1 sfw endpoint", () => {
  test("get 1 sfw waifu url", async () => {
    const data = await get("sfw", "waifu");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw neko url", async () => {
    const data = await get("sfw", "neko");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw shinobu url", async () => {
    const data = await get("sfw", "shinobu");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw shinobu url", async () => {
    const data = await get("sfw", "shinobu");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw megumin url", async () => {
    const data = await get("sfw", "megumin");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw bully url", async () => {
    const data = await get("sfw", "bully");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw cuddle url", async () => {
    const data = await get("sfw", "cuddle");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw cry url", async () => {
    const data = await get("sfw", "cry");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw hug url", async () => {
    const data = await get("sfw", "hug");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw awoo url", async () => {
    const data = await get("sfw", "awoo");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw kiss url", async () => {
    const data = await get("sfw", "kiss");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw lick url", async () => {
    const data = await get("sfw", "lick");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw pat url", async () => {
    const data = await get("sfw", "pat");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw smug url", async () => {
    const data = await get("sfw", "smug");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw bonk url", async () => {
    const data = await get("sfw", "bonk");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw yeet url", async () => {
    const data = await get("sfw", "yeet");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw blush url", async () => {
    const data = await get("sfw", "blush");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw smile url", async () => {
    const data = await get("sfw", "smile");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw wave url", async () => {
    const data = await get("sfw", "wave");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw highfive url", async () => {
    const data = await get("sfw", "highfive");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw handhold url", async () => {
    const data = await get("sfw", "handhold");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw nom url", async () => {
    const data = await get("sfw", "nom");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw bite url", async () => {
    const data = await get("sfw", "bite");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw glomp url", async () => {
    const data = await get("sfw", "glomp");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw slap url", async () => {
    const data = await get("sfw", "slap");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw kill url", async () => {
    const data = await get("sfw", "kill");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw kick url", async () => {
    const data = await get("sfw", "kick");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw happy url", async () => {
    const data = await get("sfw", "happy");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw wink url", async () => {
    const data = await get("sfw", "wink");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw poke url", async () => {
    const data = await get("sfw", "poke");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw dance url", async () => {
    const data = await get("sfw", "dance");
    expect(data).toHaveProperty("url");
  });

  test("get 1 sfw cringe url", async () => {
    const data = await get("sfw", "cringe");
    expect(data).toHaveProperty("url");
  });
});

describe("get 30 sfw endpoint", () => {
  test("get 30 sfw waifu url", async () => {
    const data = await getMany("sfw", "waifu");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw neko url", async () => {
    const data = await getMany("sfw", "neko");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw shinobu url", async () => {
    const data = await getMany("sfw", "shinobu");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw shinobu url", async () => {
    const data = await getMany("sfw", "shinobu");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw megumin url", async () => {
    const data = await getMany("sfw", "megumin");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw bully url", async () => {
    const data = await getMany("sfw", "bully");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw cuddle url", async () => {
    const data = await getMany("sfw", "cuddle");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw cry url", async () => {
    const data = await getMany("sfw", "cry");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw hug url", async () => {
    const data = await getMany("sfw", "hug");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw awoo url", async () => {
    const data = await getMany("sfw", "awoo");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw kiss url", async () => {
    const data = await getMany("sfw", "kiss");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw lick url", async () => {
    const data = await getMany("sfw", "lick");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw pat url", async () => {
    const data = await getMany("sfw", "pat");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw smug url", async () => {
    const data = await getMany("sfw", "smug");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw bonk url", async () => {
    const data = await getMany("sfw", "bonk");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw yeet url", async () => {
    const data = await getMany("sfw", "yeet");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw blush url", async () => {
    const data = await getMany("sfw", "blush");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw smile url", async () => {
    const data = await getMany("sfw", "smile");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw wave url", async () => {
    const data = await getMany("sfw", "wave");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw highfive url", async () => {
    const data = await getMany("sfw", "highfive");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw handhold url", async () => {
    const data = await getMany("sfw", "handhold");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw nom url", async () => {
    const data = await getMany("sfw", "nom");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw bite url", async () => {
    const data = await getMany("sfw", "bite");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw glomp url", async () => {
    const data = await getMany("sfw", "glomp");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw slap url", async () => {
    const data = await getMany("sfw", "slap");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw kill url", async () => {
    const data = await getMany("sfw", "kill");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw kick url", async () => {
    const data = await getMany("sfw", "kick");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw happy url", async () => {
    const data = await getMany("sfw", "happy");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw wink url", async () => {
    const data = await getMany("sfw", "wink");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw poke url", async () => {
    const data = await getMany("sfw", "poke");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw dance url", async () => {
    const data = await getMany("sfw", "dance");
    expect(data).toHaveProperty("files");
  });

  test("get 30 sfw cringe url", async () => {
    const data = await getMany("sfw", "cringe");
    expect(data).toHaveProperty("files");
  });
});

describe("get 1 nsfw endpoint", () => {
  test("get 1 nsfw waifu url", async () => {
    const data = await get("nsfw", "waifu");
    expect(data).toHaveProperty("url");
  });

  test("get 1 nsfw neko url", async () => {
    const data = await get("nsfw", "neko");
    expect(data).toHaveProperty("url");
  });

  test("get 1 nsfw trap url", async () => {
    const data = await get("nsfw", "trap");
    expect(data).toHaveProperty("url");
  });

  test("get 1 nsfw blowjob url", async () => {
    const data = await get("nsfw", "blowjob");
    expect(data).toHaveProperty("url");
  });
});

describe("get 30 nsfw endpoint", () => {
  test("get 30 nsfw waifu url", async () => {
    const data = await getMany("nsfw", "waifu");
    expect(data).toHaveProperty("files");
  });

  test("get 30 nsfw neko url", async () => {
    const data = await getMany("nsfw", "neko");
    expect(data).toHaveProperty("files");
  });

  test("get 30 nsfw trap url", async () => {
    const data = await getMany("nsfw", "trap");
    expect(data).toHaveProperty("files");
  });

  test("get 30 nsfw blowjob url", async () => {
    const data = await getMany("nsfw", "blowjob");
    expect(data).toHaveProperty("files");
  });
});
