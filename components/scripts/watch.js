const chokidar = require('chokidar');
const { exec } = require('child_process');

// One-liner for current directory
chokidar.watch('./src').on('all', (event, path) => {
  exec('npm run build', (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    console.log(stdout);
    console.log(stderr);
  });
});
