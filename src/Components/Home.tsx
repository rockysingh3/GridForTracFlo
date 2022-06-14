import React, { ReactElement } from "react";

import FilterListIcon from '@mui/icons-material/FilterList';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import { Paper } from "@mui/material";
import Grid from "./Grid";



/* importing the static columns and rows */
import { columns, rows } from "./Constants";




/* This component renders the grid  */
const Home = (): ReactElement => {

    return (
        
        <Paper style={{ height: '500px', width: '70%', margin: 'auto', marginTop: '5%' }}>
            <div className="header-icons" style={{ display: 'flex', padding: '10px' }}>

                {/* Filters styling and display */}
                <div style={{ display: 'flex', marginLeft: '10px'  }}>
                <FilterListIcon />
                <div >FILTERS</div>
                </div>

                {/* Columns styling and display */}
                <div style={{ display: 'flex', marginLeft: '10px'  }}>
                <ViewWeekIcon />
                <div> COLUMNS</div>
                </div>

                {/* exports styling and display */}
                <div style={{ display: 'flex', marginLeft: '10px'  }}>
                <SystemUpdateAltIcon />
                    <div>EXPORT</div>
                </div>
            </div>
        

            <Grid rows={rows} columns={columns} />
        </Paper>

    )
}


export default Home;