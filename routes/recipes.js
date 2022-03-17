var recipes = require('../recipes.json');
var router = require('express').Router();


router.get("/shopping-list",(req,res) =>{
if(Object.keys(req.query).length == 0 ||req.query.ids == "" ){
    return res.status(400).json({msg:"Please send the id in parameter"})
}
else{
const found = recipes.some(recipe=>recipe.id === parseInt(req.query.ids));
if(found){
const newarry = []
recipes.filter(recipe => recipe.id === parseInt(req.query.ids) ? newarry.push(recipe.ingredients) :"");
return res.status(200).json(newarry[0])
}
else
return res.status(404).json({msg:`Not Found`});
}
})


module.exports = router;

