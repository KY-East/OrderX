'use client';

import React, { useState } from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import PageNavigation from '@/components/navigation/PageNavigation';
import styles from './page.module.scss';

interface ArchitecturePageProps {
  params: {
    locale: string;
  };
}

export default function ArchitecturePage({ params: { locale } }: ArchitecturePageProps) {
  const t = useTranslations('architecture');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  
  const nextPage = {
    key: 'userjourney',
    href: `/${locale}/content/user-journey`,
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
      title="Core Architecture & Modules"
      subtitle="The Building Blocks of Order X"
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
                  "Architectures aren't just built. They're grown."
                </blockquote>
              </motion.div>
            </ContentSection>
            
            <ContentSection title="System Overview">
              <div className={styles.textCard}>
                <p>
                  Order X is designed as a modular, scalable system with six interconnected components that work in harmony to create a seamless flow from community engagement to vehicle ordering privileges.
                </p>
              </div>
              
              <div className={styles.prioritiesList}>
                <h3>This architecture prioritizes:</h3>
                <ul>
                  <li><strong>Transparency</strong>: All data flows are visible and verifiable</li>
                  <li><strong>Scalability</strong>: The system can grow with community expansion</li>
                  <li><strong>Flexibility</strong>: Modules can be updated independently</li>
                  <li><strong>Security</strong>: User data and engagement metrics are protected</li>
                  <li><strong>Interoperability</strong>: Ready for future platform integration</li>
                </ul>
              </div>
              
              <div className={styles.modulePreview}>
                <h3>Six Core Modules:</h3>
                <div className={styles.moduleGrid}>
                  <div className={styles.moduleCard}>
                    <div className={styles.moduleIcon}>📊</div>
                    <h4>Order Tracker</h4>
                    <p>Captures authentic community engagement across platforms</p>
                  </div>
                  
                  <div className={styles.moduleCard}>
                    <div className={styles.moduleIcon}>🔄</div>
                    <h4>Signal Builder</h4>
                    <p>Transforms engagement data into quantifiable "Order Signals"</p>
                  </div>
                  
                  <div className={styles.moduleCard}>
                    <div className={styles.moduleIcon}>🚪</div>
                    <h4>Order Gate</h4>
                    <p>Establishes thresholds for ordering privileges</p>
                  </div>
                  
                  <div className={styles.moduleCard}>
                    <div className={styles.moduleIcon}>🏆</div>
                    <h4>Reward Layer</h4>
                    <p>Connects Signal achievements to tangible benefits</p>
                  </div>
                  
                  <div className={styles.moduleCard}>
                    <div className={styles.moduleIcon}>📱</div>
                    <h4>Radar Board</h4>
                    <p>Visualizes community engagement and activity</p>
                  </div>
                  
                  <div className={styles.moduleCard}>
                    <div className={styles.moduleIcon}>🔮</div>
                    <h4>Future Layer</h4>
                    <p>Provides expansion capabilities for system evolution</p>
                  </div>
                </div>
              </div>
              
              <div className={styles.continuePrompt}>
                <button onClick={() => goToPage(2)} className={styles.continueButton}>
                  <span>Explore Modules</span>
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
            <ContentSection title="Module A: Order Tracker">
              <div className={styles.moduleDetail}>
                <p>
                  The Order Tracker is the system's foundation, capturing authentic community engagement across multiple platforms.
                </p>
                
                <div className={styles.featureList}>
                  <h4>Key Functions:</h4>
                  <ul>
                    <li>Records user actions on Reddit, Twitter, and the official website</li>
                    <li>Timestamps and categorizes engagement types</li>
                    <li>Filters for spam and inauthentic behaviors</li>
                    <li>Creates unique identifiers for each user-action combination</li>
                  </ul>
                </div>
                
                <div className={styles.techComponents}>
                  <h4>Technical Components:</h4>
                  <ul>
                    <li>API integrations with social platforms</li>
                    <li>Real-time data processing pipeline</li>
                    <li>Anti-bot verification systems</li>
                    <li>Data storage with privacy compliance</li>
                  </ul>
                </div>
                
                <div className={styles.implementationFocus}>
                  <h4>Implementation Focus:</h4>
                  <p>The Order Tracker is designed to recognize meaningful engagement, not just volume. Quality metrics include thread depth, response rates, and community reactions to contributions.</p>
                </div>
                
                <div className={styles.moduleQuote}>
                  "Every post, every comment, every share becomes a building block in your Order X trajectory."
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Module B: Signal Builder">
              <div className={styles.moduleDetail}>
                <p>
                  The Signal Builder transforms raw engagement data into quantifiable "Order Signals" that represent a user's participation value.
                </p>
                
                <div className={styles.featureList}>
                  <h4>Key Functions:</h4>
                  <ul>
                    <li>Converts various engagement types into weighted Signal values</li>
                    <li>Applies contextual multipliers based on content quality</li>
                    <li>Integrates time-based factors (consistency rewards)</li>
                    <li>Normalizes values across different platforms</li>
                  </ul>
                </div>
                
                <div className={styles.dataTable}>
                  <h4>Signal Value Examples:</h4>
                  <div className={styles.tableWrapper}>
                    <table>
                      <thead>
                        <tr>
                          <th>Action</th>
                          <th>Base Signal Value</th>
                          <th>Quality Multiplier</th>
                          <th>Max Potential</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Post creation</td>
                          <td>5</td>
                          <td>0.5-3x</td>
                          <td>15</td>
                        </tr>
                        <tr>
                          <td>Thoughtful comment</td>
                          <td>2</td>
                          <td>0.5-4x</td>
                          <td>8</td>
                        </tr>
                        <tr>
                          <td>Share with engagement</td>
                          <td>3</td>
                          <td>0.5-2x</td>
                          <td>6</td>
                        </tr>
                        <tr>
                          <td>Daily check-in</td>
                          <td>1</td>
                          <td>1x (fixed)</td>
                          <td>1</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className={styles.algorithmPrinciples}>
                  <h4>Algorithm Principles:</h4>
                  <ul>
                    <li>Rewards consistency and longevity</li>
                    <li>Values quality over quantity</li>
                    <li>Prevents gaming through sophisticated pattern detection</li>
                    <li>Maintains transparency in calculation methods</li>
                  </ul>
                </div>
                
                <div className={styles.moduleQuote}>
                  "Every system needs its own language. Order Signals are how we translate participation into privilege."
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Module C: Order Gate">
              <div className={styles.moduleDetail}>
                <p>
                  The Order Gate establishes the thresholds that convert accumulated Order Signals into vehicle ordering privileges.
                </p>
                
                <div className={styles.featureList}>
                  <h4>Key Functions:</h4>
                  <ul>
                    <li>Defines clear Signal thresholds for ordering access</li>
                    <li>Manages tiered privilege levels</li>
                    <li>Issues digital credentials for qualified users</li>
                    <li>Controls access to exclusive ordering channels</li>
                  </ul>
                </div>
                
                <div className={styles.dataTable}>
                  <h4>Access Tiers:</h4>
                  <div className={styles.tableWrapper}>
                    <table>
                      <thead>
                        <tr>
                          <th>Tier</th>
                          <th>Signal Threshold</th>
                          <th>Privileges</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Observer</td>
                          <td>0-99</td>
                          <td>View-only access to Order X community</td>
                        </tr>
                        <tr>
                          <td>Participant</td>
                          <td>100-499</td>
                          <td>Basic community recognition, early information access</td>
                        </tr>
                        <tr>
                          <td>Contributor</td>
                          <td>500-999</td>
                          <td>Test drive access, community badge, special events</td>
                        </tr>
                        <tr>
                          <td>Creator</td>
                          <td>1,000+</td>
                          <td>FX ordering access, exclusive discounts, limited editions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className={styles.designPhilosophy}>
                  <h4>Design Philosophy:</h4>
                  <p>The Order Gate creates natural scarcity without artificial limitations. It rewards genuine engagement while maintaining exclusive value for those who truly participate.</p>
                </div>
              </div>
              
              <div className={styles.navigationButtons}>
                <button onClick={() => goToPage(1)} className={styles.navButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Previous</span>
                </button>
                <button onClick={() => goToPage(3)} className={styles.navButton}>
                  <span>Continue</span>
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
            <ContentSection title="Module D: Reward Layer">
              <div className={styles.moduleDetail}>
                <p>
                  The Reward Layer connects Order Signal achievements to tangible benefits, creating immediate and long-term incentives.
                </p>
                
                <div className={styles.featureList}>
                  <h4>Key Functions:</h4>
                  <ul>
                    <li>Distributes rewards based on Signal accumulation</li>
                    <li>Manages discount codes and special configurations</li>
                    <li>Schedules exclusive experiences for qualified users</li>
                    <li>Tracks reward redemption and satisfaction</li>
                  </ul>
                </div>
                
                <div className={styles.rewardExamples}>
                  <h4>Reward Examples:</h4>
                  <ul>
                    <li>Early access to new vehicle configurations</li>
                    <li>Graduated discounts based on Signal level (5-15%)</li>
                    <li>Priority manufacturing slots</li>
                    <li>Limited edition merchandise</li>
                    <li>Exclusive test drive experiences</li>
                    <li>Direct access to design team feedback sessions</li>
                  </ul>
                </div>
                
                <div className={styles.moduleQuote}>
                  "We're not giving away value. We're returning value to those who create it."
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Module E: Radar Board">
              <div className={styles.moduleDetail}>
                <p>
                  The Radar Board visualizes community engagement, creating a dynamic, public dashboard of Order X activity.
                </p>
                
                <div className={styles.featureList}>
                  <h4>Key Functions:</h4>
                  <ul>
                    <li>Displays global heat maps of community engagement</li>
                    <li>Tracks individual progress with personal dashboards</li>
                    <li>Shows community leaderboards and achievement milestones</li>
                    <li>Visualizes trending topics and engagement hotspots</li>
                  </ul>
                </div>
                
                <div className={styles.visualComponents}>
                  <h4>Visualization Components:</h4>
                  <ul>
                    <li>Personal Signal trajectory graphs</li>
                    <li>Community activity pulses</li>
                    <li>Regional engagement comparisons</li>
                    <li>Qualification proximity indicators</li>
                    <li>Milestone celebration animations</li>
                  </ul>
                </div>
                
                <div className={styles.userExperience}>
                  <h4>User Experience Focus:</h4>
                  <p>The Radar Board transforms data into narrative, helping users understand their place in the community and the impact of their contributions.</p>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Module F: Future Layer">
              <div className={styles.moduleDetail}>
                <p>
                  The Future Layer provides expansion capabilities, allowing Order X to evolve with community growth and technological advancement.
                </p>
                
                <div className={styles.potentialExpansions}>
                  <h4>Potential Expansions:</h4>
                  <ul>
                    <li>Advanced tokenization based on community maturity</li>
                    <li>Multi-platform integration beyond initial channels</li>
                    <li>Governance mechanisms for community proposals</li>
                    <li>Enhanced economic models for value circulation</li>
                    <li>Cross-brand partnership capabilities</li>
                  </ul>
                </div>
                
                <div className={styles.designPrinciples}>
                  <h4>Design Principles:</h4>
                  <p>The Future Layer is built with architectural hooks that allow for evolution without disruption, ensuring that early participants remain valued as the system grows.</p>
                </div>
                
                <div className={styles.moduleQuote}>
                  "What we're building today is only the foundation of what we'll become tomorrow."
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Integration Framework">
              <div className={styles.integrationDetail}>
                <p>The six modules of Order X don't exist in isolation—they form an integrated ecosystem with continuous data flows:</p>
                
                <div className={styles.systemDiagram}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    {/* 第一行 */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <div className={styles.diagramNode}>Order Tracker</div>
                      <div className={styles.diagramArrow}>→</div>
                      <div className={styles.diagramNode}>Signal Builder</div>
                      <div className={styles.diagramArrow}>→</div>
                      <div className={styles.diagramNode}>Order Gate</div>
                    </div>
                    
                    {/* 第二行 - 上下箭头 */}
                    <div style={{ display: 'flex', width: '100%', position: 'relative' }}>
                      <div style={{ width: '100%', position: 'relative', height: '30px' }}>
                        {/* Radar Board → Order Tracker 箭头 */}
                        <div style={{ position: 'absolute', left: '25%', top: '-10px', color: 'var(--color-blue)' }}>↑</div>
                        
                        {/* Order Gate → Reward Layer 箭头 */}
                        <div style={{ position: 'absolute', right: '25%', top: '0' }}>
                          <div className={styles.diagramArrow}>↓</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 第三行 */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                      <div className={styles.diagramNode}>Radar Board</div>
                      <div className={styles.diagramArrow}>←</div>
                      <div className={styles.diagramNode}>Reward Layer</div>
                    </div>
                    
                    {/* 第四行 - 向上箭头到Radar Board */}
                    <div style={{ display: 'flex', width: '80%', position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '16%' }}>
                        <div className={styles.diagramArrow}>↑</div>
                      </div>
                    </div>
                    
                    {/* 第五行 - 确保与Radar Board对齐 */}
                    <div style={{ display: 'flex', width: '80%', justifyContent: 'flex-start', paddingLeft: '5%' }}>
                      <div className={styles.diagramNode}>Future Layer</div>
                    </div>
                  </div>
                </div>
                
                <div className={styles.circularFlow}>
                  <h4>This circular flow ensures that:</h4>
                  <ul>
                    <li>Community actions are accurately captured</li>
                    <li>Value is properly assigned</li>
                    <li>Privileges are fairly distributed</li>
                    <li>Achievements are visibly celebrated</li>
                    <li>The system continuously evolves</li>
                  </ul>
                </div>
              </div>
              
              <div className={styles.navigationButtons}>
                <button onClick={() => goToPage(2)} className={styles.navButton}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span>Previous</span>
                </button>
              </div>
            </ContentSection>
            
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