"use client";

import { LogoSvg } from "@/assets/svgs/logo";
import { spacing24 } from "@common/spacing";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledLogo = styled(LogoSvg)`
  width: ${spacing24};
`;

export const AnimatedHeaderLogo = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <StyledLogo />
    </motion.div>
  );
};
