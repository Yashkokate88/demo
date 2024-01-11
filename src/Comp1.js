import {Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as yup from "yup"
import RedErrorMessage from './RedErrorMessage'

function Comp1() {
 const [form,setForm] = useState({})
 const kaka=yup.object({
 name:yup.string().min(3).max(10).required(),
 email:yup.string().email().required(),
 pass:yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/).required(),
 Cpass:yup.string().required().oneOf([yup.ref("pass")],"both password must be same"),
 gender:yup.string().required(),
 hobbies:yup.array().min(1).max(2).required(),
 countries:yup.string().required(),
 comments:yup.string().min(10).max(100).required()
 })
  return (
    <div>
      <Formik
      initialValues={{
        name:"",email:"",pass:"",Cpass:"",gender:"",
        comments:"",countries:"",hobbies:""
      }}
      validationSchema={kaka}
      onSubmit={(values,action)=>{
        action.resetForm()
        console.log(values)
        setForm(values)
      }}
      >
        <Form>
        <label>Enter Name:</label><br/>
          <Field type="text" name="name"/><br/>
          <RedErrorMessage kaka='name'/><br/>
          <br/>
          <label>Enter Email:</label><br/>
          <Field type="text" name="email"/><br/>
          <RedErrorMessage kaka='email'/><br/>
          <br/>
          <label>Enter Password:</label><br/>
          <Field type="password" name="pass"/><br/>
          <RedErrorMessage kaka='pass'/><br/>
          <br/>
          <label>Confirm Password:</label><br/>
          <Field type="password" name="Cpass"/><br/>
          <RedErrorMessage kaka='Cpass'/><br/>
          <br/>
          <label>Gender:</label><br/>
          <label>Male: </label>
          <Field type="radio" value="male" name="gender"/>&nbsp;
          <label>Female: </label>
          <Field type="radio" value="female" name="gender"/>
          <br/>
          <RedErrorMessage kaka='gender'/><br/>
          <br/>
          <label>Comments: </label><br/>
          <Field as="textarea" name="comments"/>
          <br/><RedErrorMessage kaka='comments'/><br/><br/>
          <label>Hobbies: </label><br/>
          <label>Riding: </label>
          <Field type="checkbox" value="ridding" name="hobbies"/>&nbsp;
          <label>Cycling: </label>
          <Field type="checkbox" value="cycling"
          name="hobbies"/>&nbsp;
          <label>Reading: </label>
          <Field type="checkbox" value="reading"
          name="hobbies"/>
          <br/>
          <RedErrorMessage kaka='hobbies'/><br/>
          <br/>
          <label>Select Country</label><br/>
          <Field name="countries" as="select">
           <option value="">Select</option>
           <option value="India">India</option>
           <option value="Australia">Australia</option>
           <option value="Indonesia">Indonesia</option>
          </Field><br/>
          <RedErrorMessage kaka='countries'/><br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <h1>{JSON.stringify(form)}</h1>
    </div>
  )
}

export default Comp1
