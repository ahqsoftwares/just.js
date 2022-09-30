const { exec, execSync } = require("child_process");

const version = require("./package.json").version;
const chalk = require("chalk");

function publish(tag) {
         console.log(`Publishing @${chalk.green(tag ? tag : "latest")}`);
         exec(`npm publish${tag ? ` --tag=${tag}` : ""}`, {env: {NPM_AUTH_TOKEN: process.env.NODE_AUTH_TOKEN}}, (err, stderr, out) => {
                  if (err) {
                           console.log(chalk.red(String(err)));
                  }
                  if (stderr) {
                           console.log(chalk.red(String(stderr)));
                  }
                  console.log(chalk.green(String(out)));
         });
}

if (version.endsWith("-dev")) {
         publish("dev");
} else if (version.endsWith("-beta")) {
         publish("beta");
} else if (version.endsWith("-pr")) {
         publish("pr");
} else {
         publish();
}
