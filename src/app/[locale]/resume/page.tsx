'use client';

import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';

export default function ResumePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.profileContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt="Yang Tianhuan"
              width={200}
              height={200}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.name}>Yang Tianhuan (KY.East)</h1>
            <h2 className={styles.subtitle}>Founder · Storyteller · Ecosystem Architect</h2>
            <p className={styles.quote}>"I don't just manage communities — I turn them into ecosystems."</p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/kyeast" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                Twitter @die4freheit(17K+ Followers)
              </a>
              <a href="#" className={styles.socialLink}>WeChat: dieforfreiheit</a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.achievements}>
          <h2 className={styles.sectionTitle}>Key Achievements</h2>
          <div className={styles.achievementGrid}>
            <div className={styles.achievementItem}>
              <div className={styles.achievementNumber}>560K+</div>
              <div className={styles.achievementLabel}>Twitter Space Listeners</div>
            </div>
            <div className={styles.achievementItem}>
              <div className={styles.achievementNumber}>100K+</div>
              <div className={styles.achievementLabel}>Community Members</div>
            </div>
            <div className={styles.achievementItem}>
              <div className={styles.achievementNumber}>140+</div>
              <div className={styles.achievementLabel}>Investment Projects</div>
            </div>
            <div className={styles.achievementItem}>
              <div className={styles.achievementNumber}>70M+</div>
              <div className={styles.achievementLabel}>Web Series Views</div>
            </div>
          </div>
        </section>

        <section className={styles.career}>
          <h2 className={styles.sectionTitle}>Career Highlights</h2>
          
          <div className={styles.careerItem}>
            <h3 className={styles.careerTitle}>
              <span className={styles.careerNumber}>1.</span>
              Viral Growth Pioneer
              <span className={styles.period}>(2013–2016)</span>
            </h3>
            <div className={styles.careerContent}>
              <p>Led one of China's earliest viral campaigns – the "Big Trousers" stunt around the Gate to the East, which became a national meme before meme culture even had a name.</p>
              <p>In 2014, spearheaded the launch of Nanjing's first state-level makerspace, supporting China's first wave of entrepreneurs with incubation and FA services.</p>
              <p>Created and produced China's Breakup (Tronisister, 2016) – the first startup-themed web series in China. The show was acquired by Tencent and garnered over 70 million views.</p>
            </div>
          </div>

          <div className={styles.careerItem}>
            <h3 className={styles.careerTitle}>
              <span className={styles.careerNumber}>2.</span>
              Crypto OG & VC Partner
              <span className={styles.period}>(2017–2020)</span>
            </h3>
            <div className={styles.careerContent}>
              <p>Partnered at Nirvana Capital and AlphaCoin Fund, leading investments in 140+ blockchain projects including IOST, ELF, Algorand, and EDU.</p>
              <p>Entered the NFT space early, long before the hype – positioning ahead of the curve through thesis-driven conviction.</p>
            </div>
          </div>

          <div className={styles.careerItem}>
            <h3 className={styles.careerTitle}>
              <span className={styles.careerNumber}>3.</span>
              Web3 Founder & Community Architect
              <span className={styles.period}>(2021–Present)</span>
            </h3>
            <div className={styles.careerContent}>
              <p>Founded and scaled two flagship Web3 projects – punk.network and Camelot Protocol – both surpassing 100K+ users across Discord, Twitter, and Telegram.</p>
              <div className={styles.exhibitions}>
                <p>Curated two high-impact NFT exhibitions:</p>
                <ul>
                  <li>Co-hosted with Three Shadows Gallery, one of China's first independent art institutions – covered by CCTV.</li>
                  <li>Led the Cyber Emergence exhibit at Longfu Temple, Beijing – featured on BTV (Beijing TV).</li>
                </ul>
              </div>
              <p>Hosted a record-breaking Twitter Space in May 2023 with 560,000+ live listeners.</p>
              <p>Known for strategic storytelling, user-centric growth loops, and token-economic systems that spark true community momentum.</p>
            </div>
          </div>

          <div className={styles.careerItem}>
            <h3 className={styles.careerTitle}>
              <span className={styles.careerNumber}>4.</span>
              Tech-Driven Operator
            </h3>
            <div className={styles.careerContent}>
              <p>Proficient in AI productivity stacks, interactive H5 product development, and blockchain-native gamification design.</p>
              <p>Integrates AI, emotional sentiment, and viral mechanics into GTM strategy with precision.</p>
            </div>
          </div>
        </section>

        <section className={styles.mediaAndSpeaking}>
          <h2 className={styles.sectionTitle}>Media Coverage & Speaking</h2>
          <div className={styles.mediaGrid}>
            <div className={styles.mediaItem}>
              <h3>Tsinghua University Academy of Arts & Design</h3>
              <p>"Producer Ken Yang emphasizes that we should treat tomorrow not as science fiction, but as a near-future setting. Humans are now using their finite lives to build virtual worlds as bizarre as those in their hands. Smartphones have become extensions of the human body, used in communities and gaming, where social scenarios represent an irreversible data stream mirroring the real world."</p>
              <a href="https://www.ad.tsinghua.edu.cn/info/1206/25598.htm" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                Read Full Coverage →
              </a>
            </div>
            
            <div className={styles.mediaItem}>
              <h3>CGTN / CCTV 9</h3>
              <p>"It's very hard to commercialize the artworks of illustrators, designers, and short video makers. They used to be made only by business deals, customized products. Now NFT technology opens their mind and sets them free, so they can make what they want, not only products."</p>
              <a href="https://news.cgtn.com/news/2021-05-18/VHJhbnNjcmlwdDU0ODQ3/index.html" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                Read Full Coverage →
              </a>
            </div>

            <div className={styles.mediaItem}>
              <h3>Nanjing University Official News</h3>
              <p>"'Entrepreneurship is the youth manifesto of our era' - While the movie 'American Dreams in China' about three friends starting a business together was a hit, a new web series 'China's Breakup' has just been released online. Modern Express reporters discovered this is the entrepreneurial story of Yang Tianhuan, a student from Nanjing University."</p>
              <a href="https://www.nju.edu.cn/info/3191/182611.htm" target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                Read Full Coverage →
              </a>
            </div>
          </div>
        </section>

        <section className={styles.videoSection}>
          <h2 className={styles.sectionTitle}>Media Interview</h2>
          <div className={styles.videoContainer}>
            <video 
              className={styles.fullVideo} 
              controls 
              playsInline
              preload="metadata"
            >
              <source src="/videos/cctv9nft.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>

        <section className={styles.imageGallery}>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <Image
                src="/images/community-event.jpg"
                alt="Community Events"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <div className={styles.imageCaption}>
                <h3>Community Building</h3>
                <p>Organizing engaging community events and fostering meaningful connections</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/project-success.jpg"
                alt="Project Success"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <div className={styles.imageCaption}>
                <h3>Project Milestones</h3>
                <p>Achieving remarkable success through community-driven growth</p>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <Image
                src="/images/hk-devcon.jpg"
                alt="Hong Kong DevCon"
                width={400}
                height={300}
                className={styles.galleryImage}
              />
              <div className={styles.imageCaption}>
                <h3>Recognition</h3>
                <p>Second Place Winner at Hong Kong DevCon</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 