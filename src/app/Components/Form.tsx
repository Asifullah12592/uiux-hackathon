"use client"
import React from 'react'
import { BsStarFill } from "react-icons/bs";
import { BiRadioCircleMarked } from "react-icons/bi";
import { useState } from "react";
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { IoShieldCheckmarkOutline } from "react-icons/io5";




const Form = () => {

    // State for form fields
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        town: "",
    });

    // Handle input change
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
        alert(`Form submitted: ${JSON.stringify(formData)}`);
    };
    return (
        <>
            <h1 className='text-[34px] font-sans font-bold bg-contentBg text-blue-950 p-5 border-t border-gray-400'>Payment Car Rent</h1>
            <div className='w-[1440px] h-[2240px] bg-gray-200 flex flex-wrap p-4 mt-5 justify-around'>
                <div className='w-[852px] h-[2176px] bg-gray-200'>
                    <div className='w-[852px] h-[336px]  bg-white rounded-[10px] p-5 '>
                        <div className='flex justify-between items-center p-2 bg-white'>
                            <p className='text-[24px] font-bold'>Billing Info <br /><span className='text-gray-400 text-[12px] mt-0'>Please enter your billing info</span></p>
                            <p className='text-gray-400 text-[12px] '>Step 1 Of 4</p>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-white flex flex-wrap gap-4 p-1 m-auto">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-[386px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-[386px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=" phone number"
                                    required
                                />
                            </div>

                            {/* Address Input */}
                            <div>
                                <label htmlFor="address" className="block text-gray-700 font-medium">
                                    Address
                                </label>
                                <input
                                    type="text"

                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-[386px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Address"
                                    required
                                />
                            </div>

                            {/* Town Input */}
                            <div>
                                <label htmlFor="town" className="block text-gray-700 font-medium 2]">
                                    Town
                                </label>
                                <input
                                    type="text"
                                    id="town"
                                    name="town"
                                    value={formData.town}
                                    onChange={handleChange}
                                    className="w-[386px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Town of City"
                                    required
                                />
                            </div>
                            {/* Submit Button */}
                            <div>

                            </div>
                        </form>

                    </div>

                    {/* celecting  form*/}

                    <div className='w-[852px] h-[664px]  bg-white rounded-[10px] p-5 mt-8'>
                        <div className='flex justify-between items-center p-2 bg-white'>
                            <p className='text-[24px] font-bold'>Rental Info <br /><span className='text-gray-400 text-[12px] mt-0'>Please enter your payment method</span></p>
                            <p className='text-gray-400 text-[12px] '>Step 1 Of 4</p>
                        </div>
                        <div className="w-[92px] h-[20px]  mt-5 mb-4 flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Pick-Up</p></div>
                        <div className='w-[852px] flex flex-wrap justify-start gap-5 items-center'>
                            <div>
                                <label htmlFor="town" className="block text-black font-medium 2] mt-2 ml-2">
                                    Location
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    style={{ marginLeft: "2px", marginTop: "5px", width: '386px', height: '56px', backgroundColor: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
                                    <option value="" disabled>
                                        Select your city
                                    </option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="town" className="block text-black font-medium 2] mt-2 ml-2">
                                    Location
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    style={{ marginLeft: "2px", marginTop: "5px", width: '386px', height: '56px', backgroundColor: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
                                    <option value="" disabled>
                                        Select Date
                                    </option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                </select>
                            </div>
                            <div>

                                <label htmlFor="town" className="block text-black font-medium 2] mt-2 ml-2">
                                    Location
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    style={{ marginLeft: "2px", marginTop: "5px", width: '386px', height: '56px', backgroundColor: '#e5e7eb', padding: '5px', borderRadius: '5px' }}>
                                    <option value="" disabled>
                                        Select Time
                                    </option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                </select>
                            </div>

                        </div>
                        {/* selct 2  */}
                        <div className="w-[92px] h-[20px]  mt-4 mb-4 flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Drop Off</p></div>
                        <div className='w-[852px] flex flex-wrap justify-start gap-5 items-center'>
                            <div>
                                <label htmlFor="town" className="block text-black font-medium 2] mt-2 ml-2">
                                    Location
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    style={{ marginLeft: "2px", marginTop: "5px", width: '386px', height: '56px', backgroundColor: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
                                    <option value="" disabled>
                                        Select your city
                                    </option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="town" className="block text-black font-medium 2] mt-2 ml-2">
                                    Location
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    style={{ marginLeft: "2px", marginTop: "5px", width: '386px', height: '56px', backgroundColor: '#e5e7eb', padding: '10px', borderRadius: '5px' }}>
                                    <option value="" disabled>
                                        Select Date
                                    </option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                </select>
                            </div>
                            <div>

                                <label htmlFor="town" className="block text-black font-medium 2] mt-2 ml-2">
                                    Location
                                </label>
                                <select
                                    id="city"
                                    name="city"
                                    required
                                    style={{ marginLeft: "2px", marginTop: "5px", width: '386px', height: '56px', backgroundColor: '#e5e7eb', padding: '5px', borderRadius: '5px' }}>
                                    <option value="" disabled>
                                        Select Time
                                    </option>
                                    <option value="Karachi">Karachi</option>
                                    <option value="Lahore">Lahore</option>
                                    <option value="Islamabad">Islamabad</option>
                                    <option value="Peshawar">Peshawar</option>
                                    <option value="Quetta">Quetta</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    {/* pay section  */}


                    <div className='w-[852px] h-[596px]  bg-white rounded-[10px] p-5  mt-8'>
                        <div className='flex justify-between items-center p-2 bg-white'>
                            <p className='text-[24px] font-bold'>Payment Method<br /><span className='text-gray-400 text-[12px] mt-0'>Please enter your payment method</span></p>
                            <p className='text-gray-400 text-[12px] '>Step 1 Of 4</p>
                        </div>
                        <form onSubmit={handleSubmit} className="bg-gray-300 flex flex-wrap gap-4 p-5 m-auto rounded-[10px]">
                            {/* Name Input */}
                            <div className="w-[852px] h-[20px]  mt-5 mb-4 flex justify-between items-center"><p className='flex'><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' />Pick-Up</p> <p><img src="./Visa.png" alt="" /></p></div>
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium">
                                    Card Number
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-[376px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Name"
                                    required
                                />
                            </div>

                            {/* Phone Number Input */}
                            <div>
                                <label htmlFor="phone" className="block text-gray-700 font-medium">
                                    Expration Date
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-[376px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder=" phone number"
                                    required
                                />
                            </div>

                            {/* Address Input */}
                            <div>
                                <label htmlFor="address" className="block text-gray-700 font-medium">
                                    Card Holder
                                </label>
                                <input
                                    type="text"

                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="w-[376px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Address"
                                    required
                                />
                            </div>

                            {/* Town Input */}
                            <div>
                                <label htmlFor="town" className="block text-gray-700 font-medium 2]">
                                    CVC
                                </label>
                                <input
                                    type="text"
                                    id="town"
                                    name="town"
                                    value={formData.town}
                                    onChange={handleChange}
                                    className="w-[376px] h-[92] mt-2 p-2 border bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Town of City"
                                    required
                                />
                            </div>
                        </form>

                        {/* paypal  */}
                        <div className="w-[804px] h-[56px] bg-gray-200 mt-5 mb-4 flex justify-between items-center p-4"><p className='flex gap-4'><MdOutlineRadioButtonUnchecked className='text-blue-800 text-[25px] shadow-sm' />PayPal</p> <p><img src="./PayPal.png" alt="" /></p></div>
                        <div className="w-[804px] h-[56px] bg-gray-200 mt-5 mb-4 flex justify-between items-center p-4"><p className='flex gap-4'><MdOutlineRadioButtonUnchecked className='text-blue-800 text-[25px] shadow-sm' />Bitcoin</p> <p><img src="./Bitcoin.png" alt="" /></p></div>
                    </div>

                    {/* last section */}

                    <div className='w-[852px] h-[448px]  bg-white rounded-[10px] p-5  mt-5'>
                        <div className='flex justify-between items-center p-2 bg-white'>
                            <p className='text-[24px] font-bold'>Confirmation<br /><span className='text-gray-400 text-[12px] mt-0'>We are getting to the end. Just few clicks and your rental is ready!</span></p>
                            <p className='text-gray-400 text-[12px] '>Step 1 Of 4</p>
                        </div>
                        <div className='w-[804px] h-[136px] p-2 mt-2'>
                            <p className='m-4 flex gap-5'> <span><MdOutlineCheckBoxOutlineBlank className='text-[20px]' /></span>I agree with sending an Marketing and newsletter emails. No spam, promissed!</p>
                            <p className='m-4 flex gap-5'> <span><MdOutlineCheckBoxOutlineBlank className='text-[20px]' /></span>I agree with our terms and conditions and privacy policy.</p>
                        </div>
                        <button className='w-[140px] h-[56px] text-white bg-primary500 p-4 rounded-[6px] mt-4'>Rent Now</button>
                        <IoShieldCheckmarkOutline className='m-4 text-[30px]' />

                        <div className='w-[548px] h-[52px] p-2'>
                            <p><strong>All your data are safe</strong></p>
                            <p className='text-[12px]'>We are using the most advanced security to provide you the best experience ever.</p>
                        </div>
                    </div>

                </div>

                <div className='w-[492px] h-[560px]  p-4 bg-white rounded-[10px]'>
                    <div className='w-[444px] h-[76px] '>
                        <p className='text-[24px] font-bold'>Rental Summary</p>
                        <p className='text-gray-400 text-[14px]'>Prices may change depending on the length of the rental and the price of your rental car.</p>
                    </div>
                    <div className='w-[444px] h-[120px] flex justify-start items-center gap-5 mt-5 '>
                        <div><img src="./image-13.png" alt="" /></div>
                        <div>
                            <p className='text-[24px] font-bold'>Nissan GT - R</p>
                            <p className='flex'><span className="w-[120px] text-gray-400 text-[12px] flex gap-1 mt-1 "> <BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-gray-300" /></span><span className='text-gray-400 text-[14px]'>440+ Reviewer</span></p>
                        </div>

                    </div>
                    <div className='w-[444px] mt-10'>
                        <p className='flex justify-between m-2'><span className='text-gray-400'>Subtotal</span><span>$80.00</span></p>
                        <p className='flex justify-between m-2 '><span className='text-gray-400'>Tax</span><span>$0</span></p>

                    </div>

                    <div className='w-[444px] h-[56px] flex justify-between items-center bg-gray-300 p-3 rounded-[15px] mt-4'>
                        <p className='text-gray-400'>Apply promo code</p>
                        <button>Apply now</button>
                    </div>

                    <div className='w-[444px] h-[56px] flex justify-between items-center p-1 rounded-[15px] mt-12'>
                        <p className='font-bold'>Total Rental Price <br /><span className='text-gray-400 text-[12px]'>Overall price and includes rental discount</span></p>
                        <p className='text-[24px] '>$80.00</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form
