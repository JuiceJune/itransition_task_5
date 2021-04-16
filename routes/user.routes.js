const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.get(
    '/getUsers',
    async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json(users)

        } catch (e) {
            res.status(500).json({message: 'Something gone wrong, try again'})
        }
    })

router.delete('/deleteUsers',
    async (req, res) => {
        try{
            const {_id} = req.query
            await User.deleteOne({_id})
            res.status(200).json({message : "User deleted"})
        }catch (e) {
            console.log(e)
        }
    })

router.patch('/blockUsers',
    async (req, res) => {
        try{
            const {_id} = req.query
            await User.updateOne({_id}, {status : "blocked"})
            res.status(200).json({message : "User blocked"})
        }catch (e) {
            console.log(e)
        }
    })

router.patch('/unBlockUsers',
    async (req, res) => {
        try{
            const {_id} = req.query
            await User.updateOne({_id}, {status : "active"})
            res.status(200).json({message : "User unblocked"})
        }catch (e) {
            console.log(e)
        }
    })


module.exports = router

