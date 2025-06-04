// import { useNavigate } from 'react-router'
import  DataTable  from 'react-data-table-component'
import { useState } from 'react'
import { FormatTime } from '../../../../assets/Functions'



export const ResultsTable = ({data, currentPage=1}) => {
    const [ loading, setLoading ] = useState(false)


    

    const columns = [
        {
            id: '#',
            name: <p className="font-bold text-sm">#</p>,
            selector: row => row.index,
            sortable: false,
            cell: (row, index) => <div>{(index + 1 + currentPage * 10) - 10}</div>,
            width: 7+'%',
        },
        {
            id: 'studentName',
            name:  <p className="font-bold text-sm">Student</p>,
            sortable: true,
            selector: row => row.studentName
        },
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



