import { pxToRem } from "../../../../utils/pxToRem";

export const toolCardWrapper = {
  padding: `${pxToRem(28)} ${pxToRem(22)}`,
  background: "#282A37",
  borderRadius: pxToRem(18),
};

export const toolCardTitle = {
  fontWeight: 600,
  lineHeight: pxToRem(24),
  marginBottom: pxToRem(14),
};

export const toolCardContent = {
  fontSize: pxToRem(14),
  lineHeight: pxToRem(20),
  opacity: ".7",
};
