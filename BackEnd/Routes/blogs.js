const express=require('express');
const router = express.Router();
const Blogs=require("../Models/Blog");
const fetchUser=require("../middleware/fetchUser");
const { body, sanitizeBody, validationResult } = require('express-validator');


router.get('/fetchallblogs',fetchUser, async (req,res)=>{
    const blogs= await Blogs.find({user:req.user.id});
    res.send(blogs);
})

router.get('/fetchcategory/:category',fetchUser, async (req,res)=>{
    const blogs= await Blogs.find({category:req.params.category});
    res.send(blogs);
})

router.post('/addblogs',fetchUser,[
    body('title').isLength({ min: 3 }),
    body('description').isLength({min:5}),
    body('post').isLength({min:5}),
    body('category').isLength({min:3})

], async (req,res)=>{
    try {
        console.log(req.body);
        const {title,description,post,category,image}=req.body;
        console.log(image)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const blog = new Blogs({
            title,description,post,category, image, user:req.user.id
        })
        const savedBlogs= await blog.save();
        res.json(savedBlogs);
        
    } catch (error) {
        console.error(error);   
    }
})

router.get('/getblog/:id',fetchUser, async (req,res)=>{
    const blog=await Blogs.findById(req.params.id);
    res.json(blog);
})


router.delete('/deleteblogs/:id',fetchUser, async (req,res)=>{

    let note= await Blogs.findById(req.params.id);
    if(!note){
        res.status(404).send("Authentication failed")
    }
    if(note.user.toString() !== req.user.id){
        res.status(404).send("Not Allowed")
    }

    note= await Blogs.findByIdAndDelete(req.params.id);
    res.json({success:"Note deleted successfully"});

})

module.exports = router