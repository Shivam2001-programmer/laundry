import React, { useEffect, useState } from 'react'
import { NavLink, json } from "react-router-dom"
import './washService.css'
import { toast } from 'react-toastify';


const WashService = () => {


    const [qty1, setQty1] = useState(1)
    const [qty2, setQty2] = useState(1)
    const [qty3, setQty3] = useState(1)
    const [qty4, setQty4] = useState(1)
    const [qty5, setQty5] = useState(1)
    const [qty6, setQty6] = useState(1)
    const [qty7, setQty7] = useState(1)
    const [qty8, setQty8] = useState(1)
    const [qty9, setQty9] = useState(1)
    const [qty10, setQty10] = useState(1)
    const [qty11, setQty11] = useState(1)
    const [qty12, setQty12] = useState(1)
    const [qty13, setQty13] = useState(1)
    const [qty14, setQty14] = useState(1)
    const [qty15, setQty15] = useState(1)
    const [qty16, setQty16] = useState(1)
    const [qty17, setQty17] = useState(1)
    const [qty18, setQty18] = useState(1)

    useEffect(() => {
        const data = localStorage.getItem('cart');
        const jsonData = JSON.parse(data);

        jsonData ? jsonData.map((val) => {
            return (
                qtyPluse(val.id, val.qty)
            )
        }) : ""

    }, [])

    const qtyPluse = (id, qty) => {
        if (id == 1) {
            qty ? setQty1(qty) : setQty1(qty1 + 1)
        } else if (id == 2) {
            qty ? setQty2(qty) : setQty2(qty2 + 1)
        } else if (id == 3) {
            qty ? setQty3(qty) : setQty3(qty3 + 1)
        } else if (id == 4) {
            qty ? setQty4(qty) : setQty4(qty4 + 1)
        } else if (id == 5) {
            qty ? setQty5(qty) : setQty5(qty5 + 1)
        } else if (id == 6) {
            qty ? setQty6(qty) : setQty6(qty6 + 1)
        } else if (id == 7) {
            qty ? setQty7(qty) : setQty7(qty7 + 1)
        } else if (id == 8) {
            qty ? setQty8(qty) : setQty8(qty8 + 1)
        } else if (id == 9) {
            qty ? setQty9(qty) : setQty9(qty9 + 1)
        } else if (id == 10) {
            qty ? setQty10(qty) : setQty10(qty10 + 1)
        } else if (id == 11) {
            qty ? setQty11(qty) : setQty11(qty11 + 1)
        } else if (id == 12) {
            qty ? setQty12(qty) : setQty12(qty12 + 1)
        } else if (id == 13) {
            qty ? setQty13(qty) : setQty13(qty13 + 1)
        } else if (id == 14) {
            qty ? setQty14(qty) : setQty14(qty14 + 1)
        } else if (id == 15) {
            qty ? setQty15(qty) : setQty15(qty15 + 1)
        } else if (id == 16) {
            qty ? setQty16(qty) : setQty16(qty16 + 1)
        } else if (id == 17) {
            qty ? setQty17(qty) : setQty17(qty17 + 1)
        } else if (id == 18) {
            qty ? setQty18(qty) : setQty18(qty18 + 1)
        }
    }

    const qtyMinus = (id) => {
        if (id == 1) {
            qty1 > 1 ? setQty1(qty1 - 1) : ""
        } else if (id == 2) {
            qty2 > 1 ? setQty2(qty2 - 1) : ""
        } else if (id == 3) {
            qty3 > 1 ? setQty3(qty3 - 1) : ""
        } else if (id == 4) {
            qty4 > 1 ? setQty4(qty4 - 1) : ""
        } else if (id == 5) {
            qty5 > 1 ? setQty5(qty5 - 1) : ""
        } else if (id == 6) {
            qty6 > 1 ? setQty6(qty6 - 1) : ""
        } else if (id == 7) {
            qty7 > 1 ? setQty7(qty7 - 1) : ""
        } else if (id == 8) {
            qty8 > 1 ? setQty8(qty8 - 1) : ""
        } else if (id == 9) {
            qty9 > 1 ? setQty9(qty9 - 1) : ""
        } else if (id == 10) {
            qty10 > 1 ? setQty10(qty10 - 1) : ""
        } else if (id == 11) {
            qty11 > 1 ? setQty11(qty11 - 1) : ""
        } else if (id == 12) {
            qty12 > 1 ? setQty12(qty12 - 1) : ""
        } else if (id == 13) {
            qty13 > 1 ? setQty13(qty13 - 1) : ""
        } else if (id == 14) {
            qty14 > 1 ? setQty14(qty14 - 1) : ""
        } else if (id == 15) {
            qty15 > 1 ? setQty15(qty15 - 1) : ""
        } else if (id == 16) {
            qty16 > 1 ? setQty16(qty16 - 1) : ""
        } else if (id == 17) {
            qty17 > 1 ? setQty17(qty17 - 1) : ""
        } else if (id == 18) {
            qty18 > 1 ? setQty18(qty18 - 1) : ""
        }
    }

    const addToCart = (id, qty, name) => {
        const product = {
            id,
            qty,
            name
        }

        // Retrieve existing cart data from localStorage (if it exists)
        const existingCart = localStorage.getItem('cart');

        // Convert existing cart data to an array (if it exists)
        const cartItems = existingCart ? JSON.parse(existingCart) : [];

        // Check if the product already exists in the cart
        const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

        if (existingProductIndex !== -1) {
            // Update the quantity of the existing product
            cartItems[existingProductIndex].qty = product.qty;
        } else {
            // Add the new product to the cart
            cartItems.push(product);
        }

        // Convert the cart items to a JSON string
        const updatedCart = JSON.stringify(cartItems);

        // Store the updated cart in localStorage
        localStorage.setItem('cart', updatedCart);
        toast.success("Cart added")
    }


    return (
        <div className="container" id='webService'>
            <div className="row">
                <div className="col-md-12 col-12" style={{ marginTop: '8rem' }}>
                    <h2>Wash Services</h2>
                    <div className="row">
                        <div className="col-md-8 col-12 mx-auto">
                            <div id="accordion" className='mt-5'>
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <h5 class="mb-0">
                                            <div>
                                                <i class="fa fa-male" aria-hidden="true"></i>
                                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Men
                                                </button>
                                            </div>
                                        </h5>
                                    </div>

                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                        <div class="card-body text-center">
                                            <div className="men-service-area">
                                                <div className="row">
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Shirt Laundering</u></h5>
                                                                <p class="card-text">We offer professional laundering services specifically tailored to men's shirts. Our process includes careful stain removal, thorough washing.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(1)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty1}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(1)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=shirt-laundring">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(1, qty1, "Shirt-Laundering")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Suit Cleaning</u></h5>
                                                                <p class="card-text">Suits are investment pieces that require delicate care. Our experienced staff specializes in suit cleaning and pressing to preserve.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(2)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty2}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(2)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=suit-cleaning">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(2, qty2, "Suit-Cleaning")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Specialty Garments</u></h5>
                                                                <p class="card-text">For unique men's garments such as leather jackets, blazers, or formalwear, our laundry system offers specialized cleaning services. .</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(3)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty3}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(3)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=specialty-garment">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(3, qty3, "Specialty-Garments")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Trousers and Pants</u></h5>
                                                                <p class="card-text">We offer professional laundering services specifically tailored to men's shirts. Our process includes careful stain removal, thorough washing.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(4)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty4}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(4)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=trousers-pants">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(4, qty4, "Trousers-and-Pants")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Alterations and Repairs</u></h5>
                                                                <p class="card-text">In addition to cleaning services, we provide alterations and repairs for men's clothing. Whether you need a simple hemming.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(5)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty5}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(5)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=alternation-repairs">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(5, qty5, "Alterations-and-Repairs")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 col-12 mb-2 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Convenient Pickup</u></h5>
                                                                <p class="card-text">We understand that your time is valuable. That's why we offer convenient pickup and delivery services for all your laundry needs .</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(6)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty6}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(6)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=convenient-pickup">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(6, qty6, "Convenient-Pickup")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <h5 class="mb-0">
                                            <div>
                                                <i class="fa fa-female" aria-hidden="true"></i>
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Women
                                                </button>
                                            </div>
                                        </h5>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                                        <div class="card-body text-center">
                                            {/* <img src="/src/asset/images/cartLoad.gif" alt="" /> */}
                                            <div className="women-service-area">
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Women's Clothing</u></h5>
                                                                <p class="card-text">We understand the unique requirements of women's clothing to ensure they remain in excellent condition.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(7)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty7}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(7)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=women-clothing">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(7, qty7, "women-clothing")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Delicate Fabrics</u></h5>
                                                                <p class="card-text">Delicate fabrics such as silk, chiffon, and lace require special attention.laundry system is well to handle the gentle cleaning.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(8)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty8}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(8)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=delicate-fabrics">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(8, qty8, "Delicate-Fabrics")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Business Attire</u></h5>
                                                                <p class="card-text">We specialize in cleaning and maintaining women's business attire, including blazers, trousers, and blouses.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(9)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty9}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(9)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=business-attire">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(9, qty9, "Business-Attire")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Convenient Pickup</u></h5>
                                                                <p class="card-text">We understand your busy schedule, so we offer convenient pickup and delivery services.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(10)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty10}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(10)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=convenient-pickup">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(10, qty10, "Convenient-Pickup")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Alterations and Repairs</u></h5>
                                                                <p class="card-text">In addition to cleaning services, we provide alterations and repairs for women's clothing. Our skilled tailors can handle.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(11)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty11}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(11)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=alternation-repaire">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(11, qty11, "Alterations-and-repairs")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Designer Wear</u></h5>
                                                                <p class="card-text">We specialize in cleaning and maintaining women's business attire, including blazers, trousers, and blouses.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(12)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty12}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(12)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=designer-wear">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(12, qty12, "Designer-wear")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <h5 class="mb-0">
                                            <div>
                                                <i class="fa fa-genderless" aria-hidden="true"></i>
                                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Other
                                                </button>
                                            </div>
                                        </h5>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                        <div class="card-body text-center">
                                            <div className="other-service-area">
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Household Items</u></h5>
                                                                <p class="card-text">Our laundry system is equipped to handle a variety of household items, including bed linens, tablecloths, curtains, and towels.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(13)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty13}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(13)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=household-items">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(13, qty13, "Household-Items")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Outdoor Gear</u></h5>
                                                                <p class="card-text">Outdoor clothing such as jackets, raincoats, and hiking gear require special attention due to their unique fabrics and features.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(14)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty14}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(14)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=outdoor-gear">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(14, qty14, "Outdoor-Gear")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Curtain Cleaning</u></h5>
                                                                <p class="card-text">Refresh your home's interior by cleaning your curtains with our professional curtain cleaning services. We'll carefully clean your curtains.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(15)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty15}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(15)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=curtain-cleaning">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(15, qty15, "Curtain-Cleaning")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Fitness Gear</u></h5>
                                                                <p class="card-text">From gym clothes to sports uniforms, our laundry services extend to sports and fitness.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(16)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty16}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(16)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=fitness-gear">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(16, qty16, "Fitness-Gear")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Shoes Cleaning</u></h5>
                                                                <p class="card-text">Extend the lifespan of your favorite shoes with our shoe cleaning and care services.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(17)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty17}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(17)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=shoes-cleaning" data="shoe cleaning">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(17, qty17, "Shoes-Cleaning")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4 mb-2 col-12 mx-auto">
                                                        <div class="card" style={{ width: 'auto' }}>
                                                            <div class="card-body">
                                                                <h5 class="card-title"><u>Convenient Pickup</u></h5>
                                                                <p class="card-text">We offer convenient pickup and delivery services for all our laundry and cleaning services.</p>
                                                                <div className="qty-area">
                                                                    <button id='minus' onClick={() => qtyMinus(18)}><i class="fa-solid fa-minus"></i></button>
                                                                    <label htmlFor="" >{qty18}</label>
                                                                    <button id='pluse' onClick={() => qtyPluse(18)}><i class="fa-solid fa-plus"></i></button>
                                                                </div>
                                                                {/* <NavLink id="buttonService" to="/cart-and-shipment?name=convenient-pickup">Add to Cart</NavLink> */}
                                                                <NavLink id="buttonService" to="/cart-and-shipment" onClick={() => addToCart(18, qty18, "convenient-pickup")}>Add to Cart</NavLink>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default WashService
