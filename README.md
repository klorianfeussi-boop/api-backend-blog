## NOMS : FEUSSI KENMOGNE KLORIAN DAVIS 

## MATRICULE : 24G2220
# API Backend Blog

## Presentation
Cette API Backend permet de gérer un blog simple.  
Elle offre des fonctionnalités de création, lecture, modification, suppression et recherche d’articles.

## Technologies utilisées
- Node.js
- Express.js
- MongoDB
- Mongoose
- Postman (tests)

## Installation

1. Cloner le projet
git clone https://github.com/klorianfeussi-boop/api-blog.git

2. Installer les dépendances
npm install

3. Lancer le serveur
npm start

Le serveur démarre sur :
http://localhost:3000

## Endpoints

### Créer un article
POST /api/articles

### Voir tous les articles
GET /api/articles

### Voir un article
GET /api/articles/:id

### Modifier un article
PUT /api/articles/:id

### Supprimer un article
DELETE /api/articles/:id

### Rechercher un article
GET /api/articles/search?q=mot
