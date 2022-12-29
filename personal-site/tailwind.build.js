const { execSync } = require('child_process');

execSync('npx tailwindcss build src/index.css -o src/index.output.css', { stdio: 'inherit' });
