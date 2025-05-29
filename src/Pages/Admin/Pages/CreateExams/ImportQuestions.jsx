import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios from "axios"
import { useContext, useState } from "react"
import { AppContext } from "../../../../App"
import { dbLocation, PrimaryButtonCLass, SecondaryButtonCLass } from "../../../../assets/Constants"
import { useMyAlert } from "../../../../assets/Hooks/useMyAlert"

export const ImportQuestions = ({fetchQuestions, examKey, setExamStatus, examStatus}) =>{
    const [ doc, setDoc ] = useState(null)
    const triggerAlert = useMyAlert()
    const schema = yup.object().shape({

    })
    
    const { register, handleSubmit, formState: {errors}, reset, setValue } = useForm({
        resolver: yupResolver(schema)
    })
    
  
    const setFile = (e) =>{
       const inputedFile = e.target.files[0]
       if(inputedFile == undefined){
           e.target.value = null
           setDoc(null)
          
       }else{
        if(inputedFile.type === 'text/csv' ){
            setDoc(inputedFile)
            
        }
        else{
            alert('File must be in csv format')
            e.target.value = null
        }
       }

       }
        
    const postFile = (data) =>{
        setValue('file', doc)
        axios.post(`${dbLocation}/examquestions.php/${examKey}/save`, data, {
        headers: {
                'Content-Type': "multipart/form-data"
            }
        }).then(function(response) {
            if(response.data.status == 1){
                fetchQuestions(examKey)
                triggerAlert("success", 'Questions successfully imported')
                document.querySelector('#file').value = null
                setDoc(null)
                axios.post(`${dbLocation}/exams.php/${examKey}/Inactive`)
                setExamStatus('Inactive')
            }else{
                triggerAlert("error", 'Failed to import questions')
            }
        }).catch(() => {
            triggerAlert("error", 'Failed to import questions')
        })
    }



    return(
        <div className="flex flex-wrap gap-5 items-center">
            <input type="file" name="file" accept=".csv"  id="file" 
            onChange={setFile}  
            className={doc != null && `bg-gray-200 p-2 rounded-r-xl shadow-lg`}
            style={{
                display: doc == null ? 'none' : 'block' 
            }}
            />

            <button 
            className={`${doc == null ? 'block' : 'hidden'} ${SecondaryButtonCLass}`}
             onClick={() =>{
                document.querySelector('#file').click()
            }}>
                Import questions 
            </button>

            <button name="file" onClick={handleSubmit(postFile)} 
            className={`${doc == null ? 'hidden' : 'block'} ${PrimaryButtonCLass}`}
            >Import</button>
        </div>
    )
}