import '../css/catalogcss.css';
import cusine from '../images/cusineimg.png';


const Catalog = () =>(
    <div>
        <div class="catalogs" id="catalog1"> 
            <img className="images" src={cusine} alt="cusinepic"></img>
            <span class="catalogtit">The Big Chill Cakery</span>
            <span class="catalogtxt">Fort</span>
            <span class="catalogsubtxt">Shop 1, Plot D, Samruddhi Complex, Chincholi...</span>
            <hr class="hrbar"/>
            <div class="prices">
                <div>CUISINES:</div>
                <div>COST FOR TWO:</div>
            </div>
            <div class="pricelist">
                <div>Bakery</div>
                <div>₹700</div>
            </div>
        </div>
        <div class="catalogs" id="catalog2"> 
            <img className="images" src={cusine} alt="cusinepic"></img>
            <span class="catalogtit" id='catalogtit1'>The Bake Shop</span>
            <span class="catalogtxt">Fort</span>
            <span class="catalogsubtxt">Shop 1, Plot D, Samruddhi Complex, Chincholi...</span>
            <hr class="hrbar"/>
            <div class="prices">
                <div>CUISINES:</div>
                <div>COST FOR TWO:</div>
            </div>
            <div class="pricelist">
                <div>Bakery</div>
                <div>₹700</div>
            </div>
        </div>
    </div>
);

export default Catalog;