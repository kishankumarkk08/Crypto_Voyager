import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';

const GridCard = ({ data }) => {
  return (
    <div className={`w-[320px] h-[320px] bg-[#1b1b1b] rounded-2xl flex flex-col border-2 border-[#1b1b1b] hover:transition-all hover:duration-[0.3s] hover:scale-105 ${data.price_change_percentage_24h > 0 ? "hover:border-green-500" : "hover:border-red-500"}`}>
      <div className="flex mt-7 ml-7 gap-6">
        <img className="h-12 w-12" src={data.image} alt="" />
        <div className="flex flex-col">
          <p className=" text-[1.2rem] font-semibold text-[#ffffff]">{data.symbol.toUpperCase()}</p>
          <p className="text-[#e5e5e5] font-thin text-sm">{data.name}</p>
        </div>
      </div>
      {data.price_change_percentage_24h > 0 ?
        (<>
          <div className="flex gap-5 mt-8 ml-8">
            <Tooltip title="Price change percentage in 24h">
              <div className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-3xl text-sm h-fit pr-6 pl-6 pt-3 pb-3 font-semibold">+{data.price_change_percentage_24h?.toFixed(2)}%   </div>
            </Tooltip>
            <div className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-full p-2 text-sm h-fit"><TrendingUpRoundedIcon></TrendingUpRoundedIcon></div>
          </div>
          <Tooltip title="Current Price">
            <div className="text-green-500 font-semibold ml-8 mt-6"><span className="text-green-500 font-semibold">&#8377;</span>{" "}{data.current_price.toLocaleString('en-IN')}</div>
          </Tooltip>
        </>
        )

        :
        (<>
          <div className="flex gap-5 mt-8 ml-8">
            <Tooltip title="Price change percentage in 24h">
              <div className="text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-3xl text-sm h-fit pr-6 pl-6 pt-3 pb-3 font-semibold">{data.price_change_percentage_24h?.toFixed(2)}%   </div>
            </Tooltip>
            <div className="text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-full p-2 text-sm h-fit"><TrendingDownRoundedIcon></TrendingDownRoundedIcon></div>
          </div>
          <Tooltip title="Current Price">
            <div className="text-red-500 font-semibold ml-8 mt-6"><span className="text-red-500 font-semibold">&#8377;</span>{" "}{data.current_price.toLocaleString('en-IN')}</div>
          </Tooltip>
        </>
        )}

      <div className="text-sm text-gray-300 mt-6 ml-8"><span className="text-gray-300 font-bold">Market Cap: </span> &#8377;{data.market_cap.toLocaleString('en-IN')}</div>
      <div className="text-sm text-gray-300 mt-6 ml-8"><span className="text-gray-300 font-bold">Total Volume: </span> &#8377;{data.total_volume.toLocaleString('en-IN')}</div>

    </div>
  )
}

export default GridCard