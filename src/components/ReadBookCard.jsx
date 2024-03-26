import { IoPersonOutline } from "react-icons/io5";
import { MdInsertPageBreak } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const ReadBookCard = () => {
    return (
        <div className=" border p-2 mt-10 rounded-lg  ">
            <div className="hero-content justify-start items-start flex-col lg:flex-row">
                <div className='bg-base-200 rounded-xl w-[300px] h-[300px]'>

                </div>
                <div className="space-y-5">
                    <h1 className="text-3xl font-bold">The Catcher in the Rye</h1>
                    <p className="text-xl">By : Awlad Hossain</p>
                    <div className="flex items-center gap-6 ">
                        <div className="flex items-center gap-4">
                            <h1 className="font-bold text-xl">Tag</h1>
                            <button  className='px-2 py-1  bg-[#f4fcf3] rounded-full text-[#23be0a]'>comdy</button>
                            <button  className='px-2 py-1  bg-[#f4fcf3] rounded-full text-[#23be0a]'>comdy</button>
                        </div>
                        <div>
                            <h1 className="text-xl flex items-center gap-2"><CiLocationOn /> Year of Publishing: 1924</h1>
                        </div>
                    </div>
                    <div className="flex items-center gap-8 text-xl">
                        <h1 className="flex items-center gap-2"> <IoPersonOutline /> Publisher: Scribner</h1>
                        <p className="flex items-center gap-2"> <MdInsertPageBreak />Page 192</p>
                    </div>
                    <hr  />
                    <div className="space-x-5">
                    <button  className='px-4 py-2  bg-[#e0eeff] rounded-full text-[#338eff]'>Category: Classic</button>
                    <button  className='px-4 py-2  bg-[#fff3e1] rounded-full text-[#ffc774]'>Category: Classic</button>
                    <button  className='px-4 py-2  bg-green-500 rounded-full text-white'>Category: Classic</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadBookCard;