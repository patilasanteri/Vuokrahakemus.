const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Palvellaan public-kansion tiedostot
app.use(express.static(path.join(__dirname, 'public')));

// Jos ei löydy tiedostoa, palautetaan index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Palvelin käynnissä: http://localhost:${PORT}`);
});
