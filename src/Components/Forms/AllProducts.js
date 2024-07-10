import React, { useState, useEffect } from "react";
import { API_URL } from "../../Data/Api_Url";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const productHandler = async () => {
    const firmId = localStorage.getItem('FirmId');
    try {
      const responce = await fetch(`${API_URL}/product/${firmId}/products`);
      const newProductsData = await responce.json();
      setProducts(newProductsData.products);
      console.log(newProductsData);
    } catch (error) {
      console.error("failed to fetch products", error);
      alert("failed to fetch");
    }
  };

  useEffect(() => {
    productHandler()
  
  }, []);

  const deleteProductsByID = async (productId) => {
    try {
      const responce = await fetch(`${API_URL}/product/${productId}`, {
        method: 'DELETE'
      })
      if (responce.ok) {
        alert("Product deleted Successfully...!");
        setProducts(prevProducts => prevProducts.filter(product => product._id !== productId));
      }
      console.log(responce)

    }  catch (error) {
        console.error("failed to delete ", error);
        alert("failed to delete");
      }
  };
  return (
    <>
      {!products ||products.length === 0 ? (
        <p>No products added </p>
      ) : (
        <table className="product-table">
          <thead>
            <tr>
              <th>Product Name </th>
              <th>Price</th>
              <th>Image</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>{item.productname}</td>
                <td>{item.price}</td>
                <td>
                  {item.image && (
                    <img
                      src={`${API_URL}/uploads/${item.image}`}
                      alt={item.productname}
                      style={{ width: "100px" }}
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => deleteProductsByID(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
  
};

export default AllProducts;
