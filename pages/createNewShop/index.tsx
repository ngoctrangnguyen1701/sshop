import type { NextPage } from 'next'
import React, { useContext, useState } from 'react'
import { ColorThemeContext } from '../contexts/ColorThemeContext'
import { Container, Box, Button, Grid,  } from '@mui/material'
import moment from 'moment'
import { createShop } from '../api'
import Header from '../components/Header'

const CreateNewShop: NextPage = (props) => {
  const { colorTheme } = useContext(ColorThemeContext)
  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    registerDate: moment(new Date()).format('YYYY-MM-DD')
  })

  const onChangeFormValues = (e: any) =>{
    const name = e.target.name
    const value = e.target.value
    console.log(name);
    console.log(value);
    
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = async () =>{
    console.log('formValues: ', formValues);
    const res = await createShop(formValues)
    console.log(res);
    
  }

  return (
    <div style={{ backgroundColor: colorTheme.backgroundColorContent }}>
      <Header />
      <h3 className="ms-3 mb-0" style={{ marginTop: '-30px' }}>Become to seller of SSHOP</h3>
      <Container className="py-5">
        <Box className="bg-white w-75 mx-auto">
          <h4 className="border p-3 mb-0">Register</h4>
          <form className="p-3 border-start border-end border-bottom">
            <Grid container spacing={3}>
              <Grid item md={6}>
                <small>Shop Name</small>
                <input
                  type="text"
                  className="form-control rounded-0 mt-2"
                  name="name"
                  onChange={e=>onChangeFormValues(e)}
                />
              </Grid>
              <Grid item md={6}>
                <small>Register Date</small>
                <input
                  readOnly
                  type="date"
                  value={formValues.registerDate}
                  className="form-control rounded-0 mt-2"
                  name="registerDate"
                />
              </Grid>
              <Grid item md={12}>
                <small>Descripton</small>
                <textarea
                  rows={4}
                  className="form-control rounded-0 mt-2"
                  name="description"
                  onChange={e=>onChangeFormValues(e)}
                />
              </Grid>
              <Grid item md={6}>
                <small>Avatar Shop</small>
                <input
                  type="file"
                  className="form-control rounded-0 mt-2"
                  name=""
                  //onChange={e=>onChangeFormValues(e)}
                />
              </Grid>
              <Grid item md={6}>
                <small>Cover Image</small>
                <input
                  type="file"
                  className="form-control rounded-0 mt-2"
                  name=""
                  //onChange={e=>onChangeFormValues(e)}
                />
              </Grid>
            </Grid>
            <div className="text-end mt-4">
              <Button
                className="me-2"
                variant="contained"
                size="large"
                color="secondary"
                onClick={()=>onSubmit()}
              >
                Accept
              </Button>
              <Button
                variant="contained"
                size="large"
                sx={{backgroundColor: 'gray'}}
                type="reset"
                //onClick={()=>router.push('/createNewShop')}
              >
                Reset
              </Button>
            </div>
          </form>
        </Box>
      </Container>
    </div>
  )
}

export default CreateNewShop