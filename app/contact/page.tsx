"use client";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import styles from './contact.module.css';

const topics = [
	'Technical Support',
	'Account Issues',
	'Business Solutions',
	'Product Feedback',
	'Partnerships',
	'General Inquiry'
];

const countries = [
	{ code: '+234', flag: '🇳🇬', name: 'Nigeria' },
	{ code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
	{ code: '+1', flag: '🇺🇸', name: 'United States' },
	{ code: '+91', flag: '🇮🇳', name: 'India' },
	{ code: '+81', flag: '🇯🇵', name: 'Japan' },
	{ code: '+49', flag: '🇩🇪', name: 'Germany' },
	{ code: '+33', flag: '🇫🇷', name: 'France' },
	{ code: '+39', flag: '🇮🇹', name: 'Italy' },
	{ code: '+61', flag: '🇦🇺', name: 'Australia' },
	{ code: '+86', flag: '🇨🇳', name: 'China' },
	{ code: '+7', flag: '🇷🇺', name: 'Russia' },
	{ code: '+34', flag: '🇪🇸', name: 'Spain' },
	{ code: '+55', flag: '🇧🇷', name: 'Brazil' },
	{ code: '+27', flag: '🇿🇦', name: 'South Africa' },
	{ code: '+82', flag: '🇰🇷', name: 'South Korea' },
	{ code: '+62', flag: '🇮🇩', name: 'Indonesia' },
	{ code: '+90', flag: '🇹🇷', name: 'Turkey' },
	{ code: '+966', flag: '🇸🇦', name: 'Saudi Arabia' },
	{ code: '+971', flag: '🇦🇪', name: 'UAE' },
	{ code: '+358', flag: '🇫🇮', name: 'Finland' },
];

export default function ContactPage() {
	return (
		<main className={styles.mainWrap}>
			{/* Section 1: Support Info */}
			<section className={styles.supportSection}>
				<h1 className={styles.supportHeader}>Hello, how can we help?</h1>
				<p className={styles.supportSubtext}>
					Get the technical support you need to run your business<br />with Bobble anytime, anywhere
				</p>
				<div className={styles.infoCardsWrap}>
					<div className={styles.infoCard}>
						<div className={styles.iconWrap}>
							<FaMapMarkerAlt color="#fff" size={24} />
						</div>
						<div>
							<div className={styles.infoTitle}>Our business address</div>
							<div className={styles.infoDetail}>39, Ade Odeku Street, Victoria Island, Lagos State, Nigeria</div>
						</div>
					</div>
					<div className={styles.infoCard}>
						<div className={styles.iconWrap}>
							<FaEnvelope color="#fff" size={24} />
						</div>
						<div>
							<div className={styles.infoTitle}>Send email for support</div>
							<div className={styles.infoDetail}>disputes@bobble.com</div>
						</div>
					</div>
					<div className={styles.infoCard}>
						<div className={styles.iconWrap}>
							<FaPhoneAlt color="#fff" size={24} />
						</div>
						<div>
							<div className={styles.infoTitle}>Contact Info</div>
							<div className={styles.infoDetail}>09090000448</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 2: Contact Form */}
			<section className={styles.formSection}>
				   {/* Decorative corners */}
				   <img src="/Subtract(1).png" alt="corner" className={styles.cornerTR} />
				   <img src="/Subtract(2).png" alt="corner" className={styles.cornerBL} />
				<div className={styles.formWrap}>
					<form className={styles.contactForm}>
						<h2 className={styles.formHeader}>Fill in your enquiries</h2>
						<p className={styles.formSubtext}>Send us an email using the contact form below</p>
						<input className={styles.inputField} type="text" placeholder="Name" />
						<input className={styles.inputField} type="email" placeholder="Email" />
						<div className={styles.phoneRow}>
							<select
								id="countryCode"
								className={styles.countrySelect}
								defaultValue="+234"
								title="Country code"
							>
								{countries.map(c => (
									<option key={c.code} value={c.code}>{c.flag} {c.code} {c.name}</option>
								))}
							</select>
							<input className={styles.inputField} type="tel" placeholder="Phone number" />
						</div>
						<select
							id="topicSelect"
							className={styles.inputField}
							defaultValue=""
							required
							title="Select topic"
						>
							<option value="" disabled>Select topic</option>
							{topics.map(topic => (
								<option key={topic} value={topic}>{topic}</option>
							))}
						</select>
						<textarea className={styles.textArea} placeholder="Type your message...." rows={5} />
						<div className={styles.checkboxRow}>
							<input type="checkbox" id="privacy" className={styles.checkbox} />
							<label htmlFor="privacy" className={styles.checkboxLabel}>
								You agree that we may process your personal information in accordance with our <a href="/privacy" className={styles.privacyLink}>privacy policy</a>
							</label>
						</div>
						<button type="submit" className={styles.submitBtn}>Submit Message</button>
					</form>
				</div>
			</section>
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
		</main>
	);
}
