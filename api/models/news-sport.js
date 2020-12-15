const mongoose = require('mongoose')

let dataCriacao = new Date().toLocaleDateString()
let dia = dataCriacao.slice(0, 2);
let mes = dataCriacao.slice(3, 5);
let ano = dataCriacao.slice(6);
dataCriacao = `${dia}-${mes}-${ano}`

let newsSportSchema = new mongoose.Schema({
    status: String,
    totalResults: Number,
    dataCriacao: { type: String, default: dataCriacao, index: {unique: true, dropDups: true}},
    articles: [
        {
            source: {
                id: String,
                name: String
            },
            author: { type: String, default: null },
            title: String,
            description: String,
            url: String,
            urlToImage: String,
            publishedAt: String,
            content: String
        }
    ]
})


module.exports = mongoose.model('NewsSport', newsSportSchema);