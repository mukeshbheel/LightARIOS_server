// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/frames', (req, res) => {
  res.json([
    {
      id: "1",
      image: "http://192.168.1.78:3000/images/photo1.jpg",
      video: "http://192.168.1.78:3000/videos/video1.mp4"
    },
    {
      id: "2",
      image: "http://192.168.1.78:3000/images/photo2.jpg",
      video: "http://192.168.1.78:3000/videos/video2.mp4"
    },
    {
      id: "2",
      image: "http://192.168.1.78:3000/images/photo3.jpg",
      video: "http://192.168.1.78:3000/videos/video3.mp4"
    }
  ]);
});

// Serve static files (images and videos)
app.use('/images', express.static('public/images'));
app.use('/videos', express.static('public/videos'));

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
