import React from 'react';
import Header from '../components/Header';
import DateTimeBar from '../components/DateTimeBar';
import Navbar from '../components/Navbar';
import NewsTicker from '../components/NewsTicker';
import Footer from '../components/Footer';

const LeftSidebar: React.FC = () => (
  <div className="body-left">
    <div className="side-menu">
      <a href="//www.jessoreboard.gov.bd/resultjbh25/index.php" className="service"><div className="gra"><img src="/images/result.png" alt=""/><span>HSC Result-2025</span></div></a>
      <a href="//student.jessoreboard.gov.bd" className="service"><div className="gra"><img src="/images/student_management.png" alt=""/><span>Student Management</span></div></a>
      <a href="//jessoreboard.gov.bd/epd_online" className="service"><div className="gra"><img src="/images/head.png" alt=""/><span>Head/Examiner</span></div></a>
      <a href="//otp.jessoreboard.gov.bd" className="service"><div className="gra"><img src="/images/otp.png" alt=""/><span>OTP</span></div></a>
    </div>
  </div>
);

const RightContent: React.FC = () => (
  <div className="body-right">
    <div className="home-menu-section">
      <a href="//chalishiahighschool.jessoreboard.gov.bd/index.php/website/attendance" className="home-menu"><div className="gra"><img src="/images/1348319696_chart_bar.png" alt="উপস্থিতি"/><span>উপস্থিতি</span></div></a>
      <a href="" className="home-menu"><div className="gra"><img src="/images/date.png" alt="একাডেমিক ক্যালেন্ডার"/><span>একাডেমিক ক্যালেন্ডার</span></div></a>
      <a href="" className="home-menu"><div className="gra"><img src="/images/1348322922_bookcase.png" alt="পাঠ পরিকল্পনা"/><span>পাঠ পরিকল্পনা</span></div></a>
      <a href="" className="home-menu"><div className="gra"><img src="/images/1344455035_rich_text_format.png" alt="ফলাফল"/><span>ফলাফল</span></div></a>
    </div>
  </div>
);


const HomePage: React.FC = () => {
  return (
    <main>
      <div className="main">
        <Header />
        <DateTimeBar />
        <Navbar />
        <NewsTicker />
        <section className="body-section">
          <LeftSidebar />
          <RightContent />
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default HomePage;