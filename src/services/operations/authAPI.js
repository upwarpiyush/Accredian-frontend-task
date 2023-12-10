import { toast } from "react-hot-toast"

import { setLoading, setToken } from "../../slices/authSlice"
import { apiConnector } from "../apiconnector"
import { endpoints } from "../apis"

const {
  SIGNUP_API,
  LOGIN_API,
} = endpoints


export function signUp(
  userName,
  email,
  password,
  confirm_password,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", SIGNUP_API, {
        userName,
        email,
        password,
        confirm_password,
      })

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/login")
    } catch (error) {
      console.log("SIGNUP API ERROR............", error)
      toast.error("Signup Failed")
      toast.error(`${error.response.data.message}`)
      navigate("/signup")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      
      toast.success("Login Successful")
      
      dispatch(setToken(response.data.token))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      navigate("/dashboard")
    } catch (error) {
      console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed")
      toast.error(`${error.response.data.message}`)
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}


export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    localStorage.removeItem("token")
    toast.success("Logged Out")
    navigate("/login")
  }
}

