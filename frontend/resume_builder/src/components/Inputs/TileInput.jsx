import React, { useState } from "react";
import {LuCheck , LuPencil} from "react-icons/lu"

const TileInput = ({title , setTitle}) => {
    const [showInput , setShowInput] = useState(false)


    return(
        <div className="flex items-center gap-3 ">
            {
                showInput ?(
                    <>
                    <input
                    type="text"
                    placeholder="Resume title"
                    className="text-sm md:text-[17px] bg-transparent outline-none text-black font-semibold border border-gray-300 p-1 px-3"
                    value={title}
                    onChange={({target}) => setTitle(target.value)}
                    />

                    <button className="cursor-pointer">
                    <LuCheck
                    className="text-[16px] text-purple-600"
                    onClick={() => setShowInput((prevState) => !prevState) }
                    />
                    </button>
                      </>
                ):(
                    <>
                    <h2 className ="text-sm md:text-[17px] font-semibold"></h2>
                    <button>
                        <LuPencil
                        className="text-sm text-purple-600"
                        onClick={() => setShowInput((prevState) => !prevState)}
                        />
                    </button>
                    </>
                )
            }
        </div>
    )
}
export default TileInput