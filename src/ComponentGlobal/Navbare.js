// import React, { useState } from 'react';
import Logo from '../Logo/Gemahlen Logo.svg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
import product from '../Images/Product Image - Variant 1.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { Dellet } from '../reduxe/action';


function Navbar({ onSearch }) {

  const [opencard, setopencard] = useState(false);

  useEffect(() => {
    const handelscroll = () => {
      setopencard(false)

    }

    window.addEventListener('scroll', handelscroll);
  }, [])

  // onscroll(setopencard(false))
  const handlecard = () => {
    setopencard(!opencard)
    handleRotate()
  }

  const data = useSelector(state => state.cart);
  const counttotal_data = useSelector(state => state.cart.reduce((acc, ele) => acc + (ele.price * ele.quantity), 0));

  const dispatch = useDispatch();
  const handeldelete = (id) => {
    dispatch(Dellet(id))
  }
  const [rotating, setRotating] = useState(false);

  const handleRotate = () => {
    setRotating(true);
    setTimeout(() => {
      setRotating(false);
    }, 500);
  };


  return (<>
    <nav className="Navbare z-1 bg-white position-relative container mx-auto  d-flex justify-between items-center">
      <div className="container mx-auto  d-flex justify-between items-center">
        <img src={Logo} alt='7df' className="h-20 w-auto p-1 " />
        <ul className="d-flex justify-between items-center ">
          <li>
            <Link to="/home ">
              Home
            </Link>
          </li>
          <li>

            <Link
              className='position-relative'
              to="/shop"

            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to="/contacte">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="last-info d-flex items-center end-0 ">
        <input onChange={(e) => { onSearch(e.target.value || "") }} className='rounded-md' class=" serch form-control" type="search" placeholder="Search" aria-label="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="ic text-xl cursor-pointer" />
        <FontAwesomeIcon icon={faCartShopping} className={`ic2 text-xl cursor-pointer ${rotating ? 'rotate' : ''}`} onClick={handlecard} />
      </div>
    </nav>
    {
      opencard === true

        ?
        <div className='all-cart  position-absolute top-5 end-0 w-full h-full'>
          {
            data.map((ele) => {

              return (<>

                <div className='cart  items-center '>
                  <img src={product} alt='7df' className='h-20 w-20  ' />
                  <div className='info-card d-flex justify-around items-center'>
                    <div className='title-cart  fst-italic  border-end  border-3'> Title-product {ele.title} </div>
                    <p className='price-cart  fst-italic m-1 ms-3'> Price : {ele.quantity} x {ele.price}</p>
                    <FaTrash className='text-danger end-0  my-3 me-3 position-absolute  ' style={{ cursor: 'pointer' }}
                      onClick={() => { handeldelete(ele.id) }} />
                    {/* // onClick={(event) => { event.currentTarget.parentElement.parentElement.style.display = 'none'; handletotale() }} /> */}
                  </div>
                </div>
              </>)
            })
          }
          <div className='d-flex items-center  justify-content-between p-2 '>

            <button className=' btn-shop'> Totale</button>
            <div>
              <div className='me-5'> {parseFloat(counttotal_data.toFixed(2))} </div>
            </div>
          </div>
        </div>
        : ''
    }
  </>);
}

export default Navbar;
