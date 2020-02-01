const express = require('express');
const router = express.Router();

const EventDocument = require('../model/eventDocument');

router.post('/save', (req, res) => {
    const data = req.body;

    const newDocument = new EventDocument(data);
    newDocument.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'error' });
            return;
        }
        return res.json({
            msg: 'Document has been seaved'
        });
    });
});

module.exports = router;
