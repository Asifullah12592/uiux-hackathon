import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CiHeart } from "react-icons/ci";




const Content3 = () => {
    return (
        <>
            <h1 className='text-[34px] font-sans font-bold bg-gray-50 text-blue-950 p-5 border-t border-gray-400'>Detail Car Rent</h1>
            <div className=" h-[1650px] flex  bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-white ">
                    <div className="p-4  text-[12px] text-gray-400 border-l border-gray-400">TYPE</div>
                    <nav className="flex-1 p-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><IoIosCheckbox className="bg-white text-blue-700" /> </p>
                                    <p>Sort <span className="text-gray-400">(10)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><IoIosCheckbox className="bg-white text-blue-700" /> </p>
                                    <p>SUV<span className="text-gray-400">(12)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><MdCheckBoxOutlineBlank /> </p>
                                    <p>MPV <span className="text-gray-400">(16)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><MdCheckBoxOutlineBlank /> </p>
                                    <p>Sedan <span className="text-gray-400">(20)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><MdCheckBoxOutlineBlank /> </p>
                                    <p>Coupe <span className="text-gray-400">(14)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><MdCheckBoxOutlineBlank /> </p>
                                    <p>Hatchbak <span className="text-gray-400">(10)</span></p>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* capacity */}
                    <div className="p-4  text-[12px] text-gray-400 border-l border-gray-400 mt-2">CAPACITY</div>
                    <nav className="flex-1 p-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><IoIosCheckbox className="bg-white text-blue-700" /> </p>
                                    <p>2 Person <span className="text-gray-400"> (10)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><MdCheckBoxOutlineBlank /> </p>
                                    <p>4 Person <span className="text-gray-400">(14)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><MdCheckBoxOutlineBlank /> </p>
                                    <p>6 Person <span className="text-gray-400"> (12)</span></p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded">
                                    <p><IoIosCheckbox className="bg-white text-blue-700" /> </p>
                                    <p>8 Person <span className="text-gray-400"> (16)</span></p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* 3rd  */}


                    <div className="p-4  text-[12px] text-gray-400 border-l border-gray-400">PRICE</div>
                    <div>
                        <img src="./image-9.png" alt="" className='w-[206px] h-[20px] ml-2' />
                        <p className='w-[296px] h-[20px] ml-3'>Max. $100.00</p>
                    </div>
                </aside>

                {/* Main Content */}
                <div className="flex flex-col flex-1">


                    {/* Page Content */}
                    <main className="h-[1600px] p-6 overflow-y-auto mt-5">
                        <div className="w-[100%] flex flex-wrap justify-between  p-4">

                            <div className="w-[492px] h-[508px] rounded-[10px]  ">{/* 1 */}
                                <div className="w-[492px] h-[360px] bg-primary500 text-white rounded-[10px] p-5">
                                    <p className="w-[372px] h-[96px] text-[24px] font-bold text-justify">Sports car with the best design and acceleration</p>
                                    <p className="w-[284px] h-[48px] text-[12px] text-justify">Safety and comfort while driving a
                                        futuristic and elegant sports car</p>
                                    <img src="/image 2.png" alt="" className="w-[380px] h-[120px] mt-8 ml-5" />
                                </div>
                                <div className="w-[492px] h-[125px] border flex flex-wrap justify-between items-center mt-5">
                                    <img src="/image-10.png" alt="" className="w-[148px] h-[124px] border" />
                                    <img src="/image-11.png" alt="" className="w-[148px] h-[124px] border" />
                                    <img src="/image-12.png" alt="" className="w-[148px] h-[124px] border" />
                                </div>
                            </div>
                            <div className="w-[492px] h-[508px]  rounded-[10px]">
                                <div className="w-[491px] h-[507px] bg-white rounded-[10px] p-4">
                                    <div className="flex justify-between items-center p-2">
                                        <div className="  w-[228px]"><p className=" text-[20px] font-bold ">Nissan GT-R <span className="w-[228px] text-gray-400 text-[12px] flex gap-2 mt-2"> <BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-gray-300" /> 440+ Reviewer</span></p></div>
                                        <p><FaHeart className=" text-[28px] text-red-700 " /></p>
                                    </div>
                                    <div className="w-[444px] h-[120px] m-auto mt-12 "><p className="text-[20px ] font-sans leading-10">NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p></div>
                                    <div>
                                        <div className="w-[444px] h-[50px] flex mt-5 gap-4">
                                            <div className="flex justify-between w-[200px] h-[31px]">
                                                <p className="text-gray-400">TypeCar</p>
                                                <p>Sort</p>
                                            </div>
                                            <div className="flex justify-between w-[200px] h-[31px]">
                                                <p className="text-gray-400">Steerin</p>
                                                <p>Manual</p>
                                            </div>

                                        </div>
                                        <div className="w-[444px] h-[50px] flex mt-1 gap-4">
                                            <div className="flex justify-between w-[200px] h-[31px]">
                                                <p className="text-gray-400">TypeCar</p>
                                                <p>Sort</p>
                                            </div>
                                            <div className="flex justify-between w-[200px] h-[31px]">
                                                <p className="text-gray-400">Steerin</p>
                                                <p>Manual</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="w-[444px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                        <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> <span className="text-gray-300 text-[14px]">$80.00</span></p>
                                        {/* <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> </p> */}

                                        <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                    </div>
                                </div>

                            </div>{/* 2 */}
                        </div>
                        {/* text earea */}

                        <div className="w-[1016px] h-[452px] rounded-[10px]  m-auto p-2 mt-5 bg-white">
                            <div className="w-[136px] h-[28px] ">Revlews  <span className="bg-primary500 text-white w-[25px] h-[20px] "> 13 </span></div>
                            <div className="w-[968px] h-[124px]  flex justify-between items-center mt- p-2">
                                <div className="flex ">
                                    <img src="./profill-m.png" alt="" className="w-[60px] h-[60px] mr-2" />
                                    <div>
                                        <p className="text-[24px] font-bold">Alex Stanton</p>
                                        <p className="text-gray-400">CEO at Bukalapak</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-400">09 december 2024</p>
                                    <p><span className="w-[120px] text-gray-400 text-[12px] flex gap-2 mt-2"> <BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-gray-300" /></span></p>
                                </div>

                            </div>
                            <p className="text-gray-500 text-[16px] m-auto mt-1 ml-20">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                            {/* 2nd profile  */}

                            <div className="w-[968px] h-[124px]  flex justify-between items-center mt- p-2">
                                <div className="flex ">
                                    <img src="./profill-f.png" alt="" className="w-[60px] h-[60px] mr-2" />
                                    <div>
                                        <p className="text-[24px] font-bold">Skylar Dias</p>
                                        <p className="text-gray-400">CEO at Amazone</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-gray-400">09 december 2024</p>
                                    <p><span className="w-[120px] text-gray-400 text-[12px] flex gap-2 mt-1 "> <BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-yellow-500" /><BsStarFill className="text-gray-300" /></span></p>
                                </div>

                            </div>
                            <p className="text-gray-500 text-[16px] m-auto mt-1 ml-20">We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.</p>
                            <button className="w-[120px] h-[40px] flex mt-5 ml-[40%]  text-gray-400 hover:text-gray-300"> Show All <span><RiArrowDropDownLine /></span></button>
                        </div>


                        {/* card  start*/}


                        <div className="w-full flex justify-between items-center p-4 mt-5">
                            <p className="text-[12px]">Recent Car</p>
                            <p className="text-blue-600 text-[12px]"><a href="#">Wiew All</a></p>
                        </div>

                        {/* card  */}

                        <div className="w-1016px h-fit flex justify-center items-center gap-5 flex-wrap mt-5">
                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">Koenigsegg <span className="w-[128px] text-gray-400 text-[12px]">sport</span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image 2.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>90L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>2 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$99.00/ <span className="text-gray-400 text-[12px]">day</span></p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 2  */}
                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">Nissan GT-R <span className="w-[128px] text-gray-400 text-[12px]">sport</span></p></div>
                                    <p><CiHeart className=" text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-3.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>80L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>2 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> <span className="text-gray-300 text-[14px]">$100.00</span></p>
                                    {/* <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> </p> */}

                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 3  */}

                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">Rolls-Royce <span className="w-[128px] text-gray-400 text-[12px]">sport</span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-4.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>70L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>2 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$96.00/  <span className="text-gray-400 text-[12px]">day</span></p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>
                        </div>

                        {/* 2nd  */}
                        <div className="w-full flex justify-between items-center p-4 mt-5">
                            <p className="text-[12px]">Recent Car</p>
                            <p className="text-blue-600 text-[12px]"><a href="#">Wiew All</a></p>
                        </div>

                        {/* 2nd  */}

                        <div className="w-[1016px] h-fit flex justify-center items-center gap-5 flex-wrap mt-5">
                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">All New Rush <span className="w-[128px] text-gray-400 text-[12px]">SUV</span></p></div>
                                    <p><CiHeart className=" text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-5.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>90L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$72.00/ <span className="text-gray-400 text-[12px]">day</span></p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 2  */}
                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">CR   -   V <br /> <span className="w-[128px] text-gray-400 text-[12px]"> SUV </span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-6.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>70L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span></p>

                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 3  */}

                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[16px] font-bold">All New Terios <span className="w-[128px] text-gray-400 text-[12px]">SUV</span></p></div>
                                    <p><CiHeart className=" text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-6.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>80L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$74.00/  <span className="text-gray-400 text-[12px]">day</span></p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>
        </>
    );
};

export default Content3;





