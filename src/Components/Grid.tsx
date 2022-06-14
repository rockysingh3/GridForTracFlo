import React, { ReactElement } from "react";
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';



interface Props {
    columns: GridColDef[];
    rows: GridRowsProp;
}



const Grid = ({ columns, rows }: Props): ReactElement => {
    return (
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
            />
    )
}

export default Grid;