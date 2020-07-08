import React from 'react';
import {Search} from './components/Search'
import {DarkMode} from './components/DarkMode'
import {CardsContainer} from './components/CardsContainer'    

function App() {
  return (
    <>
      <Search />
      <div className="container">
        <DarkMode />
        <CardsContainer />
        {/* <div class="loading-spinner">
            <script type="text/javascript" src="js/loading-spinner.js"></script>
            <script type="text/javascript">
                'use strict';
                Spinner();
                Spinner.show();
                // setTimeout(function () {
                //     Spinner.hide();
                //     setTimeout(Spinner.show, 5000);
                // }, 10000);
            </script>
        </div>
        <button id="load-more">Load more results</button> */}
      </div>
    </>
  );
}

export default App;
