import React from "react";
import { NoteObject } from "../models/note";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";

type INoteProps = {
  note: NoteObject;
  deleteNote: (id: number) => void;
};

const Wrapper = styled(Box)`
  & > button {
    border: 1px solid #000;
    background: "fff;
    margin-top: 5px;
  }
`;

const StyledCard = styled(Card)`
  width: 400px;
  margin: 20px;
`;

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
  return (
    <StyledCard>
      <CardContent>
        <Wrapper>
          <Typography>{note.title}</Typography>
          <Typography>{note.details}</Typography>
          <Typography>{note.date}</Typography>
          <Button variant="outlined" onClick={() => deleteNote(note.id)}>
            削除
          </Button>
        </Wrapper>
      </CardContent>
    </StyledCard>
  );
};

export default Note;
