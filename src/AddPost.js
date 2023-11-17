// AddPost.js
import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
// import "./AddPost.css"; // Create a corresponding CSS file for styling

function AddPost({ onClose }) {
  const [user, setUser] = useState("");
  const [postImage, setPostImage] = useState("");
  const [caption, setCaption] = useState("");

  const handleAddPost = () => {
    // Check if required fields are not empty before adding the post
    if (user && postImage) {
      const newPost = {
        user,
        postImage,
        likes: 0,
        timestamp: "now",
      };

      // Optionally, you can include the caption in the new post
      if (caption) {
        newPost.caption = caption;
      }

      // Pass the new post to the parent component
      // Here, you might want to dispatch an action to update the Redux store with the new post
      // For simplicity, I'm just logging the new post to the console
      console.log("New Post:", newPost);

      // Clear the input fields after adding the post
      setUser("");
      setPostImage("");
      setCaption("");

      // Close the modal
      onClose();
    } else {
      // Handle error or display a message indicating that required fields are missing
      console.error("User and post image are required fields");
    }
  };

  return (
    <div className="addPost">
      <h2>Add a New Post</h2>
      <TextField
        label="User"
        variant="outlined"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Post Image URL"
        variant="outlined"
        value={postImage}
        onChange={(e) => setPostImage(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Caption"
        variant="outlined"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        fullWidth
        multiline
        rows={3}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddPost}>
        Add Post
      </Button>
      <Button variant="contained" color="secondary" onClick={onClose}>
        Close
      </Button>
    </div>
  );
}
export default AddPost;
