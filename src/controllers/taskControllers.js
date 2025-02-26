export const getTask = (req,res)=>{
    res.json([{
        id:1,
        task:'Learn EXpress'
    },
    {
        id:2,
        task:'Learn Node.js with database'
    }
    ])
}

export const createTask =(req,res) =>{
    const newTask = req.body;
    res.status(201).json({
        message:'Task Created Successfully.',
        data:newTask
    })
}   