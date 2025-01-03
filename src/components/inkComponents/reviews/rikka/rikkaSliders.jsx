import * as React from "react";
import { Box, Slider, Tooltip, Typography } from "@mui/material";
import InkSliderArray from "../standardReviewComponents/inkSliderArray";
import { useTheme } from "@emotion/react";

// Helper function to get label by value
const getLabelByValue = (type, value) => {
  const marks = InkSliderArray[type.toLowerCase()];
  if (!marks) {
    console.warn(`No marks found for type: ${type}`);
    return "";
  }

  const mark = marks.find((m) => m.value === value);
  return mark ? mark.label : "";
};

// Custom Tooltip for displaying the label
function ValueLabelComponent(props) {
  const { children, value, type } = props;
  const label = getLabelByValue(type, value);

  return (
    <Tooltip open arrow title={label}>
      {children}
    </Tooltip>
  );
}

const getFilteredMarks = (type, value) => {
  const marks = InkSliderArray[type.toLowerCase()];
  return marks.filter((mark) => mark.value === value);
};

export default function RikkaSliders() {
  const sliderStyles = {
    "& .MuiSlider-track": {
      color: "#043D63",
      opacity: 1,
    },
    "& .MuiSlider-thumb": {
      color: "#043D63",
    },
    "& .MuiSlider-rail": {
      color: "#cfd8dc",
    },
  };

  return (
    <>
      <Box className="flex center">
        <Typography variant="h3" className="sliderLabel">
          A Quick Look
        </Typography>
      </Box>
      <Box
        className="flex center"
        sx={{ transition: "color 0.75s ease-in-out" }}
      >
        <Box sx={{ width: "70vw" }} className="flex between wrap">
          <div
            className="flex center alignCenter column"
            style={{ width: "25vw" }}
          >
            <Typography variant="body2" className="sliderLabel">
              Saturation
            </Typography>
            <Slider
              aria-label="Saturation"
              defaultValue={100}
              step={null}
              marks={getFilteredMarks("saturation", 100)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "saturation" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Shading
            </Typography>
            <Slider
              aria-label="Shading"
              defaultValue={75}
              step={null}
              marks={getFilteredMarks("shading", 75)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "shading" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Sheen
            </Typography>
            <Slider
              aria-label="Sheen"
              defaultValue={33}
              step={null}
              marks={getFilteredMarks("sheen", 33)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "sheen" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Wetness
            </Typography>
            <Slider
              aria-label="Wetness"
              defaultValue={100}
              step={null}
              marks={getFilteredMarks("wetness", 100)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "wetness" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Water Resistance
            </Typography>
            <Slider
              aria-label="Water Resistance"
              defaultValue={0}
              step={null}
              marks={getFilteredMarks("waterresistance", 0)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "waterresistance" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Dry Time
            </Typography>
            <Slider
              aria-label="Dry Time"
              defaultValue={75}
              step={null}
              marks={getFilteredMarks("drytime", 75)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "drytime" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Ease of Clean
            </Typography>
            <Slider
              aria-label="Ease of Clean"
              defaultValue={75}
              step={null}
              marks={getFilteredMarks("easeofclean", 75)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "easeofclean" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
          <div className="flex center column" style={{ width: "25vw" }}>
            <Typography variant="body2" className="sliderLabel">
              Value for Money
            </Typography>
            <Slider
              aria-label="Value for Money"
              defaultValue={75}
              step={null}
              marks={getFilteredMarks("valueformoney", 75)}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "valueformoney" },
              }}
              sx={sliderStyles}
              disabled
              className="inkSlider"
            />
          </div>
        </Box>
      </Box>
    </>
  );
}
