const express = require ("express")
const cors = require ("cors")

const app = express();

app.use(cors());
const product = [
    {
        id:1,
        title:"Mouse",
        des:"wireless"
    },
    {
        id:2,
        title:"Keyboad",
        des:"Wireless"
    },
    {
        id:3,
        title:"RAM",
        des:"4GB"
    },
    {
        id:4,
        title:"Hard Disk",
        des:"500GB"
    },
    {
        id:5,
        title:"Processor",
        des:"4GB"
    },
    {
        id:6,
        title:"CPU",
        des:"500GB"
    }
]

app.get("/", (req, res)=>{
    console.log("Api connected")
    res.json({product})
})

app.listen(8000,()=>{
    console.log("Server is started at port 8000")
})