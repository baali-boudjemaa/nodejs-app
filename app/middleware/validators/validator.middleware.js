const { body,param } = require('express-validator');

exports.getItemClassSchema = [
    param('id')
        .exists()
        .isNumeric()
        .withMessage('Must be a number')

];
exports.createClassSchema = [
    body('classID')
        .exists()
        .isNumeric()
        .withMessage('Must be a number'),
    body('classDesc')
        .exists()
        .withMessage('Your first name is classDesc')
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')

];
exports.deleteClassSchema = [
    param('classID')
        .exists()
        .isNumeric()
        .withMessage('Must be a number')

];
exports.updateClassSchema = [
    body('classID')
        .exists()
        .isNumeric()
        .withMessage('Must be a number'),
    body('classDesc')
        .exists().isAlphanumeric()
        .withMessage('Your first name is classDesc')
        .withMessage('Must be only alphabetical chars')
        .isLength({ min: 3 })
        .withMessage('Must be at least 3 chars long')

];

exports.AddBlackListSchema = [
    body('B_FileNo')
        .exists()
        .isNumeric()
        .withMessage('Must be a number'),
    body('B_PatID')
        .exists()
        .isAlphanumeric()
        .withMessage('Must be a number'),
    body('B_Mobile')
        .exists()
        .isNumeric()
        .withMessage('Must be a number'),
    body('B_Date')
        .exists()
        .isDate()
        .withMessage('Must be a Date'),
    body('B_Status')
        .exists()
        .withMessage('Your first name is classDesc')
        .withMessage('Must be only alphabetical chars')
        .withMessage('Must be at least 3 chars long')

];
exports.deleteBlackListItemSchema = [
    param('B_FileNo')
        .exists()
        .isNumeric()
        .withMessage('Must be a number')

];
exports.updateBlackListItemSchema = [
    body('B_FileNo')

        .isNumeric()
        .withMessage('Must be a number'),
    body('B_PatID')

        .isAlphanumeric()
        .withMessage('Must be a number'),
    body('B_Mobile')

        .isNumeric()
        .withMessage('Must be a number'),
    body('B_Date')
        .isDate()
        .withMessage('Must be a Date'),
    body('B_Status').isNumeric()
        .withMessage('B_Status is number')

];
exports.validateLogin = [
    body('username')
        .notEmpty()
        .withMessage('username is required')
        .isAlpha()
        .withMessage('Must be a valid username'),
    body('password')
        .exists()
        .withMessage('Password is required')
        .notEmpty()
        .withMessage('Password must be filled')
];