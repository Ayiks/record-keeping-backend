const express = require('express')
const {Farm} = require('../models/farm')

//create a new farm
const createFarm = async (req, res) => {
    try {
        const farm = await Farm.create({...req.body})
        res.status(200).json({
            status: true,
            message: 'Farm created successfully',
            data: farm
        })
    } catch (error) {
        console.log(`oops! something went wrong: ${error}`)
    }
}

//get all farms
const getAllFarms = async (req, res) => {
    try {
        const farms = await Farm.find()
        res.status(200).json({
            status: true,
            message: 'Farms retrieved successfully',
            data: farms
        })
    } catch (error) {
        console.log(`oops! something went wrong: ${error}`)
    }
}

//get a farm by id
const getAFarm = async (req, res) => {
    try {
        const farm = await Farm.findById(req.params.id)
        res.status(200).json({
            status: true,
            message: 'Farm retrieved successfully',
            data: farm
        })
    } catch (error) {
        console.log(`oops! something went wrong: ${error}`)
    }
}

//update a farm
const updateFarm = async (req, res) => {
    try {
        const farm = await Farm.findByIdAndUpdate(req.params.id, {...req.body}, {new: true})
        res.status(200).json({
            status: true,
            message: 'Farm updated successfully',
            data: farm
        })
    } catch (error) {
        console.log(`oops! something went wrong: ${error}`)
    }
}

//delete a farm
const deleteFarm = async (req, res) => {
    try {
        const farm = await Farm.findByIdAndDelete(req.params.id)
        res.status(200).json({
            status: true,
            message: 'Farm deleted successfully',
            data: farm
        })
    } catch (error) {
        console.log(`oops! something went wrong: ${error}`)
    }
}


module.exports = {
    createFarm,
    getAllFarms,
    getAFarm,
    updateFarm,
    deleteFarm
}