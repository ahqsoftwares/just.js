const { execSync } = require("child_process")

setInterval(() => {
         try {
                  execSync("pnpm compile");
                  console.log("Compiled");
         } catch (e) {
                  console.log("Compiling Failed!");
         }
}, 20000);