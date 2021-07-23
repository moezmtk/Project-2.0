const express = require('express')
const { validate, ValidationError, Joi } = require('express-validation')
const router = express.Router()

const deleteElements = require('../Controllers/Exemple/delete.element')
const deepClones = require ('../Controllers/Exemple/deep.clone')
const subStrings = require('../Controllers/Exemple/sub.string')
const groupByPropertys = require ('../Controllers/Exemple/group.by.property')
const firstUppers = require ('../Controllers/Exemple/first.upper')






////////////////////////////////////////////////


const createUsers = require ('../controllers/create.user')
const findAllUsers = require ('../Controllers/findAll.user')
const findOneUsers = require ('../Controllers/findOne.user')
const updateUsers = require ('../Controllers/update.user')
const deleteUsers = require ('../Controllers/delete.user')

//validation
const userValidations = require ('../validation/validation.user')






router.post('/createUser',validate(userValidations.userValidation, {}, {}), createUsers.createUser)

router.get('/findOne/:username',findOneUsers.findOne)

router.get('/findAll/:first_name',findAllUsers.findAll)

router.put('/updateUser/:id', validate(userValidations.userValidation, {}, {}), updateUsers.update)

router.delete('/deleteUser/:id',deleteUsers.delete)

///////////////////////////////////////////



const { authJwt } = require("../Middleware");


router.get('/firstUpper/:str1',[authJwt.verifyToken, authJwt.isModerator],firstUppers.firstUpper)
router.post('/groupByProperty/:prop',[authJwt.verifyToken, authJwt.isModerator],groupByPropertys.groupByProperty)
router.get('/subString/:str4/:str5',[authJwt.verifyToken, authJwt.isAdmin],subStrings.subString)
router.post('/deepClone',[authJwt.verifyToken, authJwt.isModerator],deepClones.deepClone)
router.post('/deleteElement/:index',[authJwt.verifyToken, authJwt.isAdmin],deleteElements.deleteElement)





module.exports = router
