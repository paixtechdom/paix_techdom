import { useNavigate } from 'react-router'
import  DataTable  from 'react-data-table-component'
import { useState } from 'react'



export const ResultsTable = ({data, currentPage=1}) => {
    const [ loading, setLoading ] = useState(false)
    const navigate = useNavigate()

    const columns = [
        {
            id: '#',
            name: <p className="font-bold text-sm">#</p>,
            selector: row => row.product,
            sortable: false,
            cell: (row, index) => <div>{(index + 1 + currentPage * 10) - 10}</div>,
            width: 7+'%',
        },
        {   
            id: 'name',
            name:  <p className="font-bold text-sm">Full Name</p>,
            selector: row => row.studentName,
            sortable: true,
            width: 25+'%',
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
            selector: row => row.timeUsed,
        },
        {
            id: 'Date',
            name:  <p className="font-bold text-sm">Date</p>,
            sortable: true,
            selector: row => row.date
        },
    ] 
    const sortIcon = <i className="bi bi-chevron-down text-4xl" onClick={e => console.log(e.target)} ></i>


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
            onRowClicked={(row, o) => {
                navigate(`/orders/${row.id}`)
            }}
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



