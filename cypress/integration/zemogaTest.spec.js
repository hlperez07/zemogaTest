/// <reference types="cypress" />

import {searchCruises}
from '../carnival-functions/search-options';
import {filterByPrice}
from '../carnival-functions/filters-options';

describe('User story # 01',function(){

    it('TC001', searchCruises) // Test execution related to TC001 from test cases file

    it.only('TC002',()=>{ // Test execution related to TC002 from test cases file

        searchCruises();
        filterByPrice();
    })

})