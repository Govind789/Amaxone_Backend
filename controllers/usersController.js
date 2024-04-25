const userModel = require('../models/userModel');

const getAllUsers = function (req, res) {
    res.status(404);
    res.json({
        status: 'fail',
        message: 'Route not configoured'
    });
}

const createUser = async function (req, res) {
    try{
        const data = await userModel.create(req.body);
        res.status(200);
        res.json({
            status: 'success',
            message: 'User added'
        });
    }
    catch(err){
        res.json({
            status: 'fail',
            message: err
        })
    }
}

const updateUser = function (req, res) {
    res.status(404);
    res.json({
        status: 'fail',
        message: 'Route not configoured'
    });
}

const deleteUser = function (req, res) {
    res.status(404);
    res.json({
        status: 'fail',
        message: 'Route not configoured'
    });
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}