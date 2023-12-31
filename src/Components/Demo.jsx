import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div class="header-wrap d-flex">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-4 col-sm-4 col-md-4 col-lg-8 d-block d-lg-none">
                            <button type="button" class="btn--link site-header__menu js-mobile-nav-toggle mobile-nav--open" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Menu" aria-label="Menu"><i class="icon an an-times"></i><i class="icon an an-bars"></i></button>
                            <div class="site-header__search d-block d-lg-none mobile-search-icon">
                                <button type="button" class="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Search" aria-label="Search"><i class="icon an an-search"></i></button>
                            </div>
                        </div>
                        <div class="logo col-4 col-sm-4 col-md-4 col-lg-2 align-self-center">
                            <a href="index.html"><img src="assets/images/logo.png" alt="Diva Multipurpose Html Template" title="Diva Multipurpose Html Template" /></a>
                        </div>
  
                        <div class="col-2 col-sm-3 col-md-3 col-lg-8 d-none d-lg-block">
                            <nav class="grid__item" id="AccessibleNav">
                                <ul id="siteNav" class="d-flex flex-wrap site-nav medium center hidearrow">
                                    <li class="lvl1 parent dropdown">
                                        <a href="#">Layout <i class="an an-angle-down"></i></a>
                                        <ul class="dropdown">
                                            <li><a href="index.html" class="site-nav">Layout 1 - Classic 01</a></li>
                                            <li><a href="home2-default.html" class="site-nav">Layout 2 - Default</a></li>
                                            <li><a href="home3-classic.html" class="site-nav">Layout 3 - Classic 02</a></li>
                                            <li><a href="home4-fullwidth.html" class="site-nav">Layout 4 - Full Width</a></li>
                                            <li><a href="home5-boxed.html" class="site-nav">Layout 5 - Boxed</a></li>
                                            <li><a href="home6-parallax.html" class="site-nav">Layout 6 - Parallax  Banner</a></li>
                                            <li><a href="home7-creative.html" class="site-nav">Layout 7 - Creative</a></li>
                                            <li><a href="home8-simple.html" class="site-nav">Layout 8 - Simple</a></li>
                                            <li><a href="home9-simple2.html" class="site-nav">Layout 9 - Simple 2</a></li>
                                            <li><a href="home10-minimal.html" class="site-nav">Home 10 - Minimal</a></li>
                                            <li><a href="home11-modern.html" class="site-nav">Layout 11 - Modern</a></li>
                                            <li><a href="home12-category.html" class="site-nav">Layout 12 - Category</a></li>
                                            <li><a href="home13-dark.html" class="site-nav">Layout 13 - Dark</a></li>
                                            <li><a href="home14.html" class="site-nav last">Layout 14 <span class="lbl nm_label1">New</span></a></li>
                                        </ul>
                                    </li>
                                    <li class="lvl1 parent megamenu">
                                        <a href="#">Shop <i class="an an-angle-down"></i></a>
                                        <div class="megamenu style1">
                                            <div class="row">
                                                <div class="lvl-1 col-12 col-md-9 col-lg-9">
                                                    <ul class="row grid--uniform mmWrapper">
                                                        <li class="lvl-1 col-12 col-md-4 col-lg-4">
                                                            <a href="#" class="site-nav lvl-1">Shop Pages</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav">Left Sidebar</a></li>
                                                                <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav">Right Sidebar</a></li>
                                                                <li class="lvl-2"><a href="shop-fullwidth.html" class="site-nav">No Sidebar</a></li>
                                                                <li class="lvl-2"><a href="shop-sidebar-drawer.html" class="site-nav">Sidebar Drawer</a></li>
                                                                <li class="lvl-2"><a href="shop-listview-sidebar.html" class="site-nav">Sidebar Products List</a></li>
                                                                <li class="lvl-2"><a href="shop-left-sidebar.html" class="site-nav">Sidebar Products Slider</a></li>
                                                                <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav">Pagination - Infinite Scroll</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-6.html" class="site-nav">Pagination - Load More</a></li>
                                                                <li class="lvl-2"><a href="product-swatches-style.html" class="site-nav">Diffrent Swatches Style</a></li>
                                                                <li class="lvl-2"><a href="product-labels.html" class="site-nav">Product Labels</a></li>
                                                                <li class="lvl-2"><a href="collection-3columns.html" class="site-nav last">Collection 3 Columns</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="lvl-1 col-12 col-md-4 col-lg-4">
                                                            <a href="#" class="site-nav lvl-1">Shop Pages</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="shop-right-sidebar.html" class="site-nav">Category Slideshow</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-2.html" class="site-nav">2 Products Per Row</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-3.html" class="site-nav">3 Products Per Row</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-4.html" class="site-nav">4 Products Per Row</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-5.html" class="site-nav">5 Products Per Row</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-6.html" class="site-nav">6 Products Per Row</a></li>
                                                                <li class="lvl-2"><a href="shop-listview.html" class="site-nav">List View</a></li>
                                                                <li class="lvl-2"><a href="shop-listview-sidebar.html" class="site-nav">List View Sidebar</a></li>
                                                                <li class="lvl-2"><a href="shop-grid-3.html" class="site-nav">Pagination - Number</a></li>
                                                                <li class="lvl-2"><a href="product-hover-info.html" class="site-nav">Product Hover Info</a></li>
                                                                <li class="lvl-2"><a href="collection-4columns.html" class="site-nav last">Collection 4 Columns</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="lvl-1 col-12 col-md-4 col-lg-4">
                                                            <a href="#" class="site-nav lvl-1 menu-title">Shop Other Page</a>
                                                            <ul class="subLinks">
                                                                <li class="lvl-2"><a href="wishlist.html" class="site-nav">My Wishlist Page Style1</a></li>
                                                                <li class="lvl-2"><a href="wishlist-style2.html" class="site-nav">My Wishlist Page Style2</a></li>
                                                                <li class="lvl-2"><a href="compare.html" class="site-nav">Compare Page Style1</a></li>
                                                                <li class="lvl-2"><a href="compare-style2.html" class="site-nav last">Compare Page Style2</a></li>
                                                                <li class="lvl-2"><a href="cart.html" class="site-nav">Cart Page Style1</a></li>
                                                                <li class="lvl-2"><a href="cart-style2.html" class="site-nav">Cart Page Style2</a></li>
                                                                <li class="lvl-2"><a href="checkout.html" class="site-nav">Checkout Page Style1</a></li>
                                                                <li class="lvl-2"><a href="checkout-style2.html" class="site-nav">Checkout Page Style2</a></li>
                                                                <li class="lvl-2"><a href="checkout-success.html" class="site-nav">Checkout Success</a></li>
                                                                <li class="lvl-2"><a href="shop-search-results.html" class="site-nav">Search Results</a></li>
                                                                <li class="lvl-2"><a href="collection-5columns.html" class="site-nav last">Collection 5 Columns</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="lvl-1 col-12 col-md-3 col-lg-3 product-menu">
                                                    <a href="#" class="site-nav lvl-1 text-center">Best Seller</a>
                                                    <div class="grid-products text-center">
                                                        <div class="product-image">
                                                            <a href="product-layout1.html" class="grid-view-item__link"><img src="assets/images/megamenu/megamenu-product.jpg" alt="image" title="" /></a>
                                                        </div>
                                                        <div class="product-details text-center">
                                                            <div class="product-name">
                                                                <a href="product-layout1.html">J B Crepe multi Color Top</a>
                                                            </div>
                                                            <div class="product-price">
                                                                <span class="price">$800.00</span>
                                                            </div>
                                                            <div class="product-review mt-1">
                                                                <i class="an an-star"></i>
                                                                <i class="an an-star"></i>
                                                                <i class="an an-star"></i>
                                                                <i class="an an-star"></i>
                                                                <i class="an an-star-half-alt"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 imageCol">
                                                    <div class="row mm2-banner">
                                                        <div class="col-12 col-md-6 col-lg-6">
                                                            <a href="shop-left-sidebar.html"><img src="assets/images/megamenu/megamenu-bg2.jpg" alt="image" /></a>
                                                        </div>
                                                        <div class="col-12 col-md-6 col-lg-6">
                                                            <a href="shop-listview-sidebar.html"><img src="assets/images/megamenu/megamenu-bg3.jpg" alt="image" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu">
                                        <a href="#">Features <i class="an an-angle-down"></i> <span class="navLbl">Hot</span></a>
                                        <div class="megamenu style2 megabgfull">
                                            <ul class="row mmWrapper">
                                                <li class="lvl-1 col-md-4 col-lg-4">
                                                    <a href="#" class="site-nav lvl-1 menu-title">Product Page</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="product-layout1.html" class="site-nav">Product Layout1</a></li>
                                                        <li class="lvl-2"><a href="product-layout2.html" class="site-nav">Product Layout2</a></li>
                                                        <li class="lvl-2"><a href="product-layout3.html" class="site-nav">Product Layout3</a></li>
                                                        <li class="lvl-2"><a href="product-layout4.html" class="site-nav">Product Layout4</a></li>
                                                        <li class="lvl-2"><a href="product-layout5.html" class="site-nav">Product Layout5</a></li>
                                                        <li class="lvl-2"><a href="product-layout6.html" class="site-nav">Product Layout6</a></li>
                                                        <li class="lvl-2"><a href="product-layout7.html" class="site-nav">Product Layout7</a></li>
                                                        <li class="lvl-2"><a href="product-layout8.html" class="site-nav last">Product Layout8</a></li>
                                                    </ul>
                                                </li>
                                                <li class="lvl-1 col-md-4 col-lg-4">
                                                    <a href="#" class="site-nav lvl-1 menu-title">Product Types</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="product-accordian.html" class="site-nav">Product Accordian</a></li>
                                                        <li class="lvl-2"><a href="product-layout3.html" class="site-nav">Product Tabs Left</a></li>
                                                        <li class="lvl-2"><a href="product-layout6.html" class="site-nav">Product Tabs Center</a></li>
                                                        <li class="lvl-2"><a href="product-standard.html" class="site-nav">Standard Product</a></li>
                                                        <li class="lvl-2"><a href="product-variable.html" class="site-nav">Variable Product</a></li>
                                                        <li class="lvl-2"><a href="product-grouped.html" class="site-nav">Grouped Product</a></li>
                                                        <li class="lvl-2"><a href="product-pre-orders.html" class="site-nav">Product Pre-orders</a></li>
                                                        <li class="lvl-2"><a href="product-call-for-price.html" class="site-nav last">Product Call for Price</a></li>
                                                    </ul>
                                                </li>
                                                <li class="lvl-1 col-md-4 col-lg-4">
                                                    <a href="#" class="site-nav lvl-1 menu-title">Product Types</a>
                                                    <ul class="subLinks">
                                                        <li class="lvl-2"><a href="product-layout6.html" class="site-nav">Products Coundown</a></li>
                                                        <li class="lvl-2"><a href="product-layout1.html" class="site-nav">New Product</a></li>
                                                        <li class="lvl-2"><a href="product-layout2.html" class="site-nav">Sale Product</a></li>
                                                        <li class="lvl-2"><a href="product-outofstock.html" class="site-nav">Out Of Stock Product</a></li>
                                                        <li class="lvl-2"><a href="product-external-affiliate.html" class="site-nav">External / Affiliate Product</a></li>
                                                        <li class="lvl-2"><a href="product-layout1.html" class="site-nav">Variable Image</a></li>
                                                        <li class="lvl-2"><a href="product-layout3.html" class="site-nav">Variable Select</a></li>
                                                        <li class="lvl-2"><a href="product-360-degree-view.html" class="site-nav last">360 Degree view</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent megamenu">
                                        <a href="#">Pages <i class="an an-angle-down"></i><span class="navLbl new">New</span></a>
                                        <div class="megamenu style2">
                                            <ul class="row mmWrapper">
                                                <li class="col-12 menuCol">
                                                    <ul class="row">
                                                        <li class="lvl-1 col">
                                                            <a href="#" class="site-nav lvl-1">My Account</a>
                                                            <ul class="subLinks">
                                                                <li><a href="login.html" class="site-nav">Login</a></li>
                                                                <li><a href="my-account.html" class="site-nav">My Account</a></li>
                                                                <li><a href="register.html" class="site-nav">Register</a></li>
                                                                <li><a href="forgot-your-password.html" class="site-nav">Forgot Password</a></li>
                                                                <li><a href="empty-cart.html" class="site-nav last">Empty cart</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="lvl-1 col">
                                                            <a href="#" class="site-nav lvl-1">About Us</a>
                                                            <ul class="subLinks">
                                                                <li><a href="about-us-style1.html" class="site-nav">About Us 01</a></li>
                                                                <li><a href="about-us-style2.html" class="site-nav">About Us 02</a></li>
                                                                <li><a href="about-us-style3.html" class="site-nav">About Us 03</a></li>
                                                                <li><a href="cms-page.html" class="site-nav">CMS Page</a></li>
                                                                <li><a href="empty-category.html" class="site-nav last">Empty category</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="lvl-1 col">
                                                            <a href="#" class="site-nav lvl-1">Others Pages</a>
                                                            <ul class="subLinks">
                                                                <li><a href="contactus-style1.html" class="site-nav">Contact Us 01</a></li>
                                                                <li><a href="contactus-style2.html" class="site-nav">Contact Us 02</a></li>
                                                                <li><a href="faqs-style1.html" class="site-nav">FAQs 01</a></li>
                                                                <li><a href="faqs-style2.html" class="site-nav">FAQs 02</a></li>
                                                                <li><a href="empty-compare.html" class="site-nav last">Empty compare</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="lvl-1 col">
                                                            <a href="#" class="site-nav lvl-1">Others Pages</a>
                                                            <ul class="subLinks">
                                                                <li><a href="404.html" class="site-nav">404 Error</a></li>
                                                                <li><a href="size-guide.html" class="site-nav">Size Guide</a></li>
                                                                <li><a href="privacy-policy.html" class="site-nav">Privacy Policy</a></li>
                                                                <li><a href="brands-page.html" class="site-nav">Brands Page</a></li>
                                                                <li><a href="empty-search.html" class="site-nav last">Empty search</a></li>
                                                            </ul>
                                                        </li>
                                                        <li class="lvl-1 col">
                                                            <a href="#" class="site-nav  lvl-1">Others Pages</a>
                                                            <ul>
                                                                <li><a href="coming-soon-style1.html" class="site-nav">Coming soon 01</a></li>
                                                                <li><a href="coming-soon-style2.html" class="site-nav">Coming soon 02</a></li>
                                                                <li><a href="coming-soon-style3.html" class="site-nav">Coming soon 03</a></li>
                                                                <li><a href="coming-soon-style4.html" class="site-nav">Coming soon 04</a></li>
                                                                <li><a href="empty-wishlist.html" class="site-nav last">Empty wishlist</a></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li class="col-12 imageCol">
                                                    <a href="#"><img src="assets/images/megamenu/megamenu-bg4.jpg" alt="image" /></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li class="lvl1 parent dropdown">
                                        <a href="#">Lookbook <i class="an an-angle-down"></i></a>
                                        <ul class="dropdown">
                                            <li><a href="lookbook-2columns.html" class="site-nav">2 Columns</a></li>
                                            <li><a href="lookbook-3columns.html" class="site-nav">3 Columns</a></li>
                                            <li><a href="lookbook-4columns.html" class="site-nav">4 Columns</a></li>
                                            <li><a href="lookbook-5columns.html" class="site-nav">5 Columns + Fullwidth</a></li>
                                            <li><a href="lookbook-shop.html" class="site-nav last">Lookbook Shop</a></li>
                                        </ul>
                                    </li>
                                    <li class="lvl1 parent dropdown">
                                        <a href="#">Blog <i class="an an-angle-down"></i></a>
                                        <ul class="dropdown">
                                            <li><a href="blog-left-sidebar.html" class="site-nav">Left Sidebar</a></li>
                                            <li><a href="blog-right-sidebar.html" class="site-nav">Right Sidebar</a></li>
                                            <li><a href="blog-grid-view.html" class="site-nav">Grid View</a></li>
                                            <li><a href="blog-list-view.html" class="site-nav">List View</a></li>
                                            <li><a href="blog-fullwidth.html" class="site-nav">Fullwidth</a></li>
                                            <li><a href="blog-masonry.html" class="site-nav">Masonry</a></li>
                                            <li><a href="blog-single-post.html" class="site-nav last">Single Post</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-4 col-sm-4 col-md-4 col-lg-2">
                            <div class="right-action d-flex-align-center justify-content-end">
                                <div class="item site-header__search d-none d-lg-block">
                                    <button type="button" class="search-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Search" aria-label="Search"><i class="icon an an-search"></i></button>
                                </div>
                                <div class="item user-menu-dropdown d-none d-sm-block d-md-block d-lg-block">
                                    <span class="user-menu" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Account" aria-label="Account"><i class="icon an an-user-alt"></i></span>
                                    <ul class="customer-links list-inline" style={{display:'none'}}>
                                        <li class="item"><a href="login.html">Login</a></li>
                                        <li class="item"><a href="register.html">Register</a></li>
                                        <li class="item"><a href="my-account.html">Orders</a></li>
                                        <li class="item"><a href="compare.html">Compare</a></li>
                                    </ul>
                                </div>
                                <div class="item site-header-wishlist">
                                    <a href="wishlist.html" class="wishlist-trigger" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Wishlist">
                                        <i class="icon an an-heart"></i><span id="WishCount" class="site-header-wish-count">2</span>
                                    </a>
                                </div>
                                <div class="item site-cart" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="Cart">
                                    <a href="#" class="site-header__cart btn-minicart" data-bs-toggle="modal" data-bs-target="#minicart-drawer">
                                        <i class="icon an an-shopping-bag"></i><span id="CartCount" class="site-header__cart-count">2</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;