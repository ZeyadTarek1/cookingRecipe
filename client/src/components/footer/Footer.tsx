import React from "react";

const Footer = () => (
    <footer className="page-footer font-small blue pt-4">
        <div className="container-fluid text-center text-md-left">
            <div className="row">
                <div className="col-md-4 mt-md-4 mt-4">
                    <h5 className="text-uppercase">Home</h5>
                </div>

                <hr className="clearfix w-100 d-md-none pb-0" />

                <div className="col-md-4 mb-md-0 mb-4">
                    <h5 className="text-uppercase">About</h5>
                </div>

                <div className="col-md-4 mb-md-4 mb-4">
                    <h5 className="text-uppercase">Contact</h5>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">
            © 2020 Copyright:
            <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
        </div>
    </footer>
);

export default Footer;
