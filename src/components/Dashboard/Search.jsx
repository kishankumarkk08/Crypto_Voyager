import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Search = ({ search, onSearchChange }) => {


  return (

    <>
      <div className="flex items-center gap-5 mr-auto ml-auto  w-[80%] bg-[#1b1b1b] mt-8 mb-8 h-14 rounded-full">
        <div className="text-[#e5e5e5] ml-5 overflow-hidden"><SearchRoundedIcon /></div>
        <input type="text" placeholder='Search' className="bg-[#1b1b1b] w-[90%] text-lg text-[#e5e5e5] border-none focus:outline-none" value={search} onChange={(e) => onSearchChange(e)} />
      </div>
    </>
  )
}

export default Search