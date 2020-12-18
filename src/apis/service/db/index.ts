import {MongoClient} from 'mongodb';
const dbConnectionUrl = 'mongodb+srv://root:0w912ue1ye173y@cluster0.ptgse.mongodb.net/test?retryWrites=true&w=majority';

async function initialize(
    dbName:string,
    dbCollectionName:string,
) {
    try {
        const dbInstance = await  MongoClient.connect(dbConnectionUrl);
        const dbObject = dbInstance.db(dbName);
        const dbCollection = dbObject.collection(dbCollectionName);
        console.log("[MongoDB connection] SUCCESS");
        return dbCollection;
    } catch (err) {
        console.log(`[MongoDB connection] ERROR: ${err}`);
        throw err;
    }
}

export {initialize}