const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/articles/:articleId/comments', (req, res) => {
  const { articleId } = req.params;
  const comments = [];
  res.json(comments);
});

app.listen(3000, () => console.log('server started'));
