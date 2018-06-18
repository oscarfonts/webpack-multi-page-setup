const path = require('path');
const merge = require('webpack-merge');
const pages = require('./pages');

const config = pages.map(page => {
    const common = {
        entry: path.join(page.path, 'src', 'index.js'),
        resolve: {
            modules: [path.join(page.path, 'node_modules'), 'node_modules'],
            alias: {
                shared: path.resolve(__dirname, 'shared')
            }
        },
        output: {
            filename: 'bundle.js',
            path: page.path,
            publicPath: `/pages/${page.name}/`
        }
    };

    return merge({}, common, page.config);
});

console.log(JSON.stringify(config, null, 2));

module.exports = config;
