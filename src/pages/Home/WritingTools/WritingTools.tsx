import { Box } from "@mui/material";
import Content from "../../../components/Text/Content";
import Heading from "../../../components/Text/Heading";
import { toolsList as list } from "./constants";
import { sectionMoreItemsLink, sectionSubtitle, sectionTitle } from "./styles";
import ToolsList from "./ToolsList";

const WritingTools = () => {
  return (
    <Box mt={10}>
      <Heading sx={sectionTitle} textAlign="center">
        54 exciting writing tools
      </Heading>
      <Content sx={sectionSubtitle} textAlign="center">
        AI engines take information from various sources and read them like a
        human would do.
      </Content>
      <ToolsList toolsList={list.slice(0, 4)} />
      <ToolsList toolsList={list.slice(4, 8)} />
      <Content sx={sectionMoreItemsLink}>See all 54 available tools</Content>
    </Box>
  );
};

export default WritingTools;
