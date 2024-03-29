var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Event = require('../models/event.js');

/**
 * Get all events
 */
router.get('/', function(req, res, next) {
    Event.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

// /**
//  * Get user by ID
//  */
// router.get('/:id', function(req, res, next) {
//     User.findById(req.params.id, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });
//
// /**
//  * Save user
//  */
// router.post('/', function(req, res, next) {
//     User.create(req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });
//
// /**
//  * Update user
//  */
// router.put('/:id', function(req, res, next) {
//     User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });
//
// /**
//  * Delete user
//  */
// router.delete('/:id', function(req, res, next) {
//     User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//         if (err) return next(err);
//         res.json(post);
//     });
// });

module.exports = router;