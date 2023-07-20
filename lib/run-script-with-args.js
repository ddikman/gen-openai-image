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
        callback(prompt, size, variations, output)
      }
    )
    .help()
    .argv;
}

module.exports = runScriptWithArgs