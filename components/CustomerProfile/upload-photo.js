import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import { useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { closeEditProfileImage } from "../../store/slices/popupSlice";
import Modal from "../Modal/index";
import { Progress } from "reactstrap";
import { useGetCustomerProfileUpdateMutation } from "../../store/apis/restApi";
import { toast } from "react-toastify";
// import { useUpdateProfileImageMutation } from '../store/apis/restapi'
// import { toast } from 'react-toastify'
// import { updateUserProfileImage } from '../store/slices/auth'

export default function UploadPhoto() {
  const [imgTitle, setTitle] = useState("");
  const [imgSrc, setSrc] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const fileRef = useRef();
  // const [updateProfileImage] = useUpdateProfileImageMutation()
  const customerAccess = useSelector((state) => state.auth.Customer);
  const uploadStatus = useSelector((state) => state.popup.editProfileImage);

  const [customerProfileUpdate] = useGetCustomerProfileUpdateMutation();

  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e?.target?.files[0];
    setFile(e?.target?.files[0]);
    setTitle(file?.name);
    {
      file && setSrc(URL.createObjectURL(file));
    }
  };

  const closeForm = () => {
    dispatch(closeEditProfileImage());
    setTitle("");
    setSrc("");
  };

  const onclickUpdateProfile = () => {
    const formData = new FormData();
    {
      file && formData.append("user_profile.image", file, file.name);
    }

    {
      file
        ? customerProfileUpdate({
            slug: customerAccess.user?.user_detail?.slug,
            data: formData,
          }).then((res) => {
            if (res.data) {
              toast.success("successfully updated profile image");
              dispatch(closeEditProfileImage());
              setTitle("");
              setSrc("");
            }

            if (res.error) {
              toast.error(JSON.stringify(res.error.data));
            }
          })
        : toast.error("please select a profile");
    }
  };

  const onClickDelete = () => {
    setTitle("");
    setSrc("");
  };
  return (
    <Modal
      isOpen={uploadStatus}
      modalOuterClick={closeForm}
      parentClases="bottom-0 flex justify-center items-center popBgBlack "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col font-poppins bg-white relative w-10/12 px-5 rounded-md"
      >
        <button onClick={closeForm}>
          <div className="bg-white flex justify-center items-center absolute -top-4 -right-3 h-8 w-8 rounded-lg border">
            <AiOutlineClose />
          </div>
        </button>
        <h1 className="text-name font-medium text-2xl text-center mb-5 mt-8 flex justify-center items-center">
          <FiEdit size={24} className="mr-1" /> Upload Photo
        </h1>
        <button
          onClick={() => fileRef.current.click()}
          className="mb-2 font-poppins self-center px-5 py-1 border-2 border-upload text-sm font-medium text-upload flex justify-center items-center"
        >
          <AiOutlinePlus size={20} className="mr-1" />
          Select Photo
        </button>
        <input
          type="file"
          accept="image/*"
          ref={fileRef}
          className="hidden"
          onChange={(e) => handleFileUpload(e)}
        />
        {imgTitle && (
          <div className="flex justify-between items-center bg-white w-full drop-shadow-md px-2 py-1 mt-5 mb-5">
            <div className="w-1/4">
              <img id="previewImage" src={imgSrc} className="h-10 w-10" />
            </div>

            <div className="w-1/2 ">
              <h1 className="overtext">{imgTitle}</h1>
              <div className="revenueBg mt-[2px]">
                <Progress
                  className="h-20 "
                  style={{ backgroundColor: "#36EB87" }}
                />
              </div>
            </div>

            <div className=" w-1/4 flex flex-col ml-1">
              <button className="self-end" onClick={onClickDelete}>
                <FaRegTrashAlt className="text-notification h-4 w-4 " />
              </button>
            </div>
          </div>
        )}
        <button
          onClick={onclickUpdateProfile}
          className="mt-5 self-center  mb-5 rounded-md h-[38px] w-[137px] flex justify-center bg-liveprice items-center font-semibold text-md text-white"
        >
          Update
        </button>
      </div>
    </Modal>
  );
}
