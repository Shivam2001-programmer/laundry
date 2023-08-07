import './work.css'
import React from 'react'
import ReactPlayer from 'react-player/youtube'
import Poster from '/src/asset/images/videoImg.jpg';
import VideoSrc from '/src/asset/images/works.mp4';


const Work = () => {

    return (
        <div className='container' id='laundry_work'>
            <div className="row">
                <div className="col-md-12">
                    <h2>How It Works</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div class="container">
                                <ul class="timeline">
                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"><i class="fa-solid fa-square-check"></i></div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p>Select Services</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li >
                                        <div class="timeline-badge warning"><i class="fa-sharp fa-solid fa-bag-shopping"></i></div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p>Place Order</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="timeline-inverted">
                                        <div class="timeline-badge danger"><i class="fa fa-calendar"></i></div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p>Set Schedule</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li>
                                        <div class="timeline-badge info"><i class="fa-sharp fa-solid fa-location-dot"></i></div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p>Pick up</p>
                                            </div>
                                        </div>
                                    </li>

                                    <li class="timeline-inverted">
                                        <div class="timeline-badge"><i class="fa fa-dashcube"></i></div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p>Wash & iIon</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="timeline-badge"><i class="fa-solid fa-truck"></i> </div>
                                        <div class="timeline-panel">
                                            <div class="timeline-body">
                                                <p>Delivery</p>
                                            </div>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6 col-12 mx-auto text-center" id='video'>
                            <video width="auto" height="500" poster={Poster} controls>
                                <source src={VideoSrc} className="mt-4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Work
