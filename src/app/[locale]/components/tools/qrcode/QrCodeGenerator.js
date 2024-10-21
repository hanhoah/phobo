"use client";

import React, { useState, useRef, useEffect } from "react";
import QRCode from "react-qr-code";
import * as htmlToImage from "html-to-image";

const QrCodeGenerator = () => {
  const [url, setUrl] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isWhatsApp, setIsWhatsApp] = useState(false);
  const qrCodeRef = useRef(null);

  // Effect to update the URL based on the mode
  useEffect(() => {
    if (isWhatsApp) {
      if (phoneNumber) {
        const formattedNumber = phoneNumber.replace(/\D/g, ""); // Remove non-numeric characters
        setUrl(`https://wa.me/${formattedNumber}`);
      } else {
        setUrl(""); // Clear URL if phone number is empty
      }
    } else {
      setUrl(url); // Keep the URL for standard mode
    }
  }, [phoneNumber, isWhatsApp]);

  const downloadQRCode = () => {
    htmlToImage
      .toPng(qrCodeRef.current)
      .then(function (dataUrl) {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qr-code.png";
        link.click();
      })
      .catch(function (error) {
        console.error("Error generating QR code:", error);
      });
  };

  return (
    <div className="flex flex-col items-center h-screen mt-10">
      <h1 className="text-2xl font-bold mb-4">QR Code Generator</h1>

      <button
        onClick={() => setIsWhatsApp(!isWhatsApp)}
        className="mb-4 bg-gray-300 px-4 py-2 rounded"
      >
        {isWhatsApp ? "Switch to URL/Text" : "Switch to WhatsApp"}
      </button>

      {isWhatsApp ? (
        <input
          type="text"
          placeholder="Phone (e.g. +1234567890)"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border p-2 mb-4 w-80"
        />
      ) : (
        <input
          type="text"
          placeholder="Enter URL or Text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="border p-2 mb-4 w-80"
        />
      )}

      <div ref={qrCodeRef} className="mb-4">
        {url && <QRCode value={url} size={256} />}
      </div>

      {url && (
        <button
          onClick={downloadQRCode}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Download QR Code
        </button>
      )}
    </div>
  );
};

export default QrCodeGenerator;
