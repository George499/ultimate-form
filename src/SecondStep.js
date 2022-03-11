import { FormControlLabel, Typography, Checkbox } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Form } from "./Components/Form";
import { Input } from "./Components/Input";
import { MainContainer } from "./Components/MainContainer";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { PrimaryButton } from "./Components/PrimaryButton";
import parsePhoneNumberFromString from "libphonenumber-js";
import { useData } from "./DataContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field"),
});

const normalizePhoneNumber = (value) => {
  const phoneNumber = parsePhoneNumberFromString(value);
  return !phoneNumber ? value : phoneNumber.formatInternational();
};

export const SecondStep = () => {
  const { setValues, data } = useData();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber,
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const hasPhone = watch("hasPhone");

  const onSubmit = (data) => {
    setValues(data);
    navigate("/step3");
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        🦄 Step 2
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email", {
            required: "Required",
          })}
          id="email"
          type="email"
          label="Email"
          name="email"
          required
          error={!!errors.email}
          helperText={errors?.email?.message}
        />

        <FormControlLabel
          control={
            <Checkbox
              name="hasPhone"
              {...register("hasPhone")}
              color="primary"
            />
          }
          label="Do you have a phone"
        />

        {hasPhone && (
          <Input
            {...register("phoneNumber")}
            id="phoneNumber"
            type="tel"
            label="Phone number"
            name="phoneNumber"
            onChange={(event) => {
              event.target.value = normalizePhoneNumber(event.target.value);
            }}
          />
        )}
        <PrimaryButton>Next</PrimaryButton>
      </Form>
    </MainContainer>
  );
};

export default SecondStep;
