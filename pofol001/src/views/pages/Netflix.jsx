import React, { useState } from 'react';
import LanguageSelect from "../components/Selects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import VideoPlayer from '../components/VideoPlay';
export const Netflix = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('korean');

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
    };

    return (
        <>
            <div className="NetFlixWrap">
                <div className="NF-Img">
                    <div className="NF-Background">
                        <div className="NF-Header">
                            <img
                                className="NF-Title"

                                src=" https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                                alt="Netflix Background"
                            />
                            <div>

                                <LanguageSelect onSelectLanguage={handleLanguageChange} />
                                <button className='NF-Login'>{selectedLanguage === 'korean' ? '로그인' : 'Sign in'}</button>

                            </div>
                        </div>

                        <img
                            className="NF-BackgroundImage"
                            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/7504f0c5-3a9f-483b-9d49-6ac5b21fe615/KR-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                            alt="Netflix Background"
                        />

                        <div className='NF-Shade'>
                            <div className='NF-Inner'>

                                <div className='NF-SubInner1'>
                                    {selectedLanguage === 'korean' ? '영화, 시리즈 등을 무제한으로' : 'Unlimited movies, TV shows, and more'}
                                </div>

                                <div className='NF-SubInner'>
                                    {selectedLanguage === 'korean' ? ' 어디서나 자유롭게 시청하세요. 해지는 언제든 가능합니다.' : 'Watch anywhere, Cancel anytime.'}
                                </div>

                                <div className='NF-SubInner'>
                                    {selectedLanguage === 'korean' ? '시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.' : 'Ready to watch? Enter your email to create or restart your membership.'}

                                    <div class="input-wrapper">
                                        <input type="text" id="email" className="Email-Addr" placeholder=" " required />
                                        <label for="email" class="floating-label">
                                            {selectedLanguage === 'korean' ? '이메일 주소' : 'Email address'}
                                        </label>
                                    </div>

                                </div>
                                {/* 추후 이메일 주소와 연동 */}
                                <button className='NF-Start'>
                                {selectedLanguage === 'korean' ? '시작하기' : 'Get Started'}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='NF-DefWrap'>
                        <div className='NF-About-Wrap'>
                            <div className='NF-About'>
                                <span>
                                {selectedLanguage === 'korean' ? '5,500원이면 만날 수 있는 넷플릭스.' 
                                : 
                                'The Netflix you love for just KRW5,500.'}
                                </span>
                                <span>
                                {selectedLanguage === 'korean' ? '광고형 스탠다드 멤버십에 가입하세요.' 
                                :
                                 'Get the Standard with ads plan.'}
                                </span>
                                <span>  
                                      {selectedLanguage === 'korean' ? '자세히 알아보기' 
                                      :
                                       'Learn More'}
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='NF-DefWrap'>
                        <h2>
                        {selectedLanguage === 'korean' ? 'TV로 즐기세요' 
                                      :
                                       'Enjoy on your TV'}
                        </h2>
                               
                        <span>
                           
                            {selectedLanguage === 'korean' ? ' 스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.' 
                                      :
                                       'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'}
                            </span>
                        <div className='TV-Wrap'>

                            <img
                                alt=""
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                                data-uia="nmhp-card-animation-asset-image"
                                class="NF-TV-Img" />
                            <div className='NF-TV-Container'>
                                <VideoPlayer src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" />
                            </div>
                        </div>

                    </div>
                    <div className='NF-DefWrap'>
                        <h2>
                        {selectedLanguage === 'korean' ? '어디서나 자유롭게 시청하세요' 
                                      :
                                       'Watch everywhere.'}
                        </h2>
                        <span>
                        {selectedLanguage === 'korean' ? '각종 영화와 시리즈를 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요.' 
                                      :
                                       'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.'}
                        </span>
                        <div className='TV-Wrap'>

                            <img
                                alt=""
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                                data-uia="nmhp-card-animation-asset-image"
                                class="NF-TV-Img" />
                            <div className='NF-TV-Container'>
                                <VideoPlayer src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" />

                            </div>
                        </div>
                    </div>

                    <div className='NF-DefWrap'>
                        <h2>
                        {selectedLanguage === 'korean' ? '어린이 전용 프로필을 만들어 보세요' 
                                      :
                                       'Create profiles for kids'}
                        </h2>
                        <span>
                            
                            {selectedLanguage === 'korean' ? '자기만의 공간에서 좋아하는 캐릭터와 즐기는 신나는 모험. 자녀에게 이 특별한 경험을 선물하세요. 넷플릭스 회원이라면 무료입니다.' 
                                      :
                                       'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'}
                            </span>
                        
                        <div className='TV-Wrap'>

                            <img
                                alt=""
                                src="https://occ-0-3077-988.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdl4VeWgVycbbzJBV1KbIpMScxU_I4h6uTvNRpFab-65jsTTqI0V-g-4Jq4CLaIVqx-wbKAwA_Ee8KhZyTb0SFJ5tK2mifI-GYEB.png?r=15b"
                                data-uia="nmhp-card-animation-asset-image"
                                class="NF-TV-Img" />

                        </div>

                    </div>
                    <div className='NF-DefWrap'>
                        <h2>
                        {selectedLanguage === 'korean' ? '즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요' 
                                      :
                                       'Download your shows to watch offline'}
                        </h2>
                        <span>
                        {selectedLanguage === 'korean' ? '광고 없는 멤버십에서만 이용 가능합니다.' 
                                      :
                                       'Only available on ad-free plans.'}
                        </span>
                        <div className='TV-Wrap'>

                            <img
                                alt=""
                                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                                data-uia="nmhp-card-animation-asset-image"
                                class="NF-TV-Img" />
                            <div className='NF-TV-Container'>
                                <div>
                                    <img
                                        alt=""
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                                        data-uia="nmhp-card-animation-asset-image"
                                    />
                                </div>
                                <div>
                                    <div>
                                    {selectedLanguage === 'korean' ? '기묘한 이야기' 
                                      :
                                       'Stranger Things'}
                                    </div>
                                    <div>
                                    {selectedLanguage === 'korean' ? '저장 중...' 
                                      :
                                       'Downloading...'}
                                    </div>

                                </div>
                                <div>
                                    <img
                                        alt=""
                                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                                        data-uia="nmhp-card-animation-asset-image"
                                    />

                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};
