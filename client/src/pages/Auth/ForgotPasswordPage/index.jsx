import React, { useState } from "react";

// components
import EmailField from "../../../components/design/FormComponents/EmailField";
import Button from "../../../components/design/Button";

// hooks
import useFirebaseAuth from "../../../hooks/firebase/useFirebaseAuth";

const ForgotPasswordPage = () => {
  // hooks
  const { forgotUserPassword } = useFirebaseAuth();

  //   state
  const [email, setEmail] = useState("");

  return (
    <div>
      <EmailField
        email={email}
        onChange={setEmail}
        required={true}
      />
      <Button
        value="Send password reset link!"
        onClick={()=>forgotUserPassword(email)}
      />
    </div>
  );
};

export default ForgotPasswordPage;
