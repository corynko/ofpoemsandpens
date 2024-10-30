import * as React from "react";
import { Box, Slider, Tooltip, Typography } from "@mui/material";
import InkSliderArray from "../standardReviewComponents/inkSliderArray";

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

export default function KonPekiSliders() {
  return (
    <>
      <Box className="flex center">
        <Typography variant="h2" className="sliderLabel">
          A Quick Look
        </Typography>
      </Box>
      <Box className="flex center">
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
              defaultValue={75}
              step={null}
              marks={InkSliderArray.saturation}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "saturation" },
              }}
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
              marks={InkSliderArray.shading}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "shading" },
              }}
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
              marks={InkSliderArray.sheen}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "sheen" },
              }}
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
              marks={InkSliderArray.wetness}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "wetness" },
              }}
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
              marks={InkSliderArray.waterresistance}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "waterresistance" },
              }}
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
              defaultValue={50}
              step={null}
              marks={InkSliderArray.drytime}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "drytime" },
              }}
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
              defaultValue={100}
              step={null}
              marks={InkSliderArray.easeofclean}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "easeofclean" },
              }}
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
              marks={InkSliderArray.valueformoney}
              valueLabelDisplay="auto"
              slots={{ ValueLabel: ValueLabelComponent }}
              slotProps={{
                valueLabel: { type: "valueformoney" },
              }}
              disabled
              className="inkSlider"
            />
          </div>
        </Box>
      </Box>
    </>
  );
}
