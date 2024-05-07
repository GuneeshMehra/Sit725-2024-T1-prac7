const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mehraguneesh65:pcpodp7Bxpoha1qy@sit725.msnoiho.mongodb.net/?retryWrites=true&w=majority&appName=sit725";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
        api: ServerApiVersion.v1,
    }
});

let collection;

async function runDB() {
    try {
        await client.connect();
        collection = client.db().collection('data');
        console.log('Connected to the database');
    } catch (ex) {
        console.error('Error connecting to database:', ex);
        throw ex; 
    }
}

async function postCard(card) {
    try {
        const result = await collection.insertOne(card);
        return result;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

async function getAllCards() {
    try {
        const cards = await collection.find({}).toArray();
        return cards;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

module.exports = {
    runDB,
    postCard,
    getAllCards,
    collection
};
