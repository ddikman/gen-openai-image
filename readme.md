# OpenAI DALL-E image generator CLI

I wanted to generate a bunch of images given prompts in an easy way.

Although a CURL might've been able to do it, I ended up packaging it in this small cli.

## Usage

```bash
export OPENAI_API_KEY=your-key
gen-openai-image --variations 1 --output test --size 256 --prompt "A worm eating an apple"
```

Or, use npx to call the latest published version of this cli:

```bash
npx gen-openai-image --prompt "A woodchipper spitting out png files" --key "your api key"
```


## Building locally

I use `yarn link` in the root folder of this project to symlink the bin script. Then you can do local changes and test them by running `gen-openai-image ...`