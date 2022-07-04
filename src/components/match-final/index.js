import './match-final.scss';
import group1 from '../../img/group1.png';
import group2 from '../../img/group2.png';
const Matchfinal = () => {
    return (

        <section className="matchFinal-section">
            <div className="shape-bottom">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path class="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>

            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="final-Card">
                            <div className="finalCard-head text-center">
                                <h2>Latest Match</h2>
                            </div>
                            <div className="finalCard-body">
                                <div className='row'>
                                    <div className="col-4">
                                        <img src={group1} alt="logo" />
                                        <h3>Baller</h3>
                                    </div>
                                    <div className="col-4">
                                        <h6 className="mb-5">112 - 110</h6>
                                        <button>See Statistics</button>
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


        </ section>
    )
}
export default Matchfinal;