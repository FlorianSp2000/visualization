import React from 'react';
import TuftyGifs from './TuftyGifs'
import ImageSort from './ImageSort';
const Intro = () => {
    return (
        <>
        <div style={{marginBottom: '18px', width: '80%'}}>
            Sorting Algorithms are often used as one of the introductory topics within computer science.
            Since it is such a foundational yet large topic, appropriate visualizations are necessary
            to ease the learning process. Sorting is a very classic problem of reordering comparable items into a certain order.
            But how should we visualize it?

        </div>
        <TuftyGifs />
        <div style={{marginBottom: '3vw', marginTop: '12px', width: '80%'}}>
            <br></br>
            Above could be an extreme example of Edward Tufte's answer. While having a good data ink ratio, the animations lack, among other things, color and labeling and can be hard to follow. 
            Nevertheless, one might already get a rough idea of how the different algorithms work.
            <br></br>
            Since the modern advances in animation, we know better. 
            Discontinuous changes disrupt the viewer's attention, and saccadic blindness (we don't see things while we move our eye focus to a different point) must be reduced. 
            Mostly, that means implementing smooth changes and highlighting to steer the viewer's attention and walk him through the process.
            <br></br>
            We think that the animations provided below facilitate the process of learning and understanding the algorithms. We encourage you to experiment and try every sorting algorithm with different sequences. 
            To reset a visualizer, just enter a new sequence while the animation is running.
        </div>
        <br></br>
        <br></br>
        {/* <div>
            We can use sorting algorithms to rearrange the pixels of an image.
        </div> */}
        <br></br>
        </>
    );
};

export default Intro;