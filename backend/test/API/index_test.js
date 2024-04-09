const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes'); // Import des routes des utilisateurs
const userController = require('./controllers/userController'); // Import du contrôleur des utilisateurs
const Keycloak = require('keycloak-connect'); // Import du module Keycloak
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour le traitement des requêtes en JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuration de la connexion à la base de données MongoDB avec Mongoose
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    // Initialisation de Keycloak
    const keycloak = new Keycloak({ scope: 'openid' }, './keycloak-auth/keycloak-connect.json');

    // Définition du middleware Keycloak pour protéger les endpoints
    app.use(keycloak.middleware());

    // Route pour la racine de l'API
    app.get('/', (req, res) => {
      res.send('Bienvenue sur votre API');
    });

    // Route pour afficher le formulaire de création de compte utilisateur
    app.get('/register', (req, res) => {
      res.render('createAccount');
    });

    // Route pour traiter la soumission du formulaire de création de compte utilisateur
    app.post('/register', userController.createUser);

    // Route pour récupérer tous les utilisateurs (protégée par Keycloak)
    app.get('/getallusers', keycloak.protect(), userController.getAllUsers);

    // Utilisation des routes des utilisateurs
    app.use('/api/users', userRoutes);

    // Démarrez le serveur après avoir établi la connexion à la base de données
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
