
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Pet = require('./models/Pet');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/petshop', {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.get('/api/pets', async (req, res) => {
    const pets = await Pet.find();
    res.json(pets);
});

app.post('/api/pets', async (req, res) => {
    const newPet = new Pet(req.body);
    await newPet.save();
    res.json(newPet);
});

app.put('/api/pets/:id', async (req, res) => {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedPet);
});

app.delete('/api/pets/:id', async (req, res) => {
    await Pet.findByIdAndRemove(req.params.id);
    res.json({ message: 'Pet deleted successfully' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(\`Server running on port \${PORT}\`));
