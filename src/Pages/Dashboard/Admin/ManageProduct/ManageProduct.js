import React from "react";

const ManageProduct = ({ product, setProducts }) => {
  const { imgUrl, productName, desc, price, _id } = product;
  const handleDelete = () => {
    const url = `https://hoogtech-server.up.railway.app/products?id=${_id}`;
    const confirmation = window.confirm("Do you want to delete this product?");
    if (confirmation) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("Product has been deleted");
            fetch("https://hoogtech-server.up.railway.app/products")
              .then((res) => res.json())
              .then((data) => {
                setProducts(data);
              });
          }
        });
    }
  };
  return (
    <div className="container mx-auto text-center flex justify-center">
      <div class="flex mb-10 max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          class="w-1/3 bg-cover"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div class="w-2/3 p-4">
          <h1 class="text-gray-900 font-bold text-2xl">{productName}</h1>
          <p class="mt-2 text-gray-600 text-sm">{desc}</p>
          <div class="flex item-center justify-between mt-3">
            <h1 class="text-gray-700 font-bold text-xl">${price}</h1>
            <button
              onClick={handleDelete}
              class="px-3 py-2 bg-red-500 text-white text-xs font-bold uppercase rounded"
            >
              X
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
