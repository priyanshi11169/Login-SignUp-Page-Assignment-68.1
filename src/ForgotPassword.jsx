import { Link } from "react-router-dom"
import "./ForgotPassword"
import { useFormik } from "formik"

function ForgotPassword() {

  function callPasswordLogin(values) {
    console.log("Sending email",values.email)
  }

  const {  handleSubmit, values, handleChange, resetForm } = useFormik({
    initialValues:{
      email:"",
    },
    onSubmit:callPasswordLogin,
  })

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-purple-300">
      <form onSubmit={handleSubmit} action="" className="border-2 bg-white space-y-4 p-2">
         <h1 className="text-2xl ">Forgot Password?</h1>
        <div>
          <label htmlFor="email-address" className="sr-only">Enter Email</label>
          <input value={values.email} onChange={handleChange} className="text-2xl p-2 border-2 border-gray-500 " type="email" name="email" id="email-address" placeholder="Enter Valid Email" required  />
        </div>
        <button type="submit" className="border-2 bg-blue-600 text-white px-7 py-2 rounded-md  ">Submit</button>
        <button onClick={resetForm} className="border px-7 py-2 bg-green-500 rounded-md text-white">Reset</button>
        <div>Back to <Link to="/" className="text-blue-700 ">Login</Link></div>
      </form>
    </div>
  )
}

export default ForgotPassword