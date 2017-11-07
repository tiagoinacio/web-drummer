/**
 * Function that mutates original webpack config.
 * Supports asynchronous changes when promise is returned.
 *
 * @param {object} config - original webpack config.
 * @param {object} env - options passed to CLI.
 * @param {WebpackConfigHelpers} helpers - object with useful helpers when working with config.
 **/
export default function (config, env, helpers) {
    config.module.loaders.push(
        {
            test: /\.wasm$/,
            loaders: ['wasm-loader']
        }
    );

    const uglify = helpers.getPluginsByName(config, "UglifyJsPlugin")[0];

    if (uglify && uglify.plugin && uglify.plugin.options) {
        uglify.plugin.options.exclude = /\*.wasm/;
        console.log(uglify.plugin);
    }

    return Object.assign(
        {},
        config,
        {
            node: {
                fs: 'empty'
            }
        }
    );
}
