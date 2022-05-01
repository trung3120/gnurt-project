import React from 'react';

import { Link } from 'react-router-dom';

import Grid from './Grid';

import logo from '../assets/images/Logo-2.png';

const footerAboutLinks = [
  {
    display: "Giới thiệu",
    path: "/about"
  },
  {
    display: "Liên hệ",
    path: "/about"
  },
  {
    display: "Tuyển dụng",
    path: "/about"
  },
  {
    display: "Tin tức",
    path: "/about"
  },
  {
    display: "Hệ thống cửa hàng",
    path: "/about"
  },
]

const footerCustomerLinks = [
  {
    display: "Chính sách trả góp",
    path: "/about"
  },
  {
    display: "Chính sách bảo hành",
    path: "/about"
  },
  {
    display: "Chính sách bảo hiểm",
    path: "/about"
  },
]

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <Grid
          col={4}
          mdCol={2}
          smCol={1}
          gap={10}
        >
          <div>
            <div className="footer__title">
              Tổng đài hỗ trợ
            </div>
            <div className="footer__content">
              <p>
                Liên hệ hỗ trợ <strong>079-420-2260</strong>
              </p>
              <p>
                Theo dõi đơn hàng <strong>079-420-2260</strong>
              </p>
              <p>
                Góp ý, khiếu nại <strong>079-420-2260</strong>
              </p>
            </div>
            <div className="footer__street">
                <div className="footer__title">
                  Địa chỉ trụ sở chính
                </div> 
                <p>
                  K22/06/04 Trần Hoành, Phường Khuê Mỹ, Quận Ngũ Hành Sơn, Thành Phố Đà Nẵng, Việt Nam
                </p>
            </div>
          </div>
          <div>
            <div className="footer__title">
              Về GnurTiw
            </div>
            <div className="footer__content">
              {
                footerAboutLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div>
            <div className="footer__title">
              Chăm sóc khách hàng
            </div>
            <div className="footer__content">
              {
                footerCustomerLinks.map((item, index) => (
                  <p key={index}>
                    <Link to={item.path}>
                      {item.display}
                    </Link>
                  </p>
                ))
              }
            </div>
          </div>
          <div className="footer__about">
            <p>
              <Link to="/">
                <img src={logo} className="footer__logo" alt="" />
              </Link>
            </p>
            <p>
              Khẳng định dũng khí của tinh thần Việt Nam, GnurTiw đã thần tốc đưa ra thị trường các sản phẩm ô tô 
              chất lượng và thời thượng: Fadil, LUX A2.0, LUX SA2.0, President.
            </p>
            <p>
              Hành trình thần tốc và kỳ diệu của GnurTiw đã viết nên ước mơ của hàng triệu 
              người Việt, đưa thương hiệu xe Việt Nam đầu tiên lên bản đồ sản xuất xe thế giới.
            </p>
          </div>
        </Grid>
      </div>
    </footer>
  )
}

export default Footer
