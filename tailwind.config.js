/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Italiana: ["Italiana", "serif", "Montserrat", "Porter-Sans-Block"],
        Montserrat: ["Montserrat", "serif"],
        PorterSansBlock: ["Porter-Sans-Block", "serif"],
        poppins: ["poppins"],
      },
      colors: {
        color5E: "#5E5873",
        colorD8: "#D8D6DE",
        color6E: "#6E6B7B",
        bg40: "#400120",
        bgD9: "#D9D9D9",
        mainbg: "#ffffff",
        notification: "#EA5455",
        name: "#6E6B7B",
        position: "#B9B9C3",
        online: "#28C76F",
        live: "#FF9920",
        liveprice: "#400120",
        rep: "#5E5873",
        converted: "#00CFE8",
        customer: "#7367F0",
        revenue: "#28C76F",
        mail: "#333333",
        customerProfileBg: "rgba(64, 1, 32, 0.12)",
        upload: "#7666F8",
        order: "rgba(64, 1, 32, 0.1)",
        back: "#82868B",
        pending: "#E7A600",
        emailProfile: "#4B4B4B",
        select: "#EBE9F1",
        selectedBg: "rgba(64, 1, 32, 0.06)",
        compose: "#F8F8F8",
      },
      height: {
        18: "18px",
        38: "38px",
        62: "62px",
      },

      width: {
        18: "18px",
        38: "38px",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to right bottom, rgba('#400120',), rgba('#856C78',))",
      },
      fontSize: {
        12: [
          "12px",
          {
            lineHeight: "15px",
          },
        ],
        15: [
          "15px",
          {
            lineHeight: "18px",
          },
        ],
        16: [
          "16px",
          {
            lineHeight: "20px",
          },
        ],
        18: [
          "18px",
          {
            lineHeight: "22px",
          },
        ],
        20: [
          "20px",
          {
            lineHeight: "24px",
          },
        ],
        22: [
          "22px",
          {
            lineHeight: "26px",
          },
        ],
        24: [
          "24px",
          {
            lineHeight: "29px",
          },
        ],
        30: [
          "30px",
          {
            lineHeight: "35px",
          },
        ],
        32: [
          "32px",
          {
            lineHeight: "38px",
          },
        ],
        36: [
          "36px",
          {
            lineHeight: "42px",
          },
        ],
        40: [
          "40px",
          {
            lineHeight: "47px",
          },
        ],
        50: [
          "50px",
          {
            lineHeight: "59px",
          },
        ],
        28: [
          "28px",
          {
            lineHeight: "34px",
          },
        ],
      },
    },
  },
  plugins: [],
};
