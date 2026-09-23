import React from "react";

const SafetyPartners = () => {

    return (
                        <div className=""> 
                    <h3 className="sp_header">Safety Partners</h3>
                    <div className='flex'>
                        
                        <div className='margin-right-24 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <div className='sp_img_wrapper'>
                                    <img className='' alt='Recreate Responsibly' src='/recreate-responsibly.png'></img>
                                </div>
                                <h1 className="sp_header no-wrap-ellipsis">Recreate Responsibly</h1>
                                <ol className='flex flex-col '>
                                    <li className='safety_bullets'>1. Know before you go</li>
                                    <li className='safety_bullets'>2. Practice physical distancing</li>
                                    <li className='safety_bullets'>3. Plan ahead</li>
                                    <li className='safety_bullets'>4. Play it safe</li>
                                    <li className='safety_bullets'>5. Explore locally</li>
                                    <li className='safety_bullets'>6. Leave no trace</li>
                                    <li className='safety_bullets'>7. Build an inclusive outdoors</li>
                                </ol>
                            </div>
                            <a href="https://lnt.org/why/7-principles/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                        <div className='margin-right-24 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <div className='sp_img_wrapper'>
                                    <img className='' alt='Leave No Trace' src='/leave-no-trace.png'></img>
                                </div>
                                <h1 className="sp_header flex">Leave No Trace</h1>
                                <ol className='flex flex-col'>
                                    <li className='safety_bullets'>1. Plan ahead and prepare</li>
                                    <li className='safety_bullets'>2. Travel and camp on durable surfaces</li>
                                    <li className='safety_bullets'>3. Dispose of waste properly</li>
                                    <li className='safety_bullets'>4. Leave what you find</li>
                                    <li className='safety_bullets'>5. Minimize campfire impact</li>
                                    <li className='safety_bullets'>6. Respect wildlife</li>
                                    <li className='safety_bullets'>7. Be considerate of others</li>
                                </ol>
                            </div>
                            <a href="https://lnt.org/why/7-principles/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                        <div className='margin-right-24 sp_div green_background flex flex-col'>
                            <div className='sp_img'>
                                <div className='sp_img_wrapper'>
                                    <img className='' alt='Protect Our Winters' src="/protect-our-winters-vector-logo.svg"></img>
                                </div>
                                <h1 className="sp_header">Protect Our Winters</h1>
                                <p className='sp_text'>We help passionate outdoor people protect the places and experiences they love from climate change.</p>
                            </div>
                            <a href="https://protectourwinters.org/about-pow/" className='flex align_center learn_more'>Learn More</a>
                        </div>

                    </div>
                </div>
    )
}

export default SafetyPartners;