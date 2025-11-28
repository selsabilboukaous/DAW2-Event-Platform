const express = require('express');
const app = express();
const port =3000;
app.use(express.json());
//n3ewdou nrecuperiw routes te3 authentification
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);
app.listen(port ,()=> {
    console.log(`Serveur Express demarre sur le port ${port}`);
});