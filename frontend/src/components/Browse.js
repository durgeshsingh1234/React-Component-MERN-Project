import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Browse.css";
const Browse = () => {

  const url="http://localhost:5000";

  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate= useNavigate();
    const getDataFromBackend = async () => {
        setLoading(true);
        const res = await fetch(url+'/components/getall');
        const data = await res.json();
        setComponents(data);
        setLoading(false);
        console.log(data);
      }
      useEffect(() => {
        getDataFromBackend();
      }, [])

      const displayComponents = () => {
        if(!loading){
          return components.map(({_id, thumbnail, uploadedBy, title,description}) => (
            <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div class="card mt-4">
          
          <img src={url+"/"+thumbnail}
            class="card-img-top" alt=" Component image" />
          <div class="card-body">

              <h4 class="mb-0">{title}</h4>
              {/* <p class="text-dark fw-bold text-muted">{uploadedBy.fname} {uploadedBy.lname}</p> */}
            
            <button className='btn btn-primary mt-5 float-end' onClick={e => navigate('/viewer/'+_id)}>View</button>
          </div>
        </div>
      </div>
            ))
        }
      }

  return (
    <div className='browsebackground'>

{/* header start */}
      <div>
      <header>
 
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      {/* <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>
      </div> */}
    </div>
  </nav>
  

  
  <div class=" browseheader p-5 text-center bg-image">
    <div class="mask">
      <div class="d-flex justify-content-center align-items-center h-100">
        <div class="text-white">
          <h1 class="mb-3">Components</h1>
          <h4 class="mb-3">Showcase of various components</h4>
          {/* <a class="btn btn-outline-light btn-lg" href="#!" role="button"
          >Call to action</a
          > */}
        </div>
      </div>
    </div>
  </div>
 
</header>
      </div>
      {/* header end */}

      {/* For Searchbar */}
      <div className='browsesearchbar' >
      <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-success">
    <i class="fas fa-search"></i>
  </button>
</div>
</div>

{/* For Product Cards */}
<div>
<section style={{backgroundcolor:"#eee"}}>
  <div class="container py-5">
    <div class="row">
      
     {displayComponents()}
    </div>
  </div>
</section>
</div>
    </div>
   
  )
}

export default Browse