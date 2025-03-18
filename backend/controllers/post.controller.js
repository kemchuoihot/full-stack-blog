import ImageKit from "imagekit";
import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 2;

    const query = {};

    console.log(req.query);

    const cat = req.query.cat;
    const searchQuery = req.query.search;
    const sortQuery = req.query.sort;
    const featured = req.query.featured;

    if (cat) {
      query.category = cat;
    }

    if (searchQuery) {
      query.title = { $regex: searchQuery, $options: "i" };
    }

    let sortObj = { createdAt: -1 };

    if (sortQuery) {
      switch (sortQuery) {
        case "newest":
          sortObj = { createdAt: -1 };
          break;
        case "oldest":
          sortObj = { createdAt: 1 };
          break;
        case "popular":
          sortObj = { visit: -1 };
          break;
        case "trending":
          sortObj = { visit: -1 };
          query.createdAt = {
            $gte: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
          };
          break;
        default:
          break;
      }
    }

    if (featured) {
      query.isFeatured = true;
    }

    const posts = await Post.find(query)
      .sort(sortObj)
      .limit(limit)
      .skip((page - 1) * limit);

    const totalPosts = await Post.countDocuments();
    const hasMore = page * limit < totalPosts;

    res.status(200).json({ posts, hasMore });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const createPost = async (req, res) => {
  try {
    let slug = req.body.title.replace(/ /g, "-").toLowerCase();

    let existingPost = await Post.findOne({ slug });

    let counter = 2;

    while (existingPost) {
      slug = `${req.body.title.replace(/ /g, "-").toLowerCase()}-${counter}`;
      existingPost = await Post.findOne({ slug });
      counter++;
    }

    const newPost = new Post({ slug: slug, ...req.body });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post has been deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: err.message });
  }
};

const imagekit = new ImageKit({
  urlEndpoint: "https://ik.imagekit.io/thinhpx33",
  publicKey: "public_BCNDy50hddiZdJHDM/iUMGjgrn0=",
  privateKey: "private_rwODJgyOhg7ADPzmBf7mA0HKi54=",
});

export const uploadAuth = async (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
};