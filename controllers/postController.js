import Post from "../models/postModel.js";

export const getPosts = async (req, res) => {
    const posts = await Post.find().populate("userId");
    res.json(posts);
}

export const createPost = async (req, res) => {
    const { title, content, userId } = req.body;
    const post = new Post({ title, content, userId });
    await post.save();
    res.status(201).json(post);
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.status(204).send();
}