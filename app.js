require('dotenv').config();
const express = require ('express');
const connectDB = require('./src/db/db');
const noteModel = require('./src/models/note.model');
const app = express();
app.use(express.json());

connectDB();

app.get('/notes/', async (req,res)=>{
    try{
        const notes = await noteModel.find();
        res.json({
            message : "Notes fetched successfully",
            notes
        })
    } catch(err){
        res.status(500).json({
            message : "Error fetching notes",
            error : err.message
        })
    };
    
});

app.post("/notes" ,async (req,res)=>{
    try{
        const {title , content} = req.body;
        const note = await noteModel.create({
            title : title,
            content : content   
        })
        res.json({
            message : "Note created successfully",
            note
        });
    } catch(err){
        res.status(500).json({
            message : "Error creating note",
            error : err.message
        });
    }
});

app.delete("/notes/:id" , async (req, res)=>{
    const noteId = req.params.id;
    await noteModel.findOneAndDelete({
        _id :   noteId
    });
    res.json({
        message : "Note deleted successfully"
    });
});

app.patch("/notes/:id" , async (req,res)=>{
    const noteId = req.params.id;
    const {title , content} = req.body;
    await noteModel.findOneAndUpdate({
        _id : noteId
    },{
        title : title,
        content : content
    });
    res.json({
        message : "Note updated successfully"
    });

});


app.listen(3000,()=>{ 
    console.log('Server is running on port 3000');
});
    


