import React from 'react'

const QuestionList = ({savedQuestions, i, setEditQuestionInfo }) => {
  return (
  <section className="w-11/12 mt-[9vh] bg-gray-100 rounded-xl p-9">
        <table className='w-full center flex-col gap-5'>
            <thead className='bg-gray-00 w-full'>
                <tr className='w-full flex justify-between'>
                    <th className="sn">S/N</th>
                    <th>Question</th>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>D</th>
                    <th>Answer</th>
                    <th ></th>
                    <th ></th>
                </tr>
            </thead>

            <tbody className='w-full center flex-col gap-6'>
            {savedQuestions.map((question, key) => (
                    <tr  key={key}
                    className='bg-opacity-30 w-full
                     grid grid-cols-9'>
                        <td className="sn">{i += 1}</td>
                        <td>{question.question}</td>
                        <td>{question.optionA}</td>
                        <td>{question.optionB}</td>
                        <td>{question.optionC}</td>
                        <td>{question.optionD}</td>
                        <td>{question.answer}</td>
                        <td className="">
                        <div className="">
                            <button onClick={() =>{
                                // setShowEditQuestion(true)
                                setEditQuestionInfo({
                                    question: question.question,
                                    optionA: question.optionA,
                                    optionB: question.optionB,
                                    optionC: question.optionC,
                                    optionD: question.optionD,
                                    answer: question.answer,
                                    questionId: question.questionId,
                                    questionNo: key+1
                                })
                            }}
                                className=""
                            ><i className="bi bi-pencil-fill"></i></button>
                        </div>
                        </td>
                        <td className="opt">
                            <div className="editTd">
                                <button onClick={() =>{
                                    setQuestionTobeDeleted(question.id)
                                    setConfirm(true)
                                    setConfirmFunction('deleteQuestion')
                                    setConfirmMessage(`Do you want to delete question ${key+1 }?`)
                                    savedQuestions.length == 1 &&
                                    axios.post(`${dbLocation}/exams.php/${examKey}/Inactive`).then(setExamStatus('Inactive')
                                    )                                                
                                    }} className="danger"> 
                                    <i className="bi bi-x"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    
  </section>
  )
}

export default QuestionList