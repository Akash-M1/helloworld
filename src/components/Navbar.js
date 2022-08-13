import '../css/navbarcss.css';

const Navbar = () => (
    <div class="navbar"> 
    <div class="logo">
        <div class="logoLetter">e!</div>
        <div class="buttons">
            <a href="index.html" className="loginbtn">Login</a>
            <button class="registerbtn">Create an account</button>
        </div>
    </div>
    </div>
);

export default Navbar;