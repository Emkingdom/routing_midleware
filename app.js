const express = require('express');
const app = express();
const itemsRoutes =  require('./routes/items');

app.use(express.json());
app.use("/items", itemsRoutes);

app.use((req, res, next) => {
    return new ExpressError('NOT FOUND', 404)
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
      error: err.message,
    });
})

 app.listen(3000, ()=> {
    console.log('SERVER STARTED ON PORT 3000')
 })