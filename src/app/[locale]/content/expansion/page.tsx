'use client';

import React, { useState } from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import PageNavigation from '@/components/navigation/PageNavigation';
import styles from './page.module.scss';
import { FiArrowRight } from 'react-icons/fi';

interface ExpansionPageProps {
  params: {
    locale: string;
  };
}

export default function ExpansionPage({ params: { locale } }: ExpansionPageProps) {
  const t = useTranslations('expansion');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  
  const nextPage = {
    key: 'launch',
    href: `/${locale}/content/launch`,
    label: t('nextPage')
  };
  
  // Page navigation function
  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return (
    <ContentLayout 
      locale={locale}
      title={t('title')}
      subtitle={t('subtitle')}
      nextPage={nextPage}
    >
      {/* Page pagination controls */}
      <div className={styles.pagination}>
        <div className={styles.pageInfo}>
          <span>{currentPage}</span> / <span>{totalPages}</span>
        </div>
        <div className={styles.pageControls}>
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
        {currentPage === 1 && (
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
                  {t('quote1')}
                </blockquote>
              </motion.div>
            </ContentSection>
            
            <ContentSection title={t('evolutionStrategy')}>
              <div className={styles.textCard}>
                <p>{t('strategyDescription')}</p>
              </div>
              
              <div className={styles.evolutionStrategy}>
                <div className={styles.phases}>
                  <div className={styles.phaseCard}>
                    <h4>
                      {t('phase1')}
                      <span className={styles.phaseBadge}>Current</span>
                    </h4>
                    <div className={styles.phaseContent}>
                      <p>{t('phase1Description')}</p>
                      <ul>
                        <li>Behavior tracking across platforms</li>
                        <li>Order Signal accumulation system</li>
                        <li>Vehicle ordering privileges</li>
                        <li>Community recognition systems</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.phaseCard}>
                    <h4>
                      {t('phase2')}
                      <span className={styles.phaseBadge}>Next</span>
                    </h4>
                    <div className={styles.phaseContent}>
                      <p>{t('phase2Description')}</p>
                      
                      <h5>{t('multiPlatform')}</h5>
                      <p>{t('platformsInclude')}</p>
                      <ul>
                        <li>Discord community integration</li>
                        <li>Telegram groups and channels</li>
                        <li>Chinese platforms (WeChat ecosystem)</li>
                        <li>Specialized automotive forums</li>
                      </ul>
                      
                      <h5>{t('communityPoints')}</h5>
                      <p>{t('pointsDescription')}</p>
                      <ul>
                        <li>Records participation in more granular detail</li>
                        <li>Enables more sophisticated rewards</li>
                        <li>Builds familiarity with value exchange</li>
                        <li>Lays infrastructure for future tokenization</li>
                      </ul>
                      
                      <h5>{t('enhancedRewards')}</h5>
                      <p>{t('rewardsExpand')}</p>
                      <ul>
                        <li>Limited edition merchandise access</li>
                        <li>Exclusive digital collectibles</li>
                        <li>Virtual events with design teams</li>
                        <li>Enhanced vehicle customization options</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.phaseCard}>
                    <h4>
                      {t('phase3')}
                      <span className={styles.phaseBadge}>Future</span>
                    </h4>
                    <div className={styles.phaseContent}>
                      <div className={styles.tokenOverview}>
                        <h4>{t('tokenRevolutionary')}</h4>
                        <p>{t('phase3Description')}</p>
                        <ul>
                          <li>{t('noPreMining')}</li>
                          <li>{t('noVcFunding')}</li>
                          <li>{t('noCentralized')}</li>
                          <li>{t('noInitialSupply')}</li>
                        </ul>
                        <p>Instead, $ORDER emerges organically as a byproduct of user behavior, community activation, and the pursuit of vehicle ordering privileges within the FF ecosystem.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={styles.continuePrompt}>
                <button onClick={() => goToPage(2)} className={styles.continueButton}>
                  <span>{t('continue')}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
        
        {currentPage === 2 && (
          <motion.div 
            key="page2"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title={t('phase3Title')}>
              <motion.div 
                className={styles.quote}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <blockquote>
                  {t('quote3')}
                </blockquote>
              </motion.div>
              
              <div className={styles.tokenEconomy}>
                <h3>{t('totalSupply')}</h3>
                <div className={styles.tokenMetrics}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricTitle}>{t('maxSupply')}</div>
                    <div className={styles.metricValue}>100,000,000</div>
                    <div className={styles.metricDescription}>$ORDER (fixed)</div>
                  </div>
                  
                  <div className={styles.metricCard}>
                    <div className={styles.metricTitle}>{t('initialCirculating')}</div>
                    <div className={styles.metricValue}>0</div>
                    <div className={styles.metricDescription}>Zero initial supply</div>
                  </div>
                  
                  <div className={styles.metricCard}>
                    <div className={styles.metricTitle}>{t('minting')}</div>
                    <div className={styles.metricValue}>Behavior-Based</div>
                    <div className={styles.metricDescription}>Only unlocked via community behavior</div>
                  </div>
                </div>
                
                <div className={styles.textCard}>
                  <p>
                    <strong>{t('burningMechanisms')}:</strong>
                  </p>
                  <ul>
                    <li>$ORDER used for upgrades, access, or features is burned</li>
                    <li>1% burn on every transfer to enhance scarcity</li>
                  </ul>
                </div>
                
                <motion.div 
                  className={styles.quote}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <blockquote>
                    {t('quote4')}
                  </blockquote>
                </motion.div>
              </div>
              
              <ContentSection title={t('behaviorFlow')}>
                <div className={styles.textCard}>
                  <p>{t('flowDescription')}</p>
                </div>
                
                <div className={styles.flowDiagram}>
                  <div className={styles.flowSteps}>
                    <div className={styles.flowStep}>
                      <div className={styles.stepNumber}>1</div>
                      <div className={styles.stepContent}>
                        <h5>{t('userActions')}</h5>
                        <p>Reddit posts, Twitter reposts, community activity, mini-games</p>
                      </div>
                    </div>
                    
                    <div className={styles.flowStep}>
                      <div className={styles.stepNumber}>2</div>
                      <div className={styles.stepContent}>
                        <h5>{t('signalPoints')}</h5>
                        <p>Each action generates on-chain score (Signal Index)</p>
                      </div>
                    </div>
                    
                    <div className={styles.flowStep}>
                      <div className={styles.stepNumber}>3</div>
                      <div className={styles.stepContent}>
                        <h5>{t('thresholdUnlock')}</h5>
                        <p>Hitting a threshold allows minting permission</p>
                      </div>
                    </div>
                    
                    <div className={styles.flowStep}>
                      <div className={styles.stepNumber}>4</div>
                      <div className={styles.stepContent}>
                        <h5>{t('orderExtraction')}</h5>
                        <p>Mint is initiated via a smart contract, based on behavior snapshots</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3>{t('signalOutput')}</h3>
                <div className={styles.textCard}>
                  <p>
                    <strong>{t('communityTotal')}</strong>
                  </p>
                  <ul>
                    <li>System daily total Signal cap: ~50,000 points (for 10,000 active users)</li>
                    <li>Average per active user: ~5 Signal/day</li>
                  </ul>
                  
                  <p>
                    <strong>{t('allocationRatio')}</strong>
                  </p>
                  <ul>
                    <li>Community content creation (posts, comments): 60% (30,000 Signal)</li>
                    <li>Content interaction (likes, shares): 20% (10,000 Signal)</li>
                    <li>Mini-games & casual engagement: 15% (7,500 Signal)</li>
                    <li>Special events and challenges: 5% (2,500 Signal)</li>
                  </ul>
                  
                  <p>
                    <strong>{t('individualLimits')}</strong>
                  </p>
                  <ul>
                    <li>Regular user daily cap: 10 Signal</li>
                    <li>Quality content creators: 15-20 Signal</li>
                    <li>Special event periods: 25-30 Signal</li>
                  </ul>
                </div>
              </ContentSection>
              
              <div className={styles.continuePrompt}>
                <button onClick={() => goToPage(3)} className={styles.continueButton}>
                  <span>{t('continue')}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
        
        {currentPage === 3 && (
          <motion.div 
            key="page3"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title={t('useCases')}>
              <div className={styles.textCard}>
                <p>{t('utilityDescription')}</p>
              </div>
              
              <table className={styles.dataTable}>
                <thead>
                  <tr>
                    <th>{t('action')}</th>
                    <th>{t('orderRequired')}</th>
                    <th>{t('effect')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>FX Pre-order Unlock</td>
                    <td>100</td>
                    <td>Access early reservation window</td>
                  </tr>
                  <tr>
                    <td>FFOS Custom Software Module</td>
                    <td>50–200</td>
                    <td>Activate exclusive software features</td>
                  </tr>
                  <tr>
                    <td>Physical Merch Access</td>
                    <td>10+</td>
                    <td>Access to gated merchandise drops</td>
                  </tr>
                  <tr>
                    <td>Join Test Drives / Community Beta</td>
                    <td>25</td>
                    <td>Event ticket or allowlist spot</td>
                  </tr>
                </tbody>
              </table>
              
              <p><strong>All token usage = Burn on Use</strong></p>
              
              <motion.div 
                className={styles.quote}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <blockquote>
                  {t('quote5')}
                </blockquote>
              </motion.div>
            </ContentSection>
            
            <ContentSection title={t('vehicleIntegration')}>
              <div className={styles.textCard}>
                <p>{t('integrationDescription')}</p>
              </div>
              
              <div className={styles.vehicleIntegration}>
                <div className={styles.integrationPoints}>
                  <div className={styles.integrationPoint}>
                    <div className={styles.pointIcon}>✓</div>
                    <div className={styles.pointContent}>
                      <h5>$ORDER is <strong>not required</strong> to place an FX order</h5>
                    </div>
                  </div>
                  
                  <div className={styles.integrationPoint}>
                    <div className={styles.pointIcon}>+</div>
                    <div className={styles.pointContent}>
                      <h5>High Signal users with $ORDER may gain:</h5>
                      <ul>
                        <li><strong>Discount tier unlocks</strong></li>
                        <li><strong>Priority configuration slots</strong></li>
                        <li><strong>Community-only packages</strong> (exterior mods, digital upgrades)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title={t('profitProjection')}>
              <motion.div 
                className={styles.quote}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <blockquote>
                  {t('quote7')}
                </blockquote>
              </motion.div>
              
              <p>The Order X Protocol is designed to generate value through three parallel channels:</p>
              
              <div className={styles.profitProjection}>
                <div className={styles.projectionChannels}>
                  <div className={styles.channelCard}>
                    <div className={styles.channelHeader}>
                      <div className={styles.channelLetter}>A</div>
                      <h5>{t('vehicleOrders')}</h5>
                    </div>
                    <div className={styles.channelRevenue}>$10M–15M</div>
                    <p>Signal-based access + discount gamification</p>
                    <p>5,000–7,000 FX orders (avg. $20K–22K/vehicle)</p>
                  </div>
                  
                  <div className={styles.channelCard}>
                    <div className={styles.channelHeader}>
                      <div className={styles.channelLetter}>B</div>
                      <h5>{t('tokenMarket')}</h5>
                    </div>
                    <div className={styles.channelRevenue}>$8M–12M</div>
                    <p>Fair launch + market-led liquidity + stealth market making</p>
                    <p>No official FF holdings; monetized via external wallets/foundations</p>
                  </div>
                  
                  <div className={styles.channelCard}>
                    <div className={styles.channelHeader}>
                      <div className={styles.channelLetter}>C</div>
                      <h5>{t('equityUplift')}</h5>
                    </div>
                    <div className={styles.channelRevenue}>$5M–10M</div>
                    <p>Narrative resonance + social attention → FF stock boost</p>
                    <p>1–2% FF market cap uplift via global community engagement</p>
                  </div>
                </div>
                
                <h3>{t('revenueWheel')}</h3>
                <div className={styles.textCard}>
                  <ol>
                    <li><strong>Users join the Order X community</strong></li>
                    <li><strong>Engage → Build Signal → Mint $ORDER</strong></li>
                    <li><strong>Use $ORDER to unlock discounts, customizations, early access</strong></li>
                    <li><strong>Result: More FX orders, more token activity, more attention</strong></li>
                  </ol>
                </div>
                
                <p><strong>🎯 Goal: Achieve at least $30M in direct and indirect value for FF</strong></p>
              </div>
            </ContentSection>
            
            <div className={styles.navigationButtons}>
              <motion.div className={styles.continueButtonContainer} whileHover={{ scale: 1.05 }}>
                <a href="/content/launch" className={styles.continueButton}>
                  {t('nextPage')}
                  <FiArrowRight className={styles.continueIcon} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </ContentLayout>
  );
} 