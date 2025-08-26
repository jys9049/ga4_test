"use client";

import { sendGTMEvent } from "@next/third-parties/google";

export default function Cart() {
  const handlePayment = () => {
    sendGTMEvent({
      evnet: "payment",
      value: true,
    });
  };
  return (
    <div>
      <div>장바구니</div>
      <br />
      <br />
      <br />
      <button onClick={handlePayment}>결제</button>
    </div>
  );
}
