const crypto = require('crypto');


const menu  = [
    {
        id: crypto.randomUUID(),
        nombre : "Carpaccio fresco",
        description : "Entrada Carpaccio de salmón con cítricos",
        precio : 65.50,
        imagen : "Carpaccio-de-salmon.jpg"
    },

    {
        id: crypto.randomUUID(),
        nombre : "Risotto de berenjena",
        description : "Risotto de berenjena y queso de cabra",
        precio : 47.00,
        imagen : "Risotto-berenjena-queso-cabra.jpg"
    },

    {
        id: crypto.randomUUID(),
        nombre : "Mousse de arroz",
        description : "Mousse de arroz con leche y aroma de azahar",
        precio : 27.50,
        imagen : "Mousse-de-arroz-con-leche.jpg"
    },

    {
        id: crypto.randomUUID(),
        nombre : "Espárragos blancos",
        description : "Espárragos blancos con vinagreta de verduras y jamón ibérico",
        precio : 37.50,
        imagen: "esparragos.png"
    },
    {
        id: crypto.randomUUID(),
        nombre : "Asado criollo",
        description : "Carne de novillo",
        precio : 47.50,
        imagen : "Asado-criollo.jpg"
    },
    {
        id: crypto.randomUUID(),
        nombre : "Locro",
        description : null,
        precio : 37.50,
        imagen : "locro.jpg"
    }
]



module.exports = {
    index : (req,res) =>{
        
        return  res.render('index',{
            menu
        })
    },
    detail : (req,res) =>{
        const {id}= req.params;
        const item = menu.find(item => item.id === id)

        return res.render('detalleMenu',{
            item
        })
    }
}




