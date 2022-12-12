import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Quiz } from "./Homepage";

const QuizApp = () => {
  const [questions, setQuestions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);

  // fetch questions using axios
  const fetchQuestions = async () => {
    const questionData = await axios.get(
      "https://cdn.jsdelivr.net/gh/RohtashTalan/quiz-app@master/src/components/data/question.json"
    );

    console.log(questionData.data);
    setQuestions(questionData.data);
  };

  // invoke Qustions loading function
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <>
      <div className="bg-gray-200 h-screen w-full">
        <div className="flex flex-col h-full w-[90%] mx-auto">
          <div className="h-24"></div>
          <div className="h-4/6 w-[600px] mx-auto">

            {/* // Question no  */}
            <div className="bg-gray-100 rounded p-4 font-bold text-2xl text-blue-600">
              {questions && (
                <>
                  Question : {currentQuestion + 1} / {questions.mcqs.length}
                </>
              )}
            </div>

            {/* Question and options */}
            <div className="bg-gray-600 rounded text-white h-96">
              {questions && (
                <>
                  <div className="p-4 divide-y">
                    <div id={"question-" + currentQuestion}>
                      {questions.mcqs[currentQuestion].question}
                    </div>
                    <ul className=" ml-10 mt-6">
                      {questions.mcqs[currentQuestion].choices.map((option) => (
                        <>
                          <li>
                            <input
                              type="radio"
                              name={"choice-" + currentQuestion}
                            />
                            {option}
                          </li>
                        </>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>


            {/* Submit buttons */}
            <div className="flex  justify-between text-white font-semibold py-4 px-2">
              <div className="flex justify-around w-48">
                <button
                  onClick={() =>
                    setCurrentQuestion(
                      currentQuestion === 0 ? 0 : currentQuestion - 1
                    )
                  }
                  className="py-2 px-4 bg-blue-500 rounded-md"
                >
                  Previous
                </button>
                <button
                  onClick={() =>
                    setCurrentQuestion(
                      currentQuestion === questions.mcqs.length - 1
                        ? currentQuestion
                        : currentQuestion + 1
                    )
                  }
                  className="py-2 px-4 bg-blue-500 rounded-md"
                >
                  Next
                </button>
              </div>

              <button className="py-2 px-4 bg-orange-500 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizApp;
