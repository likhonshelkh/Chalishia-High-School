import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
      <div className="footer-top-section">
        <div className="container">
          <div className="footer-title">
            এক নজরে গুরুত্বপূর্ণ মেন্যু
          </div>
          <div className="footer-menu-section row">
            <div className="col-sm-3">
              <ul>
                <li><a href="">কমিটি</a></li>
                <li><a href="">জনবল</a></li>
                <li><a href="">সম্পদ</a></li>
                <li><a href="">ভর্তি তথ্যাদি</a></li>
                <li><a href="">ভর্তি ফরম</a></li>
                <li><a href="">ক্লাস রুটিন</a></li>
                <li><a href="">হাজিরা</a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li><a href="">সাময়িক পরীক্ষা</a></li>
                <li><a href="">টিউটরিয়াল পরীক্ষা</a></li>
                <li><a href="">পাবলিক পরীক্ষা</a></li>
                <li><a href="">ভর্তি পরীক্ষা</a></li>
                <li><a href="">ক্লাব</a></li>
                <li><a href="">ছুটি</a></li>
                <li><a href="">শিক্ষা পঞ্জিকা</a></li>
              </ul>
            </div>
            <div className="col-sm-3">
              <ul>
                <li><a href="">ছাত্র-ছাত্রী  </a></li>
                <li><a href="">ছাত্র-ছাত্রীর পরীক্ষার রেকর্ড</a></li>
                <li><a href="">একাডেমিক পারফরম্যান্স</a></li>
                <li><a href="">বৃত্তি</a></li>
                <li><a href="">ছাত্রাবাস</a></li>
                <li><a href="">অন্যান্য</a></li>
                <li><a href="">নোটিশ বোর্ড</a></li>
              </ul>
            </div>
            <div className="power-by col-sm-3">
              <img src="/images/jb_logo_new.png" alt="Jessore Board Logo" /><br/>
              <a href="http://www.jessoreboard.gov.bd" target="_blank">মাধ্যমিক ও উচ্চ মাধ্যমিক শিক্ষা বোর্ড, যশোর</a><br/>
              প্রকল্প, অর্থায়ন, বাস্তবায়ন
            </div>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="container">
          Copyright &copy; 2025 <a href="">Chalishia High School</a> . All Rights Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;