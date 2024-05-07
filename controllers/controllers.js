

const { postCard, getAllCards } = require('../dbconnections');

async function postCardController(req, res) {
    try {
        const card = req.body;
        const result = await postCard(card);
        res.json({ statusCode: 201, data: result, message: 'success' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ statusCode: 500, message: 'Internal server error' });
    }
}

async function getAllCardsController(req, res) {
    try {
        const result = await getAllCards();
        res.json({ statusCode: 200, data: result, message: 'Get all cards successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ statusCode: 500, message: 'Internal server error' });
    }
}

module.exports = {
    postCardController,
    getAllCardsController
};
