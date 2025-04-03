'use client';

import React, { useState } from 'react';
import ContentLayout from '@/components/content/ContentLayout';
import ContentSection from '@/components/content/ContentSection';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import PageNavigation from '@/components/navigation/PageNavigation';
import styles from './page.module.scss';

interface UserJourneyPageProps {
  params: {
    locale: string;
  };
}

export default function UserJourneyPage({ params: { locale } }: UserJourneyPageProps) {
  const t = useTranslations('userjourney');
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  
  const nextPage = {
    key: 'technical',
    href: `/${locale}/content/technical`,
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
      title="User Journey & Experience"
      subtitle="From Community Member to Order X Pioneer"
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
        {/* Page 1: Journey Overview & Initial Stages */}
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
                  "The path to ownership isn't a straight line—it's a constellation of meaningful moments."
                </blockquote>
              </motion.div>
            </ContentSection>
            
            <ContentSection title="The Order X Journey">
              <div className={styles.textCard}>
                <p>
                  The Order X protocol transforms the traditional vehicle ordering experience into a dynamic journey of participation, recognition, and reward. This journey unfolds across seven key stages.
                </p>
              </div>
              
              <div className={styles.journeyOverview}>
                <p>
                  Each stage of the Order X journey creates meaningful interactions that benefit both the community member and Faraday Future. By focusing on participation and recognition rather than just transactions, Order X builds a deeper connection between the brand and its future owners.
                </p>
              </div>
              
              <div className={styles.stagesList}>
                <h3>The Seven Stages of the Order X Journey:</h3>
                
                {/* Stage 1 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>🚶</div>
                    <h4>Stage 1: Discovery & Onboarding</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    The journey begins when a user first encounters the Order X concept, typically through Reddit community discussions, Twitter announcements, media coverage, or referrals from existing participants.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Key Experience Elements:</h5>
                    <ul>
                      <li>Clear, jargon-free explanation of the Order X concept</li>
                      <li>Simple wallet connection process (no cryptocurrency required)</li>
                      <li>Immediate acknowledgment of participation</li>
                      <li>"First Signal" achievement to build momentum</li>
                    </ul>
                  </div>
                  
                  <div className={styles.userQuote}>
                    "I came for the car, but I stayed for the community. Connecting my wallet was simpler than creating a social media account, and I immediately felt like I was part of something innovative." - Early Participant Feedback
                  </div>
                </div>
                
                {/* Stage 2 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>🌐</div>
                    <h4>Stage 2: Community Integration</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    Once onboarded, users begin meaningful participation in the community ecosystem.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Primary Engagement Channels:</h5>
                    <ul>
                      <li>Reddit discussions and content creation</li>
                      <li>Twitter sharing and conversation</li>
                      <li>Official platform activities and challenges</li>
                      <li>Special events and AMAs (Ask Me Anything)</li>
                    </ul>
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Engagement Dynamics:</h5>
                    <ul>
                      <li>Natural, authentic participation is valued over volume</li>
                      <li>Quality contribution guidelines help users maximize their impact</li>
                      <li>Community feedback creates self-reinforcing engagement loops</li>
                      <li>Weekly themes and focus areas keep content fresh and relevant</li>
                    </ul>
                  </div>
                </div>
                
                {/* Stage 3 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>📊</div>
                    <h4>Stage 3: Progress Visualization</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    As users accumulate Order Signals, their progress becomes visually engaging.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Personal Dashboard Elements:</h5>
                    <ul>
                      <li>Signal accumulation graph (daily/weekly/monthly views)</li>
                      <li>Achievement milestones and badges</li>
                      <li>Community percentile ranking</li>
                      <li>Projected timeline to Order Gate qualification</li>
                    </ul>
                  </div>
                  
                  <div className={styles.userQuote}>
                    "Data without visualization is just numbers. Order X transforms your participation into a living, breathing story."
                  </div>
                </div>
              </div>
              
              <div className={styles.continuePrompt}>
                <button onClick={() => goToPage(2)} className={styles.continueButton}>
                  <span>Continue Journey</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
        
        {/* Page 2: Later Journey Stages */}
        {currentPage === 2 && (
          <motion.div 
            key="page2"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title="Continuing the Order X Journey">
              <div className={styles.stagesList}>
                {/* Stage 4 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>🏆</div>
                    <h4>Stage 4: Community Recognition</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    Beyond numerical progress, users experience recognition within the community.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Recognition Mechanisms:</h5>
                    <ul>
                      <li>Community spotlight features for valuable contributors</li>
                      <li>Special badges for consistent participation</li>
                      <li>Leaderboard recognition for category excellence</li>
                      <li>"Signal Boosters" that highlight exceptional contributions</li>
                    </ul>
                  </div>
                  
                  <div className={styles.tableContainer}>
                    <table>
                      <thead>
                        <tr>
                          <th>Status Level</th>
                          <th>Requirements</th>
                          <th>Recognition</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Observer</td>
                          <td>Initial registration</td>
                          <td>Welcome package</td>
                        </tr>
                        <tr>
                          <td>Participant</td>
                          <td>Regular activity</td>
                          <td>Community badge</td>
                        </tr>
                        <tr>
                          <td>Contributor</td>
                          <td>Consistent quality engagement</td>
                          <td>Profile highlighting</td>
                        </tr>
                        <tr>
                          <td>Creator</td>
                          <td>Top-tier participation</td>
                          <td>Featured status, influencer recognition</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                {/* Stage 5 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>🔓</div>
                    <h4>Stage 5: Privilege Unlocking</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    As users reach significant Signal thresholds, they begin accessing exclusive privileges.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Progressive Access:</h5>
                    <ul>
                      <li>Early information about vehicle specifications</li>
                      <li>Exclusive digital content and behind-the-scenes access</li>
                      <li>Virtual events with design and engineering teams</li>
                      <li>Test drive opportunities at special locations</li>
                    </ul>
                  </div>
                  
                  <div className={styles.userQuote}>
                    "Each privilege isn't just a reward—it's a recognition of your role in bringing FF to life."
                  </div>
                </div>
                
                {/* Stage 6 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>🚪</div>
                    <h4>Stage 6: Order Gate Qualification</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    Reaching the Order Gate threshold is a signature moment in the Order X journey.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>The Qualification Experience:</h5>
                    <ul>
                      <li>Special notification with personalized congratulations</li>
                      <li>Digital "Order X Pioneer" credential issuance</li>
                      <li>Showcase on the Order X Pioneers board</li>
                      <li>Exclusive access to the Order Configuration Portal</li>
                    </ul>
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Vehicle Ordering Advantages:</h5>
                    <ul>
                      <li>Priority production slots</li>
                      <li>Special configuration options</li>
                      <li>Dedicated concierge service</li>
                      <li>Graduated discounts based on Signal level</li>
                      <li>Limited edition "First Wave" designation</li>
                    </ul>
                  </div>
                </div>
                
                {/* Stage 7 */}
                <div className={styles.stageCard}>
                  <div className={styles.stageHeader}>
                    <div className={styles.stageIcon}>🔄</div>
                    <h4>Stage 7: Beyond Ordering</h4>
                  </div>
                  
                  <div className={styles.stageDescription}>
                    The Order X journey continues even after vehicle ordering.
                  </div>
                  
                  <div className={styles.keyElements}>
                    <h5>Ongoing Engagement:</h5>
                    <ul>
                      <li>Owner's circle for continued community leadership</li>
                      <li>Feedback channel to product development teams</li>
                      <li>Ambassador opportunities for future models</li>
                      <li>Legacy status in future Order X iterations</li>
                    </ul>
                  </div>
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
                  <span>Next</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </ContentSection>
          </motion.div>
        )}
        
        {/* Page 3: Journey Mapping & Personas */}
        {currentPage === 3 && (
          <motion.div 
            key="page3"
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ContentSection title="Journey Mapping">
              <div className={styles.journeyMap}>
                <h3>Emotional Curve</h3>
                <div className={styles.emotionalCurve}>
                  <div className={styles.curveContent}>
                    Excitement → Curiosity → Engagement → Determination → Achievement → Pride → Advocacy
                  </div>
                </div>
                
                <div className={styles.keyElements}>
                  <h5>Touchpoint Design:</h5>
                  <p>Each interaction is designed with attention to:</p>
                  <ul>
                    <li>Emotional impact</li>
                    <li>Information clarity</li>
                    <li>Next step visibility</li>
                    <li>Community connection</li>
                    <li>Progress acknowledgment</li>
                  </ul>
                </div>
                
                <div className={styles.keyElements}>
                  <h5>Friction Elimination:</h5>
                  <p>Potential points of confusion or abandonment are identified and addressed:</p>
                  <ul>
                    <li>Simplified blockchain interaction (no crypto expertise needed)</li>
                    <li>Clear explanation of value exchange</li>
                    <li>Transparent progression metrics</li>
                    <li>Multiple engagement pathways for different user types</li>
                  </ul>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="User Personas & Pathways">
              <div className={styles.personaSection}>
                <p>
                  Order X accommodates diverse user types with tailored experiences, recognizing that community members have different motivations and interests.
                </p>
                
                <div className={styles.userQuote}>
                  "Your path through Order X is as unique as your fingerprint. We don't just acknowledge differences—we celebrate them."
                </div>
                
                <div className={styles.personaGrid}>
                  {/* Persona 1 */}
                  <div className={styles.personaCard}>
                    <h4>The Community Builder</h4>
                    <div className={styles.personaDetails}>
                      <div className={styles.detailItem}>
                        <strong>Primary motivation:</strong> Social connection and influence
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key activities:</strong> Discussion facilitation, community support
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Recognition focus:</strong> Community impact metrics
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Tailored features:</strong> Member connection tools, discussion analytics
                      </div>
                    </div>
                  </div>
                  
                  {/* Persona 2 */}
                  <div className={styles.personaCard}>
                    <h4>The Automotive Enthusiast</h4>
                    <div className={styles.personaDetails}>
                      <div className={styles.detailItem}>
                        <strong>Primary motivation:</strong> Product insight and expertise
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key activities:</strong> Technical discussions, feature analysis
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Recognition focus:</strong> Expertise acknowledgment
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Tailored features:</strong> Direct access to engineering teams, technical previews
                      </div>
                    </div>
                  </div>
                  
                  {/* Persona 3 */}
                  <div className={styles.personaCard}>
                    <h4>The Brand Loyalist</h4>
                    <div className={styles.personaDetails}>
                      <div className={styles.detailItem}>
                        <strong>Primary motivation:</strong> Being part of the FF journey
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key activities:</strong> Brand advocacy, consistent engagement
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Recognition focus:</strong> Longevity and consistency rewards
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Tailored features:</strong> Brand heritage experiences, legacy acknowledgment
                      </div>
                    </div>
                  </div>
                  
                  {/* Persona 4 */}
                  <div className={styles.personaCard}>
                    <h4>The Early Adopter</h4>
                    <div className={styles.personaDetails}>
                      <div className={styles.detailItem}>
                        <strong>Primary motivation:</strong> Access to innovation
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Key activities:</strong> Feature exploration, feedback provision
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Recognition focus:</strong> Innovation contribution metrics
                      </div>
                      <div className={styles.detailItem}>
                        <strong>Tailored features:</strong> Beta access, idea implementation tracking
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ContentSection>
            
            <ContentSection title="Signature Experience Moments">
              <div className={styles.experienceMoments}>
                <p>
                  Throughout the Order X journey, several signature experiences create memorable moments:
                </p>
                
                <div className={styles.momentCard}>
                  <h4>First Signal Ceremony</h4>
                  <p>A special animation and acknowledgment when a user earns their first Signal points, designed to create an emotional anchor point.</p>
                </div>
                
                <div className={styles.momentCard}>
                  <h4>Threshold Celebrations</h4>
                  <p>Visual and notification celebrations when users cross key Signal thresholds, with increasing elaborateness as they approach the Order Gate.</p>
                </div>
                
                <div className={styles.momentCard}>
                  <h4>Pioneer Induction</h4>
                  <p>A formal digital ceremony when a user qualifies for the Order Gate, including personalized messages from FF team members.</p>
                </div>
                
                <div className={styles.momentCard}>
                  <h4>Configuration Moment</h4>
                  <p>A specially designed vehicle configuration experience exclusive to Order X Pioneers, with enhanced visualization and options.</p>
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
          </motion.div>
        )}
      </AnimatePresence>
      
      <PageNavigation locale={locale} />
    </ContentLayout>
  );
} 