const express = require('express');
const rateLimit = require('express-rate-limit');
const { createProxyMiddleware } = require('http-proxy-middleware');

const  { ServerConfig, Logger }  = require('./config');

const apiRoutes  = require('./routes')

const app = express();
const limiter = rateLimit({
	windowMs: 2 * 60 * 1000, // 15 minutes
	max: 30, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(limiter);
app.use('/flightsService', createProxyMiddleware({ target: ServerConfig.FLIGHT_SERVICE, changeOrigin: true, pathRewrite: {'^/flightsService' : '/'} }));
app.use('/bookingService', createProxyMiddleware({ target: ServerConfig.BOOKING_SERVICE, changeOrigin: true, pathRewrite: {'^/bookingService': '/'} }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
