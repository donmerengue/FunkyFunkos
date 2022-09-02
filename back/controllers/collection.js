const Collections = require("../models").Collections;
const collection = {}

collection.allCollection = (req, res) => {
    Collections.findAll()
        .then((collections) => res.status(200).json(collections))
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
};

collection.addCollection = (req, res) => {
    const { name } = req.body;
    Collections.create({
        name
    })
        .then((collection) => res.status(204).json(collection))
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
};

collection.changeCollection = (req, res) => {
  Collections.update(
        req.body,
        { where: { id: req.params.id }, returning: true }
    )
        .then(() => {
          Collections.findOne({ where: { id: req.params.id } }).then((collection) =>
                res.status(204).json(collection)
            );
        })
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
};

collection.destroyCollection = (req, res) => {
    Collections.destroy({ where: { id: req.params.id } })
        .then(() => res.status(204).json())
        .catch((err) => {
            res.status(500).json({ message: err.message })
        })
};

module.exports = collection