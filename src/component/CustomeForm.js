import React from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'

export const CustomeForm = ({label, ...rest}) => {
  return (
    <div>
        <FloatingLabel
        controlId="floatingInput"
        label={label}
        className="mb-3"
      >
        <Form.Control {...rest} />
      </FloatingLabel>
    </div>
  )
}
