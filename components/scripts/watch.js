const chokidar = require('chokidar');
const { exec } = require('child_process');

// One-liner for current directory
chokidar.watch('./src').on('change', (event, path) => {
  exec('yarn build', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    console.log(stdout);
    console.log(stderr);
  });
});
