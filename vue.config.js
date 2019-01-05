const path = require('path');

module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
        ? '/wonderous-web/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                includePaths: [path.resolve(__dirname, "node_modules")],
            },
        },
    },
}

// module.exports = {
//     chainWebpack: config => {
//         const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
//         types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)));
//     }
// }

// function addStyleResource (rule) {
//     rule.use('style-resource')
//         .loader('style-resources-loader')
//         .options({
//             patterns: [
//                 path.resolve(__dirname, './src/styles/variables.scss'),
//             ],
//         });
// }