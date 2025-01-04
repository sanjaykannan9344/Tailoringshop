import React from "react";
import ReactQRCode from "react-qr-code";

const QRCodeComponent = () => {
  // Replace the URL with your app's URL or any other data you want to encode
  const appURL = "http://localhost:5174/";

  return (
    <>
      <div>
        <h3 className="font-semibold text-black">Scan the QR Code</h3>
      </div>
      <div className="flex justify-center p-10">
        <ReactQRCode
          value={appURL}
          size={256}
          className=" border-8 border-slate-700 "
        />
      </div>
    </>
  );
};

export default QRCodeComponent;
