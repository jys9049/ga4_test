"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const handleSignup = () => {
    sendGTMEvent({
      evnet: "signup",
      value: true,
    });
    router.push("/list");
  };

  return (
    <div>
      <div>회원가입</div>
      <br />
      <br />
      <br />
      <button onClick={handleSignup}>가입하기</button>
    </div>
  );
}
