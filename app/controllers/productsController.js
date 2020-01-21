const Product = require('../models/product')

module.exports.list = (req, res) => {
    Product.find({user: req._id}).populate('category',['name'])
        .then((products) => {
            res.json(products)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.show = (req, res) => {
    const id = req.params.id
    // typeof id 
    Product.findOne({_id: id, user:req.user._id}).populate('category',['name']) 
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req, res) => {
    const body = req.body
    const product = new Product(body)
    product.save()
        .then((product) => {
            Product.findOne({ _id: product._id }).populate('category', ['name'])
                .then((product) => {
    
                    res.send(product)
                })
                .catch((errr) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Product.findOneAndUpdate({_id: id,}, body, { new: true, runValidators: true })
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.destroy = (req, res) => {
    const id = req.params.id
    Product.findByIdAndDelete({_id:id,})
        .then((product) => {
            if (product) {
                res.json(product)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}
