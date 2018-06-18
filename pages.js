const fs = require('fs');
const path = require('path');

const subdirectories = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());
const pages_path = path.resolve(__dirname, 'pages');

module.exports = subdirectories(pages_path).map(page => {
    const page_path = path.resolve(pages_path, page);
    const config_file_path = path.resolve(page_path, 'webpack-part.config.js');
    return {
        name: page,
        path: page_path,
        config: fs.existsSync(config_file_path) ? require(config_file_path) : {}
    }
});
