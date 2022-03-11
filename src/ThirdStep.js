import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useData } from "./DataContext";
import Typography from "@material-ui/core/Typography";
import { MainContainer } from "./Components/MainContainer";
import { FileInput } from "./Components/FileInput";
import { PrimaryButton } from "./Components/PrimaryButton";
import { Form } from "./Components/Form";

export const ThirdStep = () => {
  const navigate = useNavigate();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      files: data.files,
    },
  });

  const onSubmit = (data) => {
    navigate("/result");
    setValues(data);
  };

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 3
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};
