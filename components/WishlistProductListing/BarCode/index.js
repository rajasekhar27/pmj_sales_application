import React, { Component } from "react";
import Quagga from "quagga";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function Scanner({ childFuncOff, childFuncOn, onDetected }) {
  var _scannerIsRunning = false;
  const startScanner = () => {
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: document.querySelector("#scanner-container"),
          constraints: {
            width: 480,
            height: 350,
            facingMode: "environment",
          },
        },
        // decoder: {
        //   readers: [
        //     "code_128_reader",
        //     "ean_reader",
        //     "ean_8_reader",
        //     "code_39_reader",
        //     "code_39_vin_reader",
        //     "codabar_reader",
        //     "upc_reader",
        //     "upc_e_reader",
        //     "i2of5_reader",
        //   ],
        //   debug: {
        //     showCanvas: true,
        //     showPatches: true,
        //     showFoundPatches: true,
        //     showSkeleton: true,
        //     showLabels: true,
        //     showPatchLabels: true,
        //     showRemainingPatchLabels: true,
        //     boxFromPatches: {
        //       showTransformed: true,
        //       showTransformedBox: true,
        //       showBB: true,
        //     },
        //   },
        // },

        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: ["code_128_reader"],
        },
        locate: true,
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }

        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
      }
    );

    // Quagga.onProcessed(function (result) {
    //   var drawingCtx = Quagga.canvas.ctx.overlay,
    //     drawingCanvas = Quagga.canvas.dom.overlay;

    //   if (result) {
    //     if (result.boxes) {
    //       drawingCtx.clearRect(
    //         0,
    //         0,
    //         parseInt(drawingCanvas.getAttribute("width")),
    //         parseInt(drawingCanvas.getAttribute("height"))
    //       );
    //       result.boxes
    //         .filter(function (box) {
    //           return box !== result.box;
    //         })
    //         .forEach(function (box) {
    //           Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, {
    //             color: "green",
    //             lineWidth: 2,
    //           });
    //         });
    //     }

    //     if (result.box) {
    //       Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, {
    //         color: "#00F",
    //         lineWidth: 2,
    //       });
    //     }

    //     if (result.codeResult && result.codeResult.code) {
    //       Quagga.ImageDebug.drawPath(
    //         result.line,
    //         { x: "x", y: "y" },
    //         drawingCtx,
    //         { color: "red", lineWidth: 3 }
    //       );
    //     }
    //   }
    // });

    Quagga.onDetected(function (result) {
      onDetected(result);
    });
  };

  const handleStart = () => {
    if (_scannerIsRunning) {
      Quagga.stop();
      _scannerIsRunning = false;
    } else {
      startScanner();
    }
  };

  const handleSop = () => {
    if (_scannerIsRunning) {
      Quagga.stop();
    }
  };

  useEffect(() => {
    childFuncOn.current = handleStart;
  }, []);

  useEffect(() => {
    childFuncOff.current = handleSop;
  }, []);

  return <div id="interactive" className="viewport" />;
}
