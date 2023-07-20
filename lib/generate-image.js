const fs = require('fs/promises')
const { Configuration, OpenAIApi } = require("openai");

async function generateImage(prompt, size, variations, outputName, apiKey) {
  if (!apiKey) {
    console.error('Missing OPENAI_API_KEY environment variable or --key argument')
    process.exit(1)
  }

  const configuration = new Configuration({ apiKey });
  const openai = new OpenAIApi(configuration);

  console.log(`Requesting ${variations} variations of prompt from OpenAI API, please hold...`)
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
    console.log(`Saved ${filename}`)
  }
  console.log(`Done generating ${variations} ${variations > 1 ? 'images' : 'image'}`)
}

module.exports = generateImage