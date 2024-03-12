const express = require("express");
const router = express.Router();
const Blog = require("../models/blog");

//Post Method
// router.route("/*").post((req, res) => {
//   res.status(200).send("POST API auth-server!");
// });

router.route("/post").post(async (req, res) => {
  const data = new Blog({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });
  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.route("/getAll").get(async (req, res) => {
  try {
    const data = await Blog.find();
    res.json(data);
  } catch (error) {
    res.json({ message: error.message });
  }
});

// router.get("/getAll", (req, res) => {
//   res.send("Get All API");
// });

//Update by ID Method
router.patch('/update/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const updatedData = req.body;
      const options = { new: true };

      const result = await Blog.findByIdAndUpdate(
          id, updatedData, options
      )

      res.send(result)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

// //Get by ID Method
// router.get("/getOne/:id", (req, res) => {
//   res.send(req.params.id);
// });

// //Update by ID Method
// router.patch("/update/:id", (req, res) => {
//   res.send("Update by ID API");
// });

// //Delete by ID Method
// router.delete("/delete/:id", (req, res) => {
//   res.send("Delete by ID API");
// });

//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
  try {
      const id = req.params.id;
      const data = await Blog.findByIdAndDelete(id)
      res.send(`Document with ${data.title} has been deleted..`)
  }
  catch (error) {
      res.status(400).json({ message: error.message })
  }
})

module.exports = router;
