const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
 name: { type: String, required: [true, "O nome é obrigatório"], minlenght: [3, "O nome deve ter pelo menos 3 caracteres"]},
 email: { type: String, required: [true, "O e-mail é obrigatório"], minlenght: [15, "O e-mail é muito pequeno"]},
 phone: { type: String, required: [true, "Número de telefone é obrigatório"], minlenght: [12, "O número de telefone é invalido"], maxlenght: [12, "O número é inválido"]},
 createdAt: { type: Date, default: Date.now }
});


const User = mongoose.model('User', userSchema);


module.exports = User;