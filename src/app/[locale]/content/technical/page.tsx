'use client';

import React, { useState } from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import PageNavigation from '@/components/navigation/PageNavigation';
import styles from './page.module.scss';

interface TechnicalPageProps {
  params: {
    locale: string;
  };
}

export default function TechnicalPage({ params: { locale } }: TechnicalPageProps) {
  const t = useTranslations('technical');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  
  const nextPage = {
    key: 'expansion',
    href: `/${locale}/content/expansion`,
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
        {/* Page 1: Architecture Philosophy & System Components */}
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
            
            <ContentSection title={t('architecturePhilosophy')}>
              <div className={styles.architecturePhilosophy}>
                <div className={styles.textCard}>
                  <p>
                    The Order X implementation follows three core principles that guide all technical decisions and development efforts.
                  </p>
                </div>
                
                <div className={styles.principles}>
                  <div className={styles.principle}>
                    <h4>{t('pragmaticMinimalism')}</h4>
                    <p>Using established technologies and frameworks with proven reliability, avoiding unnecessary complexity while ensuring production-ready stability.</p>
                  </div>
                  
                  <div className={styles.principle}>
                    <h4>{t('progressiveImplementation')}</h4>
                    <p>Building in phases to validate each component before scaling, allowing for course corrections and optimizations based on real-world feedback.</p>
                  </div>
                  
                  <div className={styles.principle}>
                    <h4>{t('modularDesign')}</h4>
                    <p>Creating independent services that can evolve separately, enabling parallel development and focused optimization of individual components.</p>
                  </div>
                </div>
                
                <div className={styles.textCard}>
                  <p>
                    This approach enables rapid initial deployment while establishing a foundation for future expansion, balancing immediate needs with long-term scalability.
                  </p>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title={t('systemComponents')}>
              <div className={styles.systemComponents}>
                <div className={styles.componentGroup}>
                  <h3>{t('coreInfrastructure')}</h3>
                  <p>The Order X ecosystem consists of five primary components working together to create a seamless user experience.</p>
                  
                  <div className={styles.components}>
                    <div className={styles.component}>
                      <h4>
                        <span className={styles.componentIcon}>1</span>
                        {t('dataCollectionLayer')}
                      </h4>
                      <ul>
                        <li>Platform APIs integration (Reddit, Twitter)</li>
                        <li>Event tracking system</li>
                        <li>User authentication & wallet binding</li>
                      </ul>
                    </div>
                    
                    <div className={styles.component}>
                      <h4>
                        <span className={styles.componentIcon}>2</span>
                        {t('processingAnalytics')}
                      </h4>
                      <ul>
                        <li>Signal calculation algorithms</li>
                        <li>User behavior analytics</li>
                        <li>Pattern recognition systems</li>
                      </ul>
                    </div>
                    
                    <div className={styles.component}>
                      <h4>
                        <span className={styles.componentIcon}>3</span>
                        {t('blockchainInterface')}
                      </h4>
                      <ul>
                        <li>Transaction processing</li>
                        <li>Data verification & immutability</li>
                        <li>Smart contract integration</li>
                      </ul>
                    </div>
                    
                    <div className={styles.component}>
                      <h4>
                        <span className={styles.componentIcon}>4</span>
                        {t('userExperienceLayer')}
                      </h4>
                      <ul>
                        <li>Web application frontend</li>
                        <li>Mobile responsiveness</li>
                        <li>Visualization components</li>
                      </ul>
                    </div>
                    
                    <div className={styles.component}>
                      <h4>
                        <span className={styles.componentIcon}>5</span>
                        {t('administrativeSystem')}
                      </h4>
                      <ul>
                        <li>Monitoring dashboards</li>
                        <li>Configuration management</li>
                        <li>Security controls</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={styles.quote}>
                  <blockquote>
                    {t('quote2')}
                  </blockquote>
                </div>
              </div>
              
              <div className={styles.continuePrompt}>
                <button onClick={() => goToPage(2)} className={styles.continueButton}>
                  <span>{t('continueToAI')}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
        
        {/* Page 2: AI Implementation & Development Approach */}
        {currentPage === 2 && (
          <motion.div 
            key="page2"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title={t('aiImplementation')}>
              <div className={styles.aiImplementation}>
                <div className={styles.textCard}>
                  <p>
                    Order X incorporates AI capabilities that enhance user experience while maintaining system integrity. These intelligent systems work behind the scenes to create a more personalized and engaging community environment.
                  </p>
                </div>
                
                <div className={styles.aiSections}>
                  <div className={styles.aiSection}>
                    <h4>{t('communityAssistant')}</h4>
                    <p>A specialized AI agent serves as a community guide and facilitator:</p>
                    <ul>
                      <li>
                        <strong>Natural Language Processing</strong>
                        Interprets user questions and provides contextual guidance
                      </li>
                      <li>
                        <strong>Engagement Recommendations</strong>
                        Suggests relevant community activities based on user interests
                      </li>
                      <li>
                        <strong>Content Summarization</strong>
                        Creates digestible summaries of community discussions and updates
                      </li>
                      <li>
                        <strong>Multilingual Support</strong>
                        Enables global community participation through real-time translation
                      </li>
                    </ul>
                  </div>
                  
                  <div className={styles.aiSection}>
                    <h4>{t('signalQuality')}</h4>
                    <p>AI systems evaluate engagement quality beyond simple metrics:</p>
                    <ul>
                      <li>
                        <strong>Sentiment Analysis</strong>
                        Assesses the emotional tone and constructiveness of contributions
                      </li>
                      <li>
                        <strong>Originality Detection</strong>
                        Identifies valuable original content vs. repetitive engagement
                      </li>
                      <li>
                        <strong>Context Understanding</strong>
                        Evaluates contributions within their conversational context
                      </li>
                      <li>
                        <strong>Pattern Recognition</strong>
                        Distinguishes organic participation from gaming attempts
                      </li>
                    </ul>
                  </div>
                  
                  <div className={styles.aiSection}>
                    <h4>{t('predictiveAnalytics')}</h4>
                    <p>Forward-looking insights drive system improvements:</p>
                    <ul>
                      <li>
                        <strong>Engagement Forecasting</strong>
                        Predicts community activity patterns
                      </li>
                      <li>
                        <strong>Conversion Potential</strong>
                        Identifies users approaching significant decision points
                      </li>
                      <li>
                        <strong>Retention Risk Analysis</strong>
                        Highlights engagement patterns indicating potential disengagement
                      </li>
                      <li>
                        <strong>Community Trend Identification</strong>
                        Surfaces emerging topics and interests
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className={styles.quote}>
                  <blockquote>
                    {t('quote3')}
                  </blockquote>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title={t('developmentApproach')}>
              <div className={styles.developmentApproach}>
                <div className={styles.phases}>
                  <div className={styles.phase}>
                    <h4>
                      {t('phase1')}
                      <span className={styles.phaseDuration}>{t('days30')}</span>
                    </h4>
                    <div className={styles.phaseContent}>
                      <p>The initial deployment focuses on core functionality:</p>
                      <ul>
                        <li>Basic wallet connection</li>
                        <li>Reddit & Twitter data collection</li>
                        <li>Simplified Signal calculation</li>
                        <li>Essential user dashboard</li>
                        <li>Admin monitoring tools</li>
                      </ul>
                    </div>
                    
                    <div className={styles.techStack}>
                      <h5>{t('technicalStack')}</h5>
                      <div className={styles.stackItems}>
                        <div className={styles.stackItem}>
                          <span className={styles.stackIcon}>●</span>
                          Frontend: React.js with Tailwind CSS
                        </div>
                        <div className={styles.stackItem}>
                          <span className={styles.stackIcon}>●</span>
                          Backend: Node.js microservices
                        </div>
                        <div className={styles.stackItem}>
                          <span className={styles.stackIcon}>●</span>
                          Database: PostgreSQL
                        </div>
                        <div className={styles.stackItem}>
                          <span className={styles.stackIcon}>●</span>
                          Blockchain: Solana
                        </div>
                        <div className={styles.stackItem}>
                          <span className={styles.stackIcon}>●</span>
                          DevOps: Docker with CI/CD
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.phase}>
                    <h4>
                      {t('phase2')}
                      <span className={styles.phaseDuration}>{t('days60')}</span>
                    </h4>
                    <div className={styles.phaseContent}>
                      <p>Building on the MVP foundation:</p>
                      <ul>
                        <li>Advanced visualization components</li>
                        <li>Community recognition features</li>
                        <li>Expanded platform integrations</li>
                        <li>AI assistant integration (basic functionality)</li>
                        <li>Performance optimization</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className={styles.phase}>
                    <h4>
                      {t('phase3')}
                      <span className={styles.phaseDuration}>{t('days90')}</span>
                    </h4>
                    <div className={styles.phaseContent}>
                      <p>Completing the core Order X experience:</p>
                      <ul>
                        <li>Complete AI capabilities</li>
                        <li>Advanced analytics dashboard</li>
                        <li>Multi-platform expansion</li>
                        <li>Enhanced security features</li>
                        <li>Community governance tools</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className={styles.quote}>
                  <blockquote>
                    {t('quote4')}
                  </blockquote>
                </div>
              </div>
              
              <div className={styles.navigationButtons}>
                <button onClick={() => goToPage(1)} className={styles.navButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{t('previous')}</span>
                </button>
                <button onClick={() => goToPage(3)} className={styles.navButton}>
                  <span>{t('next')}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
        
        {/* Page 3: Technical Considerations & Success Metrics */}
        {currentPage === 3 && (
          <motion.div 
            key="page3"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title={t('technicalConsiderations')}>
              <div className={styles.technicalConsiderations}>
                <div className={styles.textCard}>
                  <p>
                    The Order X system architecture addresses several critical technical areas to ensure reliability, performance, and user satisfaction.
                  </p>
                </div>
                
                <div className={styles.considerationSections}>
                  <div className={styles.considerationSection}>
                    <h4>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {t('securityArchitecture')}
                    </h4>
                    <ul>
                      <li><strong>User Data Protection:</strong> Industry-standard encryption and anonymization</li>
                      <li><strong>Wallet Integration Security:</strong> Secure connection protocols without exposing private keys</li>
                      <li><strong>Anti-Manipulation Measures:</strong> Advanced algorithms to detect and prevent system gaming</li>
                      <li><strong>Regular Security Audits:</strong> Scheduled third-party security assessments</li>
                    </ul>
                  </div>
                  
                  <div className={styles.considerationSection}>
                    <h4>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {t('scalabilityPlanning')}
                    </h4>
                    <ul>
                      <li><strong>Horizontal Scaling:</strong> Microservices architecture allows independent component scaling</li>
                      <li><strong>Data Sharding Strategy:</strong> Optimized for handling increasing data volumes</li>
                      <li><strong>Caching Implementation:</strong> Strategic caching reduces database load</li>
                      <li><strong>Load Balancing:</strong> Automatic distribution of traffic across service instances</li>
                    </ul>
                  </div>
                  
                  <div className={styles.considerationSection}>
                    <h4>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {t('performanceOptimization')}
                    </h4>
                    <ul>
                      <li><strong>Response Time Targets:</strong> &lt;200ms for dashboard loading, &lt;100ms for interactions</li>
                      <li><strong>Efficient Data Transfer:</strong> Optimized API payloads reduce bandwidth requirements</li>
                      <li><strong>Background Processing:</strong> Computationally intensive tasks handled asynchronously</li>
                      <li><strong>Progressive Loading:</strong> Critical UI elements load first for perceived performance</li>
                    </ul>
                  </div>
                  
                  <div className={styles.considerationSection}>
                    <h4>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M15 2H9a1 1 0 00-1 1v2a1 1 0 001 1h6a1 1 0 001-1V3a1 1 0 00-1-1zM17 6H7a1 1 0 00-1 1v2a1 1 0 001 1h10a1 1 0 001-1V7a1 1 0 00-1-1zM19 10H5a1 1 0 00-1 1v2a1 1 0 001 1h14a1 1 0 001-1v-2a1 1 0 00-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {t('integrationCapabilities')}
                    </h4>
                    <ul>
                      <li><strong>External Platforms:</strong> Direct integration with Reddit, Twitter, and Faraday Future systems</li>
                      <li><strong>Web3 Ecosystem:</strong> Support for Solana wallets and native SPL token integration</li>
                      <li><strong>Program Flexibility:</strong> Upgradable programs for future functionality expansion</li>
                      <li><strong>Analytics Platforms:</strong> Data export capabilities for broader business intelligence</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title={t('riskAssessment')}>
              <div className={styles.textCard}>
                <p>
                  Pragmatic risk management ensures system reliability through identification of potential issues and implementation of appropriate mitigation strategies.
                </p>
              </div>
              
              <table className={styles.riskTable}>
                <thead>
                  <tr>
                    <th>{t('riskArea')}</th>
                    <th>{t('potentialIssue')}</th>
                    <th>{t('mitigationStrategy')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Data Collection</td>
                    <td>API limitations or changes</td>
                    <td>Redundant collection methods, graceful degradation</td>
                  </tr>
                  <tr>
                    <td>Signal Calculation</td>
                    <td>Gaming attempts</td>
                    <td>Multi-factor verification, pattern detection</td>
                  </tr>
                  <tr>
                    <td>Blockchain Performance</td>
                    <td>Transaction costs or congestion</td>
                    <td>Solana's high throughput architecture, program optimization</td>
                  </tr>
                  <tr>
                    <td>User Experience</td>
                    <td>Complexity barriers</td>
                    <td>Progressive disclosure, contextual guidance</td>
                  </tr>
                  <tr>
                    <td>System Scaling</td>
                    <td>Performance degradation with growth</td>
                    <td>Auto-scaling architecture, performance monitoring</td>
                  </tr>
                </tbody>
              </table>
              
              <div className={styles.textCard}>
                <p>
                  {t('fallbackMechanisms')}
                </p>
                <ul>
                  <li><strong>Data Storage:</strong> Redundant database systems with automatic failover</li>
                  <li><strong>Blockchain Operations:</strong> Alternative transaction pathways if primary chain experiences issues</li>
                  <li><strong>User Interface:</strong> Offline capabilities for essential functions</li>
                </ul>
              </div>
            </ContentSection>
            
            <ContentSection title={t('metricsIndicators')}>
              <div className={styles.metricsIndicators}>
                <div className={styles.textCard}>
                  <p>
                    The technical implementation will be guided by clear metrics to ensure quality, reliability, and user satisfaction throughout the development process.
                  </p>
                </div>
                
                <h3>{t('kpiTitle')}</h3>
                <div className={styles.kpiList}>
                  <div className={styles.kpiItem}>
                    <div className={styles.kpiTitle}>{t('systemReliability')}</div>
                    <div className={styles.kpiValue}>99.9%</div>
                    <div>uptime target</div>
                  </div>
                  
                  <div className={styles.kpiItem}>
                    <div className={styles.kpiTitle}>{t('transactionSuccess')}</div>
                    <div className={styles.kpiValue}>99.5%+</div>
                    <div>blockchain transaction completion</div>
                  </div>
                  
                  <div className={styles.kpiItem}>
                    <div className={styles.kpiTitle}>{t('dataAccuracy')}</div>
                    <div className={styles.kpiValue}>&lt;0.1%</div>
                    <div>error rate in Signal calculations</div>
                  </div>
                  
                  <div className={styles.kpiItem}>
                    <div className={styles.kpiTitle}>{t('userExperience')}</div>
                    <div className={styles.kpiValue}>&lt;3%</div>
                    <div>drop-off during onboarding flow</div>
                  </div>
                  
                  <div className={styles.kpiItem}>
                    <div className={styles.kpiTitle}>{t('securityIncidents')}</div>
                    <div className={styles.kpiValue}>Zero</div>
                    <div>data breaches or manipulation events</div>
                  </div>
                </div>
                
                <div className={styles.improvementProcess}>
                  <h4>{t('improvementProcess')}</h4>
                  <p>A systematic approach ensures ongoing enhancement:</p>
                  <ul>
                    <li>Weekly performance reviews</li>
                    <li>Bi-weekly feature prioritization</li>
                    <li>Monthly security assessments</li>
                    <li>Quarterly architecture evaluation</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.navigationButtons}>
                <button onClick={() => goToPage(2)} className={styles.navButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>{t('previous')}</span>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
      </AnimatePresence>
      
      <PageNavigation locale={locale} />
    </ContentLayout>
  );
} 