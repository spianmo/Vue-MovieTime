module.exports = {
    devServer: {
        port: 9931,
        open: true,
        proxy: {
            '/api': {
                target: 'http://118.25.42.197:9930',
                changeOrigin: true
            },
            '/file': {
                target: 'http://118.25.42.197:9930'
            }
        }
    },
    lintOnSave: false
}
