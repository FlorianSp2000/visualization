import React from 'react';
import ImageSort from './ImageSort';
function Applications(props) {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', marginTop: '30px'}}>
            <section className="standard-header">
                Further applications
            </section>            
            <div>
                <p>As we have seen we can sort numbers in various ways. Through our ability to sort numbers we are able to sort texts 
                    using a coding scheme, such as UTF-8, and we can even sort colors:
                     
                </p>
                <img src="hsv_spectrum.png" style={{margin: '16px'}}></img>
                <img src="random_noise.png" style={{margin: '16px'}}></img>
            </div>
            <div style={{ borderBottom: "2px solid rgb(0,0,0,0.1)"}}>
                <p>
                    Sorting a shuffled image of a color spectrum using Bubble Sort (left) and Quick sort (right) results in the following:</p>
                    <br></br>
                <img src="bubble_sort_color.gif" style={{margin: '16px'}}></img>
                <img src="quick_sort_color.gif" style={{margin: '16px', width: '384px', height:'384px'}}></img>
            </div>
            <br></br>
            <div>
                {/* <ImageSort /> */}
            </div>
        </div>
    );
}

export default Applications;