import { Icon } from "@iconify/react";

export default function Footer(){
    return (
        <div className="container d-flex flex-column  w-100">
            <div className="row">
                <div className="col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12 mb-5">
                   <div className="d-flex align-items-center gap-3 mb-4">
                   <Icon icon="tabler:home-2" />
                   <p className="subHeading m-0 p-0 mt-1">GK Association</p>
                   </div>
                   <p className="footerText m-0 p-0">The primary intention of wearing eyewear can very bassed on the need or desire of the wearer</p>

                </div>
                <div className="col-12 col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 d-flex justify-content-around flex-wrap gap-5">
                    <div className="d-flex flex-column gap-2 min-width">
                        <h4 className="mb-2">Home</h4>
                        <p className="footerText m-0 p-0">service</p>
                        <p className="footerText m-0 p-0">Resource</p>
                        <p className="footerText m-0 p-0">Agents</p>
                        <p className="footerText m-0 p-0">Lintings</p>
                        

                    </div>
                    <div className="d-flex flex-column gap-2 min-width">
                        <h4 className="mb-2">Company</h4>
                        <p className="footerText m-0 p-0">About us</p>
                        <p className="footerText m-0 p-0">Community</p>
                        <p className="footerText m-0 p-0">Reviews</p>
                        <p className="footerText m-0 p-0">FAQ</p>
                        

                    </div>
                    <div className="d-flex flex-column gap-2 min-width">
                        <h4 className="mb-2">Resource</h4>
                        <p className="footerText m-0 p-0">Press info</p>
                        <p className="footerText m-0 p-0">Customer</p>
                        <p className="footerText m-0 p-0">Services</p>
                        <p className="footerText m-0 p-0">Blog</p>
                        

                    </div>
                    <div className="d-flex flex-column gap-2 min-width">
                        <h4 className="mb-2">Social</h4>
                        <p className="footerText m-0 p-0">Instagram</p>
                        <p className="footerText m-0 p-0">FaceBook </p>
                        <p className="footerText m-0 p-0">Twitter</p>
                        <p className="footerText m-0 p-0">Linked-In</p>
                        

                    </div>
                    

                </div>

            </div>
            {/* hr */}
           <hr></hr>
            <div className="d-flex justify-content-between align-items-center flex-wrap mt-3">
                <p className="footerText">Privacy policy</p>
                <p className="footerText">All rights reserved 2024@realestate</p>
                <p className="footerText">Terms & condition </p>

            </div>

        </div>
    )
}