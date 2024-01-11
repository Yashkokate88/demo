import { ErrorMessage } from 'formik'
import React from 'react'

function RedErrorMessage({kaka}) {
  return (
    <div style={{color:"red"}}>
      <ErrorMessage name={kaka}/>
    </div>
  )
}

export default RedErrorMessage
