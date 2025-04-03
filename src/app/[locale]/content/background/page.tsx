'use client';

import React, { useState } from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.scss';
import PageNavigation from '@/components/navigation/PageNavigation';

interface BackgroundPageProps {
  params: {
    locale: string;
  };
}

export default function BackgroundPage({ params: { locale } }: BackgroundPageProps) {
  const t = useTranslations('background');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  const nextPage = {
    key: 'architecture',
    href: `/${locale}/content/architecture`,
    label: t('nextPage')
  };
  
  // 分页切换处理函数
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      // 滚动到页面顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  // 定义每个选项对应的响应
  const getResponseContent = (option: number) => {
    switch(option) {
      case 0:
        return (
          <div className={styles.responseCard}>
            <p>
              Traditional marketing decline is a core challenge in the modern automotive industry. Order X addresses this by <strong>directly converting marketing budgets into community incentives</strong>, 
              creating a self-reinforcing cycle of engagement. Our system doesn't buy attention, but rather <strong>rewards genuine participation</strong>, 
              transforming passive advertising audiences into active brand advocates.
            </p>
          </div>
        );
      case 1:
        return (
          <div className={styles.responseCard}>
            <p>
              In an era of fragmented trust, Order X provides a <strong>blockchain-based transparency mechanism</strong> to rebuild trust between consumers and brands. 
              All interactions and contributions are publicly recorded, allowing order participants to see their "participation trajectory" 
              and receive <strong>real, verifiable value</strong> that matches their contributions.
            </p>
          </div>
        );
      case 2:
        return (
          <div className={styles.responseCard}>
            <p>
              Order X was designed specifically to foster authentic community engagement. By <strong>recording, recognizing, and rewarding</strong> community behaviors, 
              we've created an entirely new economic model for participation. Participants aren't just customers; they're <strong>co-creators</strong> whose 
              actions directly shape the product launch process and are rewarded accordingly.
            </p>
          </div>
        );
      case 3:
        return (
          <div className={styles.responseCard}>
            <p>
              Order X addresses this key challenge by creating a <strong>clear path from online enthusiasm to actual pre-orders</strong>. 
              Our system converts online participation into actual ordering privileges, transforming social media positivity into 
              <strong>quantified contribution metrics</strong> that ultimately translate into ordering rights.
            </p>
          </div>
        );
      case 4:
        return (
          <div className={styles.responseCard}>
            <p>
              In the competitive EV market, Order X provides Faraday Future with <strong>unique brand differentiation</strong>. 
              By creating a participation-based elite community, we not only cultivate loyalty but establish a 
              <strong>self-sustaining network of brand advocates</strong> that sets the foundation for long-term success.
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <ContentLayout 
      locale={locale}
      title={t('title')}
      subtitle={t('subtitle')}
      nextPage={nextPage}
    >
      {/* 页面分页控制器 */}
      <div className={styles.paginationControls}>
        <div className={styles.pageInfo}>
          <span>{currentPage}</span> / <span>{totalPages}</span>
        </div>
        <div className={styles.pageButtons}>
          <button 
            onClick={() => goToPage(currentPage - 1)} 
            className={styles.pageButton}
            disabled={currentPage === 1}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={() => goToPage(currentPage + 1)}
            className={styles.pageButton}
            disabled={currentPage === totalPages}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      
      <AnimatePresence mode="wait">
        {currentPage === 1 ? (
          <motion.div 
            key="page1"
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection>
              <motion.div 
                className={styles.quote}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <blockquote>
                  {t('mainQuote')}
                </blockquote>
              </motion.div>
            </ContentSection>
            
            <ContentSection title={t('industryLandscape')}>
              <p>
                The automotive industry is undergoing a paradigm shift. Within this transformation, traditional marketing channels and sales models face unprecedented challenges:
              </p>
              
              <div className={styles.challengeCard}>
                <h3 className={styles.challengeTitle}>
                  <span className={styles.icon}>📉</span>
                  {t('decliningMarketing')}
                </h3>
                <ul>
                  <li>Digital ad coverage is increasing, yet conversion rates continue to decline</li>
                  <li>Consumer trust in traditional advertising content has reached historic lows</li>
                  <li>Cost per lead acquisition has risen by over 45% year-over-year</li>
                  <li>Product launch events struggle to maintain sustained attention, with "trending half-life" shrinking to 72 hours</li>
                </ul>
                <div className={styles.challengeQuote}>
                  "In an age of information overload, attention can no longer be bought—only earned."
                </div>
              </div>
              
              <div className={styles.challengeCard}>
                <h3 className={styles.challengeTitle}>
                  <span className={styles.icon}>🧩</span>
                  {t('fragmentationTrust')}
                </h3>
                <ul>
                  <li>During the car-buying decision process, over 78% of consumers trust user reviews more than official promotions</li>
                  <li>Average trust ratings for automotive brands have declined by 23%</li>
                  <li>The influence of social media and forums in car purchasing decisions has grown by over 60% year-over-year</li>
                  <li>The traditional dealership model is considered "outdated and opaque" (consumer research data)</li>
                </ul>
              </div>
              
              <div className={styles.challengeCard}>
                <h3 className={styles.challengeTitle}>
                  <span className={styles.icon}>🔄</span>
                  {t('riseCommunity')}
                </h3>
                <ul>
                  <li>Platforms like Reddit and Twitter have become critical battlegrounds for product reputation</li>
                  <li>Cases like GameStop demonstrate the power of community-driven market phenomena</li>
                  <li>Brand "believers" have greater influence on product diffusion than traditional KOLs</li>
                  <li>User-generated content (UGC) spreads 4.5 times faster than brand content</li>
                </ul>
              </div>
              
              <div className={styles.continuePrompt}>
                <button onClick={() => goToPage(2)} className={styles.continueButton}>
                  <span>Continue Reading</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        ) : (
          <motion.div 
            key="page2"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title={t('challengesFF')}>
              <p>
                Faraday Future faces unique challenges against this backdrop:
              </p>
              
              <div className={styles.ffChallenges}>
                <div className={styles.ffChallenge}>
                  <h3>
                    <span className={styles.icon}>🏆</span>
                    {t('ambitiousGoals')}
                  </h3>
                  <ul>
                    <li>The FX model aims to break the 100,000 order milestone</li>
                    <li>Building brand loyalty comparable to Tesla's early community effect</li>
                    <li>Standing out in a fiercely competitive electric vehicle market</li>
                    <li>Regaining investor and market confidence</li>
                  </ul>
                </div>
                
                <div className={styles.ffChallenge}>
                  <h3>
                    <span className={styles.icon}>🧗</span>
                    {t('marketPosition')}
                  </h3>
                  <ul>
                    <li>The community's emotional connection to the brand is highly volatile</li>
                    <li>Traditional marketing approaches yield diminishing returns for electric vehicle innovators</li>
                    <li>The need to translate technological innovation into consumer demand</li>
                    <li>Converting online enthusiasm into actual vehicle orders</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.highlightQuote}>
                "We don't just need customers. We need co-creators."
              </div>
            </ContentSection>
            
            <ContentSection title={t('opportunity')}>
              <p>
                These challenges create a unique opportunity for a system that:
              </p>
              
              <div className={styles.opportunityGrid}>
                <div className={styles.opportunity}>
                  <h3>
                    <span className={styles.icon}>🌱</span>
                    {t('authenticEngagement')}
                  </h3>
                  <ul>
                    <li>Rewards genuine participation rather than passive consumption</li>
                    <li>Creates a self-reinforcing cycle of engagement and reward</li>
                    <li>Builds transparent relationships between the brand and its community</li>
                    <li>Establishes a foundation of trust through verifiable actions</li>
                  </ul>
                </div>
                
                <div className={styles.opportunity}>
                  <h3>
                    <span className={styles.icon}>🔑</span>
                    {t('conversionPathways')}
                  </h3>
                  <ul>
                    <li>Transforms online engagement into tangible ordering privileges</li>
                    <li>Creates natural scarcity through merit-based access</li>
                    <li>Drives word-of-mouth through exclusive participation mechanisms</li>
                    <li>Establishes clear paths from community member to vehicle owner</li>
                  </ul>
                </div>
                
                <div className={styles.opportunity}>
                  <h3>
                    <span className={styles.icon}>📊</span>
                    {t('dataDecision')}
                  </h3>
                  <ul>
                    <li>Provides real-time insights into community sentiment and behavior</li>
                    <li>Creates visible feedback loops for product teams</li>
                    <li>Identifies genuine brand advocates with precision</li>
                    <li>Measures engagement intensity across multiple platforms</li>
                  </ul>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title={t('solution')}>
              <p>
                In response to these challenges, Order X creates a revolution in how vehicles are ordered, not by reinventing the wheel, but by reinventing the road that leads to it.
              </p>
              
              <p>
                Order X is built upon three fundamental principles:
              </p>
              
              <div className={styles.solutionGrid}>
                <div className={styles.solution}>
                  <div className={styles.solutionNumber}>1</div>
                  <h3>{t('transparency')}</h3>
                  <p>Using blockchain to create immutable records of participation, not for speculation, but for establishing trust.</p>
                </div>
                
                <div className={styles.solution}>
                  <div className={styles.solutionNumber}>2</div>
                  <h3>{t('participation')}</h3>
                  <p>Replacing traditional marketing expenditure with direct rewards for community engagement.</p>
                </div>
                
                <div className={styles.solution}>
                  <div className={styles.solutionNumber}>3</div>
                  <h3>{t('meritAccess')}</h3>
                  <p>Creating a system where ordering privileges are earned through genuine involvement, not just purchasing power.</p>
                </div>
              </div>
              
              <div className={styles.highlightQuote}>
                "The future of mobility isn't just about how we move. It's about how we move together."
              </div>
              
              <div className={styles.interactiveSection}>
                <div className={styles.interactiveQuestion}>
                  <strong>Which challenge resonates most with your experience?</strong>
                </div>
                
                <div className={styles.interactiveOptions}>
                  <div 
                    className={`${styles.option} ${selectedOption === 0 ? styles.selected : ''}`}
                    onClick={() => setSelectedOption(0)}
                  >
                    <div className={styles.checkbox}>
                      {selectedOption === 0 && <div className={styles.checkmark}></div>}
                    </div>
                    <span>Declining effectiveness of traditional marketing</span>
                  </div>
                  
                  <div 
                    className={`${styles.option} ${selectedOption === 1 ? styles.selected : ''}`}
                    onClick={() => setSelectedOption(1)}
                  >
                    <div className={styles.checkbox}>
                      {selectedOption === 1 && <div className={styles.checkmark}></div>}
                    </div>
                    <span>Fragmentation of consumer trust</span>
                  </div>
                  
                  <div 
                    className={`${styles.option} ${selectedOption === 2 ? styles.selected : ''}`}
                    onClick={() => setSelectedOption(2)}
                  >
                    <div className={styles.checkbox}>
                      {selectedOption === 2 && <div className={styles.checkmark}></div>}
                    </div>
                    <span>Need for authentic community engagement</span>
                  </div>
                  
                  <div 
                    className={`${styles.option} ${selectedOption === 3 ? styles.selected : ''}`}
                    onClick={() => setSelectedOption(3)}
                  >
                    <div className={styles.checkbox}>
                      {selectedOption === 3 && <div className={styles.checkmark}></div>}
                    </div>
                    <span>Converting online enthusiasm to sales</span>
                  </div>
                  
                  <div 
                    className={`${styles.option} ${selectedOption === 4 ? styles.selected : ''}`}
                    onClick={() => setSelectedOption(4)}
                  >
                    <div className={styles.checkbox}>
                      {selectedOption === 4 && <div className={styles.checkmark}></div>}
                    </div>
                    <span>Building brand loyalty in a competitive market</span>
                  </div>
                </div>
                
                {selectedOption !== null && (
                  <motion.div 
                    className={styles.responseCard}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    {getResponseContent(selectedOption)}
                  </motion.div>
                )}
                
                <div className={styles.promptNote}>
                  <em>Select an option to learn how Order X specifically addresses these challenges</em>
                </div>
              </div>
            </ContentSection>
            
            <div className={styles.paginationButtons}>
              <button onClick={() => goToPage(1)} className={styles.navButton}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Previous Page</span>
              </button>
            </div>
            
            <div className={styles.copyright}>
              © 2025 Faraday Future | Order X Protocol v1.0
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <PageNavigation locale={locale} />
    </ContentLayout>
  );
} 