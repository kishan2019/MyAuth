const express = require('express');
const router = express.Router();

router.get('/signup', ( req,res) => {
    res.json({
            user: "I am running on server haahhh."
        }
    );
});

module.exports = router;