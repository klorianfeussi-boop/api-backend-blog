const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/blogDB')
.then(() => console.log('MongoDB connecté'))
.catch(err => console.log(err));

const Article = mongoose.model('Article', {
    titre: String,
    contenu: String,
    auteur: String,
    date: { type: Date, default: Date.now },
    categorie: String,
    tags: [String]
});

app.post('/api/articles', async (req, res) => {
    const article = new Article(req.body);
    await article.save();
    res.status(201).json(article);
});

app.get('/api/articles', async (req, res) => {
    const articles = await Article.find();
    res.json(articles);
});

app.get('/api/articles/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    res.json(article);
});

app.put('/api/articles/:id', async (req, res) => {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(article);
});

app.delete('/api/articles/:id', async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: "Article supprimé" });
});

app.get('/api/articles/search/:mot', async (req, res) => {
    const mot = req.params.mot;
    const articles = await Article.find({
        $or: [
            { titre: new RegExp(mot, 'i') },
            { contenu: new RegExp(mot, 'i') }
        ]
    });
    res.json(articles);
});

app.listen(3000, () => console.log('Serveur lancé sur port 3000'));