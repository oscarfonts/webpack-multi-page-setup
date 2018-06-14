const fs = require('fs');
const path = require('path');

const subdirectories = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());
const stories_path = path.resolve(__dirname, 'stories');

module.exports = subdirectories(stories_path).map(story => {
    const story_path = path.resolve(stories_path, story);
    const config_path = path.resolve(story_path, 'webpack.config.js');
    return {
        name: story,
        path: story_path,
        config: fs.existsSync(config_path) ? require(config_path) : {}
    }
});
