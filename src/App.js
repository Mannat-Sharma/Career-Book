import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav> 
        <div className="nav-bottom">
           <div className="nav-vertical">
              <ul class="nav flex-column">
                <li className="nav-item" style={{marginTop:'0'}}>
                  <a className="nav-link active" aria-current="page" href="#">Explore</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Trending</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Roadmaps</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled">FAQs</a>
                </li>
              </ul>
           </div>
           <div className="nav-explore-right">
             <div className="trending">
               <div className="trend " style={{backgroundImage : "url('https://www.onlinecoursereport.com/wp-content/uploads/2020/07/shutterstock_394793860-1536x1177.jpg')"}}>
                  
               </div>
               <div className="trend" style={{backgroundImage: "url('https://cdn01.alison-static.net/courses/2491/alison_courseware_intro_2491.jpg')"}}>

               </div>
               <div className="trend" style={{backgroundImage: "url('https://th.bing.com/th/id/OIP.zv94BqcK-uT2sF-Ib-W7QwHaGT?pid=ImgDet&rs=1')"}}>

               </div>
               
             </div>
             <div className="trending">
               <div className="trend" style={{backgroundImage: "url('https://www.analyticsinsight.net/wp-content/uploads/2021/10/Artificial-Intelligence-2.jpg')"}}>
               </div>
               <div className="trend" style={{backgroundImage: "url('https://thumbs.dreamstime.com/z/machine-learning-concept-doodle-chart-keywords-icons-78416075.jpg')"}}>
               </div>
               <div className="trend" style={{backgroundImage: "url('https://th.bing.com/th/id/OIP.EFF61WNWIoOsGILSMZfQEwHaEc?pid=ImgDet&rs=1')"}}>
               </div>
               
             </div>
           </div>
            
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
