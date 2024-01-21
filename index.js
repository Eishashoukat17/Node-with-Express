const express = require("express");
const app = express();
const{users, addUser, updateUser } = require("./users");
const user = require("./users");
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("Hello Express");
});

app.get("/users", (req, res) => {
    res.json(users);
});
app.post("/users", (req, res) =>{
    addUser(req.body);
    res.json(users);
});

// app.put("/:id", async (req, res) => {
//     const { id } = req.params;
//     try {
//       const user = await User.findByIdAndUpdate(id, req.body);
//       res.json(user);
//     } catch (error) {
//       console.log("users");
//       res.send("Something went wrong..");
//     }
//   });
  

app.put("/users/:id", (req, res) => {
  console.log(req.params);
  const{id} = req.params;
  updateUser(id, req.body);
  res.json(users);
});

app.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      res.send("User Deleted successfully");
    } catch (error) {
      console.log("users"), res.send("Something went wrong..");
    }
  });

app.listen(8000, () => {
    console.log(`Server is running on ${8000}`);
}
);