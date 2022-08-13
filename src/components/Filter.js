import '../css/filtercss.css';
const Filter = () =>(
    <div class="filterbox"> 
        <div class="filtertxt">Filters</div>
        <div id="filterdroptxt">Select Location</div>
        <select name="filter" id="filter">
            <option value="">Select Location</option>
            <option value="Fort">Fort</option>
            <option value="Houz Kauz">Houz Kauz</option>
            <option value="Noida">Noida</option>
        </select>
        <div id="cusine">Cusine</div>
        <div id="filters">
            <div class="form-check">
                <input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label filterWords" for="flexCheckDefault">North Indian</label>
            </div>
            <div class="form-check">
                <input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label filterWords" for="flexCheckDefault">South Indian</label>
            </div>
            <div class="form-check">
                <input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label filterWords" for="flexCheckDefault">Chinese</label>
            </div>
            <div class="form-check">
                <input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label filterWords" for="flexCheckDefault">Street Food</label>
            </div>
            <div class="form-check">
                <input className="form-check-input checkbox" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label filterWords" for="flexCheckDefault">Fast Food</label>
            </div>
        </div>
        <div id="cost2">Cost For Two</div>
        <div id="cost">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> less than 500 </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> 500 to 1000 </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> 1000 to 1500 </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> 1500 to 2000 </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> 2000+ </label>
            </div>
        </div>
        <div id="sort2">Sort</div>
        <div id="sort">
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> Price low to high </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
                <label className="form-check-label filterWords" for="flexRadioDefault1"> Price high to low </label>
            </div>
        </div>
    </div>
);

export default Filter;