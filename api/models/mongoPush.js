const mongoose = require('mongoose')
const data = require('./data')

const Yoga = require('./Exercise');

mongoose
  .connect(
    'mongodb+srv://iamparth2002:iamparth2002@cluster0.fdcgy8l.mongodb.net/yogpath?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('DB Connected!');
  });

// console.log(data)
const trialOne = () =>{
  data.map(async(item)=>{
    const userDoc = await Yoga.create({
        ...item  
      });
    if(userDoc){
        console.log("done")
    }
  })
}
trialOne();
