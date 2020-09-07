const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /questions'
    });
});
router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST requests to /questions'
    });
});
router.get('/:questionId', (req, res, next) => {
    const id = req.params.questionId;
    if (id === 'special') {
        re.status(200).json({
            message: 'you can GET a question',
            id: ID
        });
    } else {
        res.status(200).json({
            message: 'you passed a question'
        })
    }
});
router.post('/:questionId', (req, res, next) => {
    const id = req.params.questionId;
    if (id === 'special') {
        re.status(200).json({
            message: 'you can GET a question',
            id: ID
        });
    } else {
        res.status(200).json({
            message: 'this is a question'
        })
    }
});
router.delete('/:questionId', (req, res, next) => {
    Res.status(200).json({
        message: 'DELETED question'
    });

});

module.exports = router;