import { ThreeCircles } from "react-loader-spinner";

export const Loader = () => {
  return (
    <ThreeCircles
      height="40"
      width="40"
      color="#400120"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  );
};
