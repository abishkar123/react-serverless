import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import '../App.css'
import { CustomeForm } from '../component/CustomeForm'

export const AddBook = () => {
    const [form, setform] = useState({})

    const handleonchange = e =>{
        const {name,value} = e.target
           setform({

            ...form,
            [name]:value,

        })
    }

    const handleonsubmit =async (e)=>{
        e.preventDefault()
       
    }
    console.log(form)

    const inputes = [
        {
          label: "First Name",
          type: "text",
          name: "fname",
          placeholder: "First Name",
          required: true,
        },
        {
          label: "Last Name",
          type: "text",
          name: "lname",
          placeholder: "Last Name",
          required: true,
        },
        
        {
            label: "Email",
            type: "text",
            name:"email",
            placeholder: "Email",
            required: true,
          },

           {
          label: "Phone Number",
          type: "number",
          name: "phonenumber",
          placeholder: "Phone Number",
          formatter:"+61 (###)-###-####",
          required: true,
          },
        ]

  return (
    <div>
     <div className='box-center'>
         <h2 className='add-book'>Contact Details</h2>
         
         </div>

         <div className='box-center p-3'> 
         <div className='text-center box p-3'>
            
            <h3 className='title'>Contact Detatils Here</h3>
            <hr className='mb-5'/>
            
           

            <Form className='shoadow-lg rounded' onSubmit={handleonchange}>
                <Row>
                    <Col xs>
                    {
                    inputes.map((item)=>(
                        <CustomeForm {...item}
                        onChange={handleonchange}
                        />
                    ))
                }

                      <div className='d-grid'>
                        <Button type='submit' variant='dark' >
                            Submit
                        </Button>

                    </div>
                    </Col>
                    

                </Row>
               

            </Form>
            
         

         </div>
         </div>
          
        




     
        
    </div>
  )
}
