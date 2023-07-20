# OpenAI DALL-E image generator CLI

I wanted to generate a bunch of images given prompts in an easy way.

Although a CURL might've been able to do it, I ended up packaging it in this small cli.

## Usage

```bash
gen-image --variations 1 --output test --size 256 --prompt "A worm eating an apple"
```

Note you can actually use this with npx and don't have to mess much.