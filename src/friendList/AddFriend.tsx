import {
  Avatar,
  Container,
  Grid,
  Input,
  Spacer,
  Button,
} from "@nextui-org/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { friend } from "../contexts/userContext";
import useUserContext from "../hooks/useUserContext";
import { useHistory } from "react-router-dom";

const AddFriend = () => {
  const { addNewFriend } = useUserContext();
  const history = useHistory();
  const [input, setInput] = useState<any>({
    id: 0,
    name: "",
    statusMessage: "",
    profileImage: "user.png",
  });
  const [disabled, setDisabled] = useState({ disabled: true });

  useEffect(() => {
    input.name && input.statusMessage
      ? setDisabled({ disabled: false })
      : setDisabled({ disabled: true });
  }, [input]);

  const handleInputChange = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleAddButtonClick = (e: any) => {
    addNewFriend({ ...input, id: Date.now() });
    alert("친구가 추가되었습니다.");
    history.push("/");
  };

  const [helper, setHelper] = useState<{
    color:
      | "default"
      | "primary"
      | "secondary"
      | "success"
      | "warning"
      | "error"
      | undefined;
    helperText: string;
  }>({
    color: "default",
    helperText: "",
  });

  const handleFocusOut = (e: any) => {
    e.target.value
      ? setHelper({ color: "default", helperText: "" })
      : setHelper({ color: "error", helperText: "this field is required!" });
  };

  const inputAttributes = {
    clearable: true,
    onChange: handleInputChange,
    fullWidth: true,
    onBlur: handleFocusOut,
  };

  return (
    <StyledContainer gap={0}>
      <StyledHeader>Add New Friend</StyledHeader>
      <Spacer y={4} />
      <Grid.Container justify="center" gap={4}>
        <Grid xs={4} justify="center">
          <Avatar
            src={process.env.PUBLIC_URL + "/images/user.png"}
            size={150}
            text="profile"
          />
        </Grid>

        <Grid xs={10}>
          <Input
            labelPlaceholder="Nickname"
            name="name"
            value={input.name}
            size="xlarge"
            color={helper.color}
            status={helper.color}
            helperColor={helper.color}
            helperText={helper.helperText}
            {...inputAttributes}
          />
        </Grid>

        <Grid xs={10}>
          <Input
            labelPlaceholder="Status"
            status="default"
            name="statusMessage"
            value={input.statusMessage}
            {...inputAttributes}
            size="xlarge"
          />
        </Grid>

        <Grid xs={8} justify="center">
          <Button size="xlarge" onClick={handleAddButtonClick} {...disabled}>
            Add
          </Button>
        </Grid>
      </Grid.Container>
    </StyledContainer>
  );
};

const StyledHeader = styled.div`
  font-size: 25px;
  font-weight: bolder;
  background-color: rgba(33, 33, 33, 0.35);
  padding: 20px;
  color: whitesmoke;
`;

const StyledContainer = styled(Container)`
  background-color: rgba(33, 33, 33, 0.05);
`;

export default AddFriend;
