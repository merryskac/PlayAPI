import mongoose from "mongoose";

const commentScheme = new mongoose.Schema({
  username:{
    type: String,
    require: true
  },
  comment:{
    type: String,
    require: true
  },
  videoID:{
    type: String,
    require: true
  },
  timestamp:{
    type: Date,
    default: Date.now
  }
})

const Comment = mongoose.model('Comment', commentScheme)

export function commentList(videoID){
  const comments = Comment.find({videoID: videoID})
  return comments
}

export async function addComments(username, comment, videoID){
  const addComment = new Comment({
    username: username,
    comment: comment,
    videoID: videoID
  })
  await addComment.save()
  return true
}