import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Appbar() {
  return (
    <div>
        <nav className=" navbar fixed-top navbar-expand-md navbar-dark bg-dark " style={{background:'linear-gradient(to right,rgb(0, 0, 0), #200F21)'}}>
                <div className="flex-row d-flex">
                    <img style={{height: '40px'}} className="navbar-brand"
                         src={'https://raw.githubusercontent.com/jagjotsingh09/Website-Dashboard/main/src/img/CGI-logo.jpg'}
                         alt=""/>
                    <a className="navbar-brand" href="#">Confederation of Global Innovators</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a style={{color: 'white'}} className="nav-link" href="#myAlert"
                               data-toggle="collapse">Services</a>
                        </li>
                        <li className="nav-item">
                            <a style={{color: 'white'}} className="nav-link" href="" data-target="#myModal"
                               data-toggle="modal">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light text-white">
                                <i className="fas fa-envelope-open-text"></i>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link waves-effect waves-light text-white">
                                <i className="fas fa-align-justify"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
          )
}
