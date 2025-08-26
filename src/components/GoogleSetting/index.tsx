"use client";

import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const GoogleSetting = () => {
  return (
    <>
      <GoogleAnalytics gaId="G-9TG87E56ZY" />
      <GoogleTagManager gtmId="GTM-55CNT7J4" />
    </>
  );
};

export default GoogleSetting;
