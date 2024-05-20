import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./qrcodegenerater.css" // Make sure to adjust the file path if needed

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleDownload = () => {
    const canvas = document.getElementById('qrcode').getElementsByTagName('canvas')[0];

    if (canvas) {
      const url = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = url;
      link.download = 'qrcode.png';
      link.click();
    }
  };

  return (
    <div className="main">
      <div id="content">
        <label htmlFor="">Enter the URL:</label>
        <input type="text" placeholder="Enter the URL" value={url} onChange={handleUrlChange} />
      </div>
      <div id="qrcode">
        <QRCode value={url} />
      </div>
      <div className="button">
        <button onClick={handleDownload}>Click to Download</button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
