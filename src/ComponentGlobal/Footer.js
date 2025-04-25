import Mastercard from '../asset/Icons/PM-MasterCard-Card.svg';
import pypal from '../asset/Icons/PM-PayPal-Card.svg';
import post from '../asset/Icons/PM-PostFinance-Card.svg';
import rech from '../asset/Icons/PM-Rechnung-Card.svg';
import twent from '../asset/Icons/PM-Twint-Card.svg';
import visa from '../asset/Icons/PM-Visa-Card.svg';

export default function Footer() {

    return (<>


        <footer className='container my-5 p-5 ' style={{ color: 'rgb(100, 64, 51)' }}>
            <div className='row'>

                <div className="col pages ">
                    <h6>Pages</h6>
                    <p href="Home">Home </p>
                    <p href="shop">Shop</p>
                    <p href="contact">Contact</p>
                </div>
                <div className=' col Legal'>
                    <p>GTC</p>
                    <p>refunds and return</p>
                    <p>Privacy Policy</p>
                    <p>Imprint</p>
                    <p>Disclaimer</p>
                    <p>Cookie Policy</p>
                </div>
                <div className='col pay'>
                    <div className=' d-flex'>
                        <img src={Mastercard} alt="eroore" />
                        <img src={pypal} alt="eroore" />
                        <img src={post} alt="eroore" />
                    </div>
                    <div className='d-flex'>
                        <img src={rech} alt="eroore" />
                        <img src={twent} alt="eroore" />
                        <img src={visa} alt="eroore" />
                    </div>
                </div>
            </div>

        </footer>
        <div className="text-center"> Create by 7df </div>
        <div className="text-center"> CopyRight &copy; </div>
    </>)
}