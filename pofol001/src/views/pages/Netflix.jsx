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
                                        <label for="email" class="floating-label">이메일 주소</label>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};
