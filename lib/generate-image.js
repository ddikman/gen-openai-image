const fs = require('fs/promises')

const API_KEY = process.env.OPENAI_API_KEY
if (!API_KEY) {
  console.error('Missing OPENAI_API_KEY environment variable')
  process.exit(1)
}

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: API_KEY,
});
const openai = new OpenAIApi(configuration);

async function generateImage(prompt, size, variations, outputName) {
  const images = await openai.createImage({
    prompt,
    'n': variations,
    size: `${size}x${size}`,
    response_format: 'b64_json'
  }).then(res => res.data.data)

  for (let i = 0; i < images.length; i++) {
    const image = Buffer.from(images[i].b64_json, 'base64')
    const filename = variations > 1 ? `${outputName}-${i}.png` : `${outputName}.png`
    await fs.writeFile(filename, image)
  }
}

module.exports = generateImage