const express = require('express');
const app = express();
const cors = require('cors');
const port = 3002; 


require('dotenv').config()
app.use(cors());

const mongoose = require('mongoose');

const User = require('./models/user')
const Notification = require('./models/notification')
const Account = require('./models/account')

mongoose.connect(process.env.MONGO_URI)
  .then(() => {

    console.log('===> Connected to MongoDB <===');
    
    
    if (process.env.EnvironementType == 'dev') {createInitialCollections()};
    
    app.get('/', (req, res) => {
      res.send('Hello World from Service!');
  });
  
  app.listen(port, () => {
      console.log(`Service listening at http://localhost:${port}`);
  });

  })






// Initialiser les collections de la base de donnée
async function createInitialCollections() {
    console.log('====> Init User  <====')
    try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    const collectionNames = collections.map(col => col.name);
    const emailToCheck = 'auto@user.com';
    let user = await User.findOne({ Email: emailToCheck });
    
    // Vérifier et insérer un utilisateur basé sur l'adresse e-mail
    if (!collectionNames.includes('users') || !user) {
      user = new User({
        name: 'User test',
        UserName: 'autoUser01',
        PasswordHash: 'hashedPassword',
        Email: emailToCheck,
        accountTypeClient: true,
        accountTypeDelivery: false,
        accountTypeRestaurateur: false,
      });
      await user.save()
      console.log('===> Connected to MongoDB <===');
    }
    } catch (error) {
      console.log('Erreur Try ici ====>'+ error);
    }
  
    // const messageToCheck = 'Bienvenue sur le système !';
    // const notificationExists = await Notification.findOne({ Message: messageToCheck});
    //   // Vérifier et insérer une notification basée sur un message spécifique pour éviter les doublons
    // if (!collectionNames.includes('notifications') || !notificationExists) {
    //   const notification = new Notification({
    //     UserId: user._id,
    //     Message: messageToCheck,
    //     Status: 'Non lue'
    //   }); 
    //   await notification.save();
    // }
  
  
    // const accountStatusToCheck = 'Active';
    // const accountExists = await Account.findOne({ AccountStatus: accountStatusToCheck});
  
    //   // Vérifier et insérer un compte basé sur le statut du compte pour cet utilisateur
    // if (!collectionNames.includes('accounts') || !accountExists) {
    //   const account = new Account({
    //     UserId: user._id,
    //     AccountStatus: accountStatusToCheck,
    //     CreatedAt: new Date(),
    //     UpdateAt: new Date()
    //   });
  
    //   await account.save(); 
    // }
  }