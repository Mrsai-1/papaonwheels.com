import React, { useState } from "react";
import { API_URL } from "../../Data/Api_Url";

const AddBrand = () => {
  const [brandName, setBrand] = useState("");
  const [category, setCategory] = useState([]);
  const [offer, setOffer] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const selectedImage = e.target.files[0];
    setImage(selectedImage);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    console.log(value);
    if (category.includes(value)) {
      console.log("if condition");

      setCategory(category.filter((item) => item !== value));
    } else {
      setCategory([...category, value]);
      console.log("else condition");
    }
  };

  const handleBrandSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      if (!loginToken) {
        console.error("User not authenticated");
      }

      const formData = new FormData();

      formData.append("brandName", brandName);
      formData.append("offer", offer);
      formData.append("image", image);

      category.forEach((value) => {
        formData.append("category", value);
      });

      const responce = await fetch(`${API_URL}/firm/add-firm`, {
        method: "POST",
        headers: {
          token: `${loginToken}`,
        },
        body: formData,
      });
      const data = await responce.json();
      if (responce.ok) {
        console.log(data);
        alert("Brand Addded Successfully");
      } else if (data.message === "vender can have only one firm") {
        alert("Firm Exists. Only 1 Firm can be added");
      } else {
        alert("failed to add firm");
      }
      console.log(data);
      localStorage.setItem("FirmId", data.firmId);
    } catch (error) {
      console.log(error);
      alert(" Brand not Addded");
    }
  };

  return (
    <>
      <div className="register-section">
        <h2 className="d-flex justify-content-center py-4">Add Brand</h2>
        <form className="form" onSubmit={handleBrandSubmit}>
          <div className="form-group d-flex">
            <label>Brand Name</label>
            <input
              type="text"
              value={brandName}
              name="brandName"
              onChange={(e) => setBrand(e.target.value)}
              className="for-control"
            />
          </div>
          <div className="checkInp">
            <label>category</label>
            <div className="inputContainer">
              <div className="checkboxContainer">
                <label>Toys</label>
                <input
                  type="checkbox"
                  checked={category.includes("toys")}
                  onChange={handleCategoryChange}
                  value="toys"
                />
              </div>
              <div className="checkboxContainer">
                <label>Apperals</label>
                <input
                  type="checkbox"
                  checked={category.includes("apperals")}
                  onChange={handleCategoryChange}
                  value="apperals"
                />
              </div>
              <div className="checkboxContainer">
                <label>Chepals</label>
                <input
                  type="checkbox"
                  checked={category.includes("chepals")}
                  onChange={handleCategoryChange}
                  value="chepals"
                />
              </div>
            </div>
          </div>

          <div className="form-group d-flex">
            <label>Offer</label>
            <input
              type="text"
              value={offer}
              name="offer"
              className="for-control"
              onChange={(e) => setOffer(e.target.value)}
            />
          </div>

          <div className="form-group d-flex">
            <label>Image</label>
            <br></br>
            <input
              type="file"
              name="image"
              className="for-control"
              onChange={handleImageUpload}
            />
          </div>

          <div className="submit-button  d-flex justify-content-center py-5">
            <button type="submit" className="btn btn-primary">
              Add Brand
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddBrand;
