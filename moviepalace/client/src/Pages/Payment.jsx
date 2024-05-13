import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Payment.css';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


const Payment = () => {

  return (
    <div className='confirmation'>
      <Header />
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css'
        integrity='sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA=='
        crossOrigin='anonymous'
        referrerPolicy='no-referrer'
      />
      <script
        src='https://kit.fontawesome.com/2d95ff6af1.js'
        crossOrigin='anonymous'
      ></script>
      
      {/* <div className="gateway">
      <div className="card">
        <h3>Let's Make Payment</h3>
        <p>To start your subscription, input your card details to make payment. 
            You will be redirected to your banks authorization page </p>
            <div className="credentials">
                <div className="name">
                <label htmlFor="">Cardholder's Name</label>
                <input type="text" name="" id="" />
                </div>
                <div className="number">
                <label htmlFor="">Card Number</label>
                <input type="number" placeholder='0000 0000 0000 0000'/>
                </div>
                <div className="ec">
                <div className="exp">
                <label htmlFor="">Expiry</label>
                <input type="number" placeholder='03/25'/>
                </div>
                <div className="cvc">
                <label htmlFor="">CVC</label>
                <input type="number" placeholder='000'/>
                </div>
                </div>
                <div className="discount">
                <label htmlFor="">Discount Code</label>
                <input type="number" placeholder='03/25'/>
                </div>
            </div>
      </div>
      <div className="paying">
        <p>You are paying,</p>
        <h2>$24.99</h2>
        <div className="service">
            <div className="ticket">
                <p>Ticket</p>
                <p>$ 24.99</p>
            </div>
            <div className="conve">
                <p>Conveniene Fees</p>
                <p>$ 2.99</p>
            </div>
            <div className="seat">
                <p>Seat Information</p>
                <p>4A</p>
            </div>
            <hr />
            <div className="tax">$ 0.00</div>
            <div className="total">$ 27.98</div>
        </div>
      </div>
      </div> */}
      <h3>Let's Make Payment</h3>
      <div class="container">
      
    <div class="card">
        <div class="form">
            <div class="left-side">
                <span class="success">Success</span>
                <div class="image">
                     
                     <img src="https://images.unsplash.com/photo-1509564324749-471bd272e1ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
                </div>
                <div class="debit-card">
                    <div class="card_name">
                       <small>Cardholder name</small>
                       <span class="user_name">John Doe</span>
                    </div>
                        <div class="num_expiry">
                            <div class="card_number">
                               <small>Card Number</small>
                               <span class="set_card_number">0000 0000 0000 0000</span>
                            </div>
                            <div class="card_cvv">
                               <small>Valid upto</small>
                               <span class="user_card_cvv">MM/YYYY</span>
                           </div>
                    
                        </div>
                </div> 
                 

                
            </div>
            <div class="right-side">
                
                <div class="input-text">
                    <input type="text" id="user_name_input" onkeyup="userName(this.value)" placeholder="Username" require/>
                    <span>Cardholder name</span>
                </div>
                <div class="input-text">
                    <input type="text" id="user_card_number_input" placeholder="0000 0000 0000 0000" onkeyup="userCardNumber(this.value)" data-slots="0" data-accept="\d" require/>
                    <span>Card number</span>
                </div> 
                <div class="input-div">
                    <div class="input-text">
                       <input type="text" onkeyup="usercardcvv(this.value)" placeholder="MM/YYYY" data-slots="MY" require/>
                       <span>Valid upto</span>
                    </div>
                    <div class="input-text ">
                       <input type="text" placeholder="000" data-slots="0" data-accept="\d" size="3" require/>
                       <span>CVV</span>
                    </div>
                </div> 
                <div class="button">
                    <button class="click-pay">Pay $25.99</button>
                </div>
            </div>
        </div>
    </div>
</div>

      
    </div>
  );
}

export default Payment;
