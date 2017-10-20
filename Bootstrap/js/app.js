// Local connection with Mongo

const MongoClient = require('mongodb').MongoClient;

const MONGO_URL = 'mongodb://<rahthap>:<rahthap>@ds119355.mlab.com:19355/pokemon';

// Connect to the db
MongoClient.connect(MONGO_URL, function (err, db) {
    
    db.collection('poke', function (err, collection) {
        
        collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
        collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
        collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });
        
        

        db.collection('poke').count(function (err, count) {
            if (err) throw err;
            
            console.log('Total Rows: ' + count);
        });
    });
                
});

