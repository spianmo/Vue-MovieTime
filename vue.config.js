module.exports = {
    devServer: {
        port: 8080,
        open: true,
        proxy: {
            '/api': {
                target: 'http://118.25.42.197:9930',
                // changeOrigin: true,
                // secure: false,
                // pathRewrite: {
                //   '^/api': ''
                // }
            }
        }
    },
    lintOnSave: false
}
