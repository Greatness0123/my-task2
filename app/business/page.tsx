"use client";

import Image from 'next/image';
import styles from './business.module.css';
import { useState, useEffect } from 'react';

export default function BusinessPage() {
	// Carousel logic
	const images = [
		'/bus1.png',
		'/bus2.png',
		'/bus3.png',
		'/bus4.png',
		'/bus5.png',
	];
	const [current, setCurrent] = useState(0);
	const [windowWidth, setWindowWidth] = useState(1200);

	useEffect(() => {
		setWindowWidth(window.innerWidth);
		const handleResize = () => setWindowWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setCurrent((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearTimeout(timer);
	}, [current, images.length]);

	const showCount = windowWidth < 700 ? 1 : 3;
	const getVisibleImages = () => {
		let start = current;
		let arr = [];
		for (let i = 0; i < showCount; i++) {
			arr.push(images[(start + i) % images.length]);
		}
		return arr;
	};

	const handlePrev = () => {
		setCurrent((prev) => (prev - 1 + images.length) % images.length);
	};
	const handleNext = () => {
		setCurrent((prev) => (prev + 1) % images.length);
	};

	return (
		<main>
			 {/* First Section */}
			<section className={styles.heroSection}>
				<div className={styles.heroBg}>
					<Image src="/businessbegin.jpg" alt="Business Begin" layout="fill" objectFit="cover" priority />
				</div>
				<div className={styles.heroContentLeft}>
					<h1 className={styles.heroHeader}>The Banking Tools Your Business Needs to Grow</h1>
					<p className={styles.heroSubtext}>Payroll, payment and paperwork simplified. Let Bobble handle the money so you can focus on what matters</p>
					<button className={styles.downloadBtn}>Download Bobble Now</button>
				</div>
							</section>

			{/* Second Section */}
			<section className={styles.centralSection}>
				<h2 className={styles.centralHeader}>Built for Every Business, Big or Small</h2>
				<button className={styles.centralDownloadBtn}>
					<span className={styles.downloadText}>Tap to Download</span>
					<span className={styles.logoGroup}>
						<Image src="/apple.png" alt="Apple" width={24} height={24} />
						<span className={styles.divider}>|</span>
						<Image src="/playstore.png" alt="Google Play" width={24} height={24} />
					</span>
				</button>

				{/* Carousel Controls & Trackbar */}
				<div className={styles.carouselTopBar}>
					<div className={styles.carouselTrackbar}>
						<span className={styles.trackLong}></span>
						<span className={styles.trackDot}></span>
						<span className={styles.trackDot}></span>
					</div>
					<div className={styles.carouselArrows}>
						<button className={styles.arrowBtn} onClick={handlePrev} aria-label="Previous">
							&#8592;
						</button>
						<button className={styles.arrowBtn} onClick={handleNext} aria-label="Next">
							&#8594;
						</button>
					</div>
				</div>

				{/* Carousel Gallery */}
				<div className={styles.carouselGallery}>
					{getVisibleImages().map((img, idx) => (
						<div className={styles.carouselImageWrap} key={img + idx}>
							<Image src={img} alt={`Business ${idx + 1}`} width={300} height={180} className={styles.carouselImage} />
						</div>
					))}
				</div>
			</section>

					{/* Third Section: Business Wingman */}
					<section className={styles.wingmanSection}>
						<div className={styles.wingmanHeaderWrap}>
							<h2 className={styles.wingmanHeader}>
								Your Business's Wingman,<br />Build Smarter, Grow Faster
							</h2>
							<p className={styles.wingmanSubtext}>
								We provide loans, simplify employee benefits and automate processes so that you can focus on your business. We provide real-time finance tracking and ironclad security that puts you in control.
							</p>
						</div>
								<div className={styles.wingmanImagesWrap}>
										<Image src="/pos.png" alt="POS" width={400} height={300} className={styles.posImg} />
										<Image src="/subtract(2).png" alt="Subtract 2" width={80} height={80} className={styles.cornerImg + ' ' + styles.cornerBottomLeft} />
										<Image src="/subtract(1).png" alt="Subtract 1" width={80} height={80} className={styles.cornerImg + ' ' + styles.cornerBottomRight} />
								</div>
						</section>

						{/* FAQ Section */}
						<section id="faq" className={styles.faqSection}>
							<h2 className={styles.faqHeader}>Frequently Asked Questions</h2>
							<FAQList />
						</section>
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

        <footer className="w-full text-white pt-12 pb-0 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 60%, #0a0a13 100%)' }}>
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
        </footer>
		</main>
	);
}

// FAQ Data and Component
const faqs = [
	{
		question: "What is Bobble and how does it help my business?",
		answer:
			"Bobble is a modern banking platform designed for businesses. It simplifies payroll, payments, paperwork, and automates financial processes so you can focus on growth."
	},
	{
		question: "Is Bobble secure for handling sensitive financial data?",
		answer:
			"Yes! Bobble uses advanced encryption and security protocols to ensure your business data and transactions are protected at all times."
	},
	{
		question: "Can Bobble help with employee benefits and loans?",
		answer:
			"Absolutely. Bobble streamlines employee benefits management and provides access to business loans with real-time tracking and easy management."
	},
	{
		question: "How do I get started with Bobble?",
		answer:
			"Simply download the Bobble app from the App Store or Google Play, sign up, and follow the onboarding steps to set up your business account."
	}
];

// import { useState } from "react";

function FAQList() {
	const [openIdx, setOpenIdx] = useState<number | null>(null);
	return (
		<div className={styles.faqList}>
			{faqs.map((faq, idx) => {
				const open = openIdx === idx;
				return (
					<div className={styles.faqItem} key={faq.question}>
						<button
							className={styles.faqToggleBtn}
							aria-label={open ? "Close answer" : "Open answer"}
							onClick={() => setOpenIdx(open ? null : idx)}
						>
							<span className={styles.faqQuestion}>{faq.question}</span>
							<span className={styles.faqIcon}>{open ? "−" : "+"}</span>
						</button>
						{open && <div className={styles.faqAnswer}>{faq.answer}</div>}
					</div>
				);
			})}
		</div>
	);
}

