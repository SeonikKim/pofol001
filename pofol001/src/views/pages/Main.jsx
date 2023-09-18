import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import BarChart from "../components/BarChart";
import { Link } from "react-router-dom";
export const Main = () => {
    return (
        <>
            <div className="MainWrap">

                <h1 className="Title">김선익의 포트폴리오</h1>

                <div className="Items_Wrap">
                    <div className="Item">
                        <span className="ItemTitle">자기소개</span>
                        <span className="ItemContents">
                            "C언어 10개월, 프론트앤드 2개월 경험. 사용자 중심의 웹 환경을 만들기 위한 열정과 전문성을 가진 개발자입니다. 기술적 도전을 추구하며 팀과 함께 성장하고자 합니다."
                        </span>

                    </div>
                    <div className="Item">
                        <span className="ItemTitle">자격증</span>
                        <span className="ItemContents">
                            전산응용기계제도 기능사<br />
                            컴퓨터활용능력 2급<br />
                            워드프로세서<br />
                            ITQ<br />
                            PCT<br />
                        </span>
                    </div>

                    <div className="Item">
                        <span className="ItemTitle">개발 경험</span>
                        <span className="ItemContents">
                            C언어<br />
                            CCTV를 활용한 실시간 객체 탐지<br />
                            카리프트 알고리즘<br />
                            <br />React<br />
                            사내 ERP서비스
                        </span>
                    </div>
                    {/* <div className="Item">
                        <span className="ItemTitle">개발 철학</span>
                        <span className="ItemContents">
                            1. 사용자 중심<br />
                            <br />2. 사용자의 편리함<br />
                            <br />3. 사용자의 직관성<br />
                        </span>
                    </div> */}
                    <div className="Item">
                        <span className="ItemTitle">My Skills</span>
                        <BarChart />
                        <span className="ItemContents">
                        </span>
                    </div>
                    <div className="Item WithBtn">
                        <span className="ItemTitle">넷플릭스 구현</span>
                        <span className="ItemContents"></span>
                        <Link to="/netflix" className="defBtn">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>

                    </div>
                    <div className="Item WithBtn">
                        <span className="ItemTitle">웹접근성을 이용한 페이지</span>
                        <span className="ItemContents"></span>
                        <Link to="/carpage" className="defBtn">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>

                    <div className="Item WithBtn">
                        <span className="ItemTitle">Dash Board(반응형)</span>
                        <span className="ItemContents"></span>
                             <Link to="/dashboard" className="defBtn">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>

                    <div className="Item WithBtn">
                        <span className="ItemTitle">원소 주기율표</span>
                        <span className="ItemContents"></span>
                             <Link to="/elements" className="defBtn">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>

                    <div className="Item WithBtn">
                        <span className="ItemTitle">웹 게임</span>
                        <span className="ItemContents"></span>
                             <Link to="/webgame" className="defBtn">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>

                    <div className="Item WithBtn">
                        <span className="ItemTitle">날씨 정보 페이지</span>
                        <span className="ItemContents"></span>
                             <Link to="/weather" className="defBtn">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </Link>
                    </div>

                </div>


                <h3 className="thx">감사합니다 떙큐</h3>
            </div>
        </>
    )
}