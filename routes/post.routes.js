


const express = require("express")
const { PostModel } = require("../models/post.model")


const postRouter = express.Router()


// post
postRouter.post("/add", async (req, res) => {


    try {

        const data = new PostModel(req.body )
        await data.save()
        res.status(200).json({ msg: "posts added" })

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})










//  get top 

postRouter.get("/",  async (req, res) => {



    try {

        const data = await PostModel.find()

        res.status(200).json(data )

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
})


postRouter.get("/:id",async (req, res) => {

    const { id } = req.params
    try {

        const data = await PostModel.findOne({_id: id})
        res.status(200).send( data )

    } catch (err) {
        res.status(400).send({ "error": err.message })
    }

})







// delete


postRouter.delete("/delete/:prodID", async (req, res) => {
    const { prodID } = req.params

    try {

        await PostModel.findByIdAndDelete({ _id: prodID })
        res.status(200).send({ "msg": `The product with ID:${prodID} has been deleted` })



    } catch (err) {
        res.status(400).send({ "error": message })
    }

})














module.exports = {
    postRouter
}