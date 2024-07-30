// run-parcel.js
const { spawn } = require('child_process');
const parcel = spawn('npx', ['parcel', './src/index.html', '--port', '1236'], {
  stdio: 'inherit',
  env: { ...process.env, NODE_OPTIONS: '--trace-deprecation' }
});

parcel.on('close', (code) => {
  console.log(`Parcel process exited with code ${code}`);
});


