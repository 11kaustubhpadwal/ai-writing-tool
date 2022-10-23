import { Box } from "@mui/material";
import Content from "../../Text/Content";
import { columnLink, columnTitle } from "./styles";
import { LinksColumnType } from "./types";

const LinksColumn = ({ title, links }: LinksColumnType) => {
  return (
    <Box>
      <Content sx={columnTitle}>{title}</Content>
      <Box>
        {links.map((link, index) => (
          <Content
            key={`footer-links-column-${title}-item-${index}`}
            sx={columnLink}
          >
            {link.name}
          </Content>
        ))}
      </Box>
    </Box>
  );
};

export default LinksColumn;
