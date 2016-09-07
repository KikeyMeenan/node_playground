var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books =
    [
        {
            title: 'Shantaram',
            genre: 'Travel/Adventrue',
            author: 'Gregory David Roberts',
            read: false
        },
        {
            title: 'Fiesta',
            genre: 'Travel/Adventure',
            author: 'Ernest Hemmingway',
            read: false
        },
        {
            title: '1Q84',
            genre: 'Mystery',
            author: 'Haruki Murukami',
            read: false
        }
    ];

var router = function(nav)
{
    adminRouter.route('/')
        .get(function(req, res)
        {
            res.send('Admin');
        });

    adminRouter.route('/addBooks')
        .get(function(req, res)
        {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function(err, db)
            {
                var collection = db.collection('books');
                collection.insertMany(books, function(err, results)
                {
                    res.send(results);
                    db.close();
                });
            });

            //res.send('Insert books');
        });

    return adminRouter;
};

module.exports = router;