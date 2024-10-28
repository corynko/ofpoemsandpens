import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./logoSVG.css";
import { useTheme } from "@mui/material/styles";

const LogoDrawDesktopNoWords = () => {
  const theme = useTheme();
  const pathVariants = {
    start: {
      opacity: 0,
      pathLength: 0,
    },
    finished: {
      opacity: 1,
      pathLength: 1,

      transition: {
        duration: 3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div style={{ margin: "10px" }}>
      <Link to="/">
        {/* warning, expand line 28 at your own peril */}
        <motion.svg
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="150px"
          height="150px"
          viewBox="0 0 800 800"
          initial="start"
          animate="finished"
        >
          {/* nib left (black bit) */}
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="M194.57,158.61c-1.2,1.5-2.38,2.97-3.56,4.43.24.29.48.57.72.86,1.63-1.3,3.26-2.59,5.35-4.25.33.59.71,1.44,1.24,2.2.54.77,1.12,1.56,1.84,2.13,1.45,1.15,3.22,1.95,4.49,3.25,2.71,2.78,3.81,5.61-.76,7.86-.41.2-.38,1.29-.42,1.44,1.87.04,4.13-.55,4.86.25,1.3,1.43,2.27,3.71,2.25,5.62-.02,1.51-1.51,3.22-2.72,4.48-5.78,6.01-11.68,11.9-17.55,17.82-.68.69-1.36,1.44-2.19,1.92-2.59,1.51-5.41,3.98-8.1.63-2.36-2.93-1.09-6.14,1.05-8.64,2.51-2.94,5.43-5.53,7.91-8.53-7.48,1.97-8.28,11.48-15.16,14.09-.4-.3-.8-.6-1.2-.9.63-1.09,1-2.6,1.94-3.2,6.7-4.28,14.32-11.82,18-19.16-5.01,5.01-9.98,10.07-15.07,15.01-1.57,1.53-3.3,3.06-5.23,4.02-3.23,1.6-4.54.67-5.1-3.29-4.04.66-5.44-1.57-5.18-5.43-1.76-.34-3.43-.47-4.95-1.03-1.05-.38-2.54-1.22-2.71-2.08-.83-4.23-3.53-4-6.76-3.49-3.25.52-6.65,1.25-9.84.81-6.49-.89-9.82-6.41-7.68-12.59.96-2.76.19-3.76-1.94-5.27-16.51-11.76-33.03-23.52-49.24-35.69-3.13-2.35-5.7-6.22-7.12-9.93-5.49-14.25-10.16-28.81-15.6-43.08-6.86-17.99-17.42-33.75-30.24-48.04-2.23-2.49-3.69-5.09-.96-8.04,2.15-2.33,5.31-1.94,8.42,1.08,17.83,17.32,39.56,27.88,62.65,36.02,8.25,2.91,16.55,5.73,24.98,8.02,10,2.72,15.6,10.36,21.08,18.02,7.66,10.7,14.8,21.77,22.2,32.66.93,1.37,2.2,2.53,3.06,3.95,2.47,4.1,5.34,6.08,10.7,5.03,5.27-1.03,9.52,2.89,9.95,8.34.32,4.11-.42,8.29-.4,12.44,0,1.24.83,3.46,1.51,3.56,4.13.56,4.7,3.67,5.49,6.69ZM127.17,107.1c.51,8.42,4.42,14.96,11.03,20-5.01-5.72-9.01-11.99-10.41-19.63,1.64,3.31,3.23,6.64,4.96,9.91.79,1.49,1.83,2.84,2.88,4.44-3.05-9.28-5.97-18.17-8.86-26.94-1.95,3.8-.12,8.02.4,12.22ZM120.23,116c4.78,4.46,9.57,8.93,14.35,13.39.25-.28.49-.55.74-.83-7.66-7.85-12.32-17.36-13.66-28.11-.68-5.52-3.58-7.81-8.07-9.37-.94-.33-1.9-.61-3.13-1,2.95,11.91,6.45,23.05,16.55,30.62-2.26-1.54-4.52-3.09-6.78-4.63-7.07-6.08-9.86-14.5-12.67-22.95-.55-1.66-1.67-3.9-3.05-4.38-6.23-2.18-12.65-3.82-19.53-5.81,2.03,6.19,4.32,11.85,5.65,17.72.86,3.79,3.05,4.91,6.19,6.11,6.69,2.56,13.2,5.6,19.82,8.37,1.12.47,2.4.56,3.6.86ZM95.09,66.1c2.74,1.32,5.44,2.72,8.22,3.96,3.68,1.64,7.41,3.15,11.12,4.71-5.77-4.44-12.26-7.18-19.3-8.69,1.29-.09,2.72-.61,3.84-.21,5.8,2.07,11.52,4.37,16.92,6.46-3.84-4.71-9.97-5.98-15.73-7.83-25.73-8.25-49.75-19.58-69.68-38.35-.68-.64-1.67-.97-2.51-1.45-.29.29-.58.58-.86.86.64,1.04,1.23,2.11,1.93,3.11,7.33,10.4,15.26,20.42,21.9,31.25,10.99,17.91,16.12,38.31,22.95,57.96,1.76,5.06,4.31,9.34,8.55,12.49,4.56,3.38,9.44,6.34,13.89,9.84,2.44,1.92,4.29,1.52,6.12-.34,3.27-3.32,7.48-4.58,11.76-4.3,5.71.37,11.35,1.71,16.83,2.6-.16-.26-.6-.99-1.04-1.71l.55-.46c4.39,4.39,8.77,8.77,13.16,13.16-6.08-4.92-12.25-9.28-20.09-11.14-8.43-2.01-15.43.32-21.99,5.41,3.47,4.18,3.48,4.24,9.61.93,7.05-3.8,17.82-3.18,24.18,1.99q-15.86-2.54-27.07,2.85c1.49,2.7,3.69,2.49,6.08,1.54,10.71-4.25,21.24-3.06,31.48,1.48,2.52,1.12,4.57,3.27,6.84,4.95-16.86-7.81-27.57-8.74-36.25-1.73,2.07.61,4.25,1.2,6.26.83,9.11-1.68,18.01-1.77,26.36,2.82,2.51,1.38,4.66,3.39,6.98,5.11.1-.12.2-.24.3-.36-.75-1-1.49-1.99-2.56-3.42,1.92.83,3.28,1.42,5.68,2.47-1.34-2.09-1.99-3.11-3.12-4.87,1.15.91,1.56,1.3,2.03,1.58.46.27.98.44,1.47.65-1.74-2.75-3.1-6.12-6.87-4.25-2.87-3.2-5.69-6.35-8.51-9.49.17-.17.35-.34.52-.51,2.53,2.53,5.05,5.05,7.58,7.58.22-.27.45-.54.67-.8-8.38-7.03-15.11-16.18-26.27-19.65-1.12-.35-2.14-1.28-3.03-2.12-7.7-7.35-17.03-9.7-27.73-9.45-.08,2.19-.14,3.95-.21,5.94,10.42,1.17,20.6.98,29.2,7.21-4.36-1.18-8.52-2.7-12.82-3.36-4.51-.7-9.14-.68-13.72-.79-1.26-.03-3.22.22-3.66,1.01-.64,1.14-.18,2.89-.18,3.27,2.91.57,4.88.96,6.98,1.37-1.87,1.2-3.24,2.08-4.76,3.07-1.18-1.07-2.72-1.98-3.51-3.33-.77-1.31-1.59-3.62-.98-4.55,3.28-5,1.56-9.91.15-14.74-1.94-6.65-4.41-13.14-6.42-19.77-3.14-10.36-7.35-20.02-15.88-27.25-2.43-2.06-4.61-4.44-6.84-6.73-9.37-9.63-18.71-19.29-28.06-28.93,15.36,13.59,30.11,27.73,44.97,41.75,1.66,1.57,3.79,2.96,5.95,3.61,12,3.64,24.07,7.02,35.64,10.35-6-4.03-12.4-8.34-18.8-12.64.24-.32.47-.65.71-.97.53.08,1.05.16,1.58.24-.78-1.09-1.84-1.53-2.61-2.27-2.69-2.57-5.27-5.25-7.9-7.88ZM161.17,158.07l.73-.93c-19.1-21.99-40.47-40.81-69.71-50.01.57,2.19.88,3.38,1.2,4.58,1.88,7,1.89,6.96,9.1,7.55,1.78.15,3.65.35,5.29,1,11.97,4.73,24.26,8.88,33.6,18.44,3.87,3.96,7.99,7.68,11.96,11.55,2.64,2.57,5.22,5.21,7.83,7.82ZM163.26,130.35c.3.01.6.02.9.04-.02-2.07.75-4.63-.19-6.13-4.51-7.25-9.29-14.35-14.33-21.24-6.78-9.27-13.79-18.38-20.93-27.38-1.54-1.94-4.06-3.1-6.13-4.62,3.81,4.67,8.14,8.58,11.98,12.94,7.27,8.24,13.56,16.54,9.36,29.03-2.15,6.4,1.64,12.82,4.69,18.7-1.01-4.96-3.03-9.79-3.4-14.75-.38-5.06.86-10.24,1.39-15.36,1.4.81,1.85,1.63,2.37,2.41,5.92,8.8,12.3,17.25,9.73,29.14-.84,3.89.96,8.2,3.97,11.46-2.63-7-3.76-13.98-1.74-21.06.62-.03,1.25-.06,1.87-.09.15,2.31.31,4.63.47,6.94ZM154.48,166.68c-4.01-8.36-23.35-12.23-30.87-5.9,5.22,3.72,10.93-.12,16.13,1.21,4.99,1.28,9.83,3.1,14.74,4.68ZM163.33,155.8c-12.9-17.85-28.46-34.31-26.74-58.77-1.68,7.01-1.88,13.9,1.18,20.55,1.61,3.51,3.49,6.89,5.07,10.41,4.83,10.77,12.7,19.3,20.49,27.81ZM163.63,189.46c0,.36,0,.73,0,1.09,1.32-.1,3.07.3,3.89-.4,6.24-5.28,11.43-11.46,14.67-19.25-6.18,6.18-12.37,12.37-18.55,18.55ZM130.37,166.26c1.64.77,2.38,1.27,3.19,1.48,3.86.97,7.97,1.34,11.55,2.93,3.42,1.52,4.99.6,6.43-2.15-6.22-5.52-13-5.06-21.18-2.25ZM182.09,204.97c.48.4.96.8,1.43,1.2,6.78-7.4,13.56-14.79,20.71-22.59-9.42,5.67-17.93,11.45-22.14,21.39ZM143.45,181.03c.22.25.44.51.66.76,1.65-1.51,3.34-2.98,4.95-4.53,10.6-10.18,21.19-20.36,31.76-30.58,2.34-2.26,5.07-4.38,4.4-8.23-1.05,1.68-1.81,3.65-3.18,4.99-8.62,8.44-17.41,16.72-26.08,25.1-4.23,4.09-8.34,8.31-12.5,12.48ZM151.89,181.91c3.19.16,18.39-14.05,21.03-21.03-7.05,7.05-14.09,14.09-21.03,21.03ZM157.47,188.68c8.44-6.8,14.91-13.97,22.06-21.89-8.92,4.87-21.17,16.56-22.06,21.89ZM169.11,194.84c3.15,1.17,12.01-7.38,17.36-17.36-5.71,5.71-11.43,11.43-17.36,17.36ZM136.13,173.23c4.05-1.5,7.42,4.98,11.33-.66-3.27-.91-6.01-2.09-8.82-2.28-1.26-.09-3.61,1.64-3.79,2.8-.36,2.35,5.61,5.2,8.41,3.91-2.37-1.25-4.49-2.37-7.13-3.76ZM152.72,112.53c-.81,7.31-2.99,14.81,1.05,22.62-.37-8.1-.71-15.36-1.05-22.62ZM133.49,174.6c-.42,4.34,1.58,6.2,6.62,6.62-2.17-2.17-4.29-4.29-6.62-6.62ZM131.04,83.48c.12-.15.23-.29.35-.44-4.43-4.43-8.86-8.86-13.29-13.29-.13.13-.26.26-.39.4,4.44,4.44,8.89,8.89,13.33,13.33ZM204.44,168.73c-.7-.21-1.39-.42-2.09-.64-.74,2.05-1.47,4.1-2.21,6.15.6.2,1.2.39,1.8.59.83-2.03,1.67-4.07,2.5-6.1Z"
          />

          {/* nib left (white bit) */}
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg2.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M95.09,66.1c2.62,2.64,5.21,5.31,7.9,7.88.77.74,1.83,1.18,2.61,2.27-.53-.08-1.05-.16-1.58-.24-.24.32-.47.65-.71.97,6.4,4.31,12.8,8.61,18.8,12.64-11.56-3.33-23.64-6.72-35.64-10.35-2.16-.66-4.29-2.05-5.95-3.61-14.86-14.02-29.62-28.16-44.97-41.75,9.35,9.65,18.7,19.3,28.06,28.93,2.23,2.29,4.4,4.67,6.84,6.73,8.53,7.23,12.74,16.89,15.88,27.25,2.01,6.63,4.48,13.12,6.42,19.77,1.41,4.83,3.13,9.74-.15,14.74-.62.94.21,3.24.98,4.55.79,1.35,2.34,2.26,3.51,3.33,1.53-.98,2.9-1.87,4.76-3.07-2.1-.41-4.07-.8-6.98-1.37,0-.38-.45-2.13.18-3.27.44-.79,2.39-1.04,3.66-1.01,4.58.11,9.21.08,13.72.79,4.29.67,8.45,2.18,12.82,3.36-8.6-6.23-18.79-6.03-29.2-7.21.07-1.99.13-3.75.21-5.94,10.7-.25,20.03,2.1,27.73,9.45.89.85,1.9,1.77,3.03,2.12,11.17,3.47,17.89,12.62,26.27,19.65-.22.27-.45.54-.67.8-2.53-2.53-5.05-5.05-7.58-7.58-.17.17-.35.34-.52.51,2.82,3.14,5.64,6.29,8.51,9.49,3.77-1.87,5.14,1.5,6.87,4.25-.49-.21-1.01-.38-1.47-.65-.47-.28-.88-.67-2.03-1.58,1.13,1.76,1.78,2.78,3.12,4.87-2.39-1.04-3.76-1.63-5.68-2.47,1.07,1.42,1.81,2.42,2.56,3.42-.1.12-.2.24-.3.36-2.32-1.72-4.47-3.73-6.98-5.11-8.35-4.59-17.26-4.5-26.36-2.82-2.01.37-4.19-.22-6.26-.83,8.68-7.01,19.38-6.07,36.25,1.73-2.27-1.68-4.32-3.83-6.84-4.95-10.25-4.54-20.77-5.73-31.48-1.48-2.4.95-4.59,1.16-6.08-1.54q11.21-5.38,27.07-2.85c-6.36-5.17-17.13-5.78-24.18-1.99-6.13,3.3-6.14,3.25-9.61-.93,6.56-5.09,13.56-7.41,21.99-5.41,7.84,1.87,14.01,6.23,20.09,11.14-4.39-4.39-8.77-8.77-13.16-13.16l-.55.46c.44.73.88,1.45,1.04,1.71-5.48-.89-11.12-2.23-16.83-2.6-4.28-.28-8.49.98-11.76,4.3-1.83,1.86-3.67,2.26-6.12.34-4.46-3.5-9.34-6.46-13.89-9.84-4.24-3.15-6.79-7.43-8.55-12.49-6.82-19.65-11.96-40.05-22.95-57.96-6.64-10.82-14.57-20.85-21.9-31.25-.7-.99-1.29-2.07-1.93-3.11.29-.29.58-.58.86-.86.84.48,1.83.8,2.51,1.45,19.94,18.77,43.95,30.1,69.68,38.35,5.76,1.85,11.89,3.12,15.73,7.83-5.4-2.09-11.12-4.39-16.92-6.46-1.11-.4-2.55.12-3.84.21,0,0-.03.02-.03.02Z"
          />
          {/* nib left breather hole */}
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg3.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m120.23 115.96c-1.2-0.26-2.48-0.35-3.6-0.82-6.62-2.77-13.13-5.81-19.82-8.37-3.13-1.2-5.33-2.32-6.19-6.11-1.33-5.87-3.62-11.53-5.65-17.72 6.88 1.99 13.3 3.63 19.53 5.81 1.38 0.48 2.5 2.72 3.05 4.38 2.81 8.45 5.6 16.86 12.67 22.95v-0.12zm-15.08-12.32c0.57-0.48 1.14-0.96 1.7-1.44-3.93-3.46-7.87-6.92-11.8-10.37-0.27 0.3-0.54 0.6-0.81 0.91l10.9 10.9z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg3.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M161.17,158.07c-2.61-2.61-5.19-5.25-7.83-7.82-3.97-3.87-8.09-7.58-11.96-11.55-9.34-9.56-21.63-13.71-33.6-18.44-1.64-.65-3.51-.85-5.29-1-7.21-.59-7.22-.56-9.1-7.55-.32-1.19-.63-2.39-1.2-4.58,29.24,9.2,50.61,28.02,69.71,50.01l-.73.93Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg3.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m120.23 116.08c2.26 1.54 4.52 3.09 6.78 4.63-10.1-7.57-13.6-18.71-16.55-30.62 1.23 0.39 2.19 0.67 3.13 1 4.49 1.57 7.38 3.85 8.07 9.37 1.33 10.75 6 20.26 13.66 28.11-0.25 0.28-0.49 0.55-0.74 0.83-4.78-4.46-9.57-8.93-14.35-13.41v0.09z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M163.26,130.35c-.15-2.31-.31-4.63-.47-6.94-.62.03-1.25.06-1.87.09-2.02,7.08-.9,14.06,1.74,21.06-3-3.26-4.81-7.57-3.97-11.46,2.58-11.89-3.81-20.34-9.73-29.14-.52-.78-.97-1.6-2.37-2.41-.53,5.13-1.76,10.3-1.39,15.36.37,4.96,2.38,9.79,3.4,14.75-3.05-5.88-6.85-12.3-4.69-18.7,4.21-12.49-2.09-20.79-9.36-29.03-3.84-4.35-8.18-8.27-11.98-12.94,2.07,1.52,4.59,2.68,6.13,4.62,7.14,9,14.15,18.11,20.93,27.38,5.04,6.89,9.82,13.99,14.33,21.24.93,1.5.17,4.06.19,6.13-.3-.01-.6-.02-.9-.04Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m154.48 166.68c-4.91-1.58-9.76-3.41-14.74-4.68-5.2-1.33-10.91 2.51-16.13-1.21 7.52-6.34 26.86-2.46 30.87 5.9z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m163.33 155.8c-7.79-8.51-15.66-17.03-20.49-27.81-1.58-3.52-3.46-6.9-5.07-10.41-3.06-6.66-2.86-13.54-1.18-20.55-1.72 24.46 13.84 40.92 26.74 58.77z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m163.63 189.46 18.55-18.55c-3.24 7.79-8.43 13.97-14.67 19.25-0.82 0.69-2.57 0.29-3.89 0.4v-1.09z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M130.37,166.26c8.18-2.81,14.96-3.27,21.18,2.25-1.44,2.75-3.01,3.67-6.43,2.15-3.58-1.59-7.69-1.96-11.55-2.93-.82-.2-1.56-.71-3.19-1.48Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M182.09,204.97c4.21-9.94,12.73-15.71,22.14-21.39-7.15,7.8-13.93,15.19-20.71,22.59-.48-.4-.96-.8-1.43-1.2Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M143.45,181.03c4.16-4.16,8.27-8.38,12.5-12.48,8.67-8.39,17.46-16.66,26.08-25.1,1.37-1.34,2.13-3.3,3.18-4.99.67,3.85-2.06,5.97-4.4,8.23-10.56,10.21-21.16,20.4-31.76,30.58-1.61,1.55-3.3,3.02-4.95,4.53-.22-.25-.44-.51-.66-.76Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m151.89 181.91 21.03-21.03c-2.64 6.98-17.83 21.19-21.03 21.03z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M157.47,188.68c.89-5.33,13.14-17.02,22.06-21.89-7.15,7.92-13.62,15.09-22.06,21.89Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M127.17,107.1c-.52-4.2-2.34-8.42-.4-12.22,2.88,8.77,5.81,17.66,8.86,26.94-1.05-1.6-2.09-2.95-2.88-4.44-1.72-3.27-3.31-6.6-4.95-9.9-.23-.08-.44-.21-.63-.37Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m169.11 194.84 17.36-17.36c-5.35 9.98-14.22 18.53-17.36 17.36z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M136.13,173.23c2.64,1.39,4.76,2.51,7.13,3.76-2.8,1.29-8.77-1.56-8.41-3.91.18-1.16,2.53-2.88,3.79-2.8,2.81.2,5.55,1.37,8.82,2.28-3.91,5.64-7.28-.84-11.33.66Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M152.72,112.53c.34,7.26.67,14.52,1.05,22.62-4.04-7.81-1.86-15.31-1.05-22.62Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M127.17,107.1c.19.16.4.29.63.37,1.39,7.64,5.39,13.9,10.4,19.63-6.61-5.04-10.52-11.58-11.03-20Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M95.09,66.1s.03-.02.03-.02c7.04,1.51,13.54,4.25,19.3,8.69-3.71-1.57-7.44-3.08-11.12-4.71-2.78-1.24-5.48-2.63-8.22-3.96Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m133.49 174.6 6.62 6.62c-5.04-0.42-7.04-2.28-6.62-6.62z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m131.04 83.48-13.33-13.33c0.13-0.13 0.26-0.26 0.39-0.4l13.29 13.29c-0.12 0.15-0.23 0.29-0.35 0.44z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M204.44,168.73c-.83,2.03-1.67,4.07-2.5,6.1-.6-.2-1.2-.39-1.8-.59.74-2.05,1.47-4.1,2.21-6.15.7.21,1.39.42,2.09.64Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m105.15 103.64-10.9-10.9c0.27-0.3 0.54-0.6 0.81-0.91 3.93 3.46 7.87 6.92 11.8 10.37-0.57 0.48-1.14 0.96-1.7 1.44z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-5"
            d="m635.83 581.44c19.46 19.91 37.89 40.84 56.86 61.23 4.71 5.06 9.75 9.8 14.93 14.39-52.22-63.07-113.02-117.88-169.98-176.46 1.15 2.05 2.3 4.11 3.46 6.17-17.41-17.5-34.88-34.96-52.23-52.54-16.83-17.04-33.55-34.19-50.28-51.33-2.31-2.37-4.43-4.93-6.63-7.41 2.21 0.18 3.46 1.17 4.59 2.3 49.51 48.98 99.09 97.88 148.46 146.99 24.95 24.82 50.25 49.35 74.04 75.25 31.89 34.72 62.5 70.61 93.57 106.07 2.75 3.14 4.91 6.79 7.34 10.2-14.1-14.94-27.61-30.18-41.61-44.96-14.14-14.93-28.73-29.44-43.21-44.04-14.17-14.29-28.45-28.48-42.69-42.71 23.22 24.68 45.99 49.79 69.93 73.74 18.44 18.45 36.08 37.46 51.92 58.16 0.99 1.3 1.44 3.02 2.14 4.55-13.28-13.26-24.9-27.42-37.42-40.73-12.68-13.49-26.26-26.12-39.4-39.18-12.78-12.71-25.5-25.49-38.25-38.23l-1.27 1.27c17.19 17.19 34.73 34.04 51.48 51.66 20.23 21.28 39.8 43.18 59.54 64.91 1.13 1.24 1.21 3.42 1.78 5.17l-1.29 0.33-54.13-54.13c0.41 0.9 1.09 1.54 1.72 2.22 15.92 16.87 31.88 33.71 47.69 50.69 1.08 1.16 1.1 3.3 1.61 4.99-1.83-0.44-3.69-0.79-5.47-1.37-0.64-0.21-1.09-0.99-1.62-1.52-42.94-43.07-85.88-86.14-128.83-129.2-16.13-16.17-32.29-32.3-48.44-48.44 0.44 1.54 1.43 2.53 2.43 3.52 25.19 24.84 50.53 49.53 75.51 74.58 23.13 23.18 45.9 46.72 68.76 70.16 10.71 10.98 21.32 22.08 31.86 33.23 0.86 0.91 0.8 2.7 1.17 4.08-1.45-0.14-3.22 0.18-4.28-0.53-2.3-1.55-4.34-3.55-6.32-5.53-19.23-19.16-38.39-38.39-57.66-57.51-28.56-28.36-57.25-56.59-85.76-84.99-35.41-35.27-70.7-70.67-106.04-106.01-0.37 0.37-0.74 0.74-1.11 1.1l257.23 257.23c-0.43 0.53-0.87 1.06-1.3 1.59-1.94-1.23-4.07-2.25-5.79-3.73-8.22-7.07-16.57-14.02-24.43-21.48-15.74-14.93-31.19-30.17-46.76-45.28-11.31-11.92-22.3-24.14-33.98-35.68-20.88-20.63-42.16-40.84-63.28-61.22-0.5-0.48-1.06-0.89-1.59-1.33-0.36 0.38-0.72 0.75-1.07 1.13 33.31 32.38 66.62 64.75 99.94 97.14-1.91-0.55-4.14-0.65-5.69-1.73-5.96-4.16-12.24-8.07-17.43-13.09-29.72-28.75-59.41-57.56-88.64-86.81-29.63-29.66-58.54-60.05-88.1-89.78-20.99-21.1-42.55-41.63-63.81-62.47-2.15-2.11-3.92-4.61-5.86-6.93 0.41-0.58 0.82-1.16 1.23-1.74 1.6 0.62 3.57 0.85 4.76 1.93 10.38 9.44 20.8 18.86 30.86 28.64 13.27 12.9 26.22 26.13 39.31 39.22l0.45-0.45-71.56-71.56c1.04-1.67 1.66-3.04 2.63-4.1 0.81-0.89 2.41-1.17 3.01-2.12 3.42-5.42 4.52-5.64 9.15-1 17.96 18.04 35.85 36.16 53.84 54.18 28.95 29.01 57.96 57.97 86.94 86.95l0.65-0.65-145.3-145.3q5.45-6.15 10.58-1.12c1.01 0.99 2.01 2.01 3.01 3.01-1.42-1.76-3.35-3.14-4.48-5-0.87-1.42-0.73-3.46-1.03-5.22 1.72 0.33 4 0.07 5.06 1.09 22.97 22.01 45.92 44.03 68.61 66.32 20.03 19.67 39.75 39.67 59.6 59.53-28.45-28.97-57.17-57.67-85.87-86.39-13.23-13.24-26.44-26.5-39.58-39.84-1.34-1.36-2.12-3.27-3.16-4.92 0.53-0.46 1.05-0.93 1.58-1.39 1.97 1.43 4.17 2.64 5.89 4.33 32.63 32.21 65.21 64.48 97.79 96.74 24.74 24.49 49.42 49.04 74.22 73.47 7.43 7.32 15.19 14.31 22.8 21.45-16.47-16.65-32.97-33.21-49.53-49.69-16.59-16.51-33.21-32.98-49.87-49.41-16.65-16.42-33.62-32.52-50-49.2-16.14-16.43-32.93-32.26-47.9-49.89 2.22 0.21 3.79 1.11 5.04 2.34 28.25 27.86 56.41 55.81 84.72 83.6 8.26 8.11 16.95 15.78 25.45 23.66 31.63 31.59 63.53 62.9 94.77 94.86zm-217.8-166.45-0.42 0.42 47.3 47.3 0.42-0.42-47.3-47.3zm55.17 66.64-0.47 0.48 33.41 33.41c0.2-0.11 0.4-0.23 0.6-0.34l-33.54-33.54zm42.85 42.3-0.46 0.46 40.72 40.72c0.14-0.16 0.28-0.33 0.42-0.49l-40.69-40.69zm144.76 110.47 0.31-0.31-35.07-35.07c-0.11 0.1-0.22 0.19-0.33 0.29l35.09 35.09zm7.79 7.23-0.17 0.17 18.52 18.52 0.17-0.17-18.52-18.52z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m389.37 414.3c1.67 2.06 3.17 4.28 5.04 6.15 41.53 41.6 82.98 83.28 124.71 124.69 48.63 48.26 97.49 96.29 146.31 144.35 5.14 5.06 10.74 9.67 16.62 13.9l-290.7-290.7c-0.66 0.54-1.31 1.07-1.97 1.61z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="M270.94,264.05c3.04-3.4,5.96-6.68,8.98-10.06-8.25-8.25-16.13-16.18-24.06-24.05-8.9-8.84-17.76-17.72-26.84-26.38-3.04-2.9-6.41-5.78-10.16-7.52-2.12-.99-5.32.35-8.05.64-1.65,8.94,5.75,13.47,10.7,18.68,15.07,15.87,30.81,31.12,46.32,46.58.75.75,1.79,1.22,3.11,2.11Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-5"
            d="M386.36,338.18c-5.3-5.3-10.11-10.49-15.41-15.11-1.18-1.03-4.92-.99-6.06.08-7.72,7.18-15.06,14.78-22.9,22.62,5.26,5.26,10.43,10.83,16.15,15.77.97.84,4.9-.35,6.39-1.74,7.33-6.84,14.29-14.07,21.83-21.61Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M374.86,430.9c111.19,111.68,218.63,227.19,338.15,330.31.83.72,2.14.87,3.8.53-121.02-103.14-228.49-220.09-341.95-330.84Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m389.87 423.14 243.42 243.42c0.17-0.18 0.35-0.35 0.52-0.53l-243.51-243.51c-0.14 0.21-0.29 0.42-0.43 0.62z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m381.06 422.44 248.03 248.03 0.77-0.77-248.03-248.03-0.77 0.77z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="M401.01,348.63c-3.17-3.8-9-5.35-11.52-2.85-9.69,9.57-19.11,19.42-28.6,29.19-.35.36-.42,1-.59,1.46,2.54,5.15,5.09,5.17,9.21,1.19,10.27-9.92,21-19.37,31.51-28.98Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M337.25,393.67c-5.07-5.07-10.14-10.15-15.22-15.21-6.84-6.84-7.17-7.05-1.86-15.09,3.04-4.61,7.15-8.59,11.16-12.47,9.53-9.25,19.21-18.35,28.99-27.33,4.18-3.84,8.75-7.26,13.76-11.38-1.4.16-2.69-.1-3.36.44-8.9,7.04-18.27,13.6-26.4,21.44-10.61,10.24-20.24,21.49-30.25,32.35-3.15,3.42-2.69,6.26.89,9.48,5.7,5.12,10.84,10.86,16.31,16.24,1.32,1.3,2.99,2.26,4.5,3.37.5-.61,1-1.23,1.49-1.84Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="m398.63 366c-2.6 3.16-4.74 5.77-7.49 9.11-0.01-0.04 0.33 1.17 0.32 1.16-2.4 1.32-4.52 2.49-6.95 3.83l11.69 11.69 1.17-1.03c-1.98-2.4-3.96-4.8-6.39-7.73 2.79 2.41 5.08 4.39 7.46 6.45 5.35-4.8 10.35-9.29 15.37-13.8l-12.25-12.25c-0.6 0.54-1.2 1.07-1.8 1.61 2.44 2.97 4.87 5.93 7.31 8.9-0.07 0.1-0.13 0.19-0.2 0.29l-8.25-8.25z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M709.41,722.71c-.64-.38-1.27-.76-1.91-1.13-.18.23-.36.46-.54.7,9.13,7.01,18.27,14.01,27.4,21.02.3-.27.6-.54.9-.81-.74-1.06-1.33-2.3-2.26-3.16-21-19.67-41.9-39.45-63.17-58.83-5.82-5.3-12.76-9.37-19.19-14.01-.27.38-.54.76-.82,1.13,19.97,18.23,39.93,36.45,59.9,54.68-.11.14-.21.28-.32.42Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M759.09,734.73c-4.56,6.09-8.59,11.47-12.72,16.99,1.52,1.18,2.94,2.28,4.36,3.38-.1.17-.19.35-.29.52-1.83-.61-3.66-1.21-5.5-1.82,2.14,4.19,5.66,5.95,10.05,5.48,4.82-.52,11.27-8.7,12.77-14.43,2.07-7.93-5.46-6.51-8.67-10.12Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m211.65 164.85-3.89-3.89-41.07 41.07c0.3 0.31 0.6 0.61 0.9 0.92l11.52-11.52c0.78 1.23 1.27 1.98 1.97 3.08 10.15-9.75 21.12-18.32 28.77-30.42 0.6 0.25 1.2 0.51 1.79 0.76z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M348.08,388.15c-2.54,3.17-4.84,6.56-7.67,9.45-4.95,5.05.47,7.03,2.66,9.94,2.58,3.42,5.01,2.8,7.75-.16,12.68-13.71,25.3-27.48,38.32-40.85,6.73-6.91,14.28-13.04,21.03-19.97-23.32,17.58-41.94,40.24-63.25,60.17-6.59-9.38-5.6-7.4-.46-13.92.97-1.23,1.08-3.12,1.59-4.71l.03.05Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m185.18 225.18c40.37 41.39 80.75 82.79 121.12 124.18l1.44-1.35c-39.96-41.79-80.01-83.48-122.56-122.83z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m349.4 311.42c-3.55 2.89-7.45 5.43-10.57 8.73-10.38 10.98-20.43 22.28-30.72 33.35-2.5 2.69-3.66 5.42-0.98 8.31 1.33 1.43 3.54 2.05 5.35 3.04 0.41-0.61 0.82-1.22 1.23-1.83-1.68-2.12-3.35-4.25-5.52-7l42.74-42.74c-0.51-0.62-1.02-1.24-1.52-1.85z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m496.42 545.28-112.53-112.53-0.64 0.64 112.55 112.55c0.21-0.22 0.42-0.43 0.63-0.65z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m591.48 641.25-91.53-91.53c-0.12 0.12-0.24 0.24-0.35 0.36l91.58 91.58c0.1-0.14 0.2-0.27 0.31-0.41z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M325.85,284.49c-33.65-32.47-67.31-64.95-100.96-97.42-.3.32-.61.65-.91.97,33.59,32.62,67.18,65.24,100.77,97.85.37-.47.74-.94,1.11-1.4Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M339.25,290.09c-.87-.34-2.4-1.37-2.83-1.03-11.85,9.49-23.62,19.08-32.5,31.62-.15.22.03.67.1,1.78,11.86-10.9,23.36-21.46,35.23-32.37Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m355.04 315.19c-10.66 6.09-17.37 16.19-24.96 25.41 9.15-7.61 19.66-13.81 24.96-25.41z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M776.55,756.96c-7.14,7.1-12.13,16.37-23.16,18.64-11.12,2.28-19.22-4.19-28.07-8.84,6.86,6.37,14.3,12.51,24.12,11.91,13.8-.85,20.02-12.23,27.11-21.71Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m169.07 218.48c12.35-19.87 30.71-33.5 46.22-49.8-8.15 2.12-45.98 42.41-46.22 49.8z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m426.66 370.79c-15.93 10.72-29.97 23.45-41.63 38.71 13.88-12.9 27.75-25.81 41.63-38.71z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m208.93 206.06 58.16 58.16c0.17-0.16 0.34-0.33 0.51-0.49l-58.19-58.19c-0.16 0.17-0.32 0.35-0.48 0.52z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m341.42 293.62-29.21 29.21c0.38 0.38 0.76 0.76 1.14 1.15l29.21-29.21c-0.38-0.38-0.76-0.76-1.14-1.15z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m351.79 303.28c-11.38 6.72-20.82 16.56-29.75 26.97 0.45 0.48 0.89 0.96 1.34 1.44l28.42-28.42z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m341.45 302.26-24.76 24.76 1.2 1.2 24.72-24.72c-0.39-0.41-0.78-0.82-1.17-1.24z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m371.19 428.66c3.76-5.41 7.11-10.22 10.47-15.04-0.25-0.19-0.51-0.38-0.76-0.57-3.47 4.04-6.95 8.08-10.84 12.6l-13.99-13.99c-0.3 0.32-0.61 0.64-0.91 0.96l16.03 16.03z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m664.93 696.85c13.6 10.43 27.2 20.86 40.8 31.28 0.24-0.31 0.49-0.62 0.73-0.93-8.95-6.83-17.83-13.75-26.88-20.45-4.73-3.5-9.75-6.6-14.63-9.89l-0.02-0.01z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m214.94 179.14-27.13 27.13c0.16 0.18 0.31 0.36 0.47 0.54l27.14-27.14-0.48-0.53z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m357.83 372.43 31.44-31.44c-0.15-0.16-0.3-0.33-0.46-0.49l-31.27 31.27 0.28 0.67z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m305.88 312.37 24.75-24.75c-0.25-0.25-0.51-0.5-0.76-0.75l-24.88 24.88c0.3 0.21 0.6 0.41 0.9 0.62z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m420.87 369.84c1.06-6.31-6.47-13.18-11.92-11.92l11.92 11.92z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M301.06,259.43c-8.95,4.47-15.61,11.62-22.28,18.76.39.46.77.91,1.16,1.37,3.57-3.24,7.21-6.42,10.7-9.75,3.55-3.38,6.95-6.92,10.42-10.38Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m392.18 395.55c2.92-3.45 0.37-7.64-8.2-12.06 1.67 1.9 3.34 3.8 6.13 6.98-2.32-2.32-3.39-3.54-4.61-4.57-1.18-1-2.53-1.8-4.66-1.69l11.34 11.34z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m386 396.25-8.07-8.07c5.25 8.95 9.41 11.55 12.5 8.64l-10.72-10.72c-0.34 0.31-0.67 0.61-1.01 0.92l8.26 8.26c-0.32 0.32-0.64 0.65-0.96 0.97z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M760.28,723.3c-7.55,8.65-15.11,17.31-22.66,25.96.32.28.64.56.96.85,7.65-8.61,15.3-17.23,22.95-25.84-.41-.32-.83-.65-1.24-.97Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m288.88 261.02-12.62 12.62c0.2 0.26 0.4 0.51 0.6 0.77 4.51-3.86 9.02-7.72 13.53-11.57-0.51-0.61-1.01-1.21-1.52-1.82z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m302.76 307.8 15.34-15.34c-0.25-0.26-0.51-0.52-0.76-0.78l-15.35 15.35c0.26 0.26 0.51 0.52 0.77 0.78z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m299.61 273.36-14.5 14.5c0.19 0.21 0.37 0.41 0.56 0.62 5.14-4.5 10.28-9 15.42-13.51-0.49-0.54-0.99-1.07-1.48-1.61z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m293.85 288.7 10.97-10.97c-0.29-0.3-0.58-0.6-0.87-0.91l-11.07 11.07c0.32 0.27 0.65 0.54 0.97 0.8z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m285.38 282.06 11.97-11.97c-0.23-0.27-0.47-0.54-0.7-0.8l-12.05 12.05c0.26 0.24 0.52 0.48 0.79 0.72z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m307.29 280.58-11.98 11.98 0.75 0.84 11.99-11.99c-0.26-0.27-0.51-0.55-0.77-0.82z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m664.94 696.86c-7.99-7.99-15.99-15.99-23.99-23.98 7.98 7.99 15.97 15.98 23.96 23.97l0.02 0.02z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M348.05,388.1c2.13-.88,4.31-1.64,6.36-2.68,1.47-.75,2.74-1.88,4.48-3.1.19.45-.16-.37-.71-1.66,1.37.07,2.48.13,3.64.2-2.05-3.3-3.92-3.19-6.33-.21-2.2,2.72-4.89,5.04-7.39,7.52-.02-.02-.05-.07-.05-.07Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m357.17 364.12-14.88-14.88-0.71 0.71 14.95 14.95c0.21-0.26 0.43-0.52 0.64-0.78z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m403.56 362.74 11.51 11.51c0.3-0.3 0.59-0.6 0.89-0.89l-11.51-11.51c-0.3 0.3-0.59 0.6-0.89 0.89z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m284.39 258.44-13.1 13.1c0.17 0.19 0.34 0.37 0.51 0.56 4.62-4.07 9.24-8.14 13.87-12.2-0.42-0.48-0.85-0.97-1.27-1.45z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m242.35 244.02-20.05-20.05-0.09 0.09 19.98 19.98c0.05 0 0.11-0.01 0.16-0.02z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m418.56 370.84-11-11-0.62 0.7 11 11c0.21-0.24 0.41-0.47 0.62-0.71z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m313.68 287.44-11.6 11.6c0.32 0.34 0.65 0.68 0.97 1.02 4.06-3.7 8.13-7.41 12.19-11.11-0.52-0.5-1.04-1.01-1.56-1.51z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m309.86 283.66c-3.82 4.2-7.63 8.4-11.45 12.6l0.72 0.69 12.04-12.04c-0.44-0.42-0.87-0.83-1.31-1.25z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m393.85 332.74-16.36-16.36c-0.18 0.18-0.35 0.36-0.53 0.54l16.36 16.36c0.18-0.18 0.35-0.36 0.53-0.54z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="M541.06,486.58c31.63,31.59,63.53,62.9,94.77,94.86,19.46,19.91,37.89,40.84,56.86,61.23,4.71,5.06,9.75,9.8,14.93,14.39-52.22-63.07-113.02-117.88-169.98-176.46,1.15,2.05,2.3,4.11,3.46,6.17,0,.01-.05-.19-.05-.19Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="M661.68,669.89c-11.31-11.92-22.3-24.14-33.98-35.68-20.88-20.63-42.16-40.84-63.28-61.22-.5-.48-1.06-.89-1.59-1.33-.36.38-.72.75-1.07,1.13,33.31,32.38,66.62,64.75,99.94,97.14.01,0-.02-.03-.02-.03Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m465.34 462.29-47.3-47.3-0.42 0.42 47.3 47.3 0.42-0.42z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m506.75 515.18-33.54-33.54-0.47 0.48 33.41 33.41c0.2-0.11 0.4-0.23 0.6-0.34z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m556.74 564.62-40.69-40.69-0.46 0.46 40.72 40.72c0.14-0.16 0.28-0.33 0.42-0.49z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m625.72 599.32 35.09 35.09 0.31-0.31-35.07-35.07c-0.11 0.1-0.22 0.19-0.33 0.29z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m687.12 660.15-18.52-18.52-0.17 0.17 18.52 18.52 0.17-0.17z"
          />
          {/* nib right black bit */}
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="M610.92,151.91c.68-.09,1.51-2.32,1.51-3.56.02-4.15-.72-8.33-.4-12.44.43-5.45,4.68-9.38,9.95-8.34,5.36,1.05,8.23-.93,10.7-5.03.85-1.42,2.12-2.57,3.06-3.95,7.4-10.89,14.54-21.96,22.2-32.66,5.48-7.65,11.08-15.3,21.08-18.02,8.43-2.29,16.73-5.12,24.98-8.02,23.09-8.13,44.82-18.69,62.65-36.02,3.12-3.03,6.27-3.42,8.42-1.08,2.72,2.95,1.27,5.55-.96,8.04-12.82,14.29-23.38,30.05-30.24,48.04-5.44,14.27-10.11,28.83-15.6,43.08-1.43,3.71-3.99,7.58-7.12,9.93-16.2,12.18-32.72,23.93-49.24,35.69-2.13,1.52-2.9,2.51-1.94,5.27,2.14,6.18-1.19,11.69-7.68,12.59-3.19.44-6.59-.29-9.84-.81-3.24-.52-5.93-.75-6.76,3.49-.17.86-1.66,1.69-2.71,2.08-1.52.55-3.2.69-4.95,1.03.25,3.86-1.14,6.08-5.18,5.43-.56,3.96-1.87,4.9-5.1,3.29-1.94-.96-3.66-2.49-5.23-4.02-5.08-4.94-10.05-10-15.07-15.01,3.69,7.35,11.3,14.88,18,19.16.94.6,1.31,2.11,1.94,3.2-.4.3-.8.6-1.2.9-6.88-2.62-7.68-12.12-15.16-14.09,2.48,3.01,5.4,5.59,7.91,8.53,2.14,2.5,3.4,5.71,1.05,8.64-2.69,3.35-5.51.88-8.1-.63-.82-.48-1.5-1.23-2.19-1.92-5.87-5.92-11.77-11.81-17.55-17.82-1.21-1.26-2.71-2.96-2.72-4.48-.02-1.91.95-4.19,2.25-5.62.73-.8,2.99-.21,4.86-.25-.04-.15-.01-1.24-.42-1.44-4.57-2.25-3.47-5.08-.76-7.86,1.27-1.3,3.04-2.11,4.49-3.25.73-.57,1.31-1.36,1.84-2.13.53-.75.91-1.61,1.24-2.2,2.09,1.66,3.72,2.96,5.35,4.25.24-.29.48-.57.72-.86-1.18-1.47-2.36-2.93-3.56-4.43.79-3.02,1.37-6.13,5.49-6.69ZM673.23,94.87c-2.88,8.77-5.81,17.66-8.86,26.94,1.05-1.6,2.09-2.95,2.88-4.44,1.72-3.27,3.31-6.6,4.96-9.91-1.4,7.65-5.4,13.91-10.41,19.63,6.61-5.04,10.52-11.58,11.03-20,.52-4.2,2.34-8.42.4-12.22ZM683.37,115.14c6.62-2.77,13.13-5.81,19.82-8.37,3.13-1.2,5.33-2.32,6.19-6.11,1.33-5.87,3.62-11.53,5.65-17.72-6.88,1.99-13.3,3.63-19.53,5.81-1.38.48-2.5,2.72-3.05,4.38-2.81,8.45-5.6,16.86-12.67,22.95-2.26,1.54-4.52,3.09-6.78,4.63,10.1-7.57,13.6-18.71,16.55-30.62-1.23.39-2.19.67-3.13,1-4.49,1.57-7.38,3.85-8.07,9.37-1.33,10.75-6,20.26-13.66,28.11.25.28.49.55.74.83,4.78-4.46,9.57-8.93,14.35-13.39,1.21-.31,2.48-.4,3.6-.86ZM697.01,73.98c-.77.74-1.83,1.18-2.61,2.27.53-.08,1.05-.16,1.58-.24.24.32.47.65.71.97-6.4,4.31-12.8,8.61-18.8,12.64,11.56-3.33,23.64-6.72,35.64-10.35,2.16-.66,4.29-2.05,5.95-3.61,14.86-14.02,29.62-28.16,44.97-41.75-9.35,9.65-18.7,19.3-28.06,28.93-2.23,2.29-4.4,4.67-6.84,6.73-8.53,7.23-12.74,16.89-15.88,27.25-2.01,6.63-4.48,13.12-6.42,19.77-1.41,4.83-3.13,9.74.15,14.74.62.94-.21,3.24-.98,4.55-.79,1.35-2.34,2.26-3.51,3.33-1.53-.98-2.9-1.87-4.76-3.07,2.1-.41,4.07-.8,6.98-1.37,0-.38.45-2.13-.18-3.27-.44-.79-2.39-1.04-3.66-1.01-4.58.11-9.21.08-13.72.79-4.29.67-8.45,2.18-12.82,3.36,8.6-6.23,18.79-6.03,29.2-7.21-.07-1.99-.13-3.75-.21-5.94-10.7-.25-20.03,2.1-27.73,9.45-.89.85-1.9,1.77-3.03,2.12-11.17,3.47-17.89,12.62-26.27,19.65.22.27.45.54.67.8,2.53-2.53,5.05-5.05,7.58-7.58.17.17.35.34.52.51-2.82,3.14-5.64,6.29-8.51,9.49-3.77-1.87-5.14,1.5-6.87,4.25.49-.21,1.01-.38,1.47-.65.47-.28.88-.67,2.03-1.58-1.13,1.76-1.78,2.78-3.12,4.87,2.39-1.04,3.76-1.63,5.68-2.47-1.07,1.42-1.81,2.42-2.56,3.42.1.12.2.24.3.36,2.32-1.72,4.47-3.73,6.98-5.11,8.35-4.59,17.26-4.5,26.36-2.82,2.01.37,4.19-.22,6.26-.83-8.68-7.01-19.38-6.07-36.25,1.73,2.27-1.68,4.32-3.83,6.84-4.95,10.25-4.54,20.77-5.73,31.48-1.48,2.4.95,4.59,1.16,6.08-1.54q-11.21-5.38-27.07-2.85c6.36-5.17,17.13-5.78,24.18-1.99,6.13,3.3,6.14,3.25,9.61-.93-6.56-5.09-13.56-7.41-21.99-5.41-7.84,1.87-14.01,6.23-20.09,11.14,4.39-4.39,8.77-8.77,13.16-13.16l.55.46c-.44.73-.88,1.45-1.04,1.71,5.48-.89,11.12-2.23,16.83-2.6,4.28-.28,8.49.98,11.76,4.3,1.83,1.86,3.67,2.26,6.12.34,4.46-3.5,9.34-6.46,13.89-9.84,4.24-3.15,6.79-7.43,8.55-12.49,6.82-19.65,11.96-40.05,22.95-57.96,6.64-10.82,14.57-20.85,21.9-31.25.7-.99,1.29-2.07,1.93-3.11-.29-.29-.58-.58-.86-.86-.84.48-1.83.8-2.51,1.45-19.94,18.77-43.95,30.1-69.68,38.35-5.76,1.85-11.89,3.12-15.73,7.83,5.4-2.09,11.12-4.39,16.92-6.46,1.11-.4,2.55.12,3.84.21-7.04,1.5-13.54,4.25-19.3,8.69,3.71-1.57,7.44-3.08,11.12-4.71,2.78-1.24,5.48-2.63,8.22-3.96-2.62,2.64-5.21,5.31-7.9,7.88ZM646.66,150.26c3.97-3.87,8.09-7.58,11.96-11.55,9.34-9.56,21.63-13.71,33.6-18.44,1.64-.65,3.51-.85,5.29-1,7.21-.59,7.22-.56,9.1-7.55.32-1.19.63-2.39,1.2-4.58-29.24,9.2-50.61,28.02-69.71,50.01.24.31.49.62.73.93,2.61-2.61,5.19-5.25,7.83-7.82ZM637.2,123.41c.62.03,1.25.06,1.87.09,2.02,7.08.9,14.06-1.74,21.06,3-3.26,4.81-7.57,3.97-11.46-2.58-11.89,3.81-20.34,9.73-29.14.52-.78.97-1.6,2.37-2.41.53,5.13,1.76,10.3,1.39,15.36-.37,4.96-2.38,9.79-3.4,14.75,3.05-5.88,6.85-12.3,4.69-18.7-4.21-12.49,2.09-20.79,9.36-29.03,3.84-4.35,8.18-8.27,11.98-12.94-2.07,1.52-4.59,2.68-6.13,4.62-7.14,9-14.15,18.11-20.93,27.38-5.04,6.89-9.82,13.99-14.33,21.24-.93,1.5-.17,4.06-.19,6.13.3-.01.6-.02.9-.04.15-2.31.31-4.63.47-6.94ZM660.26,162c5.2-1.33,10.91,2.51,16.13-1.21-7.52-6.34-26.86-2.46-30.87,5.9,4.91-1.58,9.76-3.41,14.74-4.68ZM657.16,128c1.58-3.52,3.46-6.9,5.07-10.41,3.06-6.66,2.86-13.54,1.18-20.55,1.72,24.46-13.84,40.92-26.74,58.77,7.79-8.51,15.66-17.03,20.49-27.81ZM617.81,170.9c3.24,7.79,8.43,13.97,14.67,19.25.82.69,2.57.29,3.89.4,0-.36,0-.73,0-1.09-6.18-6.18-12.37-12.37-18.55-18.55ZM648.45,168.52c1.44,2.75,3.01,3.67,6.43,2.15,3.58-1.59,7.69-1.96,11.55-2.93.82-.2,1.56-.71,3.19-1.48-8.18-2.81-14.96-3.27-21.18,2.25ZM595.77,183.59c7.15,7.8,13.93,15.19,20.71,22.59.48-.4.96-.8,1.43-1.2-4.21-9.94-12.73-15.71-22.14-21.39ZM644.04,168.56c-8.67-8.39-17.46-16.66-26.08-25.1-1.37-1.34-2.13-3.3-3.18-4.99-.67,3.85,2.06,5.97,4.4,8.23,10.56,10.21,21.16,20.4,31.76,30.58,1.61,1.55,3.3,3.02,4.95,4.53l.66-.76c-4.16-4.16-8.27-8.38-12.5-12.48ZM627.08,160.88c2.64,6.98,17.83,21.19,21.03,21.03-6.93-6.93-13.98-13.98-21.03-21.03ZM620.47,166.78c7.15,7.92,13.62,15.09,22.06,21.89-.89-5.33-13.14-17.02-22.06-21.89ZM613.53,177.47c5.35,9.98,14.22,18.53,17.36,17.36-5.94-5.94-11.65-11.65-17.36-17.36ZM656.74,176.99c2.8,1.29,8.77-1.56,8.41-3.91-.18-1.16-2.53-2.88-3.79-2.8-2.81.2-5.55,1.37-8.82,2.28,3.91,5.64,7.28-.84,11.33.66-2.64,1.39-4.76,2.51-7.13,3.76ZM646.23,135.15c4.04-7.81,1.86-15.31,1.05-22.62-.34,7.26-.67,14.52-1.05,22.62ZM659.89,181.22c5.04-.42,7.04-2.28,6.62-6.62-2.33,2.33-4.45,4.45-6.62,6.62ZM682.29,70.15c-.13-.13-.26-.26-.39-.4-4.43,4.43-8.86,8.86-13.29,13.29.12.15.23.29.35.44,4.44-4.44,8.89-8.89,13.33-13.33ZM598.06,174.83c.6-.2,1.2-.39,1.8-.59-.74-2.05-1.47-4.1-2.21-6.15-.7.21-1.39.42-2.09.64.83,2.03,1.67,4.07,2.5,6.1Z"
          />
          {/* nib right white bit */}
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg2.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M704.91,66.1c-2.62,2.64-5.21,5.31-7.9,7.88-.77.74-1.83,1.18-2.61,2.27.53-.08,1.05-.16,1.58-.24.24.32.47.65.71.97-6.4,4.31-12.8,8.61-18.8,12.64,11.56-3.33,23.64-6.72,35.64-10.35,2.16-.66,4.29-2.05,5.95-3.61,14.86-14.02,29.62-28.16,44.97-41.75-9.35,9.65-18.7,19.3-28.06,28.93-2.23,2.29-4.4,4.67-6.84,6.73-8.53,7.23-12.74,16.89-15.88,27.25-2.01,6.63-4.48,13.12-6.42,19.77-1.41,4.83-3.13,9.74.15,14.74.62.94-.21,3.24-.98,4.55-.79,1.35-2.34,2.26-3.51,3.33-1.53-.98-2.9-1.87-4.76-3.07,2.1-.41,4.07-.8,6.98-1.37,0-.38.45-2.13-.18-3.27-.44-.79-2.39-1.04-3.66-1.01-4.58.11-9.21.08-13.72.79-4.29.67-8.45,2.18-12.82,3.36,8.6-6.23,18.79-6.03,29.2-7.21-.07-1.99-.13-3.75-.21-5.94-10.7-.25-20.03,2.1-27.73,9.45-.89.85-1.9,1.77-3.03,2.12-11.17,3.47-17.89,12.62-26.27,19.65.22.27.45.54.67.8,2.53-2.53,5.05-5.05,7.58-7.58.17.17.35.34.52.51-2.82,3.14-5.64,6.29-8.51,9.49-3.77-1.87-5.14,1.5-6.87,4.25.49-.21,1.01-.38,1.47-.65.47-.28.88-.67,2.03-1.58-1.13,1.76-1.78,2.78-3.12,4.87,2.39-1.04,3.76-1.63,5.68-2.47-1.07,1.42-1.81,2.42-2.56,3.42.1.12.2.24.3.36,2.32-1.72,4.47-3.73,6.98-5.11,8.35-4.59,17.26-4.5,26.36-2.82,2.01.37,4.19-.22,6.26-.83-8.68-7.01-19.38-6.07-36.25,1.73,2.27-1.68,4.32-3.83,6.84-4.95,10.25-4.54,20.77-5.73,31.48-1.48,2.4.95,4.59,1.16,6.08-1.54q-11.21-5.38-27.07-2.85c6.36-5.17,17.13-5.78,24.18-1.99,6.13,3.3,6.14,3.25,9.61-.93-6.56-5.09-13.56-7.41-21.99-5.41-7.84,1.87-14.01,6.23-20.09,11.14,4.39-4.39,8.77-8.77,13.16-13.16l.55.46c-.44.73-.88,1.45-1.04,1.71,5.48-.89,11.12-2.23,16.83-2.6,4.28-.28,8.49.98,11.76,4.3,1.83,1.86,3.67,2.26,6.12.34,4.46-3.5,9.34-6.46,13.89-9.84,4.24-3.15,6.79-7.43,8.55-12.49,6.82-19.65,11.96-40.05,22.95-57.96,6.64-10.82,14.57-20.85,21.9-31.25.7-.99,1.29-2.07,1.93-3.11-.29-.29-.58-.58-.86-.86-.84.48-1.83.8-2.51,1.45-19.94,18.77-43.95,30.1-69.68,38.35-5.76,1.85-11.89,3.12-15.73,7.83,5.4-2.09,11.12-4.39,16.92-6.46,1.11-.4,2.55.12,3.84.21,0,0,.03.02.03.02Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg3.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M679.77,116.08c7.07-6.08,9.86-14.5,12.67-22.95.55-1.66,1.67-3.9,3.05-4.38,6.23-2.18,12.65-3.82,19.53-5.81-2.03,6.19-4.32,11.85-5.65,17.72-.86,3.79-3.05,4.91-6.19,6.11-6.69,2.56-13.2,5.6-19.82,8.37-1.12.47-2.4.56-3.6.82v.12ZM705.75,92.74c-.27-.3-.54-.6-.81-.91-3.93,3.46-7.87,6.92-11.8,10.37.57.48,1.14.96,1.7,1.44,3.63-3.63,7.27-7.27,10.9-10.9Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg3.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M638.83,158.07c2.61-2.61,5.19-5.25,7.83-7.82,3.97-3.87,8.09-7.58,11.96-11.55,9.34-9.56,21.63-13.71,33.6-18.44,1.64-.65,3.51-.85,5.29-1,7.21-.59,7.22-.56,9.1-7.55.32-1.19.63-2.39,1.2-4.58-29.24,9.2-50.61,28.02-69.71,50.01.24.31.49.62.73.93Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.svg3.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M679.77,116.08c-2.26,1.54-4.52,3.09-6.78,4.63,10.1-7.57,13.6-18.71,16.55-30.62-1.23.39-2.19.67-3.13,1-4.49,1.57-7.38,3.85-8.07,9.37-1.33,10.75-6,20.26-13.66,28.11.25.28.49.55.74.83,4.78-4.46,9.57-8.93,14.35-13.41,0-.02,0,.09,0,.09Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M636.74,130.35c.15-2.31.31-4.63.47-6.94.62.03,1.25.06,1.87.09,2.02,7.08.9,14.06-1.74,21.06,3-3.26,4.81-7.57,3.97-11.46-2.58-11.89,3.81-20.34,9.73-29.14.52-.78.97-1.6,2.37-2.41.53,5.13,1.76,10.3,1.39,15.36-.37,4.96-2.38,9.79-3.4,14.75,3.05-5.88,6.85-12.3,4.69-18.7-4.21-12.49,2.09-20.79,9.36-29.03,3.84-4.35,8.18-8.27,11.98-12.94-2.07,1.52-4.59,2.68-6.13,4.62-7.14,9-14.15,18.11-20.93,27.38-5.04,6.89-9.82,13.99-14.33,21.24-.93,1.5-.17,4.06-.19,6.13.3-.01.6-.02.9-.04Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m645.52 166.68c4.91-1.58 9.76-3.41 14.74-4.68 5.2-1.33 10.91 2.51 16.13-1.21-7.52-6.34-26.86-2.46-30.87 5.9z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m636.67 155.8c7.79-8.51 15.66-17.03 20.49-27.81 1.58-3.52 3.46-6.9 5.07-10.41 3.06-6.66 2.86-13.54 1.18-20.55 1.72 24.46-13.84 40.92-26.74 58.77z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m636.37 189.46-18.55-18.55c3.24 7.79 8.43 13.97 14.67 19.25 0.82 0.69 2.57 0.29 3.89 0.4v-1.09z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M669.63,166.26c-8.18-2.81-14.96-3.27-21.18,2.25,1.44,2.75,3.01,3.67,6.43,2.15,3.58-1.59,7.69-1.96,11.55-2.93.82-.2,1.56-.71,3.19-1.48Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M617.91,204.97c-4.21-9.94-12.73-15.71-22.14-21.39,7.15,7.8,13.93,15.19,20.71,22.59.48-.4.96-.8,1.43-1.2Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M656.55,181.03c-4.16-4.16-8.27-8.38-12.5-12.48-8.67-8.39-17.46-16.66-26.08-25.1-1.37-1.34-2.13-3.3-3.18-4.99-.67,3.85,2.06,5.97,4.4,8.23,10.56,10.21,21.16,20.4,31.76,30.58,1.61,1.55,3.3,3.02,4.95,4.53l.66-.76Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m648.11 181.91-21.03-21.03c2.64 6.98 17.83 21.19 21.03 21.03z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M642.53,188.68c-.89-5.33-13.14-17.02-22.06-21.89,7.15,7.92,13.62,15.09,22.06,21.89Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M672.83,107.1c.52-4.2,2.34-8.42.4-12.22-2.88,8.77-5.81,17.66-8.86,26.94,1.05-1.6,2.09-2.95,2.88-4.44,1.72-3.27,3.31-6.6,4.95-9.9.23-.08.44-.21.63-.37Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m630.89 194.84-17.36-17.36c5.35 9.98 14.22 18.53 17.36 17.36z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M663.87,173.23c-2.64,1.39-4.76,2.51-7.13,3.76,2.8,1.29,8.77-1.56,8.41-3.91-.18-1.16-2.53-2.88-3.79-2.8-2.81.2-5.55,1.37-8.82,2.28,3.91,5.64,7.28-.84,11.33.66Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M647.28,112.53c-.34,7.26-.67,14.52-1.05,22.62,4.04-7.81,1.86-15.31,1.05-22.62Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M672.83,107.1c-.19.16-.4.29-.63.37-1.39,7.64-5.39,13.9-10.4,19.63,6.61-5.04,10.52-11.58,11.03-20Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M704.91,66.1s-.03-.02-.03-.02c-7.04,1.51-13.54,4.25-19.3,8.69,3.71-1.57,7.44-3.08,11.12-4.71,2.78-1.24,5.48-2.63,8.22-3.96Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m666.51 174.6-6.62 6.62c5.04-0.42 7.04-2.28 6.62-6.62z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m668.96 83.48 13.33-13.33c-0.13-0.13-0.26-0.26-0.39-0.4l-13.29 13.29c0.12 0.15 0.23 0.29 0.35 0.44z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M595.56,168.73c.83,2.03,1.67,4.07,2.5,6.1.6-.2,1.2-.39,1.8-.59-.74-2.05-1.47-4.1-2.21-6.15-.7.21-1.39.42-2.09.64Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m694.85 103.64 10.9-10.9c-0.27-0.3-0.54-0.6-0.81-0.91-3.93 3.46-7.87 6.92-11.8 10.37 0.57 0.48 1.14 0.96 1.7 1.44z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="m258.94 486.58c8.49-7.87 17.18-15.55 25.45-23.66 28.31-27.79 56.47-55.75 84.72-83.6 1.25-1.23 2.82-2.13 5.04-2.34-14.97 17.63-31.77 33.46-47.9 49.89-16.38 16.68-33.35 32.78-50 49.2-16.66 16.43-33.29 32.9-49.87 49.41-16.56 16.49-33.06 33.05-49.53 49.69 7.61-7.14 15.37-14.13 22.8-21.45 24.8-24.43 49.48-48.97 74.22-73.47 32.58-32.26 65.16-64.53 97.79-96.74 1.72-1.69 3.91-2.9 5.89-4.33 0.53 0.46 1.05 0.93 1.58 1.39-1.04 1.65-1.82 3.56-3.16 4.92-13.14 13.33-26.35 26.6-39.58 39.84-28.7 28.72-57.42 57.43-85.87 86.39 19.86-19.86 39.57-39.85 59.6-59.53 22.69-22.29 45.65-44.31 68.61-66.32 1.06-1.02 3.35-0.76 5.06-1.09-0.31 1.76-0.17 3.8-1.03 5.22-1.14 1.86-3.07 3.24-4.48 5 1-1 2-2.02 3.01-3.01q5.13-5.03 10.58 1.12l-145.3 145.3 0.65 0.65c28.98-28.98 57.99-57.94 86.94-86.95 17.98-18.02 35.87-36.13 53.84-54.18 4.63-4.65 5.73-4.43 9.15 1 0.6 0.96 2.2 1.24 3.01 2.12 0.97 1.06 1.59 2.44 2.63 4.1l-71.56 71.56 0.45 0.45c13.09-13.09 26.04-26.32 39.31-39.22 10.06-9.78 20.48-19.2 30.86-28.64 1.19-1.08 3.15-1.31 4.76-1.93 0.41 0.58 0.82 1.16 1.23 1.74-1.94 2.32-3.71 4.82-5.86 6.93-21.25 20.84-42.82 41.36-63.81 62.47-29.56 29.73-58.47 60.11-88.1 89.78-29.23 29.26-58.91 58.06-88.64 86.81-5.18 5.02-11.47 8.93-17.43 13.09-1.55 1.08-3.78 1.19-5.69 1.73 33.32-32.38 66.63-64.76 99.94-97.14-0.36-0.38-0.72-0.75-1.07-1.13-0.53 0.44-1.09 0.86-1.59 1.33-21.12 20.38-42.4 40.59-63.28 61.22-11.68 11.54-22.68 23.76-33.98 35.68-15.57 15.11-31.02 30.35-46.76 45.28-7.86 7.46-16.21 14.41-24.43 21.48-1.72 1.48-3.85 2.5-5.79 3.73-0.43-0.53-0.87-1.06-1.3-1.59l257.23-257.23c-0.37-0.37-0.74-0.74-1.11-1.1-35.34 35.34-70.63 70.74-106.04 106.01-28.51 28.4-57.2 56.63-85.76 84.99-19.26 19.13-38.42 38.36-57.66 57.51-1.98 1.98-4.02 3.97-6.32 5.53-1.06 0.72-2.83 0.39-4.28 0.53 0.37-1.38 0.31-3.17 1.17-4.08 10.54-11.16 21.14-22.25 31.86-33.23 22.87-23.44 45.64-46.98 68.76-70.16 24.98-25.05 50.33-49.73 75.51-74.58 1-0.99 1.98-1.98 2.43-3.52-16.15 16.15-32.31 32.28-48.44 48.44-42.95 43.06-85.89 86.13-128.83 129.2-0.53 0.53-0.98 1.31-1.62 1.52-1.78 0.59-3.64 0.93-5.47 1.37 0.51-1.69 0.53-3.83 1.61-4.99 15.81-16.97 31.77-33.82 47.69-50.69 0.64-0.68 1.31-1.32 1.72-2.22l-54.13 54.13-1.29-0.33c0.57-1.75 0.65-3.93 1.78-5.17 19.74-21.74 39.32-43.63 59.54-64.91 16.74-17.61 34.29-34.47 51.48-51.66l-1.27-1.27c-12.75 12.75-25.46 25.52-38.25 38.23-13.14 13.06-26.72 25.69-39.4 39.18-12.52 13.32-24.14 27.47-37.42 40.73 0.7-1.53 1.14-3.25 2.14-4.55 15.84-20.7 33.48-39.71 51.92-58.16 23.94-23.95 46.71-49.06 69.93-73.74-14.23 14.23-28.51 28.42-42.69 42.71-14.48 14.61-29.07 29.12-43.21 44.04-14 14.78-27.51 30.02-41.61 44.96 2.43-3.41 4.59-7.07 7.34-10.2 31.08-35.46 61.68-71.36 93.57-106.07 23.79-25.9 49.1-50.43 74.04-75.25 49.37-49.12 98.95-98.02 148.46-146.99 1.13-1.12 2.39-2.12 4.59-2.3-2.21 2.47-4.32 5.04-6.63 7.41-16.73 17.14-33.45 34.28-50.28 51.33-17.35 17.58-34.82 35.04-52.23 52.54 1.16-2.07 2.31-4.12 3.46-6.17-56.96 58.58-117.76 113.39-169.98 176.46 5.19-4.59 10.23-9.33 14.93-14.39 18.98-20.39 37.4-41.32 56.86-61.23 31.24-31.96 63.15-63.27 94.77-94.86zm75.72-24.29 0.42 0.42 47.3-47.3-0.42-0.42-47.3 47.3zm-41.41 52.89c0.2 0.11 0.4 0.23 0.6 0.34l33.41-33.41-0.47-0.48-33.54 33.54zm-49.99 49.44c0.14 0.16 0.28 0.33 0.42 0.49l40.72-40.72-0.46-0.46-40.69 40.69zm-68.98 34.7c-0.11-0.1-0.22-0.19-0.33-0.29l-35.07 35.07 0.31 0.31 35.09-35.09zm-61.4 60.83 0.17 0.17 18.52-18.52-0.17-0.17-18.52 18.52z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m410.63 414.3c-1.67 2.06-3.17 4.28-5.04 6.15-41.53 41.6-82.98 83.28-124.71 124.69-48.63 48.26-97.49 96.29-146.31 144.35-5.14 5.06-10.74 9.67-16.62 13.9l290.7-290.7c0.66 0.54 1.31 1.07 1.97 1.61z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="M529.06,264.05c-3.04-3.4-5.96-6.68-8.98-10.06,8.25-8.25,16.13-16.18,24.06-24.05,8.9-8.84,17.76-17.72,26.84-26.38,3.04-2.9,6.41-5.78,10.16-7.52,2.12-.99,5.32.35,8.05.64,1.65,8.94-5.75,13.47-10.7,18.68-15.07,15.87-30.81,31.12-46.32,46.58-.75.75-1.79,1.22-3.11,2.11Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-5"
            d="M413.64,338.18c5.3-5.3,10.11-10.49,15.41-15.11,1.18-1.03,4.92-.99,6.06.08,7.72,7.18,15.06,14.78,22.9,22.62-5.26,5.26-10.43,10.83-16.15,15.77-.97.84-4.9-.35-6.39-1.74-7.33-6.84-14.29-14.07-21.83-21.61Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M425.14,430.9c-111.19,111.68-218.63,227.19-338.15,330.31-.83.72-2.14.87-3.8.53,121.02-103.14,228.49-220.09,341.95-330.84Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m410.13 423.14-243.42 243.42c-0.17-0.18-0.35-0.35-0.52-0.53l243.51-243.51c0.14 0.21 0.29 0.42 0.43 0.62z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m418.94 422.44-248.03 248.03-0.77-0.77 248.03-248.03 0.77 0.77z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="M398.99,348.63c3.17-3.8,9-5.35,11.52-2.85,9.69,9.57,19.11,19.42,28.6,29.19.35.36.42,1,.59,1.46-2.54,5.15-5.09,5.17-9.21,1.19-10.27-9.92-21-19.37-31.51-28.98Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M462.75,393.67c5.07-5.07,10.14-10.15,15.22-15.21,6.84-6.84,7.17-7.05,1.86-15.09-3.04-4.61-7.15-8.59-11.16-12.47-9.53-9.25-19.21-18.35-28.99-27.33-4.18-3.84-8.75-7.26-13.76-11.38,1.4.16,2.69-.1,3.36.44,8.9,7.04,18.27,13.6,26.4,21.44,10.61,10.24,20.24,21.49,30.25,32.35,3.15,3.42,2.69,6.26-.89,9.48-5.7,5.12-10.84,10.86-16.31,16.24-1.32,1.3-2.99,2.26-4.5,3.37-.5-.61-1-1.23-1.49-1.84Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="m401.37 366c2.6 3.16 4.74 5.77 7.49 9.11 0.01-0.04-0.33 1.17-0.32 1.16 2.4 1.32 4.52 2.49 6.95 3.83l-11.69 11.69-1.17-1.03c1.98-2.4 3.96-4.8 6.39-7.73-2.79 2.41-5.08 4.39-7.46 6.45-5.35-4.8-10.35-9.29-15.37-13.8l12.25-12.25c0.6 0.54 1.2 1.07 1.8 1.61-2.44 2.97-4.87 5.93-7.31 8.9 0.07 0.1 0.13 0.19 0.2 0.29l8.25-8.25z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M90.59,722.71c.64-.38,1.27-.76,1.91-1.13.18.23.36.46.54.7-9.13,7.01-18.27,14.01-27.4,21.02-.3-.27-.6-.54-.9-.81.74-1.06,1.33-2.3,2.26-3.16,21-19.67,41.9-39.45,63.17-58.83,5.82-5.3,12.76-9.37,19.19-14.01l.82,1.13c-19.97,18.23-39.93,36.45-59.9,54.68.11.14.21.28.32.42Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M40.91,734.73c4.56,6.09,8.59,11.47,12.72,16.99-1.52,1.18-2.94,2.28-4.36,3.38.1.17.19.35.29.52,1.83-.61,3.66-1.21,5.5-1.82-2.14,4.19-5.66,5.95-10.05,5.48-4.82-.52-11.27-8.7-12.77-14.43-2.07-7.93,5.46-6.51,8.67-10.12Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m588.35 164.85 3.89-3.89 41.07 41.07c-0.3 0.31-0.6 0.61-0.9 0.92l-11.52-11.52c-0.78 1.23-1.27 1.98-1.97 3.08-10.15-9.75-21.12-18.32-28.77-30.42-0.6 0.25-1.2 0.51-1.79 0.76z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M451.92,388.15c2.54,3.17,4.84,6.56,7.67,9.45,4.95,5.05-.47,7.03-2.66,9.94-2.58,3.42-5.01,2.8-7.75-.16-12.68-13.71-25.3-27.48-38.32-40.85-6.73-6.91-14.28-13.04-21.03-19.97,23.32,17.58,41.94,40.24,63.25,60.17,6.59-9.38,5.6-7.4.46-13.92-.97-1.23-1.08-3.12-1.59-4.71l-.03.05Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m614.82 225.18c-40.07 41.09-80.14 82.18-120.21 123.27l-1.44-1.35c39.65-41.48 79.41-82.87 121.66-121.92z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m450.6 311.42c3.55 2.89 7.45 5.43 10.57 8.73 10.38 10.98 20.43 22.28 30.72 33.35 2.5 2.69 3.66 5.42 0.98 8.31-1.33 1.43-3.54 2.05-5.35 3.04-0.41-0.61-0.82-1.22-1.23-1.83 1.68-2.12 3.35-4.25 5.52-7l-42.74-42.74c0.51-0.62 1.02-1.24 1.52-1.85z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m303.58 545.28 112.53-112.53 0.64 0.64-112.55 112.55c-0.21-0.22-0.42-0.43-0.63-0.65z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m208.52 641.25 91.53-91.53c0.12 0.12 0.24 0.24 0.35 0.36l-91.58 91.58c-0.1-0.14-0.2-0.27-0.31-0.41z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m474.19 284.45 100.92-97.38c0.3 0.32 0.61 0.65 0.91 0.97-33.58 32.6-67.15 65.21-100.73 97.81-0.37-0.47-0.74-0.94-1.11-1.4z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M460.75,290.09c.87-.34,2.4-1.37,2.83-1.03,11.85,9.49,23.62,19.08,32.5,31.62.15.22-.03.67-.1,1.78-11.86-10.9-23.36-21.46-35.23-32.37Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m444.96 315.19c10.66 6.09 17.37 16.19 24.96 25.41-9.15-7.61-19.66-13.81-24.96-25.41z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M23.45,756.96c7.14,7.1,12.13,16.37,23.16,18.64,11.12,2.28,19.22-4.19,28.07-8.84-6.86,6.37-14.3,12.51-24.12,11.91-13.8-.85-20.02-12.23-27.11-21.71Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m630.93 218.48c-12.35-19.87-30.71-33.5-46.22-49.8 8.15 2.12 45.98 42.41 46.22 49.8z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m373.34 370.79c15.93 10.72 29.97 23.45 41.63 38.71-13.88-12.9-27.75-25.81-41.63-38.71z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m591.07 206.06-58.16 58.16c-0.17-0.16-0.34-0.33-0.51-0.49l58.19-58.19c0.16 0.17 0.32 0.35 0.48 0.52z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m458.58 293.62 29.21 29.21c-0.38 0.38-0.76 0.76-1.14 1.15l-29.21-29.21c0.38-0.38 0.76-0.76 1.14-1.15z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m448.21 303.28c11.38 6.72 20.82 16.56 29.75 26.97-0.45 0.48-0.89 0.96-1.34 1.44l-28.42-28.42z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m458.55 302.26 24.76 24.76-1.2 1.2-24.72-24.72c0.39-0.41 0.78-0.82 1.17-1.24z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m428.81 428.66c-3.76-5.41-7.11-10.22-10.47-15.04 0.25-0.19 0.51-0.38 0.76-0.57 3.47 4.04 6.95 8.08 10.84 12.6l13.99-13.99c0.3 0.32 0.61 0.64 0.91 0.96l-16.03 16.03z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m135.07 696.85c-13.6 10.43-27.2 20.86-40.8 31.28-0.24-0.31-0.49-0.62-0.73-0.93 8.95-6.83 17.83-13.75 26.88-20.45 4.73-3.5 9.75-6.6 14.63-9.89l0.02-0.01z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m585.06 179.14 27.13 27.13c-0.16 0.18-0.31 0.36-0.47 0.54l-27.14-27.14 0.48-0.53z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m442.17 372.43-31.44-31.44c0.15-0.16 0.3-0.33 0.46-0.49l31.27 31.27-0.28 0.67z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m494.12 312.37-24.75-24.75c0.25-0.25 0.51-0.5 0.76-0.75l24.88 24.88c-0.3 0.21-0.6 0.41-0.9 0.62z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-4"
            d="m379.13 369.84c-1.06-6.31 6.47-13.18 11.92-11.92l-11.92 11.92z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M498.94,259.43c8.95,4.47,15.61,11.62,22.28,18.76-.39.46-.77.91-1.16,1.37-3.57-3.24-7.21-6.42-10.7-9.75-3.55-3.38-6.95-6.92-10.42-10.38Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m407.82 395.55c-2.92-3.45-0.37-7.64 8.2-12.06-1.67 1.9-3.34 3.8-6.13 6.98 2.32-2.32 3.39-3.54 4.61-4.57 1.18-1 2.53-1.8 4.66-1.69l-11.34 11.34z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m414 396.25 8.07-8.07c-5.25 8.95-9.41 11.55-12.5 8.64l10.72-10.72c0.34 0.31 0.67 0.61 1.01 0.92l-8.26 8.26c0.32 0.32 0.64 0.65 0.96 0.97z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M39.72,723.3c7.55,8.65,15.11,17.31,22.66,25.96-.32.28-.64.56-.96.85-7.65-8.61-15.3-17.23-22.95-25.84.41-.32.83-.65,1.24-.97Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m511.12 261.02 12.62 12.62c-0.2 0.26-0.4 0.51-0.6 0.77-4.51-3.86-9.02-7.72-13.53-11.57 0.51-0.61 1.01-1.21 1.52-1.82z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m497.24 307.8-15.34-15.34c0.25-0.26 0.51-0.52 0.76-0.78l15.35 15.35c-0.26 0.26-0.51 0.52-0.77 0.78z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m500.39 273.36 14.5 14.5c-0.19 0.21-0.37 0.41-0.56 0.62-5.14-4.5-10.28-9-15.42-13.51 0.49-0.54 0.99-1.07 1.48-1.61z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m506.15 288.7-10.97-10.97c0.29-0.3 0.58-0.6 0.87-0.91l11.07 11.07c-0.32 0.27-0.65 0.54-0.97 0.8z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m514.62 282.06-11.97-11.97c0.23-0.27 0.47-0.54 0.7-0.8l12.05 12.05c-0.26 0.24-0.52 0.48-0.79 0.72z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m492.71 280.58 11.98 11.98-0.75 0.84-11.99-11.99c0.26-0.27 0.51-0.55 0.77-0.82z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m135.06 696.86c7.99-7.99 15.99-15.99 23.99-23.98-7.98 7.99-15.97 15.98-23.96 23.97l-0.02 0.02z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="M451.95,388.1c-2.13-.88-4.31-1.64-6.36-2.68-1.47-.75-2.74-1.88-4.48-3.1-.19.45.16-.37.71-1.66-1.37.07-2.48.13-3.64.2,2.05-3.3,3.92-3.19,6.33-.21,2.2,2.72,4.89,5.04,7.39,7.52.02-.02.05-.07.05-.07Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m442.83 364.12 14.88-14.88 0.71 0.71-14.95 14.95c-0.21-0.26-0.43-0.52-0.64-0.78z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m396.44 362.74-11.51 11.51c-0.3-0.3-0.59-0.6-0.89-0.89l11.51-11.51c0.3 0.3 0.59 0.6 0.89 0.89z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m515.61 258.44 13.1 13.1c-0.17 0.19-0.34 0.37-0.51 0.56-4.62-4.07-9.24-8.14-13.87-12.2 0.42-0.48 0.85-0.97 1.27-1.45z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m557.65 244.02 20.05-20.05 0.09 0.09-19.98 19.98c-0.05 0-0.11-0.01-0.16-0.02z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m381.44 370.84 11-11 0.62 0.7-11 11c-0.21-0.24-0.41-0.47-0.62-0.71z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m486.32 287.44 11.6 11.6c-0.32 0.34-0.65 0.68-0.97 1.02-4.06-3.7-8.13-7.41-12.19-11.11 0.52-0.5 1.04-1.01 1.56-1.51z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m490.14 283.66c3.82 4.2 7.63 8.4 11.45 12.6l-0.72 0.69-12.04-12.04c0.44-0.42 0.87-0.83 1.31-1.25z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-14"
            d="m406.15 332.74 16.36-16.36c0.18 0.18 0.35 0.36 0.53 0.54l-16.36 16.36c-0.18-0.18-0.35-0.36-0.53-0.54z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="M258.94,486.58c-31.63,31.59-63.53,62.9-94.77,94.86-19.46,19.91-37.89,40.84-56.86,61.23-4.71,5.06-9.75,9.8-14.93,14.39,52.22-63.07,113.02-117.88,169.98-176.46-1.15,2.05-2.3,4.11-3.46,6.17,0,.01.05-.19.05-.19Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="M138.32,669.89c11.31-11.92,22.3-24.14,33.98-35.68,20.88-20.63,42.16-40.84,63.28-61.22.5-.48,1.06-.89,1.59-1.33.36.38.72.75,1.07,1.13-33.31,32.38-66.62,64.75-99.94,97.14-.01,0,.02-.03.02-.03Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m334.66 462.29 47.3-47.3 0.42 0.42-47.3 47.3-0.42-0.42z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m293.25 515.18 33.54-33.54 0.47 0.48-33.41 33.41c-0.2-0.11-0.4-0.23-0.6-0.34z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m243.26 564.62 40.69-40.69 0.46 0.46-40.72 40.72c-0.14-0.16-0.28-0.33-0.42-0.49z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m174.28 599.32-35.09 35.09-0.31-0.31 35.07-35.07c0.11 0.1 0.22 0.19 0.33 0.29z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            d="m112.88 660.15 18.52-18.52 0.17 0.17-18.52 18.52-0.17-0.17z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-12"
            d="m344.73 525.05h-9.74v32.84c0 2.22 3.57 4.3 9.74 6.05v-38.89z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-11"
            d="m438.12 525.05v41.87c15.13-2.09 24.88-5.36 24.88-9.03v-32.84h-24.88z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-6"
            d="m548.98 629.83c-3.17-25.82-18.49-28.58-18.49-28.58s-57.16-25.32-64.35-29.31-6.7-13.3-6.7-13.3h-120.56s0.49 9.31-6.7 13.3-64.35 29.31-64.35 29.31-15.32 2.76-18.49 28.58 24.43 138.28 28.4 146.98c7 15.34 235.84 15.34 242.84 0 3.97-8.7 31.57-121.15 28.4-146.98z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-1"
            d="m544.85 631.04c-3.08-25.11-17.98-27.8-17.98-27.8s-55.59-24.62-62.58-28.5-6.51-12.93-6.51-12.93h-117.24s0.48 9.05-6.51 12.93-62.58 28.5-62.58 28.5-14.9 2.69-17.98 27.8 23.76 134.47 27.62 142.93c6.81 14.92 229.34 14.92 236.15 0 3.86-8.46 30.7-117.81 27.62-142.93z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-1"
            d="m544.85 631.04c-3.08-25.11-17.98-27.8-17.98-27.8s-36.73-16.27-54.23-24.44h-146.96c-17.5 8.17-54.23 24.44-54.23 24.44s-14.9 2.69-17.98 27.8 23.76 134.47 27.62 142.93c6.81 14.92 229.34 14.92 236.15 0 3.86-8.46 30.7-117.81 27.62-142.93z"
          />
          <ellipse
            className="cls-3"
            cx="399.54"
            cy="580.52"
            rx="74.67"
            ry="8.08"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-7"
            d="m335 525.05v32.84c0 6.3 28.65 11.41 64 11.41s64-5.11 64-11.41v-32.84h-128z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-2"
            d="m463 525.05c0 6.3-28.65 11.41-64 11.41s-64-5.11-64-11.41 28.65-11.41 64-11.41 64 5.11 64 11.41z"
          />
          <ellipse
            className="cls-1"
            cx="398.86"
            cy="524.59"
            rx="53.1"
            ry="8.08"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-7"
            d="M463.21,545.2c.24-.8.44-1.62.59-2.45.15-.83.24-1.67.21-2.52-.02-.66-.11-1.38-.47-1.95-.11-.18-.25-.32-.41-.43-.31-.02-.63,0-.95.05-14.94,2.69-29.44,4.34-43.1,4.9-25.55,1.05-58.1.26-83.16-15.31-.11-.07-.23-.13-.34-.19-.23.12-.93.35-1.08.6-.39.67-.5,1.29-.59,2.06-.12.98-.1,2.07-.02,3.05.07.93.13,1.84.42,2.72.04.12.61.36.66.48,11.21,6.33,24.22,10.55,39.64,12.84,9.24,1.38,19.2,2.05,30.64,2.05,4.48,0,9.18-.1,14.16-.31,13.84-.57,28.5-2.22,43.59-4.92.08-.23.15-.45.22-.68Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-7"
            d="M414.13,557.19c-16.99,0-41.49-1.3-61.7-7.48-10.23-3.13-15.26-6.29-16.58-7.19-.63.19-1.1.67-1.41,1.27-.36.7-.52,1.5-.59,2.28-.06.69-.06,1.4.04,2.09.14,1.03.5,2.01,1.1,2.86.12.17.25.33.39.49,9.17,4.81,32.38,13.68,78.74,13.68,2.2,0,3.98-1.79,3.98-4s-1.78-4-3.98-4Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-8"
            d="M347.46,537.66c-.1-.59-.67-1.1-1.09-1.49-.66-.62-1.42-1.15-2.18-1.65-.87-.57-1.77-1.08-2.7-1.52-.83-.39-1.69-.77-2.6-.95-.78-.15-1.61-.17-2.3.3-.63.44-.85,1.2-.4,1.84,0,.01.02.02.03.04.15,1.37,1.9,2.22,2.98,2.76,1.64.81,3.4,1.45,5.21,1.72.82.12,1.64.19,2.43-.09.37-.13.68-.56.61-.95Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-10"
            d="M356.45,541.44c-.16-.77-.92-1.2-1.61-1.43-.72-.24-1.5-.32-2.25-.24-.07,0-.14.03-.21.06-.19-.04-.39.02-.55.16-.17.14-.33.42-.17.63.05.07.1.13.15.2.14.55.71.85,1.24.98.11.06.22.12.32.17.7.35,1.54.65,2.32.41.39-.12.85-.46.75-.94Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-10"
            d="M346.57,551.71c-.36-.59-1-1.02-1.57-1.37-.78-.48-1.62-.86-2.47-1.2-.91-.36-1.85-.67-2.82-.87-.76-.15-1.56-.27-2.31,0-.35.13-.74.59-.62.98.47,1.57,2.11,2.58,3.51,3.24.05.03.11.05.16.07,1.26.75,2.74,1.46,4.21,1.59.65.06,1.33-.11,1.78-.61.48-.52.49-1.25.14-1.84Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-10"
            d="M354.89,555.72c-.07-.11-.15-.21-.24-.31,0-.13-.02-.26-.13-.37-.13-.13-.3-.16-.47-.14-.07-.05-.14-.1-.22-.14-.22-.13-.46-.24-.71-.31-.25-.07-.51-.08-.76-.1-.3-.02-.61.18-.78.4-.08.1-.13.2-.16.33-.03.15,0,.25.06.39.04.08.11.15.18.22.1.11.21.21.33.3.2.15.43.27.66.36.27.1.57.12.86.08.08-.01.15-.03.23-.05.06.03.13.06.19.09,0,0,0,0,0,0,0,0,0,0,0,0,0,0,.05.04.06.05.22.16.55.03.73-.12.18-.15.33-.43.18-.66Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-9"
            d="M459.61,541.9c-1.42-.83-3.17-1.18-4.78-1.42-1.87-.28-3.92-.44-5.75.12-.94.29-1.87.8-2.37,1.69-.12.21-.18.44-.08.66-.16.16-.3.33-.4.52-.9,1.66,1.28,2.58,2.54,2.8,2.06.37,4.25.18,6.26-.34,1.84-.48,4.44-1.42,4.81-3.57.03-.16-.08-.39-.22-.47Z"
          />
          <motion.path
            variants={pathVariants}
            strokeLinecap="round"
            stroke={theme.palette.background.strokeColor}
            fill={theme.palette.background.fillColor}
            strokeLinejoin="round"
            style={{ transition: "fill 1s ease, stroke 0.75s ease" }}
            className="cls-10"
            d="M442.91,544.94s-.02-.04-.03-.06c0-.04-.02-.09-.05-.13-.04-.07-.1-.12-.16-.17-.06-.05-.14-.08-.21-.09,0,0,0,0,0,0-.02-.02-.04-.04-.07-.06-.07-.04-.14-.07-.21-.09,0-.05-.03-.1-.07-.13-.11-.06-.24-.03-.34.04-.01,0-.02,0-.03,0-.09,0-.18.01-.27.05-.15.05-.31.14-.42.26-.18.2-.32.51-.15.76.05.07.11.13.17.18.05.12.09.25.18.35.11.14.28.17.45.14.08-.02.15-.05.22-.09.09-.02.18-.04.27-.04.03,0,.06,0,.09,0,.05-.02.11-.04.16-.05l.16-.09c.12-.08.22-.19.28-.33.04-.09.07-.18.06-.28,0-.05,0-.09-.03-.13Z"
          />
        </motion.svg>
      </Link>
    </div>
  );
};

export default LogoDrawDesktopNoWords;
