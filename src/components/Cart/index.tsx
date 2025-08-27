"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function Cart() {
  const handlePayment = () => {
    sendGTMEvent({
      event: "purchase",
      value: "true",
    });
  };
  return (
    <div>
      <div>장바구니</div>
      <br />
      <br />
      <br />
      <button onClick={handlePayment} style={{ cursor: "pointer" }}>
        결제
      </button>
    </div>
  );
}
