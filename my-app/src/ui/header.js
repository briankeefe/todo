import { Box, Typography } from '@mui/material'
import React from "react"
function Heading() {
return ( 
    <React.Fragment>
        <Box mt={6}>
            <Typography textAlign='center' color="whitesmoke" variant="h4">
                Simple To-do App
            </Typography>
        </Box>
    </React.Fragment>
    )
}

export default Heading
    