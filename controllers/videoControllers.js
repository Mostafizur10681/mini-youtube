const { findByIdAndDelete } = require("../models/VideoModel");
const videoModel = require("../models/VideoModel");




// list of videos
const getAllvideos = async (req, res) => {
    try {
        const video = await videoModel.find({}).sort({ createdAt: -1 })
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// single video
const getSingleVideo = async (req, res) => {
    const { id } = req.params
    try {
        const video = await videoModel.findById(id).sort({ createdAt: -1 })
        if (!video) {
            return res.status(400).json({ error: 'No such video.' });
        }
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// create video
const createVideos = async (req, res) => {
    // req.body
    const { title, description, url, subsription, comments } = req.body;
    try {
        const video = await videoModel.create({ title, description, url, subsription, comments });
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }

};

// update video
const updateVideo = async (req, res) => {
    const { id } = req.params;

    try {
        const video = await videoModel.findOneAndUpdate({ _id: id }, { ...req.body })
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

// delete video

const deleteVideo = async (req, res) => {
    const { id } = req.params;
    try {
        const video = await videoModel.findByIdAndDelete({ _id: id });
        res.status(200).json(video);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = {
    getAllvideos,
    getSingleVideo,
    createVideos,
    updateVideo,
    deleteVideo
}