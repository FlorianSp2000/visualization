import Chart from "react-apexcharts";
import React, { Component } from "react";
import UnsortedSelectionBubble from "./Charts/UnsortedSelectionBubble";
import SortedSelectionBubble from "./Charts/SortedSelectionBubble";
import AscendingMergesort from "./Charts/AscendingMergesort";
import DescendingMergesort from "./Charts/DescendingMergesort";
import RandomMergesort from "./Charts/RandomMergesort";
import AscendingBubblesort from "./Charts/AscendingBubblesort";
import DescendingBubblesort from "./Charts/DescendingBubblesort";
import RandomBubblesort from "./Charts/RandomBubblesort";



class SmallMultiples extends Component {
    constructor(props) {
      super(props);

      this.state = {
        
      };
    }

  

    render() {
      return (
        
<div>
                <div className="small-multiple-grid">
                    <UnsortedSelectionBubble />
                    <SortedSelectionBubble /> 

                </div>
                <div className="small-multiple-grid">
                    <AscendingMergesort/>                  
                    <DescendingMergesort/>
                    <RandomMergesort/>
                </div>
                <div className="small-multiple-grid">
                    <AscendingBubblesort/>                  
                    <DescendingBubblesort/>
                    <RandomBubblesort/>
                </div>                
</div>

           

);
}
}

export default SmallMultiples;

