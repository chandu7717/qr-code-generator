import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./qrcodegenerater.css"

const QRCodeGenerator = () => {
  const [url, setUrl] = useState('');

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  return (
    // <div className="content-box">
    //   <div id='main'>
    //   <label htmlFor="urlInput">Enter URL:</label>
    //   <input
    //     type="text"
    //     id="urlInput"
    //     value={url}
    //     onChange={handleUrlChange}
    //     placeholder="Enter URL here"
    //   />

    //   {url && (
    //     <div id='qrcode'>
    //       <QRCode value={url} />
    //     </div>
    //   )}
    // </div>
    // </div>
    <div className="main">
      <div id="content">
        <label htmlFor="">Enter the URL :</label>
        <input type="text" placeholder='Enter the URL' value={url} onChange={handleUrlChange}/>
      </div>
      <div id="qrcode">
        <QRCode value={url}/>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
