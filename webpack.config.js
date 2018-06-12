const {resolve} = require('path')
const {readdirSync, statSync} = require('fs')
const {join} = require('path')

const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())

// multi-compiler mode

const config = dirs(resolve(__dirname, "stories")).map((project) => {
    const home = join(__dirname, "stories", project)
    return {
        mode: "development",
        entry: join(home, "src", "index.js"),
        resolve: {
            modules: [join(home, 'node_modules')]
        },
        output: {
            filename: 'bundle.js',
            path: join(home, 'dist')
        }
    }
})

module.exports = config
