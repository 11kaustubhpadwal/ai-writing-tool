import { Box, BoxProps } from "@mui/material";
import { logo } from "./styles";

const Logo: React.FC<BoxProps> = ({ children, sx, ...rest }) => {
  return (
    <Box sx={{ ...logo, ...sx }} {...rest}>
      {children}
    </Box>
  );
};

export default Logo;
