import React, { useState } from 'react';

const Reviews = ({reviews}) => {


    let [ count,setCount ]=useState(0);

    function previousReview(e){

        if(count === 0){
            return;
        }
        setCount(count-1);
    }

    function nextReview(){

        if(count === reviews.length-1){
            return;
        }
        setCount(count+1);
    }

    function randomReview(){
        setCount(Math.floor(Math.random() * reviews.length));
    }

    let str='author-'+(count+1);
    console.log(str);

    return (
        <div>
            <h1 id='review-heading' >Our Reviews</h1>
            <div className='review' id={str} >
                <p className='author' >Name: {reviews[count].name}</p>
                <p className='job' >Job: {reviews[count].job}</p>
                <p className='info' >Review: {reviews[count].text}</p>
                <p className='person-img' > <img src={reviews[count].image} /> </p>
            </div>

            <div className='buttons'>
                <button className=' prev-btn' onClick={()=>{previousReview()}}>
                    Previous
                </button>

                <button className='next-btn' onClick={()=>{nextReview()}} >
                    Next
                </button>

                <button className='random-btn' onClick={()=>{randomReview()}} >
                surprise me
                </button>
            </div>

        </div>
    );
};

export default Reviews;