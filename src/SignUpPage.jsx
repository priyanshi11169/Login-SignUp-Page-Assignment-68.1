import { Link } from "react-router-dom"
import "./SignUpPage"
import { useFormik } from "formik"

function SignUpPage() {

  function callSignUpApi(values) {
    console.log("sending",values.FirstName, values.LastName, values.emailAddress, values.password, values.confirmPassword)
  }

  const {handleSubmit, values, handleChange, resetForm } = useFormik({
    initialValues:{
      FirstName:"",
      LastName:"",
      emailAddress:"",
      password:"",
      confirmPassword:"",
    },
    onSubmit:callSignUpApi
  })

  return (
    <div className="bg-blue-400 h-screen flex flex-col items-center justify-center gap-y-7">
      <h1 className="text-4xl self-center ">Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-8 flex flex-col ">
        <div>
          <label htmlFor="firstname" className="sr-only">First Name</label>
          <input value={values.FirstName} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="text" name="FirstName" id="firstname" placeholder="First Name" required />
        </div>
        <div>
          <label htmlFor="lastname" className="sr-only">Last Name</label>
          <input value={values.LastName} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="text" name="LastName" id="lastname" placeholder="Last Name" required />
        </div>
        <div>
          <label htmlFor="emailId" className="sr-only">Email Address</label>
          <input value={values.emailAddress} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="email" name="emailAddress" id="emailId" placeholder="Email Address" required />
        </div>
        <div>
          <label htmlFor="password"  className="sr-only">Create Password</label>
          <input value={values.password} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="password" name="password" id="password" placeholder="Create Password" required />
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
          <input value={values.confirmPassword} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
        </div>
        <div className="self-center space-x-15  ">
         <button type="submit" className=" border p-3 bg-white text-blue-600 px-6 py-3">Sign Up</button>
         <button onClick={resetForm} className=" border-none p-3 bg-green-500  px-8 py-3 text-white">Reset</button>
         </div>
      </form>
      <h1 className="text-xl ">Back to <Link className="text-white " to="/">Login</Link></h1>
    </div>
  )
}

export default SignUpPage