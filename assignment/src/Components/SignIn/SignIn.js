import React from 'react'
import classes from "./styles.module.scss"
import Form from "./Form/Form"
function SignIn() {
  return (
    <>
    <div className='mainSignin'>
      <div className={classes.container1}>
        <div className={classes.logo}></div>
        <Form />
        <div className={classes.para}><p>Already have an account ?<a href=''>Sign in</a></p></div>
      </div>
    </div>
    </>
  )
}

export default SignIn