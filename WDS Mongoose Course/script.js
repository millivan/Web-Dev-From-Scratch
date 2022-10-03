const mongoose = require("mongoose");
const User = require("./User");
mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("connected");
  },
  (e) => console.error(e)
);

run();
async function run() {
  try {
    // const user = await User.create({
    //   name: "Alvin",
    //   age: 20,
    //   email: "estt@st.co",
    //   hobbies: ["Weightlifting", "Bowling"],
    //   address: {
    //     street: "Main St",
    //   },
    // });
    // const user = await User.find({ name: "Alvin" });
    // const user = await User.findById("633b151329ec4332cd735981");
    const user = await User.where("name")
      .equals("Alvin")
      .where("age")
      .equals(20)
      .populate("bestFriend")
      .limit(1);
    user[0].bestFriend = "633b151329ec4332cd735981";
    await user[0].save();
    // await User.where("age").gt("12").limit().select()
    console.log(user);
    // const user = new User({ name: "Alvin", age: 20 });
    // await user.save();
  } catch (e) {
    console.log(e.errors);
  }
}
