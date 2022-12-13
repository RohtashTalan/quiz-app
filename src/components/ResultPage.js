import React, { useState } from "react";

const QuizResult = ({ ...ans }) => {
  const questions = ans.questions.mcqs;
  const userAnswers = ans.checkedAnswer;


  // count score of user
let score = 0;
for(let index = 0; index < questions.length; index++) {
    if(userAnswers[`Question_${index}`] && userAnswers[`Question_${index}`] != null && userAnswers[`Question_${index}`] === questions[index].correct){
        score++;
    }
}

  return (
    <>
    <div className="text-center p-4 text-2xl uppercase">
        congratulation your score is : <span className="font-bold text-3xl">{score}</span>/{questions.length}
    </div>
      <div className="h-4/6 w-[600px] mx-auto">
        {questions &&
          questions.map((que, i) => (
            <>
              {/* // Question no  */}
              <div className="bg-gray-100 rounded p-4 font-bold text-2xl text-blue-600"></div>

              {/* Question and options */}
              <div className="bg-gray-600 rounded text-white py-6">
                <>
                  <div className="p-4">

                    {/* not Attempted sign */}
                    <span className="text-sm text-yellow-300 ">
                        {userAnswers[`Question_${i}`] ? (''):('Not Attempted')}
                    </span>

                    {/* full question */}
                    <h1>{que.question}</h1>

                    <ul className=" ml-10 mt-6">
                      <>
                        {que.choices.map((option) => (
                          <>

                          {/* checking against user selected and correct answer */}
                          
                            {option === userAnswers[`Question_${i}`] ? (
                              <>
                                {que.correct ===
                                userAnswers[`Question_${i}`] ? (<>
                                  <li
                                    className={`p-1 my-6 shadow rounded-lg shadow-green-300 bg-green-500 hover:bg-gray-200 hover:text-black hover:cursor-pointer`}
                                  >
                                    <span className="mx-1">{option} </span>
                                  </li> 
                                  </>
                                ) : (
                                  <li className="p-1 my-6 shadow rounded-lg shadow-gray-300 bg-red-500 hover:bg-gray-200 hover:text-black hover:cursor-pointer">
                                    <span className="mx-1">{option} </span>
                                  </li>
                                )}
                              </>
                            ) : (
                              <>
                                {que.correct === option ? (
                                  <li
                                    className={`p-1 my-6 shadow rounded-lg shadow-green-300 bg-green-500 hover:bg-gray-200 hover:text-black hover:cursor-pointer`}
                                  >
                                    <span className="mx-1">{option} </span>
                                  </li>
                                ) : (
                                  <li className="p-1 my-6 shadow rounded-lg shadow-gray-300 bg-gray-500 hover:bg-gray-200 hover:text-black hover:cursor-pointer">
                                    <span className="mx-1">{option} </span>
                                  </li>
                                )}
                              </>
                            )}
                          </>
                        ))}
                      </>
                    </ul>
                  </div>
                  <div className="ml-12 mb-4 font-bold">EXPLANATION  : <span className="font-normal mx-4 ">{que.explanation}</span></div>
                </>
              </div>
              
            </>
          ))}
      </div>
    </>
  );
};

export default QuizResult;
