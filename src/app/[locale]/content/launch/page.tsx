'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { FiArrowRight, FiArrowLeft, FiCheck, FiArrowUp, FiBarChart2 } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './page.module.scss';
import ContentHeader from '@/components/ContentHeader/ContentHeader';
import MotionDiv from '@/components/MotionDiv/MotionDiv';
import ModuleCard from '@/components/ModuleCard/ModuleCard';

// 动画变体
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12
    }
  }
};

const tableVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

const LaunchPlan = () => {
  const t = useTranslations('launch');
  const [activePage, setActivePage] = useState(1);
  const totalPages = 3;
  const [expandedMetric, setExpandedMetric] = useState<number | null>(null);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setActivePage(pageNumber);
    }
  };

  const toggleMetric = (index: number) => {
    if (expandedMetric === index) {
      setExpandedMetric(null);
    } else {
      setExpandedMetric(index);
    }
  };

  // 页面1：基础启动计划内容
  const renderLaunchPlan = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.timelineSection} variants={itemVariants}>
        <h3>Complete 90-Day Timeline</h3>
        <div className={styles.timelineVisualization}>
          <div className={styles.mcKinseyTimeline}>
            <motion.div 
              className={styles.timelinePhase}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
            >
              <div className={`${styles.phaseIndicator} ${styles.phaseFoundation}`}>
                <span>Phase 1</span>
              </div>
              <div className={styles.phaseContent}>
                <h4>Foundation</h4>
                <p className={styles.phaseDuration}>Days 1-30</p>
                <div className={styles.milestoneMarkers}>
                  <div className={styles.milestone}>
                    <div className={styles.milestonePoint}></div>
                    <span>Day 15: Early Activation Review</span>
                  </div>
                  <div className={styles.milestone}>
                    <div className={styles.milestonePoint}></div>
                    <span>Day 30: Phase 1 Completion</span>
                  </div>
                </div>
                <div className={styles.keyMetrics}>
                  <motion.div className={styles.metricBadge} whileHover={{ scale: 1.1 }}>
                    <span>5,000+</span>
                    <small>Members</small>
                  </motion.div>
                  <motion.div className={styles.metricBadge} whileHover={{ scale: 1.1 }}>
                    <span>50%</span>
                    <small>Wallet Rate</small>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <div className={styles.timelineConnector}></div>
            
            <motion.div 
              className={styles.timelinePhase}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
            >
              <div className={`${styles.phaseIndicator} ${styles.phaseAcceleration}`}>
                <span>Phase 2</span>
              </div>
              <div className={styles.phaseContent}>
                <h4>Acceleration</h4>
                <p className={styles.phaseDuration}>Days 31-60</p>
                <div className={styles.milestoneMarkers}>
                  <div className={styles.milestone}>
                    <div className={styles.milestonePoint}></div>
                    <span>Day 45: Order System Check</span>
                  </div>
                  <div className={styles.milestone}>
                    <div className={styles.milestonePoint}></div>
                    <span>Day 60: Phase 2 Completion</span>
                  </div>
                </div>
                <div className={styles.keyMetrics}>
                  <motion.div className={styles.metricBadge} whileHover={{ scale: 1.1 }}>
                    <span>15,000+</span>
                    <small>Members</small>
                  </motion.div>
                  <motion.div className={styles.metricBadge} whileHover={{ scale: 1.1 }}>
                    <span>500+</span>
                    <small>Pre-orders</small>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            <div className={styles.timelineConnector}></div>
            
            <motion.div 
              className={styles.timelinePhase}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)' }}
            >
              <div className={`${styles.phaseIndicator} ${styles.phaseTranscendence}`}>
                <span>Phase 3</span>
              </div>
              <div className={styles.phaseContent}>
                <h4>Transcendence</h4>
                <p className={styles.phaseDuration}>Days 61-90</p>
                <div className={styles.milestoneMarkers}>
                  <div className={styles.milestone}>
                    <div className={styles.milestonePoint}></div>
                    <span>Day 75: Pre-Launch Assessment</span>
                  </div>
                  <div className={styles.milestone}>
                    <div className={styles.milestonePoint}></div>
                    <span>Day 90: Global Launch</span>
                  </div>
                </div>
                <div className={styles.keyMetrics}>
                  <motion.div className={styles.metricBadge} whileHover={{ scale: 1.1 }}>
                    <span>25,000+</span>
                    <small>Members</small>
                  </motion.div>
                  <motion.div className={styles.metricBadge} whileHover={{ scale: 1.1 }}>
                    <span>5,000+</span>
                    <small>Token Holders</small>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className={styles.launchPhilosophySection}>
        <h2>{t('launchPhilosophy')}</h2>
        <p>{t('launchPrinciples')}</p>
        <div className={styles.principlesGrid}>
          <div className={styles.principleCard}>
            <h3>{t('communityFirst')}</h3>
          </div>
          <div className={styles.principleCard}>
            <h3>{t('testMeasureScale')}</h3>
          </div>
          <div className={styles.principleCard}>
            <h3>{t('momentumCultivation')}</h3>
          </div>
        </div>
      </div>

      <div className={styles.phaseOverviewSection}>
        <h2>{t('phaseOverview')}</h2>
        <p>{t('phaseDescription')}</p>
        <div className={styles.phaseTable}>
          <div className={styles.tableHeader}>
            <div>{t('phase')}</div>
            <div>{t('timeframe')}</div>
            <div>{t('focus')}</div>
            <div>{t('goal')}</div>
          </div>
          <div className={styles.tableRow}>
            <div>{t('foundationPhase')}</div>
            <div>{t('days1to30')}</div>
            <div>{t('communityActivation')}</div>
            <div>{t('establishCore')}</div>
          </div>
          <div className={styles.tableRow}>
            <div>{t('accelerationPhase')}</div>
            <div>{t('days31to60')}</div>
            <div>{t('systemExpansion')}</div>
            <div>{t('generateOrders')}</div>
          </div>
          <div className={styles.tableRow}>
            <div>{t('transcendencePhase')}</div>
            <div>{t('days61to90')}</div>
            <div>{t('tokenMechanics')}</div>
            <div>{t('createMomentum')}</div>
          </div>
        </div>
        <p className={styles.exploreDetail}>{t('exploreDetail')}</p>
      </div>

      <div className={styles.phaseDetailSection}>
        <h2>{t('foundation')}</h2>
        <p>{t('foundationDescription')}</p>
        
        <div className={styles.weeklyCards}>
          <div className={styles.weekCard}>
            <h3>{t('week1')}</h3>
            <ul>
              <li>{t('redditCommunity')}</li>
              <li>{t('coreInfrastructure')}</li>
              <li>{t('seedingAdopters')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week2')}</h3>
            <ul>
              <li>{t('contentProduction')}</li>
              <li>{t('socialInfrastructure')}</li>
              <li>{t('dataCollection')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week3')}</h3>
            <ul>
              <li>{t('signalSystem')}</li>
              <li>{t('initialEngagement')}</li>
              <li>{t('ambassadorProgram')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week4')}</h3>
            <ul>
              <li>{t('publicReveal')}</li>
              <li>{t('initialReward')}</li>
              <li>{t('dataReview')}</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.metricsCard}>
          <h3>{t('foundationMetrics')}</h3>
          <ul>
            <li>5,000+ {t('activeCommunity')}</li>
            <li>50% {t('walletConnection')}</li>
            <li>10,000+ {t('signalPoints')}</li>
            <li>25 {t('ambassadors')}</li>
          </ul>
        </div>
      </div>

      <div className={styles.quoteContainer}>
        <blockquote className={styles.quote}>
          {t('quote1')}
        </blockquote>
      </div>

      <div className={styles.phaseDetailSection}>
        <h2>{t('acceleration')}</h2>
        <p>{t('accelerationDescription')}</p>
        
        <div className={styles.weeklyCards}>
          <div className={styles.weekCard}>
            <h3>{t('week5')}</h3>
            <ul>
              <li>{t('vehicleConnection')}</li>
              <li>{t('signalExpansion')}</li>
              <li>{t('engagementDeepening')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week6')}</h3>
            <ul>
              <li>{t('crossPlatform')}</li>
              <li>{t('mediaRelations')}</li>
              <li>{t('internationalCommunity')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week7')}</h3>
            <ul>
              <li>{t('preOrderMechanism')}</li>
              <li>{t('orderRadar')}</li>
              <li>{t('communityAchievement')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week8')}</h3>
            <ul>
              <li>{t('advancedSignal')}</li>
              <li>{t('showcaseEvent')}</li>
              <li>{t('firstOrderWave')}</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.metricsCard}>
          <h3>{t('accelerationMetrics')}</h3>
          <ul>
            <li>15,000+ {t('activeCommunity')}</li>
            <li>500+ {t('reservations')}</li>
            <li>70% {t('walletConnection')}</li>
            <li>100+ {t('ambassadors')}</li>
          </ul>
        </div>
      </div>

      <div className={styles.phaseDetailSection}>
        <h2>{t('transcendence')}</h2>
        <p>{t('transcendenceDescription')}</p>
        
        <div className={styles.weeklyCards}>
          <div className={styles.weekCard}>
            <h3>{t('week9')}</h3>
            <ul>
              <li>{t('tokenStructure')}</li>
              <li>{t('technicalInfrastructure')}</li>
              <li>{t('preMint')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week10')}</h3>
            <ul>
              <li>{t('firstMint')}</li>
              <li>{t('initialUtility')}</li>
              <li>{t('communityMarket')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week11')}</h3>
            <ul>
              <li>{t('ecosystemExpansion')}</li>
              <li>{t('advancedOrder')}</li>
              <li>{t('viralExpansion')}</li>
            </ul>
          </div>
          <div className={styles.weekCard}>
            <h3>{t('week12')}</h3>
            <ul>
              <li>{t('globalLaunch')}</li>
              <li>{t('communityEvolution')}</li>
              <li>{t('futureExpansion')}</li>
            </ul>
          </div>
        </div>
        
        <div className={styles.metricsCard}>
          <h3>{t('transcendenceMetrics')}</h3>
          <ul>
            <li>25,000+ {t('activeCommunity')}</li>
            <li>2,000+ {t('reservations')}</li>
            <li>5,000+ {t('tokenHolders')}</li>
            <li>3+ {t('mediaFeatures')}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );

  // 页面2：GoatxOrderX整合内容
  const renderGoatIntegration = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.goatIntegrationSection} variants={itemVariants}>
        <h2>{t('goatIntegration')}</h2>
        
        <div className={styles.goatQuoteCarousel}>
          <motion.div 
            className={styles.goatQuote}
            whileHover={{ y: -3, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)' }}
          >
            {t('goatQuote1')}
          </motion.div>
        </div>
        
        <div className={styles.coreIdeaSection}>
          <h3>{t('coreIdea')}</h3>
          <p>{t('coreIdeaDescription')}</p>
          <div className={styles.textCard}>
            <p>{t('threeLayerEcosystem')}</p>
          </div>
          <p className={styles.jordanNike}>{t('jordanNike')}</p>
          
          <motion.div 
            className={styles.goatQuote}
            whileHover={{ y: -3, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)' }}
            style={{ marginTop: '2rem' }}
          >
            {t('goatQuote2')}
          </motion.div>
        </div>
        
        <div className={styles.integrationStructureSection}>
          <h3>{t('integrationStructure')}</h3>
          <div className={styles.tableContainer}>
            <table className={styles.integrationTable}>
              <thead>
                <tr>
                  <th>{t('module')}</th>
                  <th>{t('description')}</th>
                  <th>{t('tokenBehaviorLink')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GOAT Model Co-Creation</td>
                  <td>Fans vote on car design elements, UI sounds, colorways</td>
                  <td>Requires Signal rank or $ORDER to vote</td>
                </tr>
                <tr>
                  <td>GOAT Edition Pre-order Gate</td>
                  <td>Only top 1,000 Signal users can access pre-order slots</td>
                  <td>Token-gated entry</td>
                </tr>
                <tr>
                  <td>GOAT-Themed Perks & Skins</td>
                  <td>NFT badges, key skins, custom avatars</td>
                  <td>Redeemable via $ORDER (burn on use)</td>
                </tr>
                <tr>
                  <td>GOAT Challenge Series</td>
                  <td>Reddit/Twitter meme contest with $ORDER reward pool</td>
                  <td>Driven by Signal and engagement metrics</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <motion.div 
            className={styles.goatQuote}
            whileHover={{ y: -3, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)' }}
            style={{ marginTop: '2rem' }}
          >
            {t('goatQuote3')}
          </motion.div>
        </div>

        <div className={styles.narrativeHooksSection}>
          <h3>{t('narrativeHooks')}</h3>
          <div className={styles.verticalQuotes}>
            <div className={styles.goatQuote}>{t('goatQuote4')}</div>
            <div className={styles.goatQuote}>{t('goatQuote5')}</div>
            <div className={styles.goatQuote}>{t('goatQuote6')}</div>
            <div className={styles.goatQuote}>{t('goatQuote7')}</div>
            <div className={styles.goatQuote}>{t('goatQuote8')}</div>
          </div>
        </div>
        
        <div className={styles.communityMechanicsSection}>
          <h3>{t('communityMechanics')}</h3>
          
          <div className={styles.mechanicCard}>
            <h4>1. {t('goatCoCreation')}</h4>
            <ul>
              <li>Each design milestone tied to on-chain user participation</li>
              <li>Naming color palettes</li>
              <li>Interior material polls</li>
              <li>Custom startup sounds by Snoop, unlocked by community votes</li>
            </ul>
          </div>
          
          <div className={styles.mechanicCard}>
            <h4>2. {t('goatMilestoneNFTs')}</h4>
            <ul>
              <li>Major moments become commemorative NFTs</li>
              <li>Partnership launch</li>
              <li>First Reddit post hits 10k upvotes</li>
              <li>First GOAT Edition delivery</li>
              <li>Forms a living "Order X Chronicle" — part history, part asset</li>
            </ul>
          </div>
          
          <div className={styles.mechanicCard}>
            <h4>3. {t('goatSubToken')}</h4>
            <ul>
              <li>Community may create $SNOOPORDER sub-token under governance</li>
              <li>Tied to meme activity, rewards, and micro-communities</li>
              <li>Does not interfere with $ORDER economics</li>
            </ul>
          </div>
        </div>

        <div className={styles.synergyRevenueSection}>
          <h3>{t('synergyRevenue')}</h3>
          <div className={styles.tableContainer}>
            <table className={styles.revenueTable}>
              <thead>
                <tr>
                  <th>{t('channel')}</th>
                  <th>{t('valueContribution')}</th>
                  <th>{t('effect')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{t('orders')}</td>
                  <td>Crossover fans × crypto × culture</td>
                  <td>Faster conversions, stronger PR traction</td>
                </tr>
                <tr>
                  <td>{t('token')}</td>
                  <td>Meme value + NFT virality + subculture anchors</td>
                  <td>Higher peak valuation and user retention</td>
                </tr>
                <tr>
                  <td>{t('equity')}</td>
                  <td>PR resonance → Market cap uplift</td>
                  <td>Media + cultural capital reflected in FF stock</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={styles.leadershipMessageSection}>
          <h3>{t('leadershipMessage')}</h3>
          <blockquote className={styles.leadershipQuote}>
            "Having Snoop post isn't just PR. It's the Genesis Block of Order X."
          </blockquote>
          <blockquote className={styles.leadershipQuote}>
            "You didn't just sign a celebrity. You started a movement — with keys, coins, and memes."
          </blockquote>
          <blockquote className={styles.leadershipQuote}>
            {t('goatQuote8')}
          </blockquote>
        </div>

        <div className={styles.implementationNotesSection}>
          <h3>{t('implementationNotes')}</h3>
          <p>{t('implementationDescription')}</p>
          
          <h4>{t('seamlessIntegration')}</h4>
          <div className={styles.moduleList}>
            <div className={styles.moduleItem}>
              <h5>1. Order Tracker</h5>
              <ul>
                <li>Special event tracking for influencer-related content</li>
                <li>Enhanced Signal weights for collaboration activities</li>
                <li>Automatic recognition of cultural amplification</li>
              </ul>
            </div>
            <div className={styles.moduleItem}>
              <h5>2. Signal Builder</h5>
              <ul>
                <li>Collaboration engagement multipliers</li>
                <li>Co-creation recognition patterns</li>
                <li>Special achievement categories for GOAT-related activities</li>
              </ul>
            </div>
            <div className={styles.moduleItem}>
              <h5>3. Order Gate</h5>
              <ul>
                <li>Special edition access controls</li>
                <li>Co-creation privilege tiers based on Signal rank</li>
                <li>Limited collaboration slots with transparent allocation rules</li>
              </ul>
            </div>
            <div className={styles.moduleItem}>
              <h5>4. Token Mechanics</h5>
              <ul>
                <li>Collaboration-specific burn mechanisms</li>
                <li>Special edition access requirements</li>
                <li>Co-creation voting rights weighted by participation history</li>
              </ul>
            </div>
          </div>
          
          <h4>{t('valueAmplification')}</h4>
          <div className={styles.tableContainer}>
            <table className={styles.amplificationTable}>
              <thead>
                <tr>
                  <th>{t('valueChannel')}</th>
                  <th>{t('baseProjection')}</th>
                  <th>{t('withGoatIntegration')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vehicle Orders</td>
                  <td>$10M–15M</td>
                  <td>$15M–25M (+50-75%)</td>
                </tr>
                <tr>
                  <td>Token Market</td>
                  <td>$8M–12M</td>
                  <td>$12M–20M (+50-65%)</td>
                </tr>
                <tr>
                  <td>Equity Uplift</td>
                  <td>$5M–10M</td>
                  <td>$15M–30M (+200-300%)</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className={styles.goatTransformation}>{t('goatTransformation')}</p>
        </div>
      </motion.div>
    </motion.div>
  );

  // 页面3：成功指标
  const renderMetricsMonitoring = () => (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={styles.metricsSection} variants={itemVariants}>
        <h2>Success Criteria</h2>
        
        <motion.div 
          className={styles.detailedMetricsSection}
          variants={itemVariants}
        >
          <h3>Detailed Success Metrics</h3>
          <div className={styles.metricsCards}>
            <motion.div 
              className={styles.metricCard}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)' }}
            >
              <h4>Phase 1: Foundation</h4>
              <ul>
                <motion.li whileHover={{ x: 5 }}><strong>5,000+</strong> active community members</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>50%</strong> wallet connection rate</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>10,000+</strong> Signal-generating actions</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>25+</strong> high-engagement ambassadors</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>NPS 60+</strong> core community satisfaction</motion.li>
              </ul>
            </motion.div>
            <motion.div 
              className={styles.metricCard}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)' }}
            >
              <h4>Phase 2: Acceleration</h4>
              <ul>
                <motion.li whileHover={{ x: 5 }}><strong>15,000+</strong> active community members</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>500+</strong> vehicle pre-reservations</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>70%</strong> wallet connection rate</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>100+</strong> active ambassadors</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>5+</strong> industry media mentions</motion.li>
              </ul>
            </motion.div>
            <motion.div 
              className={styles.metricCard}
              whileHover={{ y: -5, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.25)' }}
            >
              <h4>Phase 3: Transcendence</h4>
              <ul>
                <motion.li whileHover={{ x: 5 }}><strong>25,000+</strong> active community members</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>2,000+</strong> vehicle reservations</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>5,000+</strong> token holders</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>3+</strong> major media features</motion.li>
                <motion.li whileHover={{ x: 5 }}><strong>Viral</strong> social media presence</motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.weeklyMilestonesSection}
          variants={itemVariants}
        >
          <h3>Weekly Milestones & Deliverables</h3>
          
          <motion.div 
            className={styles.milestoneCard}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)' }}
          >
            <h4>Week 11: Full Ecosystem Activation</h4>
            <div className={styles.milestoneContent}>
              <div className={styles.milestoneActivities}>
                <h5>Community Market Formation</h5>
                <ul>
                  <motion.li whileHover={{ x: 5 }}>Community-led liquidity provision education</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Token utility expansion and enhancement</motion.li>
                  <motion.li whileHover={{ x: 5 }}>First burn mechanics implemented and tracked</motion.li>
                </ul>
              </div>
              <div className={styles.milestoneActivities}>
                <h5>Advanced Order Features</h5>
                <ul>
                  <motion.li whileHover={{ x: 5 }}>Token-enhanced ordering privileges activated</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Special edition vehicles revealed</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Community configuration voting events</motion.li>
                </ul>
              </div>
              <div className={styles.milestoneActivities}>
                <h5>Viral Expansion Strategy</h5>
                <ul>
                  <motion.li whileHover={{ x: 5 }}>Coordinated PR campaign launch</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Influencer activation program</motion.li>
                  <motion.li whileHover={{ x: 5 }}>"Share-to-Earn" mechanics deployed</motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className={styles.milestoneCard}
            whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.25)' }}
          >
            <h4>Week 12: Global Launch & Community Evolution</h4>
            <div className={styles.milestoneContent}>
              <div className={styles.milestoneActivities}>
                <h5>Global Launch Event</h5>
                <ul>
                  <motion.li whileHover={{ x: 5 }}>Virtual reality experience launch</motion.li>
                  <motion.li whileHover={{ x: 5 }}>24-hour community celebration</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Multi-platform livestream event</motion.li>
                </ul>
              </div>
              <div className={styles.milestoneActivities}>
                <h5>Community Evolution Framework</h5>
                <ul>
                  <motion.li whileHover={{ x: 5 }}>Governance mechanism activation</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Community-led initiative funding</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Decentralization roadmap publication</motion.li>
                </ul>
              </div>
              <div className={styles.milestoneActivities}>
                <h5>Future Expansion Roadmap</h5>
                <ul>
                  <motion.li whileHover={{ x: 5 }}>Phase 4 vision reveal</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Ecosystem partnership announcements</motion.li>
                  <motion.li whileHover={{ x: 5 }}>Long-term Order X vision presentation</motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className={styles.kpiTrackingSection}
          variants={tableVariants}
        >
          <h3>KPI Tracking Framework</h3>
          <div className={styles.kpiTable}>
            <motion.table
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <thead>
                <tr>
                  <th>Key Performance Indicator</th>
                  <th>Tracking Method</th>
                  <th>Success Threshold</th>
                  <th>Intervention Trigger</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Community Growth Rate</td>
                  <td>Weekly member addition %</td>
                  <td>15%+ per week</td>
                  <td>&lt;10% for 2 consecutive weeks</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Engagement Depth</td>
                  <td>Daily active users / Total users</td>
                  <td>&gt;30%</td>
                  <td>&lt;20% for 1 week</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Signal Generation</td>
                  <td>Signal points created per user per day</td>
                  <td>&gt;50 points</td>
                  <td>&lt;25 points for 3 days</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Wallet Connection</td>
                  <td>% of users with connected wallets</td>
                  <td>&gt;60% by day 60</td>
                  <td>&lt;40% by day 45</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Reservation Conversion</td>
                  <td>Reservations / Active users</td>
                  <td>&gt;8% by day 90</td>
                  <td>&lt;4% by day 75</td>
                </motion.tr>
              </tbody>
            </motion.table>
          </div>
        </motion.div>
        
        <motion.div 
          className={styles.riskMitigationSection}
          variants={tableVariants}
        >
          <h3>Risk Management & Contingency Planning</h3>
          <div className={styles.riskTable}>
            <motion.table
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <thead>
                <tr>
                  <th>Risk Factor</th>
                  <th>Potential Impact</th>
                  <th>Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Slow Initial Adoption</td>
                  <td>Delayed momentum, missed early milestones</td>
                  <td>Prepared "Acceleration Package" with enhanced incentives</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Competitive Response</td>
                  <td>Market confusion, diluted proposition</td>
                  <td>Differentiation messaging ready, exclusive features fast-tracked</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Technical Delays</td>
                  <td>Feature postponement, reduced functionality</td>
                  <td>Modular architecture allows core features to deploy independently</td>
                </motion.tr>
                <motion.tr 
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <td>Market Volatility</td>
                  <td>Changing economic conditions, reduced disposable income</td>
                  <td>Flexible pricing models, value-focused messaging variants</td>
                </motion.tr>
              </tbody>
            </motion.table>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );

  const renderPageContent = () => {
    switch (activePage) {
      case 1:
        return renderLaunchPlan();
      case 2:
        return renderGoatIntegration();
      case 3:
        return renderMetricsMonitoring();
      default:
        return renderLaunchPlan();
    }
  };

  const renderPagination = () => (
    <motion.div 
      className={styles.paginationContainer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      <motion.button 
        className={styles.paginationButton} 
        onClick={() => handlePageChange(activePage - 1)}
        disabled={activePage === 1}
        whileHover={{ scale: activePage === 1 ? 1 : 1.05 }}
        whileTap={{ scale: activePage === 1 ? 1 : 0.95 }}
      >
        <FiArrowLeft />
        {t('previous')}
      </motion.button>
      <div className={styles.paginationDots}>
        {Array.from({ length: totalPages }).map((_, index) => (
          <motion.button
            key={index}
            className={`${styles.paginationDot} ${activePage === index + 1 ? styles.activeDot : ''}`}
            onClick={() => handlePageChange(index + 1)}
            aria-label={`Page ${index + 1}`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
      <motion.button 
        className={styles.paginationButton} 
        onClick={() => handlePageChange(activePage + 1)}
        disabled={activePage === totalPages}
        whileHover={{ scale: activePage === totalPages ? 1 : 1.05 }}
        whileTap={{ scale: activePage === totalPages ? 1 : 0.95 }}
      >
        {t('next')}
        <FiArrowRight />
      </motion.button>
    </motion.div>
  );

  const pageSubtitles = [
    t('subtitle'),
    t('goatIntegration'),
    'Success Criteria'
  ];

  return (
    <div className={styles.container}>
      <ContentHeader 
        title={t('title')} 
        subtitle={pageSubtitles[activePage - 1]} 
      />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPageContent()}
        </motion.div>
      </AnimatePresence>
      
      {renderPagination()}
      
      <div className={styles.navigationButtons}>
        <motion.div 
          className={styles.continueButtonContainer} 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/content/overview" className={styles.continueButton}>
            {t('nextPage')}
            <FiArrowRight className={styles.continueIcon} />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LaunchPlan; 