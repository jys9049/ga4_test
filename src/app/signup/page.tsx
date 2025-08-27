"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const handleSignup = () => {
    sendGTMEvent({
      event: "signup",
      value: "true",
    });
    router.push("/list");
  };

  return (
    <div>
      <div>회원가입</div>
      <br />
      <br />
      <br />
      <button onClick={handleSignup} style={{ cursor: "pointer" }}>
        가입하기
      </button>
    </div>
  );
}
