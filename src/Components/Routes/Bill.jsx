import React, { useEffect, useState } from 'react';

import "../../bill.css"; // Import your custom CSS file
import "../../App.css"; // Import Tailwind CSS file

export default function Bill() {
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch("http://localhost:4000/profile", {
            method: "GET",
            credentials: "include",
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            setUsername(data.username);
        })
        .catch(error => {
            console.error("Error fetching user details:", error);
        }); 
    }, []);

    return (
        <div className="container">
            <div className="row">
                <PaymentCard image="https://www.freepnglogos.com/uploads/visa-logo-download-png-21.png" number="**** **** **** 1060" expiryDate="10/16" name={username} />
                <PaymentCard image="https://www.freepnglogos.com/uploads/mastercard-png/file-mastercard-logo-svg-wikimedia-commons-4.png" number="**** **** **** 1060" expiryDate="10/16" name={username} />
                <PaymentCard image="https://www.freepnglogos.com/uploads/discover-png-logo/credit-cards-discover-png-logo-4.png" number="**** **** **** 1060" expiryDate="10/16" name={username} />
                <div className="col-12 mt-4">
                    <div className="card p-3">
                        <p className="mb-0 fw-bold h4">Payment Methods</p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="card p-3">
                        <PaymentMethodButton method="PayPal" icon="fab fa-cc-paypal" product="Electricity bill of april" price="₹500" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="card p-3">
                        <PaymentMethodButton method="Credit Card" icons={['fab fa-cc-amex', 'fab fa-cc-mastercard', 'fab fa-cc-discover']} product="Electricity bill of april" price="₹500" />
                    </div>
                </div>
                <div className="col-12">
                    <div className="btn btn-primary payment">
                        Make Payment
                    </div>
                </div>
            </div>
        </div>
    );
}

function PaymentCard({ image, number, expiryDate, name }) {
    return (
        <div className="col-lg-4 mb-lg-0 mb-3">
            <div className="card p-3">
                <div className="img-box">
                    <img src={image} alt="" />
                </div>
                <div className="number">
                    <label className="fw-bold" htmlFor="">{number}</label>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                    <small><span className="fw-bold mr-2">Expiry date:</span><span>{expiryDate}</span></small>
                    <small><span className="fw-bold mr-2">Name:</span><span>{name}</span></small>
                </div>
            </div>
        </div>
    );
}

function PaymentMethodButton({ method, icon, icons, product, price }) {
    return (
        <div className="card-body border p-0">
            <p>
                <a className="btn btn-primary w-100 h-100 d-flex align-items-center justify-content-between" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="true" aria-controls="collapseExample">
                    <span className="fw-bold">{method}</span>
                    <span className={icons ? '' : icon}>{icons && icons.map((i, index) => <span key={index} className={i}></span>)}</span>
                </a>
            </p>
            <div className="collapse p-3 pt-0" id="collapseExample">
                <div className="row">
                    <div className="col-lg-5 mb-lg-0 mb-3">
                        <p className="h4 mb-0">Summary</p>
                        <p className="mb-0"><span className="fw-bold">Product:</span><span className="c-green">: {product}</span></p>
                        <p className="mb-0"><span className="fw-bold">Price:</span><span className="c-green">:{price}</span></p>
                        <p className="mb-0">Pay your bill before time and earn cashback!</p>
                    </div>
                    <div className="col-lg-7">
                        <form action="" className="form">
                            <div className="row">
                                <div className="col-12">
                                    <div className="form__div">
                                        <input type="text" className="form-control" placeholder=" " />
                                        <label htmlFor="" className="form__label">Card Number</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form__div">
                                        <input type="text" className="form-control" placeholder=" " />
                                        <label htmlFor="" className="form__label">MM / yy</label>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form__div">
                                        <input type="password" className="form-control" placeholder=" " />
                                        <label htmlFor="" className="form__label">cvv code</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form__div">
                                        <input type="text" className="form-control" placeholder=" " />
                                        <label htmlFor="" className="form__label">name on the card</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="btn btn-primary w-100">Submit</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
