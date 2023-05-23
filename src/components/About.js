import React, { Component } from "react";

class About extends Component {
  render() {
    const profileUrl = process.env.PUBLIC_URL + "/images/profile.jpg";
    return (
      <section className="section" id="about">
        <h2 className="title">
          About me
          <span role="img" aria-label="Smiling Face">
            😊
          </span>
        </h2>
        <div id="profile" className="d-flex">
          <img src={profileUrl} alt="profile" />
          <div className="profile-desc">
            <h3>
              저는 프론트엔드 개발자가 되고 싶은 <strong>박민지</strong> 입니다.
            </h3>
            <div className="profile-con">
              <h4 className="profile-title1">학력</h4>
              <p>강원대학교 동물생명공학과 | 2008.02 ~ 2014.02 학사 졸업</p>
              <p>북평여자고등학교 문과계열 | 2005.03 ~ 2008.02 졸업</p>
            </div>
            <div className="profile-con">
              <h4 className="profile-title1">경력</h4>
              <p>
                더난푸드 : 매출관리, 데이터분석, 영업지원 | 2019.12 ~ 2022.08
              </p>
              <p>
                플레이스원 : 매출관리, 영업관리, 영업지원 | 2017.04 ~ 2019.04
              </p>
              <p>이삭오토리스 : 바이럴마케팅, 키워드광고 | 2015.12 ~ 2017.01</p>
              <p>
                씨큐브인터내셔널 : 바이럴마케팅, 키워드광고 | 2014.05 ~ 2015.05
              </p>
            </div>
            <div className="profile-con">
              <h4 className="profile-title1">이수과정</h4>
              <p>웹디자인(웹퍼블리셔)&프론트엔드 SW개발자 양성과정</p>
              <p>기간 : 2022.10.27 ~ 2023.04.19</p>
              <p>그린컴퓨터아트학원 종로캠퍼스</p>
            </div>
            <div className="profile-con">
              <h4 className="profile-title1">특이사항</h4>
              <p>최우수 팀원상 | 2023.04.17</p>
              <p>그린컴퓨터아트학원 종로캠퍼스</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
