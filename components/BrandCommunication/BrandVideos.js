import React from "react";
import ReactPlayer from "react-player";

export default function BrandVideos() {
  return (
    <>
      <div className="rounded-md p-3 bg-white mt-5 shadow">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=8ZiRCcD65Ts"}
          width="100%"
          height="100%"
          className="rounded-lg"
          style={{ borderRadius: "100px" }}
        />
        <div className="text-sm py-2 font-semibold text-bg40">
          Vows of Eternal Love I Bejewelled Tales of a Bride I Flagship store,
          Hyderabad
        </div>
        <div className="text-[#959595] text-[8px] text-end">22/10/2022</div>
      </div>

      <div className="rounded-md p-3 bg-white mt-5 shadow">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=8ZiRCcD65Ts"}
          width="100%"
          height="100%"
          className="rounded-lg"
          style={{ borderRadius: "100px" }}
        />
        <div className="text-sm py-2 font-semibold text-bg40">
          Vows of Eternal Love I Bejewelled Tales of a Bride I Flagship store,
          Hyderabad
        </div>
        <div className="text-[#959595] text-[8px] text-end">22/10/2022</div>
      </div>

      <div className="rounded-md p-3 bg-white mt-5 shadow">
        <ReactPlayer
          url={"https://www.youtube.com/watch?v=8ZiRCcD65Ts"}
          width="100%"
          height="100%"
          className="rounded-lg"
          style={{ borderRadius: "100px" }}
        />
        <div className="text-sm py-2 font-semibold text-bg40">
          Vows of Eternal Love I Bejewelled Tales of a Bride I Flagship store,
          Hyderabad
        </div>
        <div className="text-[#959595] text-[8px] text-end">22/10/2022</div>
      </div>
    </>
  );
}
