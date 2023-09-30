import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../Hooks/useCart';

const FoodCard = ({item}) => {
    const { name, recipe, price, image ,_id} = item;
    const {user}=useContext(AuthContext);
    const [,refetch]=useCart();
    const navigate=useNavigate();
    const location=useLocation();

    const handleAddToCart=item=>{
      console.log(item)
      if(user && user.email){
        const cartItem = {menuItemId:_id, name, recipe, price, image, email:user.email};
        fetch('https://my-resturant-app-server-side-olk8qg3zx-tanushri-das.vercel.app/carts',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
            refetch(); //refetch cart to update the number of items in the cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart .',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }
      else{
        Swal.fire({
          title: 'Please login to order the food',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login Now'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from:location}})
          }
        })
      }
    }
  return (
    <div className="bg-gray-100 w-full h-full flex flex-col">
      <div className='h-60'>
      <img
      className="w-full object-cover object-center mb-2 p-3 h-60"
      src={image}
      alt="content"
    />
      </div>
    
    
    <div className="p-6 flex-grow text-center">
      <h3 className="text-lg text-gray-900 font-medium title-font mb-2">
        {name}
      </h3>
      <p className="leading-relaxed text-base mb-3">{recipe}</p>
      <p className="leading-relaxed text-semibold text-xl">${price}</p>
    </div>
    <div className="flex justify-center">
      <button onClick={()=>handleAddToCart(item)} className="bg-gray-300 text-orange-500 border-b-4 border-orange-500 py-4 px-8 text-lg uppercase font-medium hover:bg-black">
        add to cart
      </button>
    </div>
  </div>
  )
}

export default FoodCard