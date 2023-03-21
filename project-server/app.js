require('dotenv').config()
const express = require("express");
const db = require('./models');
const cors = require('cors');

const PORT =  process.env.PORT||2000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));
const instituteRouter = require("./routes/institute.js");
const incomeRouter =require("./routes/income.js")
const expendsRouter =require("./routes/expends.js")
const studentRouter=require("./routes/student.js")
const staffRouter=require("./routes/staff.js")
const attendanceRouter=require("./routes/attendance.js")
const determinationRouter=require("./routes/determination.js")
const filesRouter=require("./routes/determination.js")
const accessRouter=require("./routes/access.js")



app.use(express.urlencoded())
app.use(express.json());

db.sequelize.sync({ force: false })
    .then(() => {
        console.log('yes re-sync done!')
    })


app.use("/",accessRouter)
app.use("/institute", instituteRouter)
app.use("/income", incomeRouter)
app.use("/expends", expendsRouter)
app.use("/attendance", attendanceRouter)
app.use("/determination", determinationRouter)
app.use("/staff",staffRouter)
app.use("/student",studentRouter)



//app.use("/files",filesRouter)


    
app.listen(PORT, () => {
    console.log("app running");
})
  ;



