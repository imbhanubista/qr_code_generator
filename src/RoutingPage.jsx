import { BrowserRouter, Route, Routes } from "react-router-dom";
import QrCodeGen from "./QrCodeGen";
import Form from "./Form";
// import QrCodeGen from "./QrCodeGen";
const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/data/:id" element={<QrCodeGen />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routing;
