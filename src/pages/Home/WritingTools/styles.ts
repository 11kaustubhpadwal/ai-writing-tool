import { pxToRem } from "../../../utils/pxToRem";

export const sectionTitle = {
  fontWeight: 600,
  fontSize: pxToRem(42),
  lineHeight: pxToRem(48),
};

export const sectionSubtitle = {
  fontSize: pxToRem(18),
  lineHeight: pxToRem(28),
  opacity: ".7",
  margin: `${pxToRem(26)} 0 ${pxToRem(61)}`,
};

export const sectionMoreItemsLink = {
  marginTop: pxToRem(68),
  paddingBottom: "7rem",
  fontWeight: 600,
  lineHeight: pxToRem(24),
  textAlign: "center",
};
