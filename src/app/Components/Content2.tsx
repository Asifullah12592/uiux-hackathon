import { IoIosCheckbox } from "react-icons/io";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";
import { BiRadioCircleMarked } from "react-icons/bi";
import { LuArrowDownUp } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


// export default Content2
export default function Content2() {
    return (
        <>
            <h1 className='text-[34px] font-sans font-bold bg-contentBg text-blue-950 p-5 border-t border-gray-400'>Catagory Car Rent</h1>
            <div className="flex h-[1600px] ">
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


                <main className=" bg-gray-100 pl-8">
                    <div className=" sm: flex-wrap lg: w-[100%] h-fit flex  justify-center items-center p-2 bg-contentBg">
                        {/* pic up  */}
                        <div className="w-[482px] h-[132px]   bg-white rounded-[10px]">
                            <div className="w-[92px] h-[20px]  m-2 flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Pick-Up</p></div>
                            <div className='w-[452px] h-[48px]  m-2 flex justify-between items-center'>
                                <div className='w-[126px] h-[48px]  px-0.5'>
                                    <p><strong>Location</strong></p>
                                    <div className='flex justify-between items-center'><p className='text-[14px] text-gray-400'>Slect your city </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                                <div className='w-[126px] h-[48px]  p-1'>
                                    <p><strong>Date</strong></p>
                                    <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your date</p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                                <div className='w-[126px] h-[48px]  p-1'>
                                    <p><strong>Time</strong></p>
                                    <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your time </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>

                            </div>

                        </div>
                        {/* center div  */}
                        <div className="w-[80px] "><LuArrowDownUp className='text-white m-auto mt-1 mb-1 text-[40px] w-[80px] h-[60px] bg-primary500 rounded-[10px]' /></div>
                        {/* right div  */}
                        <div className="w-[482px] h-[132px]  bg-white rounded-[10px]">
                            <div className="w-[92px] h-[20px] m-2 flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Drop-Off</p></div>
                            <div className='w-[452px] h-[48px] m-5 flex justify-between items-center'>

                                <div className='w-[126px] h-[48px] px-0.5'>
                                    <p><strong>Location</strong></p>
                                    <div className='flex justify-between items-center'><p className='text-[14px] text-gray-400'>Slect your city </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                                <div className='w-[126px] h-[48px] p-1'>
                                    <p><strong>Date</strong></p>
                                    <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your date</p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>
                                <div className='w-[126px] h-[48px] p-1'>
                                    <p><strong>Time</strong></p>
                                    <div className='flex justify-between items-center'> <p className='text-[14px] text-gray-400'>Slect your time </p><p><RiArrowDropDownLine className='text-[20px]' /></p></div></div>

                            </div>

                        </div>
                    </div>


                    {/* <div>main Card</div> */}

                    <div className='w-[100%] h-fit  m-auto bg-contentBg mt-5 '>
                        <div className="w-full  p-4">
                            <p className="text-[12px]">Recomendation Car</p>

                        </div>
                        {/* card 1 */}


                        <div className="w-full h-fit flex justify-center items-center gap-5 flex-wrap">
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

                            {/* card 4  */}

                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">CR - V <br /><span className="w-[128px] text-gray-400 text-[12px]">SUV</span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-8.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>90L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> </p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>


                            {/* card 5 */}

                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[14px] font-bold">MG ZX Exclusice <span className="w-[128px] text-gray-400 text-[12px]">Hatchback</span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-7.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>70L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>4 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$76.00/  <span className="text-gray-400 text-[12px]">day</span></p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card6//// */}


                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">New MG ZS <span className="w-[128px] text-gray-400 text-[12px]">SUV</span></p></div>
                                    <p><CiHeart className=" text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-7.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>80L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> </p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 7 */}

                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">MG ZX Excite <span className="w-[128px] text-gray-400 text-[12px]">Hatchback</span></p></div>
                                    <p><CiHeart className=" text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-8.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>90L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>4 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$74.00/  <span className="text-gray-400 text-[12px]">day</span></p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 8 */}

                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">New MG ZS <span className="w-[128px] text-gray-400 text-[12px]">SUV</span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-7.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>70L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> </p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>

                            {/* card 9 */}
                            <div className="w-[304px] h-[388px] bg-white">
                                <div className="flex justify-between items-center p-2">
                                    <div className="w-[128px]"><p className=" text-[20px] font-bold">New MG ZS <span className="w-[128px] text-gray-400 text-[12px]">SUV</span></p></div>
                                    <p><FaHeart className="text-red-600 text-[28px]" /></p>
                                </div>
                                <div className="w-[232px] h-[72px] m-auto mt-6"> <img src="./image-7.png" alt="" width={200} /></div>
                                <div className="w-[256px] h-[24px] flex justify-between items-center  m-auto mt-20">
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><FaGasPump /></span><span>70L</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><SiNginxproxymanager /></span><span>Manual</span></div>
                                    <div className="flex justify-center gap-2 items-center text-gray-400 p-1"><span><MdPeople /></span><span>6 People</span></div>
                                </div>
                                <div className="w-[256px] h-[44px] flex justify-between items-center m-auto mt-10 ">
                                    <p className="w-[116px] h-[44px] text-[24px]">$80.00/ <span className="text-gray-400 text-[12px]">day</span> </p>
                                    <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500  text-white">Rent Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full m-auto mt-5 mb-5"> <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500 ml-[40%] text-white">Rent Now</button></div>
                    </div>

                </main>
            </div>
        </>
    );
}




