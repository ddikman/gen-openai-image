const yargs = require('yargs');

function runScriptWithArgs(callback) {
  yargs
    .command('$0', 'Generate an image given a prompt',
      (yargs) => {
        yargs
          .option('prompt', {
            alias: 'p',
            describe: 'Prompt for the image generation',
            demandOption: true,
            type: 'string',
          })
          .option('size', {
            alias: 's',
            describe: 'Image size',
            demandOption: false,
            default: 512,
            type: 'number',
          })
          .option('variations', {
            alias: 'v',
            describe: 'Number of variations',
            demandOption: false,
            default: 1,
            type: 'number',
          })
          .option('key', {
            alias: 'k',
            describe: 'OpenAI API key',
            demandOption: false,
            default: process.env.OPENAI_API_KEY,
            type: 'string',
          })
          .option('output', {
            alias: 'o',
            describe: 'Output file name (excluding extension)',
            demandOption: false,
            default: 'output',
            type: 'string',
          });
      },
      (argv) => {
        const prompt = argv.prompt;
        const size = argv.size;
        const output = argv.output;
        const variations = argv.variations;
        const apiKey = argv.key;
        callback(prompt, size, variations, output, apiKey)
      }
    )
    .help()
    .argv;
}

module.exports = runScriptWithArgs