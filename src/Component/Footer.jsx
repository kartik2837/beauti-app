import React from 'react'

const Footer = () => {
    return (
        <footer class="footer-section">
            <div class="container relative">

                <div class="sofa-img">
                    <img src="images/logo/makeup10.png" alt="Image" class="img-fluid" />
                </div>

                <div class="row">
                    <div class="col-lg-8">
                        <div class="subscription-form">
                            <h3 class="d-flex align-items-center"><span class="me-1"><img src="images/envelope-outline.svg" alt="Image" class="img-fluid" /></span><span>Subscribe to Newsletter</span></h3>

                            <form action="#" class="row g-3">
                                <div class="col-auto">
                                    <input type="text" class="form-control" placeholder="Enter your name" />
                                </div>
                                <div class="col-auto">
                                    <input type="email" class="form-control" placeholder="Enter your email" />
                                </div>
                                <div class="col-auto">
                                    <button class="btn btn-primary">
                                        <span class="fa fa-paper-plane"></span>

                                    </button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>

                <div class="row g-5 mb-5">
                    <div class="col-lg-4">
                        <div class="mb-4 footer-logo-wrap"> <a href="index.html" className="flex items-center">
                            <img src="/images/logo/logo2.png" alt="Logo" className="h-12" />
                        </a></div>
                        <p class="mb-4 text-black">At SelfySnap, we believe beauty is more than skin deep — it’s a celebration of confidence, care, and self-expression. Founded with a passion for clean, effective, and inclusive beauty, SelfySnap blends science and nature to create skincare and cosmetic products that work for every skin type and tone.</p>

                        <ul class="list-unstyled custom-social">
                            <li><a href="#"><span class="fa fa-brands fa-facebook-f"></span></a></li>
                            <li><a href="#"><span class="fa fa-brands fa-twitter"></span></a></li>
                            <li><a href="#"><span class="fa fa-brands fa-instagram"></span></a></li>
                            <li><a href="#"><span class="fa fa-brands fa-linkedin"></span></a></li>
                        </ul>
                    </div>

                    <div class="col-lg-8">
                        <div class="row links-wrap">
                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">About us</a></li>
                                    <li><a href="#">Products</a></li>
                                    <li><a href="#">Blog</a></li>
                                    <li><a href="#">Contact us</a></li>

                                </ul>
                            </div>

                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">24/7 Support</a></li>
                                    <li><a href="#">Our Products</a></li>
                                    <li><a href="#">Live chat</a></li>
                                    <li><a href="#">Mobile No: +91 9992088843 </a></li>
                                </ul>
                            </div>

                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">Terms & Condition</a></li>
                                    <li><a href="#">Our team</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Email:Support@selfysnap.com</a></li>
                                </ul>
                            </div>

                            <div class="col-6 col-sm-6 col-md-3">
                                <ul class="list-unstyled">
                                    <li><a href="#">Orders</a></li>
                                    <li><a href="#">Return Policy</a></li>
                                    <li><a href="#">About</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="border-top copyright">
                    <div class="row pt-4">
                        <div class="col-lg-6">
                            <p class="mb-2 text-center text-lg-start text-black">Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved. &mdash; Designed by<a href="https://untree.co"></a> <a hreff="#">Web4Businesssolutions.com</a>
                            </p>
                        </div>

                        <div class="col-lg-6 text-center text-lg-end">
                            <ul class="list-unstyled d-inline-flex ms-auto">
                                <li class="me-4"><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
