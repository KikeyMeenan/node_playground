var express = require('express');

var bookRouter = express.Router();

var router = function(nav)
{
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

    bookRouter.route('/')
        .get(function(req, res)
        {
            res.render('bookListView',
            {
                title: 'Books',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function(req, res)
        {
            var id = req.params.id;
            res.render('bookView',
            {
                title: 'Books',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};


module.exports = router;