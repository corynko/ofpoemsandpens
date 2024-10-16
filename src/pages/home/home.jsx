import pilotPic from "../../assets/images/png/pilotCustomFineOnPaper.png";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <>
      <Box
        className="flex row between relative"
        sx={{
          zIndex: 5,
          width: "100vw",
          // height: "100vh",
          alignItems: "center",
        }}
      >
        <div className="flex">
          <img src={pilotPic} className="homeHeaderPic" />
        </div>
        <div className="flex">
          <h1>welcome</h1>
        </div>
      </Box>
      <Box>hello</Box>
    </>
  );
};

export default HomePage;
