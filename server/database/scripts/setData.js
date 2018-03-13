const Customer = require('../model/customer');

const setData = async () => {
    for (let i = 0; i < 10001; i++) {
        await Customer.create(
            {
                account_name: `Test-${i + 1}`,
                phone: '+420231231220',
                city: 'Prague',
                country: 'Czech Republic',
                email: 'author@gmail.com',
                address: 'Sokolovska, 2',
                secondary_address: 'Radlicka, 107',
                firstname: 'Jindřich',
                lastname: 'Chalupecký'
            }
        );
    }

    return process.exit(-1);
};

(async () => {
    await setData();
})();