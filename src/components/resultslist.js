
import React from "react";
import './style/results.css'

    const props = {
        title: 'book', 
        synops: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”',
        image: 'https://loremipsum.io/assets/images/lorem-ipsum-magazine-layout.jpg',
        summary: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }


function ResultsList() {
    return (
        <div>
            <div className='container'>
                <div className='card'>
                    <div className= 'container'>

                    <div className='row'>
                        <div className='col'>
                            <h5>
                                Title:{props.title}</h5>
                        </div>
                        <div className = 'col'>
                        <button type="button" class="btn btn-success float-right">View</button>
                        <button type="button" class="btn btn-danger float-right">Save</button>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col'>
                            <p>synopsos</p>
                        </div>
                    </div>
                    <div className = 'row'>
                        <div className = 'col-3'>
                            <div className = "testBox"> <img className= "bookImg" src= {props.image} alt='book' />
                            </div>
                        </div>
                        <div className = 'col'>
                            <p className = 'col'>
                            {props.summary}
                            </p>
                        </div>
                    </div>


                </div>
                    </div>
            </div>
        </div>
    );
}

export default ResultsList;