const User = require("./User");
const Post = require("./Post");

// create associations
// many posts belong to 1 user
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// only 1 user belongs to each post
Post.belongsTo(User, {
    foreignKey: 'user_id',
});


module.exports = { User, Post };