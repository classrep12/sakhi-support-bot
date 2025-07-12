const stories = [];

exports.postStory = (req, res) => {
    console.log("Story submission received:", req.body);
  const { text } = req.body;

  if (!text || text.trim().length === 0) {
    return res.status(400).json({ message: 'Story cannot be empty.' });
  }

  const newStory = {
    id: Date.now(),
    text: text.trim(),
    timestamp: new Date()
  };

  stories.unshift(newStory); // Add to top
  res.status(201).json({ message: 'Story submitted successfully.' });
};

exports.getStories = (req, res) => {
  res.json(stories);
};
