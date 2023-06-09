const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      user: async (parent, { username }) => {
        return User.findOne({ username })
        .select('-__v -password')
        .populate('posts');
      },
      posts: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Post.find(params).sort({ createdAt: -1 });
      },
      post: async (parent, { postId }) => {
        return Post.findOne({ _id });
      },
      me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id }).populate('posts');
        }
        throw new AuthenticationError('You need to be logged in!');
      },},
Mutation: {
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
      // updateUser: async (parent, args, context) => {
      //   if (context.user) {
      //     return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      //   }
  
      //   throw new AuthenticationError('Not logged in');
      // },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
  
        const token = signToken(user);
  
        return { token, user };
      },
      addPost: async (parent, { postText }, context) => {
        if (context.user) {
          const post = await Post.create({
            postText,
            postAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { posts: post._id } }
          );
  
          return post;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
      removePost: async (parent, { postId }, context) => {
        if (context.user) {
          const post = await Post.findOneAndDelete({
            _id: postId,
            postAuthor: context.user.username,
          });
  
          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $pull: { posts: post._id } }
          );
  
          return post;
        }
        throw new AuthenticationError('You need to be logged in!');
      },
  
}
};

module.exports = resolvers;
