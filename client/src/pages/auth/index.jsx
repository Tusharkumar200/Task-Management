import { useState } from "react";
import SignIn from "../../components/auth/sign-in";
import SignUp from "../../components/auth/sign-up";
import CommonButton from "../../components/common-button";
function AuthPage() {
  const [isLoadingView, setIsLoadingView] = useState(true);
  return (
    <div className="flex flex-auto flex-col min-h-screen h-full">
      <div className="flex h-full flex-col justify-center items-center bg-white"></div>
      <h3 className="text-3xl  font-bold">welcome</h3>
      <div className="mt-4">{isLoadingView ? <SignIn /> : <SignUp />}</div>
      <div className="mt-5">
        <div className="mt-5 ">
          <CommonButton
            type={"button"}
            onClick={() => setIsLoadingView(!isLoadingView)}
            buttonText={
              isLoadingView ? "Switch to Sign Up" : "Switch to Sign In"
            }
          />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
