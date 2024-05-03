import  { useEffect,  useState } from 'react';
import { useSearchParams,useNavigate  } from "react-router-dom";
import {  useDispatch } from "react-redux";
import { verifyGoogleToken } from "../actionCreators/google";

function Login() {
    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);


    useEffect(() => {
      if(loading) {
        setLoading(false);
        const code = searchParams.get('code');
        // console.log("code",code);
        dispatch(verifyGoogleToken(code, (error) => {
          navigate("/admin");
        }));
      }
    },[searchParams, loading, dispatch,navigate])

  return null;
}

export default Login;
