import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// import {QrCode} from 'react'
const QrCodeGen = () => {
  let { id } = useParams();

  const [storeD, setStoreD] = useState({});
  useEffect(() => {
    //    console.log("hello adjfklasdf")
    let currentData = localStorage.getItem("formData");
    //    console.log(currentData)
    if (currentData !== null) {
      currentData = JSON.parse(currentData);
      currentData = currentData.find((data) => data.id === id);
      console.log(currentData, id);
    } else {
      currentData = {};
    }
    console.log(currentData);
    setStoreD(currentData);
  }, []);

  return (
    <>
      <h2 style={{ textAlign: "center" }}>User's Data</h2>
      <div className="cards">
        <div className="container">
          <h2>{storeD.fullname} </h2>
          <strong>Phone: </strong>
          {storeD.phoneData} <br />
          <strong>Age:</strong> {storeD.age} <br />
          <strong>Gender:</strong> {storeD.gender} <br />
          <strong>Email:</strong> {storeD.email} <br />
          <strong>Company:</strong> {storeD.company} <br />
          <strong>Address:</strong> {storeD.address}
        </div>
      </div>
    </>
  );
};
export default QrCodeGen;
