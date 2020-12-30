const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        createProxyMiddleware("/projects",{
            target: "https://portfolio-api-host.herokuapp.com/wp-json/wp/v2",
            changeOrigin: true,
            pathRewrite: {
                '^/projects' : '/'
            }
        })
    );
};