import express from 'express'
import { getVideos, uploadVideo } from '../use case/channel.js'
const channelRouters = express.Router()
import {channelGet, channelPost} from '../controllers/channel.controller.js' 

channelRouters.get('/thumbnails', channelGet)

channelRouters.post('/post-video',channelPost)


export default channelRouters 