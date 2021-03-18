import Homecard from './Homecard';
import { Cardlist } from './Cardlist';
import '../../styles/homebody.css';

export default function Homebody(){ 
    return (
        <div className="home-cards">
            {/* <section> */}
                {/* <div> */}
                    {
                        Cardlist.map((item, index) => {
                            return (
                                <Homecard key = {index} title={item.title} idName={item.idName} cName={item.cName} url={item.url} iconClassName={item.iconClassName}/>
                            )
                        })
                    }
                {/* </div> */}
            {/* </section> */}
        </div>

        /*<div>
            <div class="row">
                <div class="col-lg-4 col-md-12 col-md-12 features-col">
                    <i class="fas fa-check-circle"></i>
                    <h3>Billing</h3>
                </div>
                <div class="col-lg-4 col-md-12 col-md-12 features-col">
                    <i class="fas fa-bullseye"></i>
                    <h3>Elite Clientele</h3>
                </div>
                <div class="col-lg-4 col-md-12 col-md-12 features-col">
                    <i class="fas fa-heart"></i>
                    <h3>Guaranteed to work.</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-12 col-md-12 features-col">
                <i class="fas fa-check-circle"></i>
                    <h3>Easy to use.</h3>
                </div>
                <div class="col-lg-4 col-md-12 col-md-12 features-col">
                    <i class="fas fa-bullseye"></i>
                    <h3>Elite Clientele</h3>
                </div>
                <div class="col-lg-4 col-md-12 col-md-12 features-col">
                    <i class="fas fa-heart"></i>
                    <h3>Guaranteed to work.</h3>
                </div>
            </div>
        </div>*/
        
    );
}