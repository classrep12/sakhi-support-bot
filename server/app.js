const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const chatRoutes = require('./routes/chat');
const storyRoutes = require('./routes/story');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());  // ✅ move this UP before routes!

app.use('/api/chat', chatRoutes);
app.use('/api/story', storyRoutes);

app.get('/', (req, res) => {
  res.send('Sakhi backend is live!');
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
