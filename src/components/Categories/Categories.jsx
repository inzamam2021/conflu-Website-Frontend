import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Categories.css";
import "../../styles/Developers.css";
import data from "../../config/usaState.json";
import eventsActions from "../../actions/events.Actions";
import Select from "react-select";
const Categories = () => {
  const [dataa, setData] = useState([]);

  const [club, setClub] = useState("");
  useEffect(() => {
    // setData(optionMaker(data.data));
  }, []);

  const optionMaker = (arr) => {
    let data = [];
    arr.map((e) => {
      data.push({
        value: e,
        label: e,
      });
    });
    console.log(data, "dcsc");
    return data;
  };
  const handleChange = (newValue, actionMeta) => {
    console.log(newValue);
    setClub(newValue.label);
  };
  const history=useNavigate();
  useEffect(()=>{
   fetch();
   console.log("hello")
  },[])
  const fetch=()=>{
    let text="";
   eventsActions.getEvent(text,(err,res)=>{
     if(err){
     }else{
       setData(res.data);
       console.log(res)
     }
   })
  }
  const fetch1=(text)=>{
    console.log(text)
   eventsActions.Search(text,(err,res)=>{
     if(err){
     }else{
       setData(res.data);
       console.log(res)
     }
   })
  }
const viewEvent=(id)=>{
  history(`/EventView/${id}`)
}
  return (
    <>
      <section class="search-result-wrp">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-6">
              <div class="common-head">
                <h2>
                  CONFLUNECE <span>EVENTS</span>
                </h2>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="search-wrp">
                <select
                  class="form-select"
                  value={club}
                  placeholder="Club Name"
                  onChange={(e) => {
                    e.preventDefault();
                    console.log(e.target.value);
                    setClub(e.target.value);
                    fetch1(e.target.value);
                  }}
                >
                  <option selected={true} >Select Club</option>
                  {data.data.map((e, index) => {

                    return <option value={e}>{e}</option>;
                  })}{" "}
                </select>

                {/* </select>  
                    {dataa.length > 0 ? (
                <Select
                  placeholder="Club Name"
                  isClearable
                  onChange={handleChange}
                  classNamePrefix="form-select"
                  options={dataa}
                />
              ) : (
                <Select
                  placeholder="cat"
                  isClearable
                  onChange={handleChange}
                  classNamePrefix="form-select"
                  class="form-select"
                  options={[]}
                />
              )} */}
                <img src="JJN" class="img img-fluid" alt="" />
              </div>
            </div>
          </div>
          <div class=" ">
            <div
              class="accordion container py-5 downsection"
              id="accordionExample"
            >
              <div class="row text-center">
          { dataa.length==0?<div class="col-xl-3 col-sm-6 mb-5">
                <h> NO event found</h>
              </div>:""}
                      {dataa.map((e,index)=>{
    return (
      <div class="col-xl-3 col-sm-6 mb-5">
                      <div class=" rounded shadow-sm py-5 px-4"><img src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png" alt="" width="100" class="heloo"/>
            <h5 class="mb-0  ">{e.eventName}</h5>
            <h5 class="mb-0  ">{e.clubName}</h5>
            <button class="small text-uppercase text-muted" onClick={a=>{
              a.preventDefault();
              viewEvent(e._id)
            }}>more Details</button>
            
          </div>
                      </div>
                    
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Categories;
