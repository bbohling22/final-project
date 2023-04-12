const db = require('../config/connection');
const { User, Thought } = require('../models');
const userSeeds = require('./userSeeds.json');
const imageSeeds = require('./imageSeeds.json');

db.once('open', async () => {
  try {
    await Thought.deleteMany({});
    await User.deleteMany({});

    await User.create(userSeeds);

    for (let i = 0; i < imageSeeds.length; i++) {
      const { _id, imageAuthor } = await Thought.create(imageSeeds[i]);
      const user = await User.findOneAndUpdate(
        { username: imageAuthor },
        {
          $addToSet: {
            images: _id,
          },
        }
      );
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
