// importing Questions Controllers
const Questions = require("../models/questionModel");

// importing Option Controller
const Option = require("../models/OptionsModel");

//To create a question
module.exports.createQuestion = async function (req, res) {
  try {
    // creating the questions
    const question = await Questions.create(req.body);
   
    // returning the resoponse
    return res.status(200).json({
      message: "question created succesfully",
      "data": question
    });
  } catch (err) {
    // checking for the error
    return res.status(465).json({
      message: "error in creating a questions",
      error: err.message,
    });
  }
};

//To delete a question
module.exports.deleteQuestion = async function (req, res) {
  try {
    // finding the particular Question
    const question = await Questions.findById(req.params.id);
    
    // If question is not found, return an error response
    if (!question) {
      return res.status(404).json({
        message: 'Question not found'
      });
    }
    
    // deleting all the options related to that question
    for (let optionId of question.options) {
      let option = await Option.findById(optionId);
      // checking whether option contains any votes or not
      if (option.votes > 0) {
        return res.status(401).json({
          message: "you cannot delete that option as it has some vote",
        });
      }
      // delete that particular option
      await option.findByIdAndDelete(optionId);
    }
    // deleting the question
    await Questions.findByIdAndDelete(req.params.id);

    // sending response
    return res.status(200).json({
      message: "question deleted succesfully",
    });
  } catch (err) {
    // checking for error
    return res.status(500).json({
      message: "internal server error",
      error: err.message,
    });
  }
};

//To view a question and it’s options
module.exports.getQuestionDetails = async function (req, res) {
  try {
    // finding and populating the question
    const question = await Questions.findById(req.params.id).populate(
      "options"
    );
    // returning the response
    return res.status(200).json(question);
  } catch (err) {
    // checking for the errors
    return res.status(465).json({
      message: "internal server error",
      error: err.message,
    });
  }
};
