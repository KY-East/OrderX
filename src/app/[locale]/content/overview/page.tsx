'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { ContentLayout, ContentSection } from '@/components';
import styles from './page.module.scss';
import PageNavigation from '@/components/navigation/PageNavigation';
import { useParams } from 'next/navigation';

interface OverviewPageProps {
  params: {
    locale: string;
  };
}

export default function OverviewPage({ params: { locale } }: OverviewPageProps) {
  const t = useTranslations('overview');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const params = useParams();
  
  // 定义下一页导航
  const nextPage = {
    key: 'background',
    href: `/${locale}/content/background`,
    label: 'Project Background & Challenges'
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
              在这些情况下，Order X 通过<strong>改变预购流程的经济激励</strong>来解决问题。 
              传统模式下，车企收取大量预付款但提供很少回报，而 Order X 为预订者提供了
              <strong>代币化权益和明确的奖励机制</strong>，使其成为一种投资而非仅是等待。
            </p>
          </div>
        );
      case 1:
        return (
          <div className={styles.responseCard}>
            <p>
              Order X 理解您的观点，但我们相信还有<strong>巨大的改进空间</strong>。通过引入
              <strong>区块链技术和代币化预订机制</strong>，我们提供了更透明、更公平的系统，
              同时保留了一些传统模式的基础元素，但赋予其更多价值和更好的用户体验。
            </p>
          </div>
        );
      case 2:
        return (
          <div className={styles.responseCard}>
            <p>
              这正是 Order X 的存在意义！我们彻底重新设计了预订模式，使用<strong>区块链技术创建了
              一个完全透明的生态系统</strong>。通过代币化预订权益，我们为持有者提供了<strong>
              真正的价值、经济激励和社区参与</strong>，同时解决了传统模式的核心问题。
            </p>
          </div>
        );
      case 3:
        return (
          <div className={styles.responseCard}>
            <p>
              这是一个有洞察力的观点。Order X 的目标是<strong>解决行业格局变化带来的挑战</strong>，
              我们看到了向互联网3.0和电商领域演进的需求。Order X 集成了<strong>社区驱动、透明机制和
              经济激励</strong>，创建了一个全新的预订生态系统，远超简单的"修补"。
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
      title="Order X Protocol"
      subtitle="Redefining Participation for the Future of Mobility"
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
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <blockquote>
                  "We're not launching a car. We're launching a collective evolution."
                </blockquote>
              </motion.div>
            </ContentSection>
            
            <ContentSection title="The Order X Philosophy">
              <div className={styles.textCard}>
                <p>
                  Order X is not a marketing campaign; it's a <strong>paradigm shift in participatory product launches</strong>.
                </p>
              </div>
              <div className={styles.textCard}>
                <p>
                  In an era where community power drives product destiny, we've designed a system that converts genuine participation into tangible privileges. It leverages blockchain technology for transparency while rejecting speculation, focusing instead on recording, recognizing, and rewarding authentic community behaviors.
                </p>
              </div>
              <div className={styles.highlightQuote}>
                "Participation is your passport. Action is your qualification."
              </div>
            </ContentSection>
            
            <ContentSection title="Defining Order X">
              <h3 className={styles.sectionHeading}>What is Order X?</h3>
              <div className={styles.textCard}>
                <p>
                  Order X is a community-powered protocol designed to transform vehicle ordering. Anchored around Faraday Future's FX model, it employs transparent blockchain technology—not for speculation, but to reward genuine community participation.
                </p>
              </div>
              
              <div className={styles.comparisonGrid}>
                <div className={styles.comparisonColumn}>
                  <h4>What Order X is NOT:</h4>
                  <ul className={styles.negativeList}>
                    <li>A token issuance project</li>
                    <li>A speculative platform</li>
                    <li>A traditional marketing campaign</li>
                  </ul>
                </div>
                
                <div className={styles.comparisonColumn}>
                  <h4>What Order X IS:</h4>
                  <ul className={styles.positiveList}>
                    <li>A behavior recording and value verification system</li>
                    <li>A transparent channel from community engagement to product ordering</li>
                    <li>A protocol redefining brand-user relationships</li>
                  </ul>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Innovation Highlights">
              <ul className={styles.featureList}>
                <li>
                  <strong>Transparent Recording</strong>: Every community action is publicly recorded, forming the user's "participation trajectory"
                </li>
                <li>
                  <strong>Qualification Mechanism</strong>: Participation depth determines ordering eligibility, creating natural scarcity
                </li>
                <li>
                  <strong>Data Visualization</strong>: Real-time display of global community activity through engagement heat maps
                </li>
                <li>
                  <strong>Tiered Privileges</strong>: Different participation levels unlock different product benefits
                </li>
                <li>
                  <strong>Future Expandability</strong>: Lays the foundation for a future community economic system
                </li>
              </ul>
            </ContentSection>
            
            <div className={styles.continuePrompt}>
              <button onClick={() => goToPage(2)} className={styles.continueButton}>
                <span>Continue Reading</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="page2"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >            
            <ContentSection title="Why Order X, Why Now?">
              <div className={styles.textCard}>
                <p>
                  In the face of dual product and market challenges, traditional launch models no longer suffice:
                </p>
              </div>
              <div className={styles.listContainer}>
                <ul>
                  <li>Consumer trust fragmentation</li>
                  <li>Declining traditional advertising efficiency</li>
                  <li>Growing community influence</li>
                  <li>Increasing demand for participation transparency</li>
                </ul>
              </div>
              <div className={styles.textCard}>
                <p>
                  Order X emerges as not just a product launch system, but a reconstruction of the brand-community relationship.
                </p>
              </div>
              <div className={styles.highlightQuote}>
                "Transparency builds trust. Participation builds privilege."
              </div>
            </ContentSection>
            
            <div className={styles.interactiveSection}>
              <div className={styles.interactiveQuestion}>
                <strong>What's your view on traditional vehicle pre-order models?</strong>
              </div>
              
              <div className={styles.interactiveOptions}>
                <div 
                  className={`${styles.option} ${selectedOption === 0 ? styles.selected : ''}`}
                  onClick={() => setSelectedOption(0)}
                >
                  <div className={styles.checkbox}>
                    {selectedOption === 0 && <div className={styles.checkmark}></div>}
                  </div>
                  <span>They work well and don't need changing</span>
                </div>
                
                <div 
                  className={`${styles.option} ${selectedOption === 1 ? styles.selected : ''}`}
                  onClick={() => setSelectedOption(1)}
                >
                  <div className={styles.checkbox}>
                    {selectedOption === 1 && <div className={styles.checkmark}></div>}
                  </div>
                  <span>They're inefficient, but there's no better alternative</span>
                </div>
                
                <div 
                  className={`${styles.option} ${selectedOption === 2 ? styles.selected : ''}`}
                  onClick={() => setSelectedOption(2)}
                >
                  <div className={styles.checkbox}>
                    {selectedOption === 2 && <div className={styles.checkmark}></div>}
                  </div>
                  <span>They don't fully leverage community power</span>
                </div>
                
                <div 
                  className={`${styles.option} ${selectedOption === 3 ? styles.selected : ''}`}
                  onClick={() => setSelectedOption(3)}
                >
                  <div className={styles.checkbox}>
                    {selectedOption === 3 && <div className={styles.checkmark}></div>}
                  </div>
                  <span>They should be completely redesigned</span>
                </div>
                
                <div 
                  className={`${styles.option} ${selectedOption === 4 ? styles.selected : ''}`}
                  onClick={() => setSelectedOption(4)}
                >
                  <div className={styles.checkbox}>
                    {selectedOption === 4 && <div className={styles.checkmark}></div>}
                  </div>
                  <span>Other perspective</span>
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
                <em>Select an option to learn more about how Order X addresses these challenges</em>
              </div>
            </div>
            
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