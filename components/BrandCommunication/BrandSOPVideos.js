import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import ReactPlayer from "react-player";
import dynamic from "next/dynamic";
const DynamicComponentWithNoSSR = dynamic(() => import("./BrandVideos"), {
  ssr: false,
});

import { useRouter } from "next/router";
import TaskBrandSOPVideos from "./TaskBrandSOPVideos";

export default function BrandSOPVideos() {
  const [brandActive, setBrandActive] = useState(true);

  const [checking, setChecking] = useState([]);

  const [Tasks, setTasks] = useState([
    {
      id: 1,
      name: "Drink 3L of water daily",
      status: false,
    },
    {
      id: 2,
      name: "Rearrange the Gold Jewel Racks",
      status: false,
    },
    {
      id: 3,
      name: "Rearrange the Gold Jewel Racks",
      status: false,
    },
    {
      id: 4,
      name: "Rearrange the Gold Jewel Racks",
      status: false,
    },
    {
      id: 5,
      name: "Arrange the Ring Racks",
      status: false,
    },
    {
      id: 6,
      name: "Arrange the Ring Racks",
      status: false,
    },
  ]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm();

  const router = useRouter();
  const check = watch("tasks");

  const handleTasks = (e) => {
    const temp = Tasks;
    temp[e].status = !temp[e].status;
    setTasks([...temp]);
  };

  const onSubmit = () => {};
  return (
    <div className="px-5 mt-28">
      <div className="flex items-center space-x-2 my-5">
        <BiArrowBack
          onClick={() => router.back()}
          size={25}
          className="text-bg40"
        />
        <div className="text-base text-bg40 font-semibold">
          BRAND SOP AND VIDEOS
        </div>
      </div>

      <div className="flex justify-around">
        <div
          onClick={() => setBrandActive(true)}
          className={`${
            brandActive ? "bg-bg40 text-white" : "text-color5E"
          } text-sm  text-white px-3 py-2 rounded-md font-semibold`}
          style={{
            boxShadow: `${
              brandActive ? "0px 4px 12px -4px rgba(140, 16, 77, 0.4)" : ""
            }`,
          }}
        >
          BRAND SOP
        </div>

        <div
          onClick={() => setBrandActive(false)}
          className={`${
            !brandActive ? "bg-bg40 text-white" : "text-color5E"
          } text-sm  text-white px-3 py-2 rounded-md font-semibold`}
          style={{
            boxShadow: `${
              !brandActive ? "0px 4px 12px -4px rgba(140, 16, 77, 0.4)" : ""
            }`,
          }}
        >
          BRAND VIDEOS
        </div>
      </div>
      {brandActive ? (
        <div className="mt-4">
          <div className="border-2 border-bg40 rounded-lg bg-white p-2 mt-2 shadow-md">
            <div className="flex justify-between">
              <div className="text-bg40 border-b font-semibold border-bg40">
                Today's Tasks
              </div>
              <div className="text-[#333333] font-medium">15/11/2022</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-[#333333]  font-semibold ">
                3 of 6 Complete
              </div>
              <div className="text-[#333333] font-semibold">
                Time Left : <span className="text-[#28C76F]">06:01</span>
              </div>
            </div>
            <div className="mt-2">
              {Tasks?.map((t, i) => (
                <TaskBrandSOPVideos
                  t={t}
                  handleTasks={handleTasks}
                  i={i}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div className=" border-bg40 rounded-lg bg-white p-2 mt-2 shadow-md">
            <div className="flex justify-between">
              <div className="text-bg40 font-semibold border-bg40">Tasks</div>
              <div className="text-[#333333] font-medium">15/11/2022</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-[#333333]  font-semibold ">
                3 of 6 Complete
              </div>
              <div className="text-[#333333] font-semibold">
                Time Left : <span className="text-[#28C76F]">06:01</span>
              </div>
            </div>
            <div className="mt-2">
              {Tasks?.map((t, i) => (
                <TaskBrandSOPVideos
                  t={t}
                  handleTasks={handleTasks}
                  i={i}
                  key={i}
                />
              ))}
            </div>
          </div>

          <div className=" border-bg40 rounded-lg bg-white p-2 mt-2 shadow-md">
            <div className="flex justify-between">
              <div className="text-bg40 font-semibold border-bg40">Tasks</div>
              <div className="text-[#333333] font-medium">15/11/2022</div>
            </div>
            <div className="flex justify-between mt-2">
              <div className="text-[#333333]  font-semibold ">
                3 of 6 Complete
              </div>
              <div className="text-[#333333] font-semibold">
                Time Left : <span className="text-[#28C76F]">06:01</span>
              </div>
            </div>
            <div className="mt-2">
              {Tasks?.map((t, i) => (
                <TaskBrandSOPVideos
                  t={t}
                  handleTasks={handleTasks}
                  i={i}
                  key={i}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <DynamicComponentWithNoSSR />
        </div>
      )}
    </div>
  );
}
