import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <>
      <footer className="footer-section style-2">
        <div className="container">
          <div className="footer-top">
            <div className="row g-lg-4 gy-5 justify-content-center">
              <div className="col-lg-4 col-md-8 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/index2" className="logo-dark">
                      <img src="/assets/img/footer-logo2.svg" alt="" />
                    </Link>
                    <Link href="/index2" className="logo-light">
                      <img src="/assets/img/footer-logo2-light.svg" alt="" />
                    </Link>
                  </div>
                  <div className="content">
                    <p>
                      Welcome to Zenfy, where innovation meets our passion in a
                      journey that started with a simple idea and a shared
                      dream.
                    </p>
                  </div>
                  <ul className="rating-area">
                    <li>
                      <a href="https://clutch.co" className="single-rating">
                        <div className="review">
                          <span>Review On</span>
                          <img
                            src="/assets/img/home1/icon/clutch-logo.svg"
                            alt=""
                            className="logo-dark"
                          />
                          <img
                            src="/assets/img/home1/icon/clutch-logo-white.svg"
                            alt=""
                            className="logo-light"
                          />
                        </div>
                        <div className="rating">
                          <ul className="star">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(50 reviews)</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.google.com/"
                        className="single-rating google"
                      >
                        <div className="review">
                          <span>Review On</span>
                          <img
                            src="/assets/img/home1/icon/google-logo.svg"
                            alt=""
                          />
                        </div>
                        <div className="rating">
                          <ul className="star">
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-fill" />
                            </li>
                            <li>
                              <i className="bi bi-star-half" />
                            </li>
                          </ul>
                          <span>(50 reviews)</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-sm-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Our Solutions</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/service-details">Search Engine</Link>
                      </li>
                      <li>
                        <Link href="/service-details">Paid Search</Link>
                      </li>
                      <li>
                        <Link href="/service-details">Social Media</Link>
                      </li>
                      <li>
                        <Link href="/service-details">Email Marketing</Link>
                      </li>
                      <li>
                        <Link href="/service-details">Content Marketing</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Company</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      <li>
                        <Link href="/about">About us</Link>
                      </li>
                      <li>
                        <Link href="/case-study">Case Study</Link>
                      </li>
                      <li>
                        <Link href="/blog">Blogs</Link>
                      </li>
                      <li>
                        <Link href="/pricing-plan">Pricing</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
                <div className="footer-widget">
                  <div className="subscribe-area mb-50">
                    <h4>Don’t Missed Subscribe</h4>
                    <form className="subscribe-form-wrap">
                      <div className="subscribe-form">
                        <input type="text" placeholder="Enter Email" />
                        <button type="submit">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="social-area">
                    <h6>Social Just You Connected Us!</h6>
                    <ul className="social-list">
                      <li>
                        <a href="https://www.linkedin.com/">
                          <i className="bi bi-linkedin" />
                          <span>LinkedIn</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/">
                          <i className="bi bi-facebook" />
                          <span>Facebook</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="currentColor"
                            className="bi bi-twitter-x"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                          </svg>
                          <span>Twitter</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/">
                          <i className="bi bi-instagram" />
                          <span>Instagram</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-area">
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M26.0803 20.4417C25.4047 19.7383 24.5898 19.3622 23.7262 19.3622C22.8695 19.3622 22.0477 19.7313 21.3442 20.4348L19.1433 22.6287C18.9622 22.5312 18.7811 22.4407 18.607 22.3501C18.3563 22.2248 18.1195 22.1063 17.9175 21.981C15.8559 20.6716 13.9823 18.9652 12.1854 16.7573C11.3148 15.6569 10.7297 14.7305 10.3049 13.7903C10.876 13.2679 11.4053 12.7247 11.9207 12.2023C12.1157 12.0073 12.3108 11.8053 12.5058 11.6103C13.9684 10.1477 13.9684 8.25321 12.5058 6.79058L10.6044 4.88917C10.3885 4.67326 10.1656 4.45038 9.95664 4.22751C9.53874 3.79569 9.09996 3.34993 8.64724 2.93204C7.97165 2.26341 7.16372 1.9082 6.31401 1.9082C5.46429 1.9082 4.64244 2.26341 3.94595 2.93204C3.93899 2.939 3.93899 2.939 3.93202 2.94597L1.56396 5.33492C0.672459 6.22643 0.164023 7.31295 0.0525852 8.57359C-0.114572 10.6073 0.484407 12.5018 0.944089 13.7415C2.0724 16.7852 3.7579 19.606 6.27222 22.6287C9.32283 26.2713 12.9933 29.1478 17.1862 31.1746C18.7881 31.9338 20.9263 32.8323 23.3153 32.9855C23.4615 32.9924 23.6148 32.9994 23.7541 32.9994C25.3629 32.9994 26.7141 32.4213 27.7728 31.2721C27.7798 31.2582 27.7937 31.2512 27.8006 31.2373C28.1628 30.7985 28.5807 30.4015 29.0195 29.9767C29.319 29.6911 29.6254 29.3916 29.9249 29.0782C30.6145 28.3608 30.9766 27.525 30.9766 26.6683C30.9766 25.8047 30.6075 24.9759 29.904 24.2794L26.0803 20.4417ZM28.5737 27.7758C28.5668 27.7758 28.5668 27.7827 28.5737 27.7758C28.3021 28.0683 28.0235 28.3329 27.724 28.6255C27.2713 29.0573 26.8116 29.51 26.3798 30.0184C25.6764 30.7707 24.8475 31.1259 23.761 31.1259C23.6565 31.1259 23.5451 31.1259 23.4406 31.1189C21.3721 30.9866 19.4498 30.1786 18.008 29.4891C14.0659 27.5807 10.6044 24.8714 7.72788 21.4377C5.35286 18.5752 3.76486 15.9285 2.71317 13.0868C2.06543 11.3526 1.82863 10.0014 1.9331 8.72682C2.00275 7.91193 2.31617 7.23633 2.89425 6.65825L5.26928 4.28323C5.61056 3.96284 5.97273 3.78872 6.32794 3.78872C6.76673 3.78872 7.12193 4.05339 7.34481 4.27626C7.35177 4.28323 7.35874 4.29019 7.3657 4.29716C7.79056 4.69415 8.19452 5.10508 8.61938 5.54387C8.83529 5.76675 9.05817 5.98962 9.28104 6.21946L11.1825 8.12087C11.9207 8.85915 11.9207 9.54171 11.1825 10.28C10.9805 10.482 10.7855 10.6839 10.5835 10.879C9.99843 11.4779 9.44124 12.0351 8.83529 12.5784C8.82136 12.5923 8.80743 12.5993 8.80047 12.6132C8.20149 13.2122 8.31293 13.7972 8.43829 14.1942C8.44526 14.2151 8.45222 14.236 8.45919 14.2569C8.9537 15.4549 9.65018 16.5832 10.7088 17.9274L10.7158 17.9344C12.6381 20.3024 14.6649 22.1481 16.9006 23.562C17.1862 23.7431 17.4787 23.8894 17.7573 24.0287C18.008 24.154 18.2448 24.2724 18.4468 24.3978C18.4747 24.4117 18.5025 24.4326 18.5304 24.4465C18.7672 24.5649 18.9901 24.6207 19.2199 24.6207C19.798 24.6207 20.1602 24.2585 20.2786 24.1401L22.6606 21.7581C22.8974 21.5213 23.2735 21.2357 23.7123 21.2357C24.1441 21.2357 24.4993 21.5074 24.7152 21.7442C24.7222 21.7511 24.7222 21.7511 24.7291 21.7581L28.5668 25.5958C29.2842 26.3062 29.2842 27.0375 28.5737 27.7758Z" />
                    <path d="M17.834 7.8506C19.6588 8.15705 21.3164 9.0207 22.6398 10.344C23.9631 11.6673 24.8198 13.325 25.1332 15.1498C25.2098 15.6095 25.6068 15.9299 26.0595 15.9299C26.1152 15.9299 26.164 15.9229 26.2197 15.9159C26.7351 15.8323 27.0764 15.3448 26.9928 14.8294C26.6167 12.6215 25.572 10.6087 23.977 9.01373C22.3821 7.41877 20.3692 6.37404 18.1614 5.99794C17.646 5.91436 17.1654 6.25564 17.0748 6.76408C16.9843 7.27251 17.3186 7.76702 17.834 7.8506Z" />
                    <path d="M32.9617 14.557C32.3418 10.9213 30.6285 7.61301 27.9957 4.98029C25.363 2.34757 22.0547 0.634209 18.419 0.0143347C17.9106 -0.0762086 17.43 0.272035 17.3395 0.780471C17.2559 1.29587 17.5972 1.77645 18.1126 1.86699C21.3582 2.41722 24.3183 3.95645 26.6724 6.30362C29.0265 8.65774 30.5588 11.6178 31.109 14.8634C31.1857 15.3231 31.5827 15.6435 32.0354 15.6435C32.0911 15.6435 32.1398 15.6365 32.1956 15.6296C32.704 15.553 33.0522 15.0654 32.9617 14.557Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Call Any Time</span>
                <h6>
                  <a href="tel:2-965-871-8617">2-965-871-8617</a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M16.4999 0C9.77802 0 4.30957 5.46845 4.30957 12.1904C4.30957 14.4033 5.30201 16.7832 5.3436 16.8836C5.66413 17.6445 6.2966 18.8262 6.75266 19.5189L15.1109 32.1832C15.453 32.7024 15.9592 33 16.4999 33C17.0406 33 17.5469 32.7024 17.8889 32.184L26.2479 19.5189C26.7047 18.8262 27.3364 17.6445 27.657 16.8836C27.6986 16.784 28.6903 14.404 28.6903 12.1904C28.6903 5.46845 23.2218 0 16.4999 0ZM26.3347 16.3272C26.0486 17.0091 25.4598 18.1084 25.0504 18.7294L16.6914 31.3945C16.5265 31.6447 16.4741 31.6447 16.3092 31.3945L7.95018 18.7294C7.54073 18.1084 6.95201 17.0084 6.66589 16.3265C6.6537 16.2971 5.74373 14.1064 5.74373 12.1904C5.74373 6.25939 10.569 1.43416 16.4999 1.43416C22.4309 1.43416 27.2561 6.25939 27.2561 12.1904C27.2561 14.1093 26.344 16.3057 26.3347 16.3272Z" />
                    <path d="M16.5001 5.7373C12.9412 5.7373 10.0464 8.63287 10.0464 12.191C10.0464 15.7492 12.9412 18.6447 16.5001 18.6447C20.059 18.6447 22.9538 15.7492 22.9538 12.191C22.9538 8.63287 20.059 5.7373 16.5001 5.7373ZM16.5001 17.2106C13.7329 17.2106 11.4805 14.9589 11.4805 12.191C11.4805 9.42309 13.7329 7.17146 16.5001 7.17146C19.2673 7.17146 21.5197 9.42309 21.5197 12.191C21.5197 14.9589 19.2673 17.2106 16.5001 17.2106Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Address</span>
                <h6>
                  <a href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu">
                    Dhaka, Bangladesh
                  </a>
                </h6>
              </div>
            </div>
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.9891 1.18398C33.0171 0.995671 32.9925 0.803292 32.918 0.628097C32.8435 0.452902 32.722 0.301711 32.567 0.191227C32.4121 0.0808885 32.2296 0.0155543 32.0399 0.00245033C31.8501 -0.0106536 31.6604 0.0289832 31.4918 0.116977L0.554265 16.2732C0.376261 16.3673 0.229594 16.5113 0.132265 16.6876C0.0349358 16.8638 -0.00882138 17.0646 0.00636356 17.2654C0.0215485 17.4662 0.0950149 17.6581 0.217747 17.8177C0.340478 17.9773 0.507135 18.0976 0.697265 18.1639L9.29789 21.1036L27.6143 5.44235L13.4408 22.5185L27.8549 27.4451C27.9979 27.4932 28.1497 27.5094 28.2997 27.4926C28.4496 27.4758 28.5941 27.4265 28.723 27.348C28.8519 27.2696 28.962 27.1639 29.0458 27.0384C29.1296 26.9129 29.1849 26.7706 29.2079 26.6215L32.9891 1.18398ZM28.2196 26.469C28.2195 26.4693 28.2196 26.4688 28.2196 26.469L32 1.03696C32.0009 1.03102 32.0001 1.02494 31.9978 1.0194M28.2196 26.469C28.2187 26.4738 28.2167 26.4792 28.214 26.4833C28.2112 26.4876 28.2074 26.4912 28.203 26.4939C28.1986 26.4965 28.1937 26.4982 28.1885 26.4988C28.1837 26.4993 28.1788 26.4989 28.1741 26.4974C28.1739 26.4973 28.1744 26.4975 28.1741 26.4974L15.1365 22.0413L28.3837 6.08103L26.9644 4.68231L9.08156 19.9729L1.02623 17.2195C1.02595 17.2194 1.02651 17.2196 1.02623 17.2195C1.02033 17.2173 1.01432 17.2131 1.01047 17.2081C1.00643 17.2029 1.00401 17.1966 1.00352 17.19C1.00302 17.1834 1.00445 17.1768 1.00766 17.171C1.01073 17.1654 1.01531 17.1608 1.02086 17.1577C1.02064 17.1578 1.02109 17.1576 1.02086 17.1577L31.9544 1.00355C31.9543 1.00357 31.9544 1.00352 31.9544 1.00355C31.9594 1.00093 31.9653 0.999681 31.971 1.00007M13.0314 30.5897C13.0316 30.5963 13.0337 30.6027 13.0376 30.6081C13.0417 30.6136 13.0473 30.6177 13.0538 30.6199C13.0603 30.622 13.0674 30.622 13.0739 30.6199C13.0802 30.6179 13.0857 30.6141 13.0898 30.6089C13.0896 30.6091 13.0899 30.6087 13.0898 30.6089L16.011 26.6335L13.0314 25.6152V30.5897ZM12.0314 24.2166V30.5939C12.0324 30.8106 12.1017 31.0215 12.2292 31.1967C12.3568 31.3719 12.5363 31.5025 12.7422 31.5701C12.9482 31.6376 13.1702 31.6386 13.3767 31.573C13.5833 31.5073 13.764 31.3784 13.8931 31.2044L17.6235 26.1279L12.0314 24.2166Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Say Hello</span>
                <h6>
                  <a href="mailto:info@example.com">info@example.com</a>
                </h6>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="copyright-area">
              <p>
                Copyright 2024 <a href="#">Zenfy</a> | Design By{" "}
                <a href="https://www.egenslab.com/">Egens Lab</a>
              </p>
            </div>
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <a href="#">Support Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
