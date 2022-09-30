export default function SearchBar(){
    return(
      <div className="nav">
        <nav class="navbar bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/" style={{textDecoration:"none"}}>CareerBook</a>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
    )
}