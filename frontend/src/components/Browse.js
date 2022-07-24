import React, { useEffect, useState } from 'react'

const Browse = () => {

  const url="http://localhost:5000";

  const [components, setComponents] = useState([]);
  const [loading, setLoading] = useState(false);

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
          return components.map(comp => (
            <div class="col-md-12 col-lg-4 mb-4 mb-lg-0">
        <div class="card">
          <div class="d-flex justify-content-between p-3">
            <p class="lead mb-0">Today's Combo Offer</p>
            <div
              class="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
              style={{"width: 35px":"height: 35px"}}>
              <p class="text-white mb-0 small">x4</p>
            </div>
          </div>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/4.webp"
            class="card-img-top" alt="Laptop" />
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <p class="small"><a href="#!" class="text-muted">Laptops</a></p>
              <p class="small text-danger"><s>$1099</s></p>
            </div>

            <div class="d-flex justify-content-between mb-3">
              <h5 class="mb-0">HP Notebook</h5>
              <h5 class="text-dark mb-0">$999</h5>
            </div>

            <div class="d-flex justify-content-between mb-2">
              <p class="text-muted mb-0">Available: <span class="fw-bold">6</span></p>
              <div class="ms-auto text-warning">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
          ))
        }
      }

  return (
    <div>
      {/* For Searchbar */}
      <div className='browsesearchbar' >
      <div class="input-group">
  <div class="form-outline">
    <input type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
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