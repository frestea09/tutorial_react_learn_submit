import React from 'react'
const TableHeader = () =>{
    return(
        <thead>
            <tr>
                <td>Nim</td>
                <td>Name</td>
            </tr>
        </thead>
    )
}
const TableBody = props =>{
    const rows = props.dataMahasiswa.map(
        (row,index) =>{
            return(
                <tr key={index}>
                    <td>{row.nim}</td>
                    <td>{row.nama}</td>
                    <td>
                        <button onClick={(()=>props.removeDataMahasiswa(index))}>Delete</button>
                    </td>
                </tr>
            )
        }
    )
    return <tbody>{rows}</tbody>
}
const Table = props =>{
    const {dataMahasiswa,removeDataMahasiswa} = props
    return(
        <table>
            <TableHeader/>
            <TableBody dataMahasiswa = {dataMahasiswa} removeDataMahasiswa= {removeDataMahasiswa}/>
        </table>
    )
}

export default Table