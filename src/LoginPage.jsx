import { useFormik  } from "formik"
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import "./LoginPage.jsx"

function LoginPage() {

  function callLoginApi(values) {
    console.log("sending data",values.username,values.password);
  }

  const { handleSubmit, values, handleChange, resetForm } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: callLoginApi,
  })

  return (
    <div className="h-screen  flex flex-col  justify-center items-center bg-blue-700 ">
    <div> <IoCartOutline className=" text-9xl"/></div>
    <form  onSubmit={handleSubmit} className="space-y-4" >
    <div>
      <label htmlFor="name" className="sr-only">Username</label>
      <input required value={values.username} onChange={handleChange} name="username" type="text" placeholder="USERNAME" className="border-2 p-2 text-center text-2xl border-white  text-gray-200 rounded-xl" id="name"/>
    </div>
    <div>
      <label htmlFor="user-password" className="sr-only">Password</label>
      <input required value={values.password} onChange={handleChange} name="password" type="password" placeholder="PASSWORD" className="border-2 p-2 text-center text-2xl border-white text-gray-200 rounded-xl" id="user-password"/>
    </div>
    <div className="flex flex-col space-y-2 mb-11" >
      <button type="submit" className="border-2 p-2 text-center text-xl w-75  bg-white text-blue-500">LOGIN</button>
      <button onClick={resetForm} className="border  px-4 py-2 bg-green-500 rounded-md text-white text-xl">Reset</button>
      <Link className="self-end" to="/ForgotPassword">Forgot Password?</Link>
    </div>
    </form>
    <div className="">
    <h1 className="text-xl ">Don't Have An Account? <Link className="text-2xl text-white" to="/SignUpPage ">Sign Up</Link>
    </h1>
    </div>
    </div>
  
  )
}

export default LoginPage