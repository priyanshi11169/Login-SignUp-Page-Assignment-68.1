import { Link } from "react-router-dom"
import * as Yup from "yup"
import "./SignUpPage"
import { useFormik } from "formik"

function SignUpPage() {

  function callSignUpApi(values) {
    console.log("sending",values.FirstName, values.LastName, values.EmailAddress, values.password, values.confirmPassword)
  };

  const schema = Yup.object().shape({

    FirstName: Yup.string().required(),
    LastName: Yup.string().required(),
    EmailAddress: Yup.string().email().required(),
    password: Yup.string().min(5).max(11).required(),
    confirmPassword: Yup.string().min(5).max(11).required(),

  })

  const {handleSubmit, values, handleChange, resetForm, errors, handleBlur, touched
   } = useFormik({
    initialValues:{
      FirstName:"",
      LastName:"",
      EmailAddress:"",
      password:"",
      confirmPassword:"",
    },
    onSubmit:callSignUpApi,
    validationSchema:schema
  })

  return (
    <div className="bg-blue-400 h-screen flex flex-col items-center justify-center gap-y-7">
      <h1 className="text-4xl self-center ">Sign Up</h1>
      <form onSubmit={handleSubmit} action="" className="space-y-8 flex flex-col ">
        <div>
          <label htmlFor="firstname" className="sr-only">First Name</label>
          <input onBlur={handleBlur} value={values.FirstName} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="text" name="FirstName" id="firstname" placeholder="First Name" required />
          {touched.FirstName && errors.FirstName && (
            <div  className="text-red-700">{errors.FirstName}</div>
          )}
        </div>
        <div>
          <label htmlFor="lastname" className="sr-only">Last Name</label>
          <input onBlur={handleBlur}  value={values.LastName} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="text" name="LastName" id="lastname" placeholder="Last Name" required />
          {touched.LastName && errors.LastName && (
            <div className="text-red-700">{errors.LastName}</div>
          )}
        </div>
        <div>
          <label htmlFor="emailId" className="sr-only">Email Address</label>
          <input onBlur={handleBlur}  value={values.EmailAddress} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="email" name="EmailAddress" id="emailId" placeholder="Email Address" required />
          {touched.EmailAddress && errors.EmailAddress && 
            <div className="text-red-700">{errors.EmailAddress}</div>
          }
        </div>
        <div>
          <label htmlFor="password"  className="sr-only">Create Password</label>
          <input onBlur={handleBlur} value={values.password} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="password" name="password" id="password" placeholder="Create Password" required />
          {touched.password && errors.password && 
            <div className="text-red-700">{errors.password}</div>
          }
        </div>
        <div>
          <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
          <input onBlur={handleBlur}  value={values.confirmPassword} onChange={handleChange} className="border text-2xl p-3 rounded-xl  border-white" type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" required />
          {touched.confirmPassword && errors.confirmPassword && 
            <div className="text-red-700">{errors.confirmPassword}</div>
          }
          
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