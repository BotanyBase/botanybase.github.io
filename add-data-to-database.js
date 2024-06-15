const fs = require('fs');
const git = require('git');

const plants = JSON.parse(fs.readFileSync('plants.json', 'utf8'));
plants.push(context.pullRequest.body);
fs.writeFileSync('plants.json', JSON.stringify(plants, null, 2));
git.add('plants.json');
git.commit('Add new plant data');
git.push();
