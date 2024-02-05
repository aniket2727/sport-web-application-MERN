const getproductinfo = require('../database/productinfoSchema');

const productinfo = async (req, resp) => {
    try {
        const getresult = await getproductinfo.find({});
        resp.status(200).json({ getresult });
    } catch (error) {
        resp.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = productinfo;
