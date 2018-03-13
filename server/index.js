const Koa = require('koa');
const send = require('koa-send');
const logger = require('koa-logger');
const cors = require('koa2-cors');
const customersRoute = require('./routes/customers');

const app = new Koa();
const PORT = process.env.PORT || 8001;
const environment = process.env.NODE_ENV || 'development';

app.use(logger());
app.use(cors());

if (environment !== 'development') {
    app.use(async function (ctx, next) {
        if (ctx.path.substr(0, 5).toLowerCase() === '/api/') {
            await next();
        } else if (ctx.path.indexOf('.') !== -1 && await send(ctx, ctx.path, {root: '../client/dist'})) {
            return;
        } else {
            await send(ctx, '/index.html', {root: '../client/dist'});
        }
    });
}

app.use(customersRoute.routes());

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});