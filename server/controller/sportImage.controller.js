const sportimages = require('../database/sportimageschema');

const getsportImages = async (req, resp) => {
    try {
        const getresult = await sportimages.find({});
        resp.status(200).json({ getresult });
    } catch (error) {
        resp.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = getsportImages;
