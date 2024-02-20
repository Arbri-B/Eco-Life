const Post = require('../models/post.model');
const moment = require('moment');

async function getLatLongFromAddress(address) {
    try {
        const apiKey = 'AIzaSyDNOnnW2lR3qZJqjZ8ZO2w4K0ajm-zmyGA';
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('Error fetching geocoding data');
        }

        const data = await response.json();

        if (data.results.length === 0) {
            throw new Error('No results found for the given address');
        }

        const location = data.results[0].geometry.location;
        const {
            lat,
            lng: long
        } = location;

        return {
            lat,
            long
        };
    } catch (error) {
        console.error(error);
        return null;
    }
}

module.exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find().populate('participants').exec();

        // Calculate time remaining for each post and add a new property 'timeRemaining'
        allPosts.forEach(post => {
            const currentTime = moment();
            const startTime = moment(post.startTime);
            post.timeRemaining = startTime.diff(currentTime, 'minutes');
        });

        // Sort the posts based on timeRemaining in ascending order
        const sortedPosts = allPosts.sort((a, b) => a.timeRemaining - b.timeRemaining);

        res.json({
            posts: sortedPosts
        });
    } catch (err) {
        console.log(err);
        res.json({
            message: 'Something went wrong',
            error: err
        });
    }
};

module.exports.confirmParticipation = async (req, res) => {
    const postId = req.params.id;
    const userId = req.body.userId;

    try {
        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({
                error: 'Post not found'
            });
        }

        if (post.participants.includes(userId)) {
            return res.status(400).json({
                error: 'User already confirmed participation'
            });
        }

        post.participants.push(userId);

        await post.save();

        res.json({
            post
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal Server Error'
        });
    }
};

module.exports.getTopThreePosts = (req, res) => {
    Post.find().sort({
            votesCount: -1
        }).limit(3)
        .then((allPosts) => {

            res.json({
                posts: allPosts
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.getOnePost = (req, res) => {
    Post.findOne({
            _id: req.params.id
        })
        .then(onePost => {
            res.json({
                post: onePost
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.createPost = async (req, res) => {
    const coordinates = await getLatLongFromAddress(req.body.address);
    const post = {
        title: req.body.title,
        address: req.body.address,
        description: req.body.description,
        startTime: req.body.startTime,
        lat: coordinates.lat,
        long: coordinates.long,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId
    }
    console.log(coordinates);
    Post.create(post)
        .then(newlyCreatedPost => {
            res.json({
                post: newlyCreatedPost
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}

module.exports.getOnePostAndUpdate = (req, res) => {
    Post.findOneAndUpdate({
                _id: req.params.id
            },
            req.body, {
                new: true
            }
        )
        .then(updatedPost => {
            res.json({
                poll: updatedPost
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}


module.exports.deletePost = (req, res) => {
    Post.deleteOne({
            _id: req.params.id
        })
        .then(result => {
            res.json({
                result: result
            })
        })
        .catch((err) => {
            console.log(err)
            res.json({
                message: 'Something went wrong',
                error: err
            })
        });
}