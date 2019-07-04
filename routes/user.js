const router = require('express').Router();
const models = require('../models');
const User = models.User;

router.get("/", (req, res) => { User.findAll()
    .then(user => {
        const userList = user.map(user => user.dataValues)
        res.send(userList)
    });

});

router.get("/:id", (req, res) => { User.findByPk(req.params.id)
    .then(user => {
       user ?  res.send(user.dataValues) : res.sendStatus(404)
    });
});

router.post("/users", (req, res) => User.create(req.body)
    .then(user => {
        res.status(201).send(user);
    })
);

router.put("/user/:id", (req, res) => { User.update({...req.body}, {where: {id: req.params.id} })
    .then(() => {
        User 
            .findByPk(req.params.id)
            .then(user => res.send(user.dataValues));
    });
});


router.delete("/user/:id", (req, res) => {User.destroy({where: {id: req.params.id} })
    .then(() => res.sendStatus(200));
});

module.exports = router;
