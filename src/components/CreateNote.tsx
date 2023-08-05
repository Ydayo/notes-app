import React from "react";
import { Box, Button, InputBase, styled } from "@mui/material";

const Container = styled(Box)`
  & > * {
    margin: 20px 20px 20px 0px;
  }
  & > div > input[type="text"] {
    border-bottom: 1px solid #111111;
    opacity: 0.4;
    width: 300px;
    padding-right: 25px;
  }
  & > div > input[type="color"] {
    width: 40px;
    height: 30px;
    position: relative;
    bottom: -10px;
  }
  & > span {
    font-size: 10px;
    position: relative;
    right: 40px;
  }
`;

const CreateNote: React.FC = () => {
  return (
    <>
      <Container>
        <InputBase placeholder="タイトル" />
        <Box component="span">30</Box>
        <InputBase placeholder="詳細" />
        <Box component="span">50</Box>
        <InputBase
          type="color"
          defaultValue={"#F5F5F5"}
          placeholder="カラーを選択"
        />
        <Button variant="outlined">作成</Button>
      </Container>
    </>
  );
};

export default CreateNote;
