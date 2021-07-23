const User = require('../models/user.model')

exports.findOne = (req, res) => {

    const username = req.params.username
    
    console.log('param : ',username)

    User.findOne({ where: { username: username } })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving user with param =" + username
      })
    })
}