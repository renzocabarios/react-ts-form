import { useState } from "react";
import { Input, Button } from "../../components";

function Main() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailChange = (e: string) => {
    setemail(e);
  };

  const passwordChange = (e: string) => {
    setpassword(e);
  };

  return (
    <>
      <Input onChange={emailChange} />
      <Input onChange={passwordChange} type="password" />
      <Button
        onClick={() => {
          console.log({ email, password });
        }}
        title="Submit"
      />
    </>
  );
}

export default Main;
