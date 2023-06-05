import React from "react";

export default function TaskBrandSOPVideos({ t, handleTasks, i }) {
  return (
    <div className="" key={t.id}>
      <input
        type={"checkbox"}
        // {...register("tasks", {
        //   required: true,
        // })}
        className="accent-bg40"
        onClick={() => handleTasks(i)}
        value={`${t.id}`}
      />
      <label
        htmlFor=""
        className={`${
          t.status && "line-through text-[#959595]"
        } text-bg40 text-xs ml-3 font-medium`}
      >
        {t.name}
      </label>
    </div>
  );
}
