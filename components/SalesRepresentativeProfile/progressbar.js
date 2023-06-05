import React, { useEffect, useState } from "react";
export default function ProgressBar({ width, percent, color, bg }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(percent * width);
  }, [percent, width]);
  return (
    <div className="progress-div" style={{ width: width, backgroundColor: bg }}>
      <div
        style={{ width: `${value}px`, backgroundColor: color }}
        className="progress"
      />
    </div>
  );
}
