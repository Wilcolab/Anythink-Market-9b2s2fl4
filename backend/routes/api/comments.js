/**
 * Express router for comment-related API endpoints
 * @type {Router}
 */

/**
 * Retrieves all comments from the database
 * @route GET /
 * @returns {Promise<void>} JSON array of all comments
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Deletes a comment by its ID
 * @route DELETE /:id
 * @param {string} req.params.id - The ID of the comment to delete
 * @returns {Promise<void>} JSON object with success message
 * @throws {Error} Returns 500 status with error message if deletion fails
 */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
router.get("/", async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch comments" });
    }
});

// add another endpoint for deleting a comment
router.delete("/:id", async (req, res) => {
    try {
        await Comment.findByIdAndDelete(req.params.id);
        res.json({ message: "Comment deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete comment" });
    }
});