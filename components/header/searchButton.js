import SearchIcon from '@mui/icons-material/Search';
import React, { useState, setState } from 'react';

function SearchButton() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  function switchRenderState() {
    if (showSearchBar == true) {
      setShowSearchBar(false)
    } else if (showSearchBar == false) {
      setShowSearchBar(true)
    }
  }

  if (showSearchBar == true) {
    return (
      <div className="flex justify-center" onClick={switchRenderState}>
        <div className="w-48 xl:w-48">
          <div className="input-group relative flex flex-column flex-wrap items-stretch w-full rounded">
            <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
          </div>
        </div>
      </div>
    )
  } else if (showSearchBar == false) {
    return ( 
      <SearchIcon className='text-blue' onClick={switchRenderState} /> 
    )
  }

}

export default SearchButton;
