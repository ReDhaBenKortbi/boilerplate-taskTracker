import { ExerciseModel } from "../models/exercise.model.js";
import { UserModel } from "../models/user.model.js";
import { fromDate, toDate } from "../utils/dateFilter.js";
import { limitHandler } from "../utils/limitHandler.js";
async function loadLogs(req, res) {
  const {_id} = req.params;
  let queries = {
    from: req.query.from,
    to: req.query.to,
    limit: req.query.limit
  }
  try {
     // Find the user by ID
      const user = await UserModel.findById(_id);
        
     // Check if the user exists
      if (!user) {
          return res.status(404).json({ error: "Invalid Identifier" });
      }
      //find tasks related to this id
      let numberOfExercises = await ExerciseModel.countDocuments({username: user.username})
      //query
      let query = await ExerciseModel.find({username: user.username, date: {
        $gte: fromDate(queries.from),
        $lte: toDate(queries.to)
      }}).limit(limitHandler(queries.limit, numberOfExercises)).exec();

      //res
      return res.json({
          username: user.username,
          count: numberOfExercises,
          _id: user._id,
          log: [...query]
})
  } catch (error) {
    // Handle errors and return a server error response
    console.error("Error creating exercise:", error); // Optional: Log the error for debugging
    return res.status(500).json({
        error: "Internal Server Error",
        message: error.message,
    });
  }
}
export default loadLogs;