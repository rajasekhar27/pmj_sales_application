import React from "react";
import { QrReader } from "react-qr-reader";

export default function QrScanner() {
  const [data, setData] = React.useState("No result");
  return (
    <div className="self-center " style={{ height: "150px", width: "100%" }}>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!error) {
            console.info(error);
          }
        }}
        className="self-center "
        constraints={{ facingMode: "environment" }}
      />
    </div>
  );
}
