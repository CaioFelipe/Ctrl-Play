const mongoose = require('mongoose');


const connectDB = async () => {
 try {
   await mongoose.connect('mongodb+srv://admin:admin@ctrlplay.a1pe721.mongodb.net/?appName=ctrlplay');
   console.log('MongoDB conectado!');
 } catch (err) {
   console.error('Erro ao conectar ao MongoDB:', err);
   process.exit(1);
 }
};


module.exports = connectDB;
