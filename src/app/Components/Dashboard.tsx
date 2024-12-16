import { BiRadioCircleMarked } from "react-icons/bi";
import { AiFillDashboard } from "react-icons/ai";
import { FaCarAlt } from "react-icons/fa";
import { MdOutlineInsertChart } from "react-icons/md";
import { BiRadio } from "react-icons/bi";
import { RiInboxArchiveLine } from "react-icons/ri";
import { CiCalendarDate } from "react-icons/ci";
import { RiSettingsLine } from "react-icons/ri";
import { FaPersonShelter } from "react-icons/fa6";
import { MdOutlineInbox } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import { ImRadioChecked2 } from "react-icons/im";
import { RiArrowDropDownLine } from "react-icons/ri";

const Dashboard = () => {
    return (
        <>
            <h1 className='text-[34px] font-sans font-bold bg-contentBg text-blue-950 p-5 border-t border-gray-400'>Dashboard Admin Car Rent</h1>
            <div className=" h-[900px] flex  bg-gray-100">
                <aside className="w-64 bg-white pl-6">
                    <div className="p-4 mt-8 text-[12px] text-gray-400 border-l border-gray-400">MAIN MENU</div>
                    <nav className="flex-1 p-4 mt-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><AiFillDashboard className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">Dashboard</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><FaCarAlt className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">Car Rent </p>
                                </a>
                            </li><li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><MdOutlineInsertChart className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">insight</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><BiRadio className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">Reimburse</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><RiInboxArchiveLine className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">inbox</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><CiCalendarDate className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">Calender</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="p-4  text-[12px] text-gray-400 border-l border-gray-400 mt-8">Preferences</div>
                    <nav className="flex-1 p-4">
                        <ul>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><RiSettingsLine className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">Setting</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><FaPersonShelter className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400">Help & Center</p>
                                </a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="flex gap-2 px-4 py-2 hover:bg-gray-100 rounded ">
                                    <p><MdOutlineInbox className="bg-white text-gray-300 text-[20px]" /> </p>
                                    <p className=" text-gray-400 flex gap-2 ">Dark Mode <span><MdOutlineLightMode className="test-[40px] bg-blue-900 text-white rounded-[20px]" /></span> <span><CiDark className="test-[20px]" /></span></p>
                                </a>
                            </li>
                        </ul>er-bl
                    </nav>

                    <div className="p-4 mt-8  text-[16px] text-gray-400 flex gap-5"><span><TbLogout2 className="text-[30px]" /></span><span>Log Out</span></div>
                </aside>
                <main className=" w-[1440px]  p-4  m-2 ">
                    <div className="flex flex-wrap jus gap-5 items-center">
                        <div className="w-[534px] h-[836px] p-4 rounded-[10px] bg-white">
                            <h1 className="text-[20px] font-bold">Details Rental</h1>
                            <div className="w-[486px] h-[272px] mt-5"><img src="./Maps.png" alt="Location" width={485} height={260} /></div>
                            <div className='w-[486px] h-[100px] flex justify-start items-center gap-5 mt-5'>
                                <div><img src="./image-13.png" alt="" className="w-[132px] h-[72px]" /></div>
                                <div>
                                    <p className='w-[330px] text-[20px] font-bold flex justify-between items-center '><span>Nissan GT - R</span><span className="text-gray-400">#9761</span></p>
                                    <p className='flex'><span className='text-gray-400 text-[14px]'>Sport Car</span></p>
                                </div>

                            </div>
                            <div className="w-[486px] h-[100px] p-2 mt-5  bg-white rounded-[10px]">
                                <div className="w-[92px] h-[20px]   flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Pick-Up</p></div>
                                <div className='w-[486px] h-[48px]   flex justify-between items-center'>
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
                            <div className="w-[486px] h-[100px] p-2 mt-4 bg-white rounded-[10px]">
                                <div className="w-[92px] h-[20px]  flex justify-start items-center"><BiRadioCircleMarked className='text-blue-800 text-[25px] shadow-sm' /><p>Drop-Off</p></div>
                                <div className='w-[486px] h-[48px]  flex justify-between items-center'>

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
                            <div className='w-[486px] h-[56px] flex justify-between items-center p-1 rounded-[15px] mt-12 '>
                                <p className='font-bold'>Total Rental Price <br /><span className='text-gray-400 text-[12px]'>Overall price and includes rental discount</span></p>
                                <p className='text-[24px] '>$80.00</p>
                            </div>
                        </div>
                        <div className="w-[524px] h-[836px] rounded-[10px] bg-contentBg ">
                            <div className="w-[524px] h-[324px] m-auto p-6 bg-white rounded-[10px]">
                                <div className="w-[476px] h-[24px] flex justify-between items-center p-2 "><p className="text-[20px] font-bold">Top 5 Car Rental </p><img src="./dote.png" alt="" /></div>
                                <div className="w-[476px[ h-[260px] flex justify-start items-center gap-1 ">
                                    <div className="w-[220px] h-[220px] "><img src="./Chart.png" alt="Chart" className="relative" style={{ zIndex: '2' }} /></div>

                                    <div className=" h-[220px] w-[286px] ">
                                        <div className="w-[232px] h-[24px] flex justify-between items-start mb-5 "><ImRadioChecked2 className='text-blue-900 text-[20px] mr-2 shadow-md' /><p className="flex justify-between items-start w-[250px]">Pick-Up <span>17439</span></p></div>
                                        <div className="w-[232px] h-[24px] flex justify-between items-start mb-5 "><ImRadioChecked2 className='text-blue-800 text-[20px] mr-2 shadow-md' /><p className="flex justify-between items-start w-[250px]">SUV <span>9,478</span></p></div>
                                        <div className="w-[232px] h-[24px] flex justify-between items-start mb-5 "><ImRadioChecked2 className='text-blue-700 text-[20px] mr-2 shadow-md' /><p className="flex justify-between items-start w-[250px]">Coupe <span>18197</span></p></div>
                                        <div className="w-[232px] h-[24px] flex justify-between items-start mb-5 "><ImRadioChecked2 className='text-blue-600 text-[20px] mr-2 shadow-md' /><p className="flex justify-between items-start w-[250px]">Hatchback<span>12510</span></p></div>
                                        <div className="w-[232px] h-[24px] flex justify-between items-start mb-5 "><ImRadioChecked2 className='text-blue-500 text-[20px] mr-2 shadow-md' /><p className="flex justify-between items-start w-[250px]">MPV<span>1440</span></p></div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-[524px] h-[480px] mt-8 bg-white rounded-[10px] p-5">
                                <div className="w-[476px] h-[24px]      mt-4 flex justify-between items-center"><p className="text-[20px] font-bold">Recent Transaction</p> <p className="text-blue-700">Viwe All</p></div>
                                <div className="w-[476px] h-[376px] mt-8 flex-col justify-start items-start">

                                    <div className="w-[476px] h-[70px]  flex justify-start gap-2 items-center mb-8">
                                        <img src="./image 1.png" alt="" width={114} height={36} />
                                        <div className="flex justify-between items-center w-[350px]"><p className="text-[20px] font-bold">Nissan GT - R<br /><span className="text-gray-400">Sport Car</span></p><p className="text-gray-400">20 July <br /><span className="text-[20px] font-bold">$80.00</span></p></div>
                                    </div>
                                    <div className="w-[476px] h-[70px]  flex justify-start gap-2 items-center mb-8 pl-2">
                                        <img src="./image 2.png" alt="" width={114} height={36} />
                                        <div className="flex justify-between items-center w-[350px]"><p className="text-[20px] font-bold">Koegnigsegg<br /><span className="text-gray-400">Sport Car</span></p><p className="text-gray-400">19 July <br /><span className="text-[20px] font-bold">$99.00</span></p></div>
                                    </div>
                                    <div className="w-[476px] h-[70px]  flex justify-start gap-2 items-center mb-8 pl-2">
                                        <img src="./image-4.png" alt="" width={114} height={36} />
                                        <div className="flex justify-between items-center w-[350px]"><p className="text-[20px] font-bold">Rolls - Royce<br /><span className="text-gray-400">Sport Car</span></p><p className="text-gray-400">18 July <br /><span className="text-[20px] font-bold">$96.00</span></p></div>
                                    </div>
                                    <div className="w-[476px] h-[70px]  flex justify-start gap-2 items-center mb-8 pl-2">
                                        <img src="./image-5.png" alt="" width={114} height={36} />
                                        <div className="flex justify-between items-center w-[350px]"><p className="text-[20px] font-bold">CR - V<br /><span className="text-gray-400">SUV</span></p><p className="text-gray-400">17 July <br /><span className="text-[20px] font-bold">$80.00</span></p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Dashboard;





