import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="custom-navbar">
      <div className="navbar-right">
        <div className="logo-section">
          {/* تأكدي من مسار اللوغو الصحيح */}
          <img src="/assets/images/logo.png" alt="Syrian Platform" className="main-logo" />
        </div>
        <div className="nav-divider"></div>
        <span className="nav-link-active">الصفحة الرئيسية</span>
      </div>

      <div className="navbar-left">
        {/* أيقونة الجرس مع نقطة الإشعار */}
        <div className="icon-wrapper">
          <i className="fa-regular fa-bell"></i>
          <span className="notification-dot"></span>
        </div>
        
        {/* أيقونة الكرة الأرضية */}
        <div className="icon-wrapper">
          <i className="fa-solid fa-globe"></i>
        </div>

        {/* الخط الفاصل الأسود الرفيع */}
        <div className="vertical-separator"></div>

        <div className="user-profile-nav">
          <span className="user-name">المدرب محمد الشيخ</span>
          <img src="/assets/images/profile-image.jpeg" alt="User" className="user-avatar" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;