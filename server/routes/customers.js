const Router = require('koa-router');
const customerQueries = require('../database/queries/customers');

const router = new Router();
const BASE_URL = '/api/customers';

router.get(BASE_URL, async (ctx) => {
    try {
        const {page, limit, ...search} = ctx.request.query;
        const customers = await customerQueries.all(page, limit, search);
        const customersCount = await customerQueries.count(search);

        ctx.set('Access-Control-Expose-Headers', 'x-total-count');
        ctx.set('x-total-count', customersCount.count);

        ctx.body = customers
            .map(customer => customer.dataValues)
    } catch(err) {
        console.log(err);
        ctx.status = 400;
    }
});

module.exports = router;