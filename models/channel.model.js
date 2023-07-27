import mongoose from "mongoose";

const channelSchema = new mongoose.Schema({
  title:{
    type: String, 
    require: true
  },
  thumbnail_img:{
    type: String,
    require: true
  },
  created_at:{
    type: Date,
    default: Date.now
  },
  ended_at: {
    type: Date,
    default: null
  }
})

const Channel = mongoose.model('Channel', channelSchema)

export async function getAllVideos(){
  return await Channel.find()
}

export async function inputVideo(title,img){
  const app = new Channel({
    title: title,
    thumbnail_img: img
  })
  await app.save()
  return app
}

export async function getVideoById(id){
  return await Channel.findById(id)
}