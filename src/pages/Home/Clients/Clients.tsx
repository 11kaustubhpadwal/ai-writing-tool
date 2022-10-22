import { Box } from "@mui/material";
import Heading from "../../../components/Text/Heading";
import ClientsList from "./ClientsList";
import { clientsSectionHeading } from "./styles";

const Clients = () => {
  return (
    <Box pb={12}>
      <Heading sx={clientsSectionHeading} textAlign="center">
        Trusted by nearly 5000+ paying customers
      </Heading>
      <ClientsList />
    </Box>
  );
};

export default Clients;
