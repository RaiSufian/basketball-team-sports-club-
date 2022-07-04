import './nextmatch.scss';
import group1 from '../../img/group1.png';
import group2 from '../../img/group2.png';
const NextMatch = () => {
    return (
        <section className="nextmatch">
            <div className="shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>

            </div>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-3">
                        <div className="next-detials">
                            <span>							Schedule						</span>
                            <h2>Next Match schedule</h2>
                            <button className='mt-2'>See More</button>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="row justify-content-end align-items-end">
                            <div className="col-5">
                                <div className="nextCar">
                                    <div className='row align-items-center'>
                                        <div className="col-4">
                                            <img src={group1} alt="logo" />
                                            <h3>Baller</h3>
                                        </div>
                                        <div className="col-4">
                                            <h4>VS</h4>
                                        </div>
                                        <div className="col-4">
                                            <img src={group2} alt="logo" />
                                            <h3>Grizzlies</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="nextCar">
                                    <div className='row align-items-center'>
                                        <div className="col-4">
                                            <img src={group1} alt="logo" />
                                            <h3>Baller</h3>
                                        </div>
                                        <div className="col-4">
                                            <h4>VS</h4>
                                        </div>
                                        <div className="col-4">
                                            <img src={group2} alt="logo" />
                                            <h3>Grizzlies</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NextMatch;