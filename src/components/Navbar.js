export function Navbar(){
    return(
        <div className="nav-bottom">
          <div className="nav-vertical">
            <ul class="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" href="/explore" >Explore</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">Courses</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/skills">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/faqs">FAQs</a>
              </li>
            </ul>
          </div>
        </div>
    )
}