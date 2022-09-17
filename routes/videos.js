const express = require('express');
const { getAllvideos, createVideos, updateVideo, deleteVideo, getSingleVideo } = require('../controllers/videoControllers');
const requireAuth = require('../middleware/requireAuth');
const VideoModel = require('../models/VideoModel')



// express app

const router = express()


// middleware
// router.use(requireAuth)


// get all videos
router.get('/', getAllvideos)

// get single video
router.get('/:id', getSingleVideo)

// create new videos
router.post('/', requireAuth, createVideos);

// update video
router.patch('/:id', updateVideo)

// delete video
router.delete('/:id', deleteVideo)



// export router
module.exports = router;