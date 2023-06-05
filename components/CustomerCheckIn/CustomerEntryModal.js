import React, { useState } from "react";
import { BsChatLeft } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import NewCustomerEntry from "./NewCustomerEntry";
import OldCustomerEntry from "./OldCustomerEntry";

export default function CustomerEntryModal() {
  const [customer, setNewCustomer] = useState(false);

  return (
    <>
      <div className="flex flex-col rounded-md bg-white drop-shadow-lg  overflow-y-scroll h-full">
        {customer ? (
          <NewCustomerEntry />
        ) : (
          <OldCustomerEntry setNewCustomer={setNewCustomer} />
        )}

        {/* {NewCustomer ? (
          <div className="self-center px-5 py-5 flex justify-center space-y-10 items-center  flex-col h-full">
            <div className="border border-bg40 rounded-md bg-[#4001201F]">
              <div
                onClick={() => setNewCustomer(false)}
                className="flex items-center justify-center p-2  space-x-2"
              >
                <div>
                  <FiSettings size={24} className="text-bg40" />
                </div>
                <div className="text-bg40">
                  <div className="font-medium text-base">New Customer</div>
                  <div className="font-normal text-sm">
                    LOrium Ipsum LOrium Ipsum LOrium Ipsum LOrium
                  </div>
                </div>
              </div>
            </div>

            <div className="border  rounded-md bg-[#BABFC71F]">
              <div
                onClick={handleOldCustomer}
                className="flex items-center justify-center p-2  space-x-2"
              >
                <div>
                  <BsChatLeft size={24} className="text-color5E" />
                </div>
                <div className="text-color5E">
                  <div className="font-medium text-base">Old Customer</div>
                  <div className="font-normal text-sm">
                    LOrium Ipsum LOrium Ipsum LOrium Ipsum LOrium
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        ) : oldCustomer ? (
          <NewCustomerEntry setNewCustomer={setNewCustomer} />
        ) : (
          <OldCustomerEntry
            setOldCustomer={setOldCustomer}
            setNewCustomer={setNewCustomer}
          />
        )} */}
      </div>
    </>
  );
}
