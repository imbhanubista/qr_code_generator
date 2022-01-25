import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.css";
import { nanoid } from "nanoid";
var React = require("react");
var QRCode = require("qrcode.react");
const id = nanoid(5);
const Form = () => {
  //to generate unique id
  console.log(id);

  //to make sure that form submitted
  const [formSub, setFormmSub] = useState(false);

  //to save phone number
  const [phoneData, setPhoneData] = useState("");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    data = { ...data, phoneData, id };

    let currentData = localStorage.getItem("formData");
    if (currentData === null) {
      localStorage.setItem("formData", JSON.stringify([data]));
    } else {
      currentData = JSON.parse(currentData);
      currentData = [...currentData, data];
      localStorage.setItem("formData", JSON.stringify(currentData));
    }
    reset();
    setFormmSub(true);
    setPhoneData("");
  };
  const handlePhone = (e) => {
    let phone = e;
    setPhoneData(phone);
  };

  return (
    <>
      {formSub ? (
        <div>
          {" "}
          <h2>Your QR Code</h2>
          <QRCode value={"http://192.168.18.8:3000/data/" + id} />
        </div>
      ) : (
        <div className="card">
          <h1>QR Code Generator</h1>

          <PhoneInput
            onChange={handlePhone}
            country={"np"}
            enableSearch
            value={phoneData}
          />
          <br />

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Full Name"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && "Name should not be empty"}
            <br />
            <input type="number" placeholder="Age" {...register("age")} />{" "}
            <br />
            <select
              {...register("gender")}
              className="select"
              defaultValue={""}
            >
              <option disabled value="">
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>{" "}
            <br />
            <br />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && "Email is required"}
            <br />
            <input
              type="text"
              placeholder="Company"
              {...register("company")}
            />{" "}
            <br />
            <input
              type="text"
              placeholder="Address"
              {...register("address", { required: true })}
            />
            {errors.address && "Address is required"}
            <br />
            <div className="submit">
              <input type="submit" value={"Generate QR"} />
            </div>
          </form>
        </div>
      )}
    </>
  );
};
export default Form;
