
import { requestPending, requestSuccess } from "./authSlice"

export const loginAcion = ()=> async (dispatch)=>{
    try {

        dispatch(requestPending())
        // const pendingResp = loginadmin(formdata)
        toast.promise(pendingResp, {pending: "Please wait..."})
        const{status, message, toknes} = await pendingResp;
        console.log([status](message))

        

    } catch (error) {
        
    }
}
