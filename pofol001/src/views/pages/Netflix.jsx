import React, { useState } from 'react';
import LanguageSelect from "../components/Selects"
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
                            <span className='NF-Title'>넷플릭스</span>
                            <LanguageSelect onSelectLanguage={handleLanguageChange} />
                            <button className='NF-Login'>{selectedLanguage === 'korean' ? '로그인' : 'Sign in'}</button>
                        </div>
                        <img
                            className="NF-BackgroundImage"
                            src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/7504f0c5-3a9f-483b-9d49-6ac5b21fe615/KR-en-20230814-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                            alt="Netflix Background"
                        />
       
                        <div className='NF-Shade'>
                            <div className='NF-Inner'>
                               
                                <div className='NF-SubInner1'> 대한민국 최대 히트작이 기다립니다! 월 5,500원으로 시작하세요</div>
                                <div className='NF-SubInner'>지금 바로 가입하세요. 해지는 언제든 사능합니다.</div>
                                <div className='NF-SubInner'>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
