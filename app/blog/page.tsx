"use client";
import styles from './blog.module.css';
import Image from 'next/image';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import { useState } from 'react';

const pills = [
  'All',
  'Bobble stories',
  'Grow with Bobble',
  'Veedez guides',
  'Product updates',
  'Brand & people',
];

const blogData = [
  { img: '/blog1.png', title: 'Tired of Manual Bookkeeping', subtitle: 'Entrepreneurship in Nigeria can be difficult, but someone starts a business every other day....', date: 'November 20, 2023', tag: 'Grow With Bobble' },
  { img: '/blog2.jpg', title: 'Automate Your Finances', subtitle: 'Discover how automation can help your business thrive in a digital world.', date: 'November 21, 2023', tag: 'Veedez guides' },
  { img: '/blog3.jpg', title: 'Bobble Success Stories', subtitle: 'Real stories from entrepreneurs who scaled with Bobble.', date: 'November 22, 2023', tag: 'Bobble stories' },
  { img: '/blog4.jpg', title: 'Productivity Hacks', subtitle: 'Tips to boost your daily productivity as a business owner.', date: 'November 23, 2023', tag: 'Product updates' },
  { img: '/blog5.png', title: 'Meet the Team', subtitle: 'Get to know the people behind Bobble.', date: 'November 24, 2023', tag: 'Brand & people' },
  { img: '/blog1.png', title: 'Bookkeeping Simplified', subtitle: 'Simple steps to keep your business finances in check.', date: 'November 25, 2023', tag: 'Grow With Bobble' },
  { img: '/blog2.jpg', title: 'Scaling Up', subtitle: 'How to scale your business with the right tools.', date: 'November 26, 2023', tag: 'Veedez guides' },
  { img: '/blog3.jpg', title: 'Bobble for Startups', subtitle: 'Why startups choose Bobble for their financial needs.', date: 'November 27, 2023', tag: 'Bobble stories' },
  { img: '/blog4.jpg', title: 'Brand Culture', subtitle: 'Building a strong brand culture at Bobble.', date: 'November 28, 2023', tag: 'Brand & people' },
];

export default function BlogPage() {
  const [selectedPill, setSelectedPill] = useState(0);

  return (
    <main className={styles.mainWrap}>
      <section className={styles.heroSection}>
        <h1 className={styles.blogTitle}>BLOG</h1>
        <div className={styles.cardsRow}>
          <div className={styles.blogCard}>
            <div className={styles.imageWrap}>
              <Image src="/blog1.png" alt="Blog 1" fill className={styles.blogImage} />
            </div>
            <div className={styles.blogCardContent}>
              <div className={styles.coloredText}>Grow With Bobble</div>
              <h2 className={styles.cardHeading}>Tired of Manual Bookkeeping</h2>
              <div className={styles.cardSubtext}>
                Entrepreneurship in Nigeria can be difficult, but someone starts a business every other day....
              </div>
              <div className={styles.featuredRow}>
                <span className={styles.featured}>Featured</span>
                <span className={styles.date}>| November 20, 2023</span>
              </div>
              <a className={styles.readMore} href="#">
                Read More <FaArrowRight className={styles.arrowIcon} />
              </a>
            </div>
          </div>
          <div className={styles.blogCard}>
            <div className={styles.imageWrap}>
              <Image src="/blog1.png" alt="Blog 2" fill className={styles.blogImage} />
            </div>
            <div className={styles.blogCardContent}>
              <div className={styles.coloredText}>Grow With Bobble</div>
              <h2 className={styles.cardHeading}>Tired of Manual Bookkeeping</h2>
              <div className={styles.cardSubtext}>
                Entrepreneurship in Nigeria can be difficult, but someone starts a business every other day....
              </div>
              <div className={styles.featuredRow}>
                <span className={styles.featured}>Featured</span>
                <span className={styles.date}>| November 20, 2023</span>
              </div>
              <a className={styles.readMore} href="#">
                Read More <FaArrowRight className={styles.arrowIcon} />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Navigation Section */}
      <section>
        <div className={styles.sectionNav}>
          <div className={styles.sectionNavHeader}>All Blog</div>
          <div className={styles.sectionNavSearch}>
            <input className={styles.searchInput} placeholder="Search blog" />
          </div>
        </div>
        <div className={styles.pillNav}>
          {pills.map((pill, idx) => (
            <button
              key={pill}
              className={`${styles.pill} ${selectedPill === idx ? styles.selected : ''}`}
              onClick={() => setSelectedPill(idx)}
              type="button"
            >
              {pill}
            </button>
          ))}
        </div>
        <div className={styles.cardsRow}>
          {blogData.slice(0, 9).map((blog, i) => (
            <div className={styles.blogCard} key={i}>
              <div className={styles.imageWrap}>
                <Image src={blog.img} alt={blog.title} fill className={styles.blogImage} />
              </div>
              <div className={styles.blogCardContent}>
                <div className={styles.coloredText}>{blog.tag}</div>
                <h2 className={styles.cardHeading}>{blog.title}</h2>
                <div className={styles.cardSubtext}>{blog.subtitle}</div>
                <div className={styles.featuredRow}>
                  <span className={styles.featured}>Featured</span>
                  <span className={styles.date}>| {blog.date}</span>
                </div>
                <a className={styles.readMore} href="#">
                  Read More <FaArrowRight className={styles.arrowIcon} />
                </a>
              </div>
            </div>
          ))}
        </div>
        <button className={styles.loadMore} type="button">
          Load More <FaChevronDown className={styles.downArrow} />
        </button>
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
