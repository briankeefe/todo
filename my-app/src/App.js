import './App.css';
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { Typography, Grid, Card, CardContent, Button, TextField, Paper } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import CustomCard from './ui/card'
import Logic from './ui/logic'
import React, { useState } from 'react';
import Header from './ui/header'

function App() {

  const [arr, setArr] = useState(['text', 'text2'])

  const [next, setNext] = useState('')

  const done = (str) => { setArr(arr.filter((item) => (item !== str))) }

  const submit = () => {
    add(clean(next))
    setNext('')
  }

  const add = (str) => {
    if (str !== '' && !arr.includes(str))
      setArr([...arr, str])
  }

  const keyPress = (e) => {
    if (e && e.key && e.key === 'Enter') {
      submit(next)
    }
  }

  const cleanFront = (str) => {
    let index = 0
    for (let i = 0; i < str.length; ++i) {
      if (str.charAt(i) === ' ') {
        index = i + 1
      } else {
        break
      }
    }
    let res = str.substring(index)
    console.log(res)
    return res
  }

  const cleanBack = (str) => {
    let index = str.length
    for (let i = str.length - 1; i >= 0; --i) {
      if (str.charAt(i) === ' ') {
        index = i
      } else {
        break
      }
    }
    let res = str.substring(0, index)
    console.log(res)
    return res
  }

  const clean = (str) => {
    return cleanBack(cleanFront(str))
  }

  return (
    <Container sx={{ backgroundColor: 'pink', minHeight: '120vh', maxWidth: '100vw', position: 'relative'}}>
      <CssBaseline />
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item xs={10}>
          <Header />
        </Grid>
        <Grid display='flex' item xs={9} justifyContent='center' alignItems='center' mt={6}>
          <Card sx={{ padding: '8px' }} >
            <Box sx={{ display: 'flex', flexDirection: 'row' }} >
              <TextField sx={{ float: 'left' }} value={next} onKeyPress={keyPress} onChange={(e) => setNext(e.target.value)}>Next Task</TextField>
              <Button onClick={submit}>Add</Button>
            </Box>
          </Card>
        </Grid>
        <Grid display='flex' flexDirection='column' justifyContent='center' alignItems='center' item xs={12} mt={6}>
          {arr.map((item) => (
            <CustomCard name={item} remove={done} />
          ))}
        </Grid>
      </Grid>
      <Grid sx={{paddingTop: '90vh', paddingBottom: '10vh'}} container justifyContent="center" alignItems="center">
        <Grid item xs={12} md={9}>
          <Box justifyContent="center">
            <Logic />
          </Box>
        </Grid>
      </Grid>
    </Container>

  );
}

export default App;
