import React, { useContext } from 'react'
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import Swal from "sweetalert2";
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    const { name, recipe, price, image ,_id} = item;
    const {user}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const handleAddToCart=item=>{
      console.log(item)
      if(user && user.email){
        const cartItem = {menuItemId:_id, name, recipe, price, image, email:user.email};
        fetch('http://localhost:5000/carts',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then(data =>{
          if(data.insertedId){
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
    <div class="bg-gray-100 w-full h-full flex flex-col">
      <div className='h-60'>
      <img
      class="w-full object-cover object-center mb-2 p-3"
      src={image}
      alt="content"
    />
      </div>
    
    
    <div className="p-6 flex-grow text-center">
      <h3 class="text-lg text-gray-900 font-medium title-font mb-2">
        {name}
      </h3>
      <p class="leading-relaxed text-base mb-3">{recipe}</p>
      <p class="leading-relaxed text-semibold text-xl">${price}</p>
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