import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
function CreateProduct() {
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    category: "",
    price: 0,
  });
  const [priceHasError, setPriceError] = useState(false);
  const [titleIsRequired, setTitleIsRequired] = useState(false);
  const navigate =useNavigate()
  console.log(formValues, "values");
  const submitForm = async () => {
    try {
      const isValid= validateForm()
      if ((!priceHasError && !titleIsRequired)&& isValid) {
        const res = await axios.post(
          "https://fakestoreapi.com/products",
          formValues
        );
        console.log(res,"res");
        if (res.status==200){
            navigate("/")
        }
       
      }
    } catch (error) {
      console.log(error);
    }
  };
  const validateForm=()=>{
    if (formValues.title === "" || isNaN(parseFloat(formValues.price)) || parseFloat(formValues.price) <= 0){
      setPriceError(true);
      setTitleIsRequired(true);
return false
    }else{
      return true
    }
  }
  const handleOnChange = (event) => {
    setPriceError(false);
    setTitleIsRequired(false);
    if (event.target.name === "price") {
      if (isNaN(parseFloat(event.target.value))) {
        setPriceError(true);
      }
    }
    if (event.target.name === "title") {
      if (!event.target.value) {
        setTitleIsRequired(true);
      }
    }
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 1, width: "25ch" } }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          name="title"
          error={titleIsRequired}
          helperText={titleIsRequired ? "Title is required" : ""}
          onChange={handleOnChange}
          required
          id="outlined-required"
          label="Title"
        />

        <TextField
          error={priceHasError}
          helperText={priceHasError ? "Price should be number" : ""}
          name="price"
          onChange={handleOnChange}
          label="Price"
        />
        <TextField
          name="description"
          onChange={handleOnChange}
          label="Description"
        />
        <TextField
          name="category"
          onChange={handleOnChange}
          id="outlined-read-only-input"
          label="Category"
        />
      </div>
      <Button onClick={submitForm}>
        Create
      </Button>
    </Box>
  );
}
export default CreateProduct;
