import { Card, CardContent, Box, Typography, Button } from '@mui/material'

function Todo(props){
    return (
        <Card sx={{margin: '12px', width: '256px'}}>
            <CardContent style={{padding: 0}}>
              <Box display="flex" flexDirection="row">
                <Box sx={{ display: 'flex'}} p={2}>
                  <Typography display="inline">{props.name}</Typography>
                </Box>
                <Box sx={{ display: 'inline-flex', marginLeft: 'auto'}}>
                  <Button centerRipple onClick={() => {
                      props.remove(props.name)
                  }}>X</Button>
                </Box>
              </Box>
            </CardContent>
        </Card>
    )
}

export default Todo;