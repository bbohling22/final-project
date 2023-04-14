const db = require('../config/connection');

const { User, Post } = require('../models');
const userSeeds = require('./userSeeds.json');
const postSeeds = require('./postSeeds.json');

db.once('open', async () => {
  try {

    await Post.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < postSeeds.length; i++) {
      const { _id, postAuthor } = await Post.create(postSeeds[i]);
      const user = await User.findOneAndUpdate(
        { email: postAuthor },
        {
          $addToSet: {
            posts: _id,
          },
        }
      );
    }
/*
    await User.deleteMany({});
    await Post.deleteMany({});

    const createdUsers = await User.create(userSeeds);

    const createdPosts = await Post.create(
        posts.map(post = {
          

        }
    );
*/
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
