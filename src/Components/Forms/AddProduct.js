import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { API_URL } from "../../Data/Api_Url";

const AddProduct = () => {
  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCatogery] = useState([]);
  const [bestseller, setBestSeller] = useState(false);
  const [description, setDescription] = useState("");
  const [age,setAge ] = useState("");
  const [gender,setGender ] = useState("");

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
      setCatogery(category.filter((item) => item !== value));
    } else {
      setCatogery([...category, value]);
      console.log("else condition");
    }
  };

  const handleBestSeller = (e) => {
    const value = e.target.value === "true";

    setBestSeller(value);
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const loginToken = localStorage.getItem("loginToken");
      const firmId = localStorage.getItem("FirmId");
      console.log(firmId);
      if (!loginToken || !firmId) {
        console.log("user not authenticated");
      }

      const formData = new FormData();
      formData.append("productname", productname);
      formData.append("price", price);
      formData.append("image", image);
      formData.append("description", description);
      formData.append("bestseller", bestseller);
      formData.append("age", age);
      formData.append("gender", gender);

      category.forEach((value) => {
        formData.append("category", value);
      });

      const responce = await fetch(`${API_URL}/product/add-product/${firmId}`, {
        method: "POST",
        body: formData,
      });

      const data = await responce.json();
      if (responce.ok) {
        alert("product added successfully");
      }
    } catch (error) {
      console.log(error);
      alert("faild to add product");
    }
  };

  return (
    <>
      <div className="register-section add-product">
        <h2 className="d-flex justify-content-center py-4">Add Product</h2>
        <form className="form" onSubmit={handleAddProduct}>
          <div className="form-group d-flex flex-column">
            <label>Product Name</label>
            <input
              type="text"
              className="form-control"
              name="productname"
              value={productname}
              onChange={(e) => {
                setProductname(e.target.value);
              }}
            />
          </div>
          <div className="form-group d-flex flex-column">
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              className="form-control"
            />
          </div>

          <div className="checkInp">
            <label>Category</label>
            <div className="inputContainer">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={category.includes("toys")}
                  onChange={handleCategoryChange}
                  value="toys"
                />
                <label className="form-check-label">Toys</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={category.includes("apperals")}
                  onChange={handleCategoryChange}
                  value="apperals"
                />
                <label className="form-check-label">Apparels</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={category.includes("chepals")}
                  onChange={handleCategoryChange}
                  value="chepals"
                />
                <label className="form-check-label">Chapals</label>
              </div>
            </div>
          </div>

          <div className="checkInp">
            <label>Best Seller</label>
            <div className="inputContainer">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bs"
                  checked={bestseller === true}
                  onChange={handleBestSeller}
                  value="true"
                />
                <label className="form-check-label">Yes</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="bs"
                  checked={bestseller === false}
                  onChange={handleBestSeller}
                  value="false"
                />
                <label className="form-check-label">No</label>
              </div>
            </div>
          </div>

          <div className="form-group d-flex flex-column">
            <label>Description</label>
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group d-flex flex-column">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group d-flex flex-column">
            <label>Gender</label>
            <input
              type="text"
              name="gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <br></br>
            <input
              type="file"
              name="image"
              onChange={handleImageUpload}
              className="for-control"
            />
          </div>
          <div className="submit-button d-flex justify-content-center py-5">
            <button type="submit" className="btn btn-primary">
              Add Product
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
