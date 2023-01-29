export default function SearchBar(){
    return(
      <div className="nav-top">
        <nav className="navbar-top navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/" style={{textDecoration:"none", display:"inline-block", margin:"2rem"}}>CareerBook</a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav-2 me-auto mb-2 mb-lg-0" style={{display:"flex", marginRight:"5rem"}}>
      <li className="nav-item-2">
        <div className="dropdown">
          <a className="nav-link-2" href="#">Resume builders</a>
          <div className="dropdown-options">
            <a href="https://hackerresume.com/">HackerResume</a>
            <a href="https://novoresume.com/">novoresume</a>
            <a href="https://resume.io/">resume.io</a>
            <a href="https://www.canva.com/create/resumes/">Canva</a>
          </div>
        </div>
          
        </li>
        <li className="nav-item-2">
          <a className="nav-link-2 active" aria-current="page" href="https://internship.aicte-india.org/index.php">Internships</a>
        </li>
        <li className="nav-item-2">
          <a className="nav-link-2" href="#">Jobs</a>
        </li>
      </ul>
      
    </div>
    {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      </form> */}
       {/* <i class="fa-solid fa-user" style={{fontSize:"1.8rem", color:"#ECDBBA", borderRadius:"50%", margin:"2.8rem 1rem"}}></i> */}
  </div>
</nav>
      </div>
    )
}