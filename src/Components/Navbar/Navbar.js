import { Link } from "react-router-dom";

const Navbar = () => {

  const formSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.searchString.value);
  }  

  return (
    <nav className= "navbar navbar-expand-lg bg-dark py-1" >
        <div className="container-fluid navbar-dark">
        <a href="/"className="navbar-brand"><i className="fa-brands fa-cotton-bureau fa-2xl p-3"></i></a>
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/cart">Cart</Link>
                </li>
            </ul>
            <form onSubmit={(event) => formSubmit(event)} class="d-flex" role="search">
                <input className="form-control me-2" type="search" name="searchString" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
