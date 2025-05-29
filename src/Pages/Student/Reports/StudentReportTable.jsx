import { useNavigate } from 'react-router'
import  DataTable  from 'react-data-table-component'
import { useEffect, useState } from 'react'
import { FormatTime } from '../../../assets/Functions'
import axios from 'axios'
import { dbLocation } from '../../../assets/Constants'

/*
    the exam should stor the total score

    student info
    full name,
    level,
    department,
    faculty,
    matricNumber
*/

export const GetInfo = ({id, data}) => {
    const [ info, setInfo ] = useState("")

    useEffect(() => {
        getInfo(id)
    }, [])

    const getInfo = (examKey) => {   

        axios.get(`${dbLocation}/exams.php/getstudent/${examKey}`)
        .then((res) => {
            setInfo (res.data.examTitle)
        })
    }
    return info; // Return the function so it can be used in components
  };
  

  const examInfoRows = {
        id: 'name',
        name:  <p className="font-bold text-sm">Exam</p>,
        selector: row => row.examKey,
        cell: (row) => 
            <div>
                <GetInfo id={row.examKey}/>
            </div>,
        sortable: true,
        width: 25+'%',
  }


//   if i can do the fetching on the back end and add the data before bringing it to the frontend - to prevent many calls

export const StudentReportTable = ({data, currentPage}) => {
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    

    const columns = [
        {
            id: '#',
            name: <p className="font-bold text-sm">#</p>,
            selector: row => row.index,
            sortable: false,
            cell: (row, index) => <div>{(index + 1 + currentPage * 10) - 10}</div>,
            width: 7+'%',
        },
         
            examInfoRows
        ,
        {
            id: 'score',
            name:  <p className="font-bold text-sm">Score</p>,
            sortable: true,
            selector: row => row.score,
        },
        {
            id: 'timeUsed',
            name:  <p className="font-bold text-sm">Time Used</p>,
            sortable: true,
            selector: row => FormatTime(row.timeUsed),
        },
        {
            id: 'Date',
            name:  <p className="font-bold text-sm">Date</p>,
            sortable: true,
            selector: row => row.date
        },
    ] 
    const sortIcon = <i className="bi bi-chevron-down text-3xl ml-1"></i>


    return(
        <DataTable 
            title='Orders'
            data={data}
            sortIcon={sortIcon}
            columns={columns}
            highlightOnHover
            pointerOnHover
            noHeader
            striped
            // persistTableHead
            keyField="id"
            // onRowClicked={(row, o) => {
            //     navigate(`/orders/${row.id}`)
            // }}
            progressPending={loading}
            
            // paginationServer
            // pagination
            // paginationTotalRows={data.length}                    
            // paginationPerPage={1}
            

            // onChangePage={(page) => {
            //     setCurrentPage(page)
            // }}

            // onChangeRowsPerPage={(currentRowsPerPage) => setPerPage(currentRowsPerPage)}

        />
    )
}



