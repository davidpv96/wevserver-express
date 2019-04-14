const express = require('express');
const hbs = require('hbs');
const app = express()
const port=process.env.PORT || '3000'
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'public'));
hbs.registerHelper('anio', function() {
    return new Date().getFullYear();
});
process.env
app.get('/', function (req, res) {
    res.render('index',{
        nombre:'gamaja'
    });

})
 
app.listen(port,()=>{
    console.log(`funciona correctamente ${port}`);
})