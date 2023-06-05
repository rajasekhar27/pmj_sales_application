import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetExtimatePriceDetailsQuery,
  useGetProductDetailsQuery,
  useHandleConditionEstimatePriceDetailsMutation,
} from "../../store/apis/restApi";
import moment from "moment/moment";
import { AiOutlineEdit } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import {
  setEstimateStoneDetails,
  setMountingEstimateStoneDetails,
} from "../../store/slices/catalogue";
import ReactWhatsapp from "react-whatsapp";

import { WhatsappShareButton } from "react-share";

export default function EstimatePrice() {
  const router = useRouter();
  const productSlug = router.query.id;
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
    watch,
  } = useForm();
  const [VATField, setVATField] = useState(false);
  const [VATValue, setVATValue] = useState("");
  const [stoneSWWeight, setStoneSWWeight] = useState(0);
  const [stoneAmount, setStoneAmount] = useState(0);
  const [diamondSWWeight, setDiamondSWWeight] = useState(0);
  const [diamondAmount, setDiamondAmount] = useState(0);
  const [pdfUrl, setPdfUrl] = useState("");
  const [stone, setStone] = useState([]);
  const [making, setMaking] = useState("");

  const estimateStoneArray = useSelector(
    (state) => state.catalogue?.estimateStoneDetails
  );

  const ExtimateProductSlug = useSelector(
    (state) => state.customerIn?.extimateSlug
  );
  const salesRepAccess = useSelector(
    (state) => state.auth.SalesRepresentative?.accessToken
  );

  // API's

  const { data: ExtimatePricing } = useGetExtimatePriceDetailsQuery(
    { slug: productSlug },
    { skip: salesRepAccess ? false : true }
  );

  const [updateEstimatePrice] =
    useHandleConditionEstimatePriceDetailsMutation();

  const date = moment(ExtimatePricing?.attribute?.created_at).format(
    "DD/MM/YYYY"
  );

  let rawAmount = (
    parseFloat(
      ExtimatePricing?.metal_data?.metal_cost?.length === 0
        ? 0
        : parseFloat(ExtimatePricing?.metal_data?.metal_cost).toFixed(2)
    ) +
    parseFloat(
      parseFloat(
        making *
          (ExtimatePricing?.metal_data?.net_weight?.length === 0
            ? 0
            : ExtimatePricing?.metal_data?.net_weight)
      ).toFixed(2)
    ) +
    parseFloat(parseFloat(stoneAmount).toFixed(2)) +
    parseFloat(parseFloat(diamondAmount).toFixed(2)) +
    parseFloat(
      ExtimatePricing?.metal_data?.metal_cost?.length === 0
        ? 0
        : parseFloat(
            (
              (ExtimatePricing?.metal_data?.metal_cost.length === 0
                ? 0
                : ExtimatePricing?.metal_data?.metal_cost.toFixed(2) *
                  VATValue) / 100
            ).toFixed(2)
          )
    )
  ).toFixed(2);

  let gstAmount = ((rawAmount * 3) / 100).toFixed(2);

  const handleEdit = () => {
    setVATField(true);
  };

  useEffect(() => {
    setVATValue(ExtimatePricing?.wastage);
    // setStone(ExtimatePricing?.diamond_details?.price);
    // setStone1(ExtimatePricing?.stone_details?.price);

    dispatch(
      setMountingEstimateStoneDetails(
        ExtimatePricing?.stone_diamond.map((each) => {
          return {
            bom_varient_name: each?.bom_varient_name,
            diamond: each?.diamond,
            id: each?.id,
            slug: each?.slug,
            stone_amount:
              each?.stone_amount?.length === 0 ? 0 : each?.stone_amount,
            stone_pieces:
              each?.stone_pieces?.length === 0 ? 0 : each?.stone_pieces,
            stone_rate: parseFloat(
              each?.stone_rate?.length === 0 ? 0 : each?.stone_rate
            ).toFixed(2),
            stone_weight:
              each?.stone_weight?.length === 0 ? 0 : each?.stone_weight,
          };
        })
      )
    );
    setMaking(
      ExtimatePricing?.metal_data?.making_rate?.length === 0
        ? 0
        : parseInt(ExtimatePricing?.metal_data?.making_rate)
    );
  }, [ExtimatePricing]);

  const onSubmit = (values) => {
    {
      VATField &&
        (setVATField(false),
        updateEstimatePrice({
          product: productSlug,
          vat: parseInt(VATValue),
          making_charge: making,
          stone_diamond: estimateStoneArray.map((each) => {
            return {
              bom_varient_name: each?.bom_varient_name,
              diamond: each?.diamond === true ? true : false,
              id: each?.id,
              slug: each?.slug,
              stone_amount: (each?.stone_weight?.length === 0
                ? 0
                : each?.stone_weight *
                  (each?.stone_rate?.length === 0
                    ? 0
                    : parseFloat(each?.stone_rate))
              ).toFixed(2),
              stone_pieces: each?.stone_pieces,
              stone_rate: each?.stone_rate,
              stone_weight: each?.stone_weight,
            };
          }),
        }).then((res) => {
          if (res.data) {
            setPdfUrl(res.data?.path);
          }
        }));
    }
  };

  useEffect(() => {
    let diamondSw = 0;
    let diamondAmt = 0;
    let stoneSW = 0;
    let stoneAmt = 0;
    estimateStoneArray?.map((each) =>
      each?.diamond === true
        ? ((diamondSw +=
            each?.stone_weight?.length === 0 ? 0 : each?.stone_weight),
          (diamondAmt +=
            each?.stone_weight?.length === 0
              ? 0
              : each?.stone_weight *
                (each?.stone_rate?.length === 0
                  ? 0
                  : parseFloat(each?.stone_rate))))
        : ((stoneSW +=
            each?.stone_weight?.length === 0 ? 0 : each?.stone_weight),
          (stoneAmt +=
            each?.stone_weight?.length === 0
              ? 0
              : each?.stone_weight *
                (each?.stone_rate?.length === 0
                  ? 0
                  : parseFloat(each?.stone_rate))))
    );
    setDiamondSWWeight(diamondSw);
    setStoneSWWeight(stoneSW);
    setDiamondAmount(diamondAmt);
    setStoneAmount(stoneAmt);
  }, [estimateStoneArray]);

  useEffect(() => {
    updateEstimatePrice({
      product: productSlug,
      vat: VATValue?.length === 0 ? undefined : VATValue,
      making_charge: making,
      stone_diamond: estimateStoneArray,
    }).then((res) => {
      if (res.data) {
        setPdfUrl(res.data?.path);
      }
    });
  }, []);

  return (
    <div className="  h-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col h-full overflow-y-scroll px-4"
      >
        <div className="text-center  text-24  text-bg40 font-semibold">
          <div> Estimate Only</div>
          <div className="flex justify-end  py-4">
            <button
              onClick={handleEdit}
              type="button"
              className="flex items-center bg-bg40 text-white rounded px-2  space-x-1 py-1"
            >
              <AiOutlineEdit />
              <span className="text-sm">Edit</span>
            </button>
          </div>
          <div className="p-2 ">
            <table className="w-full ">
              <tbody className="text-start text-xs">
                <tr>
                  <td className="text-[#82868B] font-normal">Date</td>
                  <td className="text-color5E font-semibold text-end">
                    {date}
                  </td>
                </tr>
                <tr>
                  <td className="text-[#82868B] font-normal">Stock Code</td>
                  <td className="text-color5E font-semibold text-end">
                    {ExtimatePricing?.product_code}
                  </td>
                </tr>
                <tr>
                  <td className="text-[#82868B] font-normal">Purity</td>
                  <td className="text-[#82868B] font-semibold text-end">
                    {/* {purityField */}
                    {/* ? { ExtimatePricing?. } */}
                    {ExtimatePricing?.purity?.length === 2
                      ? ExtimatePricing?.purity
                      : ExtimatePricing?.purity.slice(0, 2)}
                  </td>
                </tr>

                <tr>
                  <td className="text-[#82868B] font-normal ">Gold Price</td>
                  <td className="text-[#82868B] font-semibold text-end">
                    {ExtimatePricing?.metal_rate?.length === 0
                      ? 0
                      : parseInt(ExtimatePricing?.metal_rate)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="border-b border-bg40"></div>
          {/* ---------------------------------------------------- */}
          <div className="">
            <table className="w-full text-xs">
              <thead className=" border-black ">
                <tr className="text-start text-bg40 text-[10px] h-10">
                  <th className="text-start ">Product</th>
                  <th className="text-center px-2">G.Wt</th>
                  <th className="text-center px-2">N.Wt</th>
                  <th className="text-center px-2">S/D.Wt</th>
                  <th className="text-center px-2">Amount</th>
                </tr>
              </thead>
              <tbody className="text-start text-xs ">
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">
                    {ExtimatePricing?.category?.title}
                    {/* BNG */}
                  </td>
                  <td className="text-[#82868B] font-normal text-center ">
                    {/* 26.02 */}
                    {ExtimatePricing?.metal_data?.length === 0
                      ? 0
                      : ExtimatePricing?.metal_data?.gross_weight}
                  </td>
                  <td className="text-[#82868B] font-normal text-center">
                    {/* 23.238 */}
                    {ExtimatePricing?.metal_data?.net_weight?.length === 0
                      ? 0
                      : ExtimatePricing?.metal_data?.net_weight}
                  </td>
                  <td className="text-[#82868B]  font-normal text-center"></td>
                  <td className="text-[#82868B] font-normal text-center">
                    {ExtimatePricing?.metal_data?.metal_cost?.length === 0
                      ? 0
                      : Math.round(
                          parseFloat(ExtimatePricing?.metal_data?.metal_cost)
                        )}
                    {/* 110725.35 */}
                  </td>
                </tr>
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">Making</td>
                  <td className="text-[#82868B] font-normal "></td>
                  <td className="text-[#82868B] font-normal "></td>
                  <td className="text-[#82868B] font-normal text-center">
                    {VATField ? (
                      <input
                        type="number"
                        {...register("making")}
                        className="w-11 border rounded  border-bg40 h-[23px] text-center"
                        value={making}
                        onChange={(e) => setMaking(parseInt(e.target.value))}
                      />
                    ) : (
                      `${Math.round(parseFloat(making))}`
                    )}
                  </td>

                  <td className="text-[#82868B] text-center font-normal ">
                    {Math.round(
                      parseFloat(
                        making *
                          (ExtimatePricing?.metal_data?.net_weight === null ||
                          ExtimatePricing?.metal_data?.net_weight?.length === 0
                            ? 0
                            : ExtimatePricing?.metal_data?.net_weight)
                      )
                    )}
                  </td>
                </tr>
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">St.Wt</td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal text-center">
                    {stoneSWWeight.toFixed(2)}
                  </td>
                  <td className="text-[#82868B] text-center font-normal">
                    {Math.round(parseFloat(stoneAmount))}
                  </td>
                </tr>{" "}
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">Dia.Wt</td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal text-center">
                    {diamondSWWeight.toFixed(2)}
                  </td>
                  <td className="text-[#82868B] text-center font-normal">
                    {Math.round(parseFloat(diamondAmount))}
                  </td>
                </tr>{" "}
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">Wastage</td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal text-center">
                    {VATField ? (
                      <input
                        type="number"
                        {...register("VAT")}
                        className="w-11 border rounded  border-bg40 h-[23px] text-center"
                        value={VATValue}
                        onChange={(e) => setVATValue(e.target.value)}
                      />
                    ) : (
                      `${VATValue}%`
                    )}
                    {/* <select
                        {...register("purity")}
                        className="w-14 border rounded  border-bg40 h-[23px] text-center"
                        value={purityValue}
                        onChange={(e) => setPurityValue(e.target.value)}
                      >
                        <option value={purityValue}>{purityValue}</option>
                        <option value="18kt">18kt</option>
                        <option value="22kt">22kt</option>
                        <option value="24kt">24kt</option>
                      </select> */}
                  </td>
                  <td className="text-[#82868B] text-center font-normal">
                    {ExtimatePricing?.metal_data?.metal_cost?.length === 0
                      ? 0
                      : Math.round(
                          parseFloat(
                            (ExtimatePricing?.metal_data?.metal_cost.length ===
                            0
                              ? 0
                              : ExtimatePricing?.metal_data?.metal_cost.toFixed(
                                  2
                                ) * VATValue) / 100
                          )
                        )}
                  </td>
                </tr>
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">Total Amt</td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal text-center"></td>
                  <td className="text-[#82868B] text-center font-normal">
                    {Math.round(parseFloat(rawAmount))}
                  </td>
                </tr>
                <tr className="border-b h-8">
                  <td className="text-[#82868B] font-normal ">GST</td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal text-center"></td>
                  <td className="text-[#82868B] text-center font-normal">
                    {Math.round(parseFloat(gstAmount))}
                  </td>
                </tr>{" "}
                <tr className="border-b h-10 border-bg40  ">
                  <td className="text-bg40 font-semibold ">Final Amount</td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal"></td>
                  <td className="text-[#82868B] font-normal  text-center"></td>
                  <td className="text-bg40  text-center font-semibold">
                    {Math.round(parseFloat(rawAmount)) +
                      Math.round(parseFloat(gstAmount))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="  text-center mt-3">
          <div className=" text-sm   text-bg40 font-semibold">
            DIA & Stone Details
          </div>
          <div
            className="p-1 pb-2 "
            style={{ height: "100px", overflowY: "scroll" }}
          >
            <table className="w-full text-xs">
              <thead className=" border-black ">
                <tr className="text-start text-[10px] text-bg40 h-10">
                  <th className="text-start ">StoneName</th>
                  <th className="text-center ">Pcs</th>
                  <th className="text-center ">Wt/CT</th>
                  <th className="text-center ">Stone Rate</th>
                  <th className="text-center ">Total Amount</th>
                </tr>
              </thead>
              <tbody className="text-start text-xs ">
                {estimateStoneArray?.map((eachStone, idx) => (
                  <tr className="text-[10px] border-b h-8" key={idx}>
                    <td className="text-color6E font-normal ">
                      {" "}
                      {eachStone?.bom_varient_name}
                    </td>
                    <td className="text-color5E font-normal text-center">
                      {" "}
                      {eachStone?.stone_pieces}
                    </td>
                    <td className="text-color5E font-normal text-center">
                      {eachStone?.stone_weight}
                    </td>
                    <td className="text-color5E font-normal text-center">
                      {VATField ? (
                        <input
                          type="number"
                          {...register(`stoneRate${idx}`)}
                          className="w-11 border rounded  border-bg40 h-[23px] text-center"
                          value={parseFloat(eachStone?.stone_rate)}
                          onChange={(e) =>
                            dispatch(
                              setEstimateStoneDetails([
                                eachStone?.id,
                                e.target.value,
                              ])
                            )
                          }
                        />
                      ) : (
                        eachStone?.stone_rate &&
                        Math.round(
                          parseFloat(
                            eachStone?.stone_rate?.length === 0
                              ? 0
                              : eachStone?.stone_rate
                          )
                        )
                      )}
                    </td>
                    <td className="text-color5E font-normal text-center">
                      {Math.round(
                        parseFloat(
                          eachStone?.stone_weight *
                            (eachStone?.stone_rate === ""
                              ? 0
                              : parseInt(eachStone?.stone_rate))
                        )
                      )}
                    </td>
                  </tr>
                ))}
                {/* <tr className="text-[10px] h-8">
                  <td className="text-color6E  font-normal">
                    {ExtimatePricing?.stone_details?.title}
                  </td>
                  <td className="text-color5E font-normal">
                    {" "}
                    {ExtimatePricing?.stone_details?.pieces}
                  </td>
                  <td className="text-color5E font-normal">
                    {" "}
                    {ExtimatePricing?.stone_details?.weight}
                  </td>
                  <td className="text-color5E font-normal text-center">
                    {VATField ? (
                      <input
                        type="text"
                        {...register("stoneRate1")}
                        className="w-11 border border-bg40 h-[23px] rounded text-center"
                        value={`${stone1 ? stone1 : ""}`}
                        onChange={(e) => setStone1(e.target.value)}
                      />
                    ) : (
                      ExtimatePricing?.stone_details?.price
                    )}{" "}
                  </td>
                  <td className="text-color5E font-normal text-center">
                    {ExtimatePricing?.stone_details?.pieces *
                      ExtimatePricing?.stone_details?.price}
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
        <div className="border-b border-bg40"></div>
        <div className=" text-xs   text-bg40 font-medium text-center mt-3">
          DIA & Stone Details
        </div>

        <div className=" text-[10px] font-normal self-center my-2 text-color5E">
          <p>1.Pan Card is Compulsory or transaction above 2 lakhs.</p>
          <p>2.Address proof with complete address is compulsory</p>
          <p>3.Estimate valid for today only.</p>
        </div>

        <div className="px-4 mb-2 mt-1">
          {VATField ? (
            <button className="flex justify-center w-full bg-bg40 rounded-md font-semibold ">
              <p className="py-2 text-white">Update Change</p>
            </button>
          ) : (
            <WhatsappShareButton
              url={`${pdfUrl}`}
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                backgroundColor: "#400120",
                borderRadius: "6px",
                fontWeight: "600",
              }}
            >
              <p className="py-2 text-white">Share</p>
            </WhatsappShareButton>
          )}
        </div>
      </form>
    </div>
  );
}
