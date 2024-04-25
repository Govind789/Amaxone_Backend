const express = require('express');
const userReviewController = require('../controllers/userReviewsControllers.js');

const reviewRouter = express.Router();

reviewRouter.route('/')
    .get(userReviewController.getAllReviews)
    .post(userReviewController.createReview);

reviewRouter.route('/:id')
    .get(userReviewController.getOneReview)
    .patch(userReviewController.updateReview)
    .delete(userReviewController.deleteReview);

reviewRouter.route('/product/:id')
    .get(reviewController.getReviewsByProductId)

module.exports = reviewRouter;