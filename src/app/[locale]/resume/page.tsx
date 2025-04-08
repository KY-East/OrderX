'use client';

import React from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import styles from './page.module.css';
import LanguageSwitch from '../components/Resume/LanguageSwitch';

export default function ResumePage() {
  const params = useParams();
  const isZh = params.locale === 'zh';

  const content = {
    en: {
      name: "Yang Tianhuan (KY.East)",
      subtitle: "Founder · Storyteller · Ecosystem Architect",
      quote: "I don't just manage communities — I turn them into ecosystems.",
      social: {
        twitter: "Twitter @die4freheit(17K+ Followers)",
        wechat: "WeChat: dieforfreiheit"
      },
      achievements: {
        title: "Key Achievements",
        items: [
          { number: "560K+", label: "Twitter Space Listeners" },
          { number: "100K+", label: "Community Members" },
          { number: "140+", label: "Investment Projects" },
          { number: "70M+", label: "Web Series Views" }
        ]
      },
      careerHighlights: {
        title: "Career Highlights",
        items: [
          {
            number: "1",
            title: "Viral Growth Pioneer",
            period: "(2013–2016)",
            content: [
              "Led one of China's earliest viral campaigns – the \"Big Trousers\" stunt around the Gate to the East, which became a national meme before meme culture even had a name.",
              "In 2014, spearheaded the launch of Nanjing's first state-level makerspace, supporting China's first wave of entrepreneurs with incubation and FA services.",
              "Created and produced China's Breakup (Tronisister, 2016) – the first startup-themed web series in China. The show was acquired by Tencent and garnered over 70 million views."
            ]
          },
          {
            number: "2",
            title: "Crypto OG & VC Partner",
            period: "(2017–2020)",
            content: [
              "Partnered at Nirvana Capital and AlphaCoin Fund, leading investments in 140+ blockchain projects including IOST, ELF, Algorand, and EDU.",
              "Entered the NFT space early, long before the hype – positioning ahead of the curve through thesis-driven conviction."
            ]
          },
          {
            number: "3",
            title: "Web3 Founder & Community Architect",
            period: "(2021–Present)",
            content: [
              "Founded and scaled two flagship Web3 projects – punk.network and Camelot Protocol – both surpassing 100K+ users across Discord, Twitter, and Telegram.",
              {
                exhibitions: [
                  "Co-hosted with Three Shadows Gallery, one of China's first independent art institutions – covered by CCTV.",
                  "Led the Cyber Emergence exhibit at Longfu Temple, Beijing – featured on BTV (Beijing TV)."
                ]
              },
              "2023 年 5 月主持一场创下记录的 Twitter Space，吸引 56 万+ 全球听众.",
              "Known for strategic storytelling, user-centric growth loops, and token-economic systems that spark true community momentum."
            ]
          },
          {
            number: "4",
            title: "Tech-Driven Operator",
            period: "",
            content: [
              "Proficient in AI productivity stacks, interactive H5 product development, and blockchain-native gamification design.",
              "Integrates AI, emotional sentiment, and viral mechanics into GTM strategy with precision."
            ]
          }
        ]
      },
      mediaCoverage: {
        title: "Media Coverage & Speaking",
        items: [
          {
            source: "Tsinghua University Academy of Arts & Design",
            quote: "Producer Ken Yang emphasizes that we should treat tomorrow not as science fiction, but as a near-future setting. Humans are now using their finite lives to build virtual worlds as bizarre as those in their hands. Smartphones have become extensions of the human body, used in communities and gaming, where social scenarios represent an irreversible data stream mirroring the real world.",
            link: "https://www.ad.tsinghua.edu.cn/info/1206/25598.htm"
          },
          {
            source: "CGTN / CCTV 9",
            quote: "It's very hard to commercialize the artworks of illustrators, designers, and short video makers. They used to be made only by business deals, customized products. Now NFT technology opens their mind and sets them free, so they can make what they want, not only products.",
            link: "https://news.cgtn.com/news/2021-05-18/VHJhbnNjcmlwdDU0ODQ3/index.html"
          },
          {
            source: "Nanjing University Official News",
            quote: "'Entrepreneurship is the youth manifesto of our era' - While the movie 'American Dreams in China' about three friends starting a business together was a hit, a new web series 'China's Breakup' has just been released online. Modern Express reporters discovered this is the entrepreneurial story of Yang Tianhuan, a student from Nanjing University.",
            link: "https://www.nju.edu.cn/info/3191/182611.htm"
          }
        ],
        interview: "Media Interview",
        readMore: "Read Full Coverage →"
      },
      gallery: {
        items: [
          {
            title: "Community Building",
            description: "Organizing engaging community events and fostering meaningful connections",
            alt: "Community Events"
          },
          {
            title: "Project Milestones",
            description: "Achieving remarkable success through community-driven growth",
            alt: "Project Success"
          },
          {
            title: "Recognition",
            description: "Second Place Winner at Hong Kong DevCon",
            alt: "Hong Kong DevCon"
          }
        ]
      }
    },
    zh: {
      name: "杨天桓（KY.East）",
      subtitle: "连续创业者 · 项目策划 · 架构设计",
      quote: "我不只是运营，我让社区进化成生态系统。",
      social: {
        twitter: "Twitter @die4freheit(17K+ 粉丝)",
        wechat: "微信: dieforfreiheit"
      },
      achievements: {
        title: "职业亮点",
        items: [
          { number: "560K+", label: "Twitter Space 听众" },
          { number: "100K+", label: "社区成员" },
          { number: "140+", label: "投资项目" },
          { number: "70M+", label: "网剧播放量" }
        ]
      },
      careerHighlights: {
        title: "职业经历",
        items: [
          {
            number: "1",
            title: "病毒营销先锋",
            period: "(2013–2016)",
            content: [
              "策划了中国最早期的病毒式营销案例之一 —— 东方之门·大秋裤事件。",
              "2014 年主导建设南京首家国家级众创空间，深度参与创业潮十年，提供孵化与FA服务。",
              "创作并制作中国首部聚焦创业题材的网剧《中国散伙人》（Tronisister，2016），被腾讯单片买断，播放量突破 7000 万。"
            ]
          },
          {
            number: "2",
            title: "加密元老 & VC 合伙人",
            period: "(2017–2020)",
            content: [
              "曾任 Nirvana Capital 与 AlphaCoin Fund 合伙人，主导投资 140+ 区块链项目，包括 IOST、ELF、Algorand、EDU 等。",
              "是最早进入 NFT 领域的玩家之一，具备穿越周期的判断力与布局能力。"
            ]
          },
          {
            number: "3",
            title: "Web3 创业者 & 社区构建者",
            period: "(2021–至今)",
            content: [
              "创办并发展 punk.network 与 Camelot Protocol，两大项目均覆盖超过 10 万名用户，横跨 Discord、Twitter 与 Telegram 等核心社群平台。",
              "与三画廊（中国最早的独立画廊之一）合作举办 NFT 展览，被央视专题报道。",
              "于北京隆福寺发起《赛博涌现》艺术展，获得北京电视台深度报道。",
              "2023 年 5 月主持一场创下记录的 Twitter Space，吸引 56 万+ 全球听众。",
              "擅长用户增长策略、产品叙事、社区营造与代币模型设计，在 Crypto Twitter 社区拥有广泛影响力。"
            ]
          },
          {
            number: "4",
            title: "技术驱动的操盘手",
            period: "",
            content: [
              "熟练使用 AI 生产力工具，擅长 H5 前端产品开发与区块链社区游戏化运营。",
              "在市场推广中善于将 AI、用户情绪与病毒式传播机制深度融合。"
            ]
          }
        ]
      },
      mediaCoverage: {
        title: "媒体报道",
        items: [
          {
            source: "清华大学艺术与设计学院",
            quote: "出品人Ken Yang谈到，赛博朋克在他看来从来不是一个科学幻想，而是一种近未来的设定。人类现在已经把自己有限的生命用来搭建和宇宙一样无限的虚拟世界。手机类似人体的延伸，它被吸附在口袋与右手上，游戏与网络社交像是一种不可逆的数据洪流在侵蚀真实世界的边界。",
            link: "https://www.ad.tsinghua.edu.cn/info/1206/25598.htm"
          },
          {
            source: "CGTN / CCTV 9",
            quote: "插画师、设计师和短视频创作者的作品很难商业化。他们过去只能通过商业交易和定制产品来实现。现在NFT技术开启了他们的思维，让他们获得自由，可以创作自己想要的作品，而不仅仅是产品。",
            link: "https://news.cgtn.com/news/2021-05-18/VHJhbnNjcmlwdDU0ODQ3/index.html"
          },
          {
            source: "南京大学官方新闻",
            quote: "创业是这个时代的背景音。有一部电影《中国合伙人》很红，说的是三个朋友合伙创业的故事。而昨天，一部网络剧《中国散伙人》也在网络上爆红。现代快报记者获悉，这是南大历史学院研究生杨天桓投资百万拍摄的，他要用自己和身边人的创业故事告诉年轻创业者，散伙才是创业的常态。",
            link: "https://www.nju.edu.cn/info/3191/182611.htm"
          }
        ],
        interview: "媒体采访",
        readMore: "阅读全文 →"
      },
      gallery: {
        items: [
          {
            title: "社区建设",
            description: "组织社区活动，建立有意义的连接",
            alt: "社区活动"
          },
          {
            title: "项目里程碑",
            description: "通过社区驱动实现显著增长",
            alt: "项目成功"
          },
          {
            title: "项目荣誉",
            description: "在香港bitcoin开发者大会获得亚军",
            alt: "香港开发者大会"
          }
        ]
      }
    }
  };

  const currentContent = isZh ? content.zh : content.en;

  return (
    <div className={styles.container}>
      <LanguageSwitch />
      <header className={styles.header}>
        <div className={styles.profileContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/profile.jpg"
              alt={currentContent.name}
              width={200}
              height={200}
              className={styles.profileImage}
              priority
            />
          </div>
          <div className={styles.titleContainer}>
            <h1 className={styles.name}>{currentContent.name}</h1>
            <h2 className={styles.subtitle}>{currentContent.subtitle}</h2>
            <p className={styles.quote}>{currentContent.quote}</p>
            <div className={styles.socialLinks}>
              <a href="https://twitter.com/kyeast" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                {currentContent.social.twitter}
              </a>
              <a href="#" className={styles.socialLink}>{currentContent.social.wechat}</a>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.achievements}>
          <h2 className={styles.sectionTitle}>{currentContent.achievements.title}</h2>
          <div className={styles.achievementGrid}>
            {currentContent.achievements.items.map((item, index) => (
              <div key={index} className={styles.achievementItem}>
                <div className={styles.achievementNumber}>{item.number}</div>
                <div className={styles.achievementLabel}>{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.career}>
          <h2 className={styles.sectionTitle}>{currentContent.careerHighlights.title}</h2>
          {currentContent.careerHighlights.items.map((item, index) => (
            <div key={index} className={styles.careerItem}>
              <h3 className={styles.careerTitle}>
                <span className={styles.careerNumber}>{item.number}.</span>
                {item.title}
                {item.period && <span className={styles.period}>{item.period}</span>}
              </h3>
              <div className={styles.careerContent}>
                {item.content.map((contentItem, contentIndex) => {
                  if (typeof contentItem === 'string') {
                    return <p key={contentIndex}>{contentItem}</p>;
                  }
                  if (contentItem.exhibitions) {
                    return (
                      <div key={contentIndex} className={styles.exhibitions}>
                        <ul>
                          {contentItem.exhibitions.map((exhibition, exhibitionIndex) => (
                            <li key={exhibitionIndex}>{exhibition}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  }
                  return null;
                })}
              </div>
            </div>
          ))}
        </section>

        <section className={styles.mediaAndSpeaking}>
          <h2 className={styles.sectionTitle}>{currentContent.mediaCoverage.title}</h2>
          <div className={styles.mediaGrid}>
            {currentContent.mediaCoverage.items.map((item, index) => (
              <div key={index} className={styles.mediaItem}>
                <h3>{item.source}</h3>
                <p>{item.quote}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.mediaLink}>
                  {currentContent.mediaCoverage.readMore}
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.videoSection}>
          <h2 className={styles.sectionTitle}>{currentContent.mediaCoverage.interview}</h2>
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
            {currentContent.gallery.items.map((item, index) => (
              <div key={index} className={styles.galleryItem}>
                <Image
                  src={`/images/${['community-event', 'project-success', 'hk-devcon'][index]}.jpg`}
                  alt={item.alt}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
                <div className={styles.imageCaption}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
} 