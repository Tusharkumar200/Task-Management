import { signUpFormControls } from "../../../config";
import CommonForm from "../../common-form";

function SignUp() {
  const formData = useForm({
    defaultValue :{
      name: '',
      email: '',
      password: '',
    }
  })

  function handleSubmit(){

  }

  return (
    <div>sign up
      <CommonForm form ={formData} handleSubmit={handleSubmit} formControls={signUpFormControls} btnText={'Sign Up '} />
    </div>
  )
}

export default SignUp;