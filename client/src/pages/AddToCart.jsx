import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from "react-hot-toast";

const AddToCart = () => {
  const checkToken = localStorage.getItem("token");

  const [userWishlistData, setuserWishlistData] = useState([]);
  async function getCartData() {
    if (!checkToken) {
      toast.error("You Can't See your wishlist Without Account");
    } else {
      const getUserCartData = await axios.get("http://localhost:4500/getCartData", {
        headers: {
          authorization: `Bearer ${checkToken}`
        }
      })
      setuserWishlistData(getUserCartData.data);
    }
  }

  // delete data from user wishlist
  async function deleteWishlistProduct(id) {

    if (!checkToken) {
      toast.error("Create Account or Sigin Please");
    } else {
      const deleteProduct = await axios.delete(`http://localhost:4500/deleteCartItem/${id}`, {
        headers: {
          authorization: `Bearer ${checkToken}` 
        }
      })
      if (deleteProduct.status === 200) {
        toast.success(deleteProduct.data);
        getCartData();
      }
    }
  }
  
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <div className='w-[80%] m-auto flex justify-between'>
      {userWishlistData.length > 0 ? userWishlistData.map((el, index) => (
        <div className="card bg-base-100 w-96 shadow-xl" key={el.id}>
          <figure className='overflow-hidden'>
            <img
              src={el.diamondImage}
              alt="Shoes" className='hover:scale-[1.1] transition-all duration-300 object-cover h-full w-full' />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{el.title}</h2>
            <p>If a dog chews diamond whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Purchase Now</button>
              <button className="btn btn-error text-white" onClick={() => deleteWishlistProduct(el.id)}>Delete</button>
            </div>
          </div>
        </div>
      )) :
        <div className='m-auto mt-12'>
          <h1 className='mb-3'>Your  wishlist is empty</h1>
          <button className='btn btn-primary text-white'><Link to={"/"}>Add to wishlist</Link></button>
        </div>
      }
    </div>
  )
}

export default AddToCart