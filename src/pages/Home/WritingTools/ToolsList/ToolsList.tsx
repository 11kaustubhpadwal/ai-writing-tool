import { Grid } from "@mui/material";
import Content from "../../../../components/Text/Content";
import { pxToRem } from "../../../../utils/pxToRem";
import { toolCardContent, toolCardTitle, toolCardWrapper } from "./styles";
import { ToolsListType } from "./types";

const ToolsList = ({ toolsList }: ToolsListType) => {
  return (
    <Grid container marginBottom={pxToRem(26)} padding="0 7rem" gap={3}>
      {toolsList.map((tool, index) => (
        <Grid item key={`tool-list-item-${index}`} sm>
          <Grid container sx={toolCardWrapper} gap={2}>
            <Grid item sm="auto">
              <img src={tool.icon} alt="tool" />
            </Grid>
            <Grid item sm>
              <Content sx={toolCardTitle}>{tool.title}</Content>
              <Content sx={toolCardContent}>{tool.content}</Content>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ToolsList;
