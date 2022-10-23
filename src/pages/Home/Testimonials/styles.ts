import { pxToRem } from "../../../utils/pxToRem";

export const testimonialsSectionWrapper = {
  background: "linear-gradient(180deg, #171924 0%, rgba(23, 25, 36, 0) 100%)",
  padding: pxToRem(88),
};

export const testimonialHeading = {
  fontWeight: 600,
  fontSize: pxToRem(42),
  lineHeight: pxToRem(48),
};

export const testimonialSubheading = {
  margin: `${pxToRem(19)} 0 ${pxToRem(81)}`,
  fontSize: pxToRem(18),
  lineHeight: pxToRem(28),
  opacity: ".7",
};
