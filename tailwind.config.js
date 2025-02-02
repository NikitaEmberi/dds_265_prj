// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  darkMode: ['class','[data-theme="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "4xl": { min: "1481px" },
        xxxl: { max: "1480px" },
        xxl: { max: "1280px" },
        xl: { max: "1200px" },
        lg: { max: "1080px" },
        md: { max: "980px" },
        xmd: { max: "920px" },
        xxmd: { max: "780px" },
        sm: { max: "640px" },
        xsm: { max: "540px" },
        xxsm: { max: "480px" },
      },
      borderRadius: {
        "2p": "2px",
        "3p": "3px",
        "4p": "4px",
        "5p": "5px",
        "6p": "6px",
        "8p": "8px",
        "10p": "10px",
        50: "50%",
        "30p": "30px",
        "40p": "40px",
        "99p": "99px",
      },
      borderWidth: {
        "0.5p": "0.5px",
        "1p": "1px",
        "3p": "3px",
        "6p": "6px",
      },
      boxShadow: {
        main: "0 0 25px rgba(0,0,0,.22)",
        input: "inset 0 1px 1px rgba(0,0,0,.075)",
        "input-focus":
          "inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6)",
        "gray-box": "inset 0px 1px 3px #00000029",
        lighter: "0px 1px 3px #00000029",
        small: "0 0 11px rgba(33,33,33,.2)",
      },
      colors: {
        brand: {
          main: "#492e87",
          hover: "#3f2974",
          ppx: "var(--primary-color)",
        },
        gray: {
          1: "#ffffff",
          2: "#F5F5F5",
          5: "#f1f1f1",
          6: "#EFEFEF",
          7: "#EFEBF9",
          10: "#EBEBF2",
          11: "#EBF5FA",
          15: "#e8e8e8",
          35: "#d9d9d9",
          60: "#bbbbbb",
          70: "#AAAAAA",
          75: "#A3A3A3",
          95: "#7C7C7C",
          100: "#777777",
          140: "#585858",
          155: "#484848",
          165: "#363636",
          170: "#2e2e2e",
          175: "#282728",
          180: "#f1f2f2",
          185: "#304150",
          190: "#FAF9F6"
        },
        green: {
          20: "#EAFFF4",
          25: "#E3F4F4",
          30: "#77C043",
          40: "#49f5cb",
          50: "#27B674",
          60: "#0ab48b",
          70: "#28B674",
          80: "#078466",
        },
        red: {
          10: "#FF0000",
          20: "#F5E6E6",
          30: "#ed1c24",
          40: "#ebe8e8",
          50: "#D9534F",
          70: "#C90000",
          80: "#BA0000",
        },
        blue: {
          40: "#d5d6d8",
          50: "#b1b3b5",
          55: "#a7b5c6",
          60: "#7b90aa",
          65: "#748cda",
          70: "#727e8e",
          75: "#6796da",
          80: "#5BC0DE",
          85: "#4e6580",
          90: "#4DA6C8",
          93: "#4B33C6",
          95: "#427cd1",
          100: "#3F2874",
          101: "#3B495C",
          105: "#394960",
          106: "#38A3D5",
          110: "#34a3ff",
          115: "#3481F3",
          120: "#2E1D56",
          125: "#2B7AC4",
          130: "#2A1F45",
          135: "#1B71C1",
          145: "#1492E6",
          150: "#1473E6",
          155: "#079fc5",
          160: "#01aff0",
          165: "#00aeef",
          170: "#008CFF",
          175: "#0057AF",
          180: "#0563C1",
          190: "#189788",
          200: "#26D8C4",
          300: "#0a0a0a",
        },
        yellow: {
          10: "#fffbec",
          20: "#ff7810",
          30: "#FCB417",
          50: "#FBB533",
          60: "#f6b443",
          70: "#CD7F32",
          80: "#e67f00",
        },
      },
      fontFamily: {
        latoLight: ["Lato L"],
        latoSB: ["Lato SB"],
        lato: ["Lato R"],
        latoBold: ["Lato B"],
        ubuntu: ["Ubuntu R"],
        ubuntuBold: ["Ubuntu B"],
      },
      fontSize: {
        "9p": "9px",
        "10p": "10px",
        "11p": "11px",
        "12p": "12px",
        "13p": "13px",
        "14p": "14px",
        "15p": "15px",
        "16p": "16px",
        "17p": "17px",
        "18p": "18px",
        "19p": "19px",
        "20p": "20px",
        "22p": "22px",
        "24p": "24px",
        "26p": "26px",
        "28p": "28px",
        "30p": "30px",
        "31p": "31px",
        "32p": "32px",
        "35p": "35px",
        "36p": "36px",
        "42p": "42px",
        "48p": "48px",
        "88p": "88px",
      },
      letterSpacing: {
        tighter: "-0.05px",
        tight: "-0.15px",
        normal: "0",
        wide: ".18px",
        wider: ".25px",
        widest: ".35px",
      },
      lineHeight: {
        "10p": "10px",
        "12p": "12px",
        "13p": "13px",
        "14p": "14px",
        "15p": "15px",
        "16p": "16px",
        "17p": "17px",
        "18p": "18px",
        "19p": "19px",
        1.3: "1.3",
        "1.5p": "1.5px",
        "21p": "21px",
        "22p": "22px",
        "24p": "24px",
        "26p": "26px",
        "29p": "29px",
        "30p": "30px",
        "36p": "36px",
        "38p": "38px",
        "41p": "41px",
        "48p": "48px",
        "70p": "70px",
      },
      maxHeight: {
        "35p": "35px",
        "50p": "50px",
        "66p": "66px",
        "135p": "135px",
        "200p": "200px",
        "256p": "256px",
        "260p": "260px",
        "280p": "280px",
        "300p": "300px",
        "360p": "360px",
        "600p": "600px",
        "690p": "690px",
      },
      minHeight: {
        "19p": "19px",
        "20p": "20px",
        "22p": "22px",
        "35p": "35px",
        "40p": "40px",
        "42p": "42px",
        "50p": "50px",
        "52p": "52px",
        "72p": "72px",
        "85p": "85px",
        "94p": "94px",
        "120p": "120px",
        "142p": "142px",
        "394p": "394px",
        "360p": "360px",
        "400p": "400px",
        "500p": "500px",
        "600p": "600px",
      },
      maxWidth: {
        "35p": "35px",
        "50p": "50px",
        "43p": "43px",
        "90p": "90px",
        "100p": "100px",
        "110p": "110px",
        "120p": "120px",
        "125p": "125px",
        "130p": "130px",
        "140p": "140px",
        "148p": "148px",
        "150p": "150px",
        "166p": "166px",
        "180p": "180px",
        "186p": "186px",
        "200p": "200px",
        "210p": "210px",
        "250p": "250px",
        "230p": "230px",
        "240p": "240px",
        "280p": "280px",
        "285p": "285px",
        "296p": "296px",
        "320p": "320px",
        "370p": "370px",
        "430p": "430px",
        "434p": "434px",
        "460p": "460px",
        "540p": "540px",
        "550p": "550px",
        "580p": "580px",
        "600p": "600px",
        "720p": "720px",
        "780p": "780px",
        "829p": "829px",
        "882p": "882px",
        "1080p": "1080px",
        "1191p": "1191px",
        "1200p": "1200px",
        "1260p": "1260px",
        "95per": "95%",
        "1/2": "50%",
      },
      minWidth: {
        "14p": "14px",
        "18p": "18px",
        "20p": "20px",
        "25p": "25px",
        "30p": "30px",
        "35p": "35px",
        "50p": "50px",
        "60p": "60px",
        "70p": "70px",
        "90p": "90px",
        "95p": "95px",
        "100p": "100px",
        "120p": "120px",
        "150p": "150px",
        "166p": "166px",
        "180p": "180px",
        "200p": "200px",
        "210p": "210px",
        "220p": "220px",
        "235p": "235px",
        "250p": "250px",
        "300p": "300px",
        "270p": "270px",
        "420p": "420px",
        "939p": "939px",
        "952p": "952px",
      },
      gridTemplateColumns: {
        "230p": "230px",
        "25perx2": "25% 25%",
        "1.5-3x2": "1.5fr 2fr 2fr 2fr",
        "1-65p": "1fr 65px",
        "2f-1f": "2fr 1fr",
        "2f-400p": "2fr 400px",
        "1f-2x2f": "1fr 2fr 2fr",
        "1fx2-400p": "1fr 1fr 400px",
        "22p-1fr": "22% 1fr",
        "25per-1fr": "25% 1fr",
        "50p-1fr": "50px 1fr",
        "23per-1fr": "23.33% 1fr",
        "90p-1fr": "90px 1fr",
        "1fr-25per": "1fr 25%",
        "1fr-33per": "1fr 33.33%",
        "18perx2-1fr": "18% 1fr 18%",
        "300p-1fr": "300px 1fr",
        "16p-1fr": "16px 1fr",
        "3-max-content": "repeat(3, minmax(0, max-content))",
      },
      gridTemplateRows: {
        10: "repeat(10, 1fr);",
        auto: "repeat(auto, auto);",
        "auto-3": "repeat(auto, auto, auto);",
      },
      opacity: {
        75: "0.75",
      },
      spacing: {
        "1p": "1px",
        "2p": "2px",
        "2.5p": "2.5px",
        "3p": "3px",
        "4p": "4px",
        "5p": "5px",
        "6p": "6px",
        "7p": "7px",
        "8p": "8px",
        "9p": "9px",
        "10p": "10px",
        "11p": "11px",
        "12p": "12px",
        "13p": "13px",
        "14p": "14px",
        "15p": "15px",
        "16p": "16px",
        "18p": "18px",
        "20p": "20px",
        "21p": "21px",
        "22p": "22px",
        "23p": "23px",
        "24p": "24px",
        "25p": "25px",
        "26p": "26px",
        "27p": "27px",
        "28p": "28px",
        "28.5p": "28.5px",
        "30p": "30px",
        "31p": "31px",
        "32p": "32px",
        "34p": "34px",
        "35p": "35px",
        "36p": "36px",
        "37p": "37px",
        "38p": "38px",
        "39p": "39px",
        "40p": "40px",
        "42p": "42px",
        "45p": "45px",
        "46p": "46px",
        "47p": "47px",
        "48p": "48px",
        "50p": "50px",
        "52p": "52px",
        "55p": "55px",
        "57p": "57px",
        "58p": "58px",
        "59p": "59px",
        "60p": "60px",
        "62p": "62px",
        "65p": "65px",
        "66p": "66px",
        "67p": "67px",
        "70p": "70px",
        "74p": "74px",
        "75p": "75px",
        "77p": "77px",
        "80p": "80px",
        "88p": "88px",
        "90p": "90px",
        "96p": "96px",
        "100p": "100px",
        "110p": "110px",
        "115p": "115px",
        "120p": "120px",
        "130p": "130px",
        "140p": "140px",
        "141p": "141px",
        "148p": "148px",
        "150p": "150px",
        "160p": "160px",
        "165p": "165px",
        "171p": "171px",
        "176p": "176px",
        "180p": "180px",
        "183p": "183px",
        "190p": "190px",
        "200p": "200px",
        "213p": "213px",
        "220p": "220px",
        "215p": "215px",
        "230p": "230px",
        "245p": "245px",
        "250p": "250px",
        "256p": "256px",
        "260p": "260px",
        "265p": "265px",
        "267p": "267px",
        "270p": "270px",
        "285p": "285px",
        "320p": "320px",
        "330p": "330px",
        "328p": "328px",
        "345p": "345px",
        "365p": "365px",
        "370p": "370px",
        "394p": "394px",
        "400p": "400px",
        "430p": "430px",
        "440p": "440px",
        "460p": "460px",
        "501p": "501px",
        "600p": "600px",
        "820p": "820px",
        "1040p": "1040px",
        "1200p": "1200px",
        "1260p": "1260px",
      },
      height: {
        "16p": "16px",
        "32p": "32px",
        "34p": "34px",
        "38p": "38px",
        "43p": "43px",
        "62p": "62px",
        "65p": "65px",
        "80p": "80px",
        "96p": "96px",
        "100p": "100px",
        "150p": "150px",
        "200p": "200px",
        "360p": "360px",
        "800p": "800px",
        "450p": "450px",
        "720p": "720px"
      },
      width: {
        "95per": "95%",
        "72p": "72px",
        "95p": "95px",
        "96p": "96px",
        "135p": "135px",
        "212p": "212px",
        "230p": "230px",
        "240p": "240px",
        "275p": "275px",
        "43p": "43px",
        "100p": "100px",
        "150p": "150px",
        "200p": "200px",
        "300p": "300px",
        "350p": "350px",
        "375p": "375px",
        "385p": "385px",
        "392p": "392px",
        "420p": "420px",
        "455p": "455px",
        "460p": "460px",
        "880p": "880px",
        "920p": "920px"
      },
      zIndex: {
        "neg-1": "-1",
        1: "1",
        1: "1",
        1000: "1000",
      },
      inset: {
        "370p": "370px",
      },
      animation: {
        pulseLong: "pulseLong 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        pulseLong: {
          "0%, 100%": {
            opacity: 0.5,
          },
          "50%": {
            opacity: 1,
          },
        },
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [
  ],
};
