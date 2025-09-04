"use client";
import DynamicBgSection from '../../components/DynamicBgSection';
import { useState } from 'react';
import QRCodeModal from '../../components/QRCodeModal';

export default function PersonalPage() {
  const [showQR, setShowQR] = useState(false);
  return (
    <>
      <div
        className="
          bg-[linear-gradient(rgba(130,189,252,1),rgba(179,215,253,1)),url('/sky.jpg')]
          bg-cover bg-center
          bg-blend-multiply
          
          flex items-end justify-center
          px-4 md:px-12
          pt-16 md:pt-24
        "
        style={{ minHeight: '60vh' }}
      >
  <div className="flex flex-col md:flex-row items-end justify-between w-full max-w-6xl gap-6 md:gap-0 relative">
          {/* Text Section */}
          <div className="flex-[1.3] flex flex-col justify-center items-start text-left pb-6 md:pb-0 md:mb-16 mt-8 md:mt-0 z-10 w-full md:max-w-[700px]">
            <h1
              className="font-bold mb-2 text-3xl md:text-6xl leading-tight w-full md:w-[600px] md:absolute md:top-16 md:left-0"
              style={{
                whiteSpace: 'normal',
                lineHeight: '1.1',
                maxWidth: '90vw',
                minWidth: '0',
                left: 0,
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              Bobble Your Way to<br />Better Banking.
            </h1>
            <h3
              className="text-base md:text-xl mb-2 md:mb-3 text-left"
              style={{
                whiteSpace: 'normal',
                maxWidth: '95vw',
                lineHeight: '1.15',
                marginLeft: 0,
                marginRight: 0,
                paddingLeft: 0,
                paddingRight: 0,
                fontWeight: 400,
                ...(typeof window !== 'undefined' && window.innerWidth >= 768 ? {maxWidth: '600px'} : {})
              }}
            >
              Save smarter, pay bills, get loans,
              and track your expenses—all in one app
              designed to give you total financial control and peace of mind every day.
            </h3>
            <button className="bg-black text-white px-6 py-3 rounded-full w-56 text-base font-semibold whitespace-nowrap" onClick={() => setShowQR(true)}>
              Download Bobble app
            </button>
          </div>
          <div className="flex-[0.9] flex justify-end items-end w-full md:w-[32rem] h-[22rem] md:h-[32rem] md:ml-10" style={{marginBottom: '-2.5rem'}}>
            <img
              src="/image 242.png"
              alt="Girl holding phone"
              className="w-full h-full max-w-[500px] max-h-[500px] object-contain drop-shadow-2xl rounded-3xl"
              style={{ marginBottom: 0 }}
            />
          </div>
        </div>
      </div>
      
      <section className="w-full bg-white min-h-[300px] px-4 md:px-0 -mt-2 flex flex-col items-center py-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          The one financial app that fits your daily life
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md">
            <img src="/frame 1.png" alt="Frame 1" className="w-full max-w-[320px] h-auto object-contain mb-4" />
            {/* Optionally add a caption or description here */}
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md">
            <img src="/frame 2.png" alt="Frame 2" className="w-full max-w-[320px] h-auto object-contain mb-4" />
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md">
            <img src="/frame 3.png" alt="Frame 3" className="w-full max-w-[320px] h-auto object-contain mb-4" />
          </div>
          <div className="flex flex-col items-center bg-gray-50 rounded-xl p-6 shadow-md">
            <img src="/frame 4.png" alt="Frame 4" className="w-full max-w-[320px] h-auto object-contain mb-4" />
          </div>
        </div>
      </section>
      {/* New Section: Money+Bobble=Seamless Banking */}
      <section className="w-full bg-[#f7f7f7] py-16 px-4 md:px-0 flex flex-col md:flex-row items-center justify-center mt-12">
        <div className="flex-1 flex flex-col items-start justify-center max-w-xl w-full mb-10 md:mb-0 md:mr-12">
          <h2
            className="text-2xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{
              whiteSpace: 'normal',
              wordBreak: 'break-word',
              maxWidth: '100%',
              lineHeight: 1.15,
              fontSize: 'clamp(1.25rem, 6vw, 2.25rem)',
            }}
          >
            Money + Bobble = Seamless Banking
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-snug max-w-lg">
            Spend, Save, Borrow and Track money like a pro<br />
            with the Bobble app.<br />
            Plus our debit card allows you to spend anywhere, anytime
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-base font-semibold">Open a Bobble account</button>
        </div>
        <div className="flex-1 flex justify-center items-center w-full max-w-xl">
          <img src="/Group3.png" alt="Bobble app preview" className="w-full max-w-[400px] h-auto object-contain rounded-2xl shadow-lg" />
        </div>
      </section>

  <DynamicBgSection />
  <QRCodeModal open={showQR} onClose={() => setShowQR(false)} />

      <section
        className="w-full relative flex flex-col items-center justify-center py-16 px-4 md:px-0"
        style={{ background: '#111', minHeight: '420px', overflow: 'hidden' }}
      >
        
        <img
          src="/Subtract.png"
          alt="Faint background"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            opacity: 0.13,
            width: '320px',
            maxWidth: '40vw',
            height: 'auto',
            pointerEvents: 'none',
            zIndex: 1,
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-2xl mx-auto">
          <h2
            className="text-2xl md:text-4xl font-bold text-center mb-6"
            style={{ color: '#fff', lineHeight: 1.15, fontSize: 'clamp(1.5rem, 6vw, 2.5rem)' }}
          >
            Why Juggle Apps when Bobble Does It All ?
          </h2>
          <p className="text-base md:text-lg text-center mb-8" style={{ color: '#e0e7ff', maxWidth: '600px', lineHeight: 1.5 }}>
            Send money, Save better, Request with a @tag.<br />Auto-save, cash chats and more in one app.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-2 w-full">
            {/* Play Store Button */}
            <button
              className="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-full px-6 py-4 shadow-lg"
              style={{ minWidth: 180 }}
              onClick={() => setShowQR(true)}
            >
              <span className="flex items-center justify-center w-8 h-8">
                {/* Playstore SVG */}
                <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.511252 0.327148C0.204501 0.6339 0 1.14515 0 1.75865V24.1515C0 24.765 0.204501 25.2763 0.511252 25.583L0.613503 25.6853L13.2926 13.1085V12.8017L0.511252 0.327148Z" fill="url(#paint0_linear_1_14427)"/>
                  <path d="M17.4872 17.2997L13.2949 13.1074V12.8007L17.4872 8.6084L17.5894 8.71065L22.5997 11.5737C24.0312 12.3917 24.0312 13.7209 22.5997 14.5389L17.4872 17.2997C17.5894 17.2997 17.4872 17.2997 17.4872 17.2997Z" fill="url(#paint1_linear_1_14427)"/>
                  <path d="M17.5846 17.3014L13.2901 13.0068L0.508789 25.5836C1.02004 26.0949 1.73579 26.0949 2.65605 25.6859L17.5846 17.3014Z" fill="url(#paint2_linear_1_14427)"/>
                  <path d="M17.5846 8.71187L2.65605 0.327335C1.73579 -0.183917 1.02004 -0.0816686 0.508789 0.429584L13.2901 13.0064L17.5846 8.71187Z" fill="url(#paint3_linear_1_14427)"/>
                  <defs>
                    <linearGradient id="paint0_linear_1_14427" x1="12.1477" y1="24.3775" x2="-4.85163" y2="7.17727" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#00A0FF"/>
                      <stop offset="0.0066" stopColor="#00A1FF"/>
                      <stop offset="0.2601" stopColor="#00BEFF"/>
                      <stop offset="0.5122" stopColor="#00D2FF"/>
                      <stop offset="0.7604" stopColor="#00DFFF"/>
                      <stop offset="1" stopColor="#00E3FF"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_1_14427" x1="24.4562" y1="12.954" x2="-0.344607" y2="12.954" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFE000"/>
                      <stop offset="0.4087" stopColor="#FFBD00"/>
                      <stop offset="0.7754" stopColor="#FFA500"/>
                      <stop offset="1" stopColor="#FF9C00"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_1_14427" x1="6.6824" y1="19.0807" x2="-16.3701" y2="-4.24398" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FF3A44"/>
                      <stop offset="1" stopColor="#C31162"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_1_14427" x1="-11.2462" y1="24.6516" x2="-0.952219" y2="14.236" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#32A071"/>
                      <stop offset="0.0685" stopColor="#2DA771"/>
                      <stop offset="0.4762" stopColor="#15CF74"/>
                      <stop offset="0.8009" stopColor="#06E775"/>
                      <stop offset="1" stopColor="#00F076"/>
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="flex flex-col items-start text-left text-xs font-semibold text-gray-900">
                <span>Get it on</span>
                <span style={{ fontSize: '1rem', fontWeight: 700 }}>Google Play</span>
              </span>
            </button>
            {/* App Store Button */}
            <button
              className="flex items-center gap-3 bg-white hover:bg-gray-100 rounded-full px-6 py-4 shadow-lg"
              style={{ minWidth: 180 }}
              onClick={() => setShowQR(true)}
            >
              <span className="flex items-center justify-center w-8 h-8">
                {/* Apple SVG */}
                <svg width="21" height="27" viewBox="0 0 21 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.3294 14.0732C17.3294 10.8671 19.9343 9.26411 20.1347 9.16392C18.6318 6.95975 16.2273 6.65918 15.4258 6.65918C13.422 6.4588 11.5184 7.86146 10.5165 7.86146C9.51456 7.86146 7.91153 6.65918 6.30849 6.75937C4.20451 6.75937 2.20072 8.06184 1.09863 9.96544C-1.20573 13.8728 0.497491 19.6838 2.70166 22.8899C3.80375 24.4929 5.10622 26.1962 6.70925 26.096C8.31229 25.9958 8.91343 25.0941 10.9172 25.0941C12.8208 25.0941 13.422 26.096 15.1252 26.096C16.8284 26.096 17.9305 24.4929 19.0326 22.9901C20.3351 21.1867 20.836 19.4835 20.836 19.3833C20.7358 19.1829 17.4296 17.8804 17.3294 14.0732Z" fill="#374B58"/>
                  <path d="M14.123 4.55602C15.0248 3.45393 15.6259 1.95109 15.4255 0.448242C14.123 0.548432 12.6202 1.34995 11.6183 2.35185C10.8168 3.25355 10.1155 4.85659 10.3158 6.25924C11.8187 6.45962 13.2213 5.65811 14.123 4.55602Z" fill="#374B58"/>
                </svg>
              </span>
              <span className="flex flex-col items-start text-left text-xs font-semibold text-gray-900">
                <span>Download on the</span>
                <span style={{ fontSize: '1rem', fontWeight: 700 }}>App Store</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Responsive Footer Section */}
  <footer className="w-full pt-12 pb-0 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 60%, #0a0a13 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
          {/* Left: Links */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 w-full md:w-auto">
            <div>
              <div className="font-medium mb-3 text-sm opacity-80">Explore Bobble Solutions</div>
              <div className="mb-2">Bobble Personal</div>
              <div className="mb-2">Bobble Business</div>
            </div>
            <div>
              <div className="font-medium mb-3 text-sm opacity-80">Quick Links</div>
              <div className="mb-2">About us</div>
              <div className="mb-2">Blog</div>
              <div className="mb-2">FAQs</div>
            </div>
            <div>
              <div className="font-medium mb-3 text-sm opacity-80">Contact</div>
              <div className="mb-2">+234(0)2013305696</div>
              <div className="mb-2">disputes@bobble.com</div>
            </div>
          </div>
          {/* Right: QR and Socials */}
          <div className="flex flex-col items-center md:items-end gap-4 md:gap-6 w-full md:w-auto">
            <div className="flex flex-col items-center md:items-end">
              <img src="/qrcode.png" alt="QR code" className="w-24 h-24 mb-2" />
              <div className="font-semibold text-base mb-1">Scan to download Bobble app</div>
              <div className="text-xs text-gray-200 mb-2 text-center md:text-right max-w-[220px]">Scan the QR code or click on any of the buttons below to download Bobble app.</div>
            </div>
            <div className="flex gap-4 mt-2">
              <a href="#" aria-label="Instagram"><img src="/instagram.svg" alt="Instagram" className="w-8 h-8" /></a>
              <a href="#" aria-label="Facebook"><img src="/facebook.svg" alt="Facebook" className="w-8 h-8" /></a>
              <a href="#" aria-label="X"><img src="/x.svg" alt="X" className="w-8 h-8" /></a>
              <a href="#" aria-label="LinkedIn"><img src="/linkedin.svg" alt="LinkedIn" className="w-8 h-8" /></a>
              <a href="#" aria-label="YouTube"><img src="/youtube.svg" alt="YouTube" className="w-8 h-8" /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/20 mt-10 mb-4" />
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-200 py-2">
          <div className="mb-2 md:mb-0">© 2025 Bobble. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-xs text-gray-200 pb-8">
          Bobble is a bank with its services provided by Kope kope MFB Limited and duly licensed by the Central Bank of Nigeria. Unauthorised reproduction or redistribution of copyrighted materials on this website and Bobble's digital media pages is strictly prohibited. By clicking on some of the links above, you will leave Bobble's website and be directed to a third-party website. The privacy practices of those third parties may differ from those of Bobble. We recommend you review the privacy statements of those third-party websites, as Bobble is not responsible for those third parties' privacy or security practices. Additional disclosures can be found in the resources section of our website. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC).
        </div>
        {/* Glowing Bobble logo at bottom center */}
        <div className="w-full flex justify-center items-center pb-0 pt-2">
          <img src="/bottomimage.png" alt="Bobble logo" className="w-[320px] h-auto md:w-[400px]" style={{ filter: 'drop-shadow(0 0 80px #2563eb)' }} />
        </div>
        {/* Mobile adjustments */}
        <style>{`
          @media (max-width: 600px) {
            footer .max-w-7xl {
              flex-direction: column !important;
              gap: 0 !important;
              align-items: flex-start !important;
            }
            footer .flex-col.md\:flex-row {
              flex-direction: column !important;
              gap: 0 !important;
              align-items: flex-start !important;
            }
            footer .flex-col.items-center.md\:items-end {
              align-items: flex-start !important;
              margin-top: 24px !important;
            }
            footer .flex.gap-4.mt-2 {
              justify-content: flex-start !important;
            }
            footer .w-24.h-24.mb-2 {
              margin-left: 0 !important;
            }
            footer .w-8.h-8 {
              width: 32px !important;
              height: 32px !important;
            }
            footer .w-[320px] {
              width: 220px !important;
            }
          }
        `}</style>
      </footer>

    
      
     
     
    </>
  );
}
