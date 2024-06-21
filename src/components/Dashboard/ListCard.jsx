import React from "react";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import { Tooltip } from "@mui/material";
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import { reduceNum } from "../../functions/ReduceNumber";
import { Link } from 'react-router-dom'


function List({ data }) {
  return (
    <>
      <Link to={`/coin/${data.id}`}>
        <div className="flex w-[95%] hover:bg-[#1b1b1b] sm:h-24 h-16 m-auto rounded-2xl items-center gap-4 md:gap-8 lg:gap-10 overflow-x-hidden body lg:justify-evenly">
          <div className="w-8 ml-2 md:w-12 lg:w-14 md:ml-4">
            <img src={data.image} alt={data.name} />
          </div>
          <div className="flex flex-col w-14 md:w-24">
            <p className="text-xs md:text-lg font-semibold text-[#ffffff] text-left">{data.symbol.toUpperCase()}</p>
            <p className="text-xs md:text-base text-[#e5e5e5] font-thin text-left overflow-hidden">{data.name}</p>
          </div>

          {data.price_change_percentage_24h > 0 ?
            (
              <>
                <div className="flex gap-3">
                  <Tooltip title="Price change percentage in 24h">
                    <div className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-3xl text-xs lg:text-sm h-fit lg:pr-6 lg:pl-6 lg:pt-3 lg:pb-3 pt-1 pb-1 pr-2 ml-0 pl-2 font-semibold overflow-hidden min-w-[65px] md:min-w-[70px] text-center md:pr-3 md:pl-3 md:pt-2 md:pb-2">+{data.price_change_percentage_24h?.toFixed(2)}%   </div>
                  </Tooltip>
                  <div className="text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-full md:text-base hidden sm:block md:w-8 md:h-8 text-center mt-[0.1rem] lg:w-10 lg:h-10 lg:text-lg lg:pt-[0.1rem]"><TrendingUpRoundedIcon></TrendingUpRoundedIcon></div>

                </div>

                <Tooltip title="Current Price">
                  <div className="text-green-500 font-semibold text-xs ml-4 min-w-[60px] text-left sm:text-sm lg:min-w-[120px] lg:text-left"><span className="lg:hidden block">&#8377;{reduceNum(data.current_price)}</span>
                    <span className="lg:block hidden lg:text-base">&#8377;{data.current_price.toLocaleString('en-IN')}</span></div>
                </Tooltip>


              </>
            )
            :
            (
              <>
                <div className="flex gap-3">
                  <Tooltip title="Price change percentage in 24h">
                    <div className="text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-3xl text-xs lg:text-sm h-fit lg:pr-6 lg:pl-6 lg:pt-3 lg:pb-3 pt-1 pb-1 pr-2 ml-0 pl-2 font-semibold min-w-[65px] overflow-hidden md:min-w-[70px] text-center md:pr-3 md:pl-3 md:pt-2 md:pb-2">{data.price_change_percentage_24h?.toFixed(2)}%   </div>
                  </Tooltip>
                  <div className="text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-white hover:transition-all hover:duration-[0.3s] rounded-full md:text-base hidden sm:block md:w-8 md:h-8 text-center mt-[0.1rem] lg:w-10 lg:h-10 lg:text-lg lg:pt-[0.1rem]"><TrendingDownRoundedIcon></TrendingDownRoundedIcon></div>

                </div>

                <Tooltip title="Current Price">
                  <div className="text-red-500 font-semibold text-xs sm:text-sm ml-4 min-w-[60px] lg:min-w-[120px] lg:text-left">
                    {/* <span className="text-red-500 font-semibold text-xs">&#8377;</span> */}
                    <span className="lg:hidden block">&#8377;{reduceNum(data.current_price)}</span>
                    <span className="lg:block hidden lg:text-base">&#8377;{data.current_price.toLocaleString('en-IN')}</span>
                  </div>
                </Tooltip>
              </>
            )}

          <Tooltip title="Market Cap">
            <div className="text-sm text-gray-300 min-w-[160px] ml-5 hidden sm:block font-bold">&#8377;{data.market_cap.toLocaleString('en-IN')}</div>
          </Tooltip>

          {data.price_change_percentage_24h > 0 ?
            (
              <>
                <div className="text-green-500 ml-3 border-2 border-green-500 rounded-full w-8 h-8 text-center hover:bg-green-500 hover:text-white hover:transition-all hover:duration-[0.3s] lg:w-10 lg:h-10 lg:pt-1"><StarBorderRoundedIcon /></div>
              </>

            )
            :

            (
              <>
                <div className="text-red-500 ml-3 border-2 border-red-500 rounded-full w-8 h-8 text-center hover:bg-red-500 hover:text-white hover:transition-all hover:duration-[0.3s] lg:w-10 lg:h-10 lg:pt-1"><StarBorderRoundedIcon /></div>
              </>)}

        </div>
      </Link>
    </>

  );
}

export default List;