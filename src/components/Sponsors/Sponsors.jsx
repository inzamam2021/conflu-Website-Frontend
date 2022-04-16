import React from 'react';
import { Modal, ModalBody } from "reactstrap";

import '../../styles/Sponsors.css';
import image1 from "../../styles/images/conflu.png";

const Sponsors = () => {

  return (
<>
    <Modal
      isOpen={false}
      toggle={() => {
        
      }}
      className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
    >
      <div className="auth-modal-wrp">
        <div className="row">
          <div className="col-lg-6 p-0">
            <div className="auth-modal-artwork">
              <img
                src="./assets/img/human-right-artwok.png"
                className="img img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 p-0">
            <div className="auth-modal-content">
              <div className="w-100">
                <div className="auth-modal-logo">
                  <img
                    src={image1}
                    className="img img-fluid"
                    alt=""
                  />
                </div>
                <h2>Please Sign in to Confluence</h2>
                <div className="auth-input-wrp">
                  <label for="">Enter Email</label>
                  <input
                    type="text"
                    name="mobileNo"
                    // onChange={}
                    className="form-control"
                    placeholder=""
                  />
                    <label for="">Enter password</label>
                  <input
                    type="text"
                    name="mobileNo"
                    // onChange={}
                    className="form-control"
                    placeholder=""
                  />
                  <button
                    role="button"
                    data-bs-target="#verifyOTPmodal"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    className="btn auth-main-btn"
                    type="button"
                    onClick={() => {
                    
                    }}
                  >
                    Send OTP
                  </button>
                </div>
                <p>Or Sign in with</p>
                <ul>
                  <li className="pe-2">
                    <button className="btn" onClick={e => {
                    
                    }}>
                      {" "}
                      <img
                        src="./assets/img/login-with-google.png"
                        className="img img-fluid"
                        alt=""
                      />
                      Log in with Gmail
                    </button>
                  </li>
                  <li className="ps-2">
                    <button className="btn" onClick={e => {
                      e.preventDefault();
                      
                    }}>
                      {" "}
                      <img
                        src="./assets/img/login-with-facebook.png"
                        className="img img-fluid"
                        alt=""
                      />
                      Log in with Facebook
                    </button>
                  </li>
                </ul>
                <h5>
                  Don’t have account ?{" "}
                  <a
                    role="button"
                    data-bs-target="#createAccmodal"
                    data-bs-toggle="modal"
                    data-bs-dismiss="modal"
                    href="javascript:;"
                    onClick={() => {
                     
                    }}
                  >
                    Create now
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div></Modal>
      <Modal
      isOpen={1}
      toggle={() => {
        
      }}
      className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
    >
      <div className="auth-modal-wrp">
        <div className="row">
        <div className="col-lg-6 p-0">
            <div className="auth-modal-artwork">
              <img
                src="./assets/img/human-right-artwok.png"
                className="img img-fluid"
                alt=""
              />
            </div>
          </div>
        <div className="col-lg-6 p-0">
                <div className="auth-modal-content">
                  <div className="w-100">
                    <div className="auth-profile-pic-wrp">
                    <div className="profile-pic-chooose">
                                  
                                    <img
                                      src={image1}
                                      className="img img-fluid"
                                      alt=""
                                    />
                                    </div>
                    </div>
                    <div className="auth-input-wrp">
                      <div className="row">
                        <div className="col-lg-6">
                          <label for="">First Name</label>
                          <input
                            type="text"
                            // onChange={}
                            className="form-control"
                            name="firstName"
                            placeholder=""
                          />
                        </div>
                        <div className="col-lg-6">
                          <label for="">Last Name</label>
                          <input
                            type="text"
                            // onChange={onChangeUser}
                            className="form-control"
                            name="lastName"
                            placeholder=""
                          />
                        </div>
                        <div className="col-lg-12">
                          <label for="">Email ID</label>
                          <input
                            type="email"
                            className="form-control"
                            // onChange={onChangeUser}
                            name="email"
                            placeholder=""
                          />
                        </div>
                        <div className="col-lg-12">
                          <label for="">Mobile No.</label>
                          <input
                            type="string"
                            className="form-control"
                            name="mobileNo"
                            // onChange={onChangeUser}
                            placeholder=""
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn auth-main-btn"
                        onClick={() => {
                          // setmodalstateno(7);
                          // generateOtpUser();
                        }}
                      >
                        Create Account
                      </button>
                    </div>
                    <h5>
                      By signing up , you agree to{" "}
                      <a href="javascript:;">terms and condition</a>{" "}
                      and Borhan <a href="javascript:;">policy</a>
                    </h5>
                  </div>
                </div>
              </div>
       
        </div>
      </div></Modal>
      </>

  )
};

export default Sponsors;

            
  //   <Modal
  //   isOpen={true}
  //   toggle={() => {
      
  //   }}
  //   className="authentication-modal modal-dialog modal-dialog-centered modal-xl"
  // >
  //   <div className="auth-modal-wrp">
  //     <div className="row">
  //     <div className="col-lg-6 p-0">
  //             <div className="auth-modal-content">
  //               <div className="w-100">
  //                 <div className="auth-profile-pic-wrp">
  //                 <div className="profile-pic-chooose">
                                
  //                                 <img
  //                                   src={`${getProfilePic==""? "./assets/img/profile-picture-icon.png": getProfilePic}`}
  //                                   className="img img-fluid"
  //                                   alt=""
  //                                 />
  //                                 <h6>Profile Picture</h6>
  //                                 <input
  //                                   name="profilePic"
  //                                   className="hide-input"
  //                                   type="file"
  //                                   onChange={(e) => {
  //                                     // uploadFilesUsingMulter(e, 1);
  //                                   }}
  //                                 />
  //                                 </div>
  //                 </div>
  //                 <div className="auth-input-wrp">
  //                   <div className="row">
  //                     <div className="col-lg-6">
  //                       <label for="">First Name</label>
  //                       <input
  //                         type="text"
  //                         // onChange={onChangeUser}
  //                         className="form-control"
  //                         name="firstName"
  //                         placeholder=""
  //                       />
  //                     </div>
  //                     <div className="col-lg-6">
  //                       <label for="">Last Name</label>
  //                       <input
  //                         type="text"
  //                         // onChange={onChangeUser}
  //                         className="form-control"
  //                         name="lastName"
  //                         placeholder=""
  //                       />
  //                     </div>
  //                     <div className="col-lg-12">
  //                       <label for="">Email ID</label>
  //                       <input
  //                         type="email"
  //                         className="form-control"
  //                         onChange={onChangeUser}
  //                         name="email"
  //                         placeholder=""
  //                       />
  //                     </div>
  //                     <div className="col-lg-12">
  //                       <label for="">Mobile No.</label>
  //                       <input
  //                         type="string"
  //                         className="form-control"
  //                         name="mobileNo"
  //                         // onChange={onChangeUser}
  //                         placeholder=""
  //                       />
  //                     </div>
  //                   </div>
  //                   <button
  //                     type="submit"
  //                     className="btn auth-main-btn"
  //                     onClick={() => {
  //                       // setmodalstateno(7);
  //                       // generateOtpUser();
  //                     }}
  //                   >
  //                     Create Account
  //                   </button>
  //                 </div>
  //                 <h5>
  //                   By signing up , you agree to{" "}
  //                   <a href="javascript:;">terms and condition</a>{" "}
  //                   and Borhan <a href="javascript:;">policy</a>
  //                 </h5>
  //               </div>
  //             </div>
  //           </div>
     
  //     </div>
  //   </div></Modal>