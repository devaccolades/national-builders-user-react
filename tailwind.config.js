import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // '343894': '#343894',
        // '20212D' : '#20212D',
        // '252630' : '#252630',
        // '2B2B2B' : '#2B2B2B',
      },
    },
  },
  plugins: [],
});