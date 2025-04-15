import left1 from '../Images/Graphic Element 01.png';
import left2 from '../Images/Graphic Element 04.png';
import product1 from '../Images/Product Image - Variant 1.jpg';
import right1 from '../Images/Graphic Element 02.png'
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Navbar from '../ComponentGlobal/Navbare';
import { AddToCart } from '../reduxe/action';

export default function Shop(searchTerm) {
    const detaillecoffeshop = [
        {
            id: 1,
            title: 'Premium Blend',
            src: product1,
            price: 18.65,
            quantity: 1
        },
        {
            id: 2,
            title: 'Classic Roast',
            src: product1,
            price: 15.45,
            quantity: 1
        },
        {
            id: 3,
            title: 'Espresso Intenso',
            src: product1,
            price: 20.99,
            quantity: 1
        },
        {
            id: 4,
            title: 'Decaf Delight',
            src: product1,
            price: 17.25,
            quantity: 1
        },
        {
            id: 5,
            title: 'Organic Blend',
            src: product1,
            price: 19.99,
            quantity: 1
        },
        {
            id: 6,
            title: 'Dark Roast',
            src: product1,
            price: 21.50,
            quantity: 1
        },
        {
            id: 7,
            title: 'Light Roast',
            src: product1,
            price: 16.75,
            quantity: 1
        },
        {
            id: 8,
            title: 'Caramel Flavored',
            src: product1,
            price: 22.30,
            quantity: 1
        },
        {
            id: 9,
            title: 'Vanilla Aroma',
            src: product1,
            price: 23.10,
            quantity: 1
        }
    ];

    const filteredProducts = detaillecoffeshop.filter(product =>
        product.title.toLowerCase().includes((searchTerm.searchTerm || "").toLowerCase()))

    const dispatch = useDispatch();

    const handeldata = (ele) => {
        dispatch(AddToCart(ele))
        handleRotate(ele.id)
    }
    const [shakingId, setShakingId] = useState(null);

    const handleRotate = (id) => {
        setShakingId(id);
        setTimeout(() => {
            setShakingId(null);
        }, 300);
    };



    return (
        <section className="shop-section m-auto mt-5 ">
            <img src={left1} className='position-absolute end-0' alt="" />
            <img src={left2} className='position-absolute end-0 bottom-0' alt="" />
            <div className="container allbox1 row m-auto justify-content-center">
                {filteredProducts.length > 0 ?
                    filteredProducts.map((ele) => {


                        return <>
                            <div className="box col-3 bg-light text-center position-relative ">
                                <h5 className='fst-italic'>Gemahlen Kaffee 75g - {ele.title}</h5>
                                <img src={ele.src} alt="7df" />
                                <p className='fw-bold  ' >{ele.price}</p>
                                <button type='button' className={`btn-shop ${shakingId === ele.id ? 'shake' : ''}`} onClick={() => handeldata(ele)}> Buy</button>
                            </div>
                        </>
                    })
                    : ''
                }
            </div>
            <img src={right1} className='position-absolute start-0 top-100' alt="" />
            <img src={right1} className='position-absolute start-0 top-0' alt="" />

        </section >
    )
}