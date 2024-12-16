import { FaHeart } from "react-icons/fa";
import { FaGasPump } from "react-icons/fa";
import { SiNginxproxymanager } from "react-icons/si";
import { MdPeople } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


const Card = () => {

    return (
        <>
        
        <div className='w-[1312px] h-[500px]  m-auto bg-contentBg mt-5'>
            <div className="w-full flex justify-between items-center p-4">
                <p className="text-[12px]">Populer Car</p>
                <p className="text-blue-600 text-[12px]"><a href="#">Wiew All</a></p>
            </div>
            {/* card 1 */}


            <div className="w-full h-fit flex justify-center items-center gap-5 flex-wrap">
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

                {/* card 4  */}

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
                        <p className="w-[116px] h-[44px] text-[24px]">$80.00/  <span className="text-gray-400 text-[12px]">day  </span> <span className="text-gray-300 text-[14px]">$100.00</span></p>
                        <button className="w-[116px] h-[44px]  rounded-[5px] bg-primary500">Rent Now</button>
                    </div>
                </div>

            </div>
        </div>

        
        </>
    )
}

export default Card

