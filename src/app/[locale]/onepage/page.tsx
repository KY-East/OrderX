import React from 'react';
import styles from './page.module.css';

export default function OnePage() {
  return (
    <div className={styles.container}>
      {/* 头部区域 */}
      <header className={styles.header}>
        <h1>Order X 协议</h1>
        <h2>重构社区驱动的汽车订购体验</h2>
        <p className={styles.quote}>
          "We&apos;re not launching a car. We&apos;re launching a collective evolution."
        </p>
      </header>

      {/* 核心理念 */}
      <section className={styles.section}>
        <h2>💫 项目核心理念</h2>
        <div className={styles.content}>
          <p>
            Order X 是法拉第未来开创的革命性协议，将社区参与直接转化为车辆订购特权，
            通过区块链实现透明度，拒绝投机，专注于激励真实参与。
            这不是营销活动，而是<strong>参与式产品发布的范式革命</strong>。
          </p>
          <blockquote className={styles.quote}>
            "Participation is your passport. Action is your qualification."
          </blockquote>
        </div>
      </section>

      {/* 市场背景与痛点 */}
      <section className={styles.section}>
        <h2>🔍 市场背景与痛点</h2>
        <div className={styles.content}>
          <h3>汽车行业正面临四大转变：</h3>
          <ul className={styles.list}>
            <li>传统营销效力降低（广告转化率下降45%）</li>
            <li>消费者信任碎片化（78%更信任用户评价而非官方宣传）</li>
            <li>社区力量崛起（Reddit/Twitter成为产品声誉决定场）</li>
            <li>社交互动主导购车决策（增长60%）</li>
          </ul>
          <p className={styles.highlight}>
            法拉第未来的独特挑战：重新激活社区情感连接，将线上热情转化为实际车辆订单。
          </p>
        </div>
      </section>

      {/* 系统核心架构 */}
      <section className={styles.section}>
        <h2>🏗️ 系统核心架构</h2>
        <div className={styles.content}>
          <p>Order X 由六个互联模块构成一个端到端社区参与-订购生态系统：</p>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h4>订单追踪器</h4>
              <p>捕捉多平台真实社区行为</p>
            </div>
            <div className={styles.card}>
              <h4>信号构建器</h4>
              <p>将参与转化为可量化的"订单信号"</p>
            </div>
            <div className={styles.card}>
              <h4>订单门户</h4>
              <p>基于信号累积设立订单资格阈值</p>
            </div>
            <div className={styles.card}>
              <h4>奖励层</h4>
              <p>连接信号成就与实际权益</p>
            </div>
            <div className={styles.card}>
              <h4>雷达板</h4>
              <p>可视化全球社区参与热图</p>
            </div>
            <div className={styles.card}>
              <h4>未来层</h4>
              <p>为Web3整合与经济进化预留拓展空间</p>
            </div>
          </div>
        </div>
      </section>

      {/* 用户旅程亮点 */}
      <section className={styles.section}>
        <h2>👤 用户旅程亮点</h2>
        <div className={styles.content}>
          <p>精心设计的七阶段用户体验，将参与者转化为车主：</p>
          <div className={styles.journey}>
            <div className={styles.step}>
              <span>发现</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>社区融入</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>进度可视化</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>社区认可</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>特权解锁</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>订单资格</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>订购</span>
            </div>
          </div>
          <p>每个阶段都有标志性体验时刻（如"首个信号仪式"和"先锋入职"），促进用户情感连接：</p>
          <div className={styles.emotions}>
            <div className={styles.step}>
              <span>兴奋</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>好奇</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>参与</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>决心</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>成就</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>自豪</span>
              <span>→</span>
            </div>
            <div className={styles.step}>
              <span>倡导</span>
            </div>
          </div>
        </div>
      </section>

      {/* 经济模型与代币设计 */}
      <section className={styles.section}>
        <h2>💎 经济模型与代币设计</h2>
        <div className={styles.content}>
          <h3>行为驱动的经济生态</h3>
          <div className={styles.subsection}>
            <ul className={styles.list}>
              <li>
                <strong>信号灯积分生产循环：</strong>
                每日社区总产量50,000点信号灯积分（内容创作60%，互动20%，游戏15%，活动5%）
              </li>
              <li>
                <strong>稀缺性机制：</strong>
                个人每日上限10-30点，随贡献质量增加
              </li>
            </ul>
          </div>
          
          <h3>革命性$ORDER代币</h3>
          <div className={styles.subsection}>
            <ul className={styles.list}>
              <li><strong>无预挖/无预售/无空投</strong> - 完全由用户行为生成</li>
              <li><strong>使用即销毁</strong> - 所有代币使用都被销毁，创造实用驱动稀缺性</li>
              <li>
                <strong>行为铸造公式</strong> - 
                <code>可铸造$ORDER = log(累积信号灯积分) × 质量因子 × 活动乘数</code>
              </li>
              <li><strong>最大供应</strong>：固定1亿枚，初始流通量为0</li>
            </ul>
          </div>

          <h3>主要使用场景</h3>
          <div className={styles.subsection}>
            <ul className={styles.list}>
              <li>FX预订解锁（100 $ORDER）</li>
              <li>专属软件模块访问（50-200 $ORDER）</li>
              <li>限量周边商品访问（10+ $ORDER）</li>
              <li>特别活动和测试资格（25 $ORDER）</li>
            </ul>
          </div>
          
          <blockquote className={styles.quote}>
            "这不是代币发布。这是行为引爆。"
          </blockquote>
        </div>
      </section>

      {/* 商业价值三大渠道 */}
      <section className={styles.section}>
        <h2>📊 商业价值三大渠道</h2>
        <div className={styles.content}>
          <p>Order X 协议通过三个并行渠道创造可量化价值：</p>
          <div className={styles.table}>
            <div className={styles.tableHeader}>
              <div>渠道</div>
              <div>机制</div>
              <div>预期价值</div>
            </div>
            <div className={styles.tableRow}>
              <div><strong>车辆订单</strong></div>
              <div>基于信号灯积分的访问 + 折扣游戏化</div>
              <div><strong>$10M–15M</strong></div>
            </div>
            <div className={styles.tableRow}>
              <div><strong>代币经济</strong></div>
              <div>公平发布 + 社区主导流动性</div>
              <div><strong>$8M–12M</strong></div>
            </div>
            <div className={styles.tableRow}>
              <div><strong>股权提升</strong></div>
              <div>叙事共鸣 + 社区关注度</div>
              <div><strong>$5M–10M</strong></div>
            </div>
          </div>
          <p className={styles.highlight}>
            <strong>收入飞轮：</strong> 参与→信号灯积分→代币→特权→更多订单→更多参与
          </p>
          <blockquote className={styles.quote}>
            "The token doesn&apos;t drive speculation. It drives participation. Participation drives revenue."
          </blockquote>
        </div>
      </section>

      {/* 90天发布计划精要 */}
      <section className={styles.section}>
        <h2>🚀 90天发布计划精要</h2>
        <div className={styles.content}>
          <h3>三阶段战略发布</h3>
          <div className={styles.timeline}>
            <div className={styles.phase}>
              <h4>第1阶段：基础（1-30天）</h4>
              <ul className={styles.list}>
                <li>社区激活与基础设施建立（目标：5,000+ 成员）</li>
                <li>信号灯积分系统部署与首批内容浪潮</li>
                <li>核心技术平台上线</li>
              </ul>
            </div>
            <div className={styles.phase}>
              <h4>第2阶段：加速（31-60天）</h4>
              <ul className={styles.list}>
                <li>产品集成与社区扩展（目标：500+ 预订）</li>
                <li>订单系统与多平台生态整合</li>
                <li>首波社区订单启动</li>
              </ul>
            </div>
            <div className={styles.phase}>
              <h4>第3阶段：超越（61-90天）</h4>
              <ul className={styles.list}>
                <li>代币机制启动与生态成熟（目标：25,000+ 用户）</li>
                <li>完整市场形成与高级订单功能</li>
                <li>病毒增长引擎激活</li>
              </ul>
            </div>
          </div>
          <blockquote className={styles.quote}>
            "We don&apos;t have a launch date. We have an ignition sequence."
          </blockquote>
        </div>
      </section>

      {/* GOAT计划：文化影响者整合 */}
      <section className={styles.section}>
        <h2>🎭 GOAT计划：文化影响者整合</h2>
        <div className={styles.content}>
          <blockquote className={styles.quote}>
            "You didn&apos;t sign a celebrity. You triggered a Web3 ignition protocol."
          </blockquote>
          
          <h3>核心策略</h3>
          <p>将GOAT文化影响者（如Snoop Dogg等）与Order X完美融合，创造三层式生态系统：</p>
          <p className={styles.highlight}>文化偶像 × 社区共创 × 区块链激励</p>
          
          <h3>主要整合模块</h3>
          <div className={styles.goatGrid}>
            <div className={styles.card}>
              <h4>GOAT车型共创</h4>
              <p>粉丝投票决定设计元素、声音、配色（需要Signal等级）</p>
            </div>
            <div className={styles.card}>
              <h4>GOAT版预订门槛</h4>
              <p>仅前1,000名Signal用户可获得预订资格</p>
            </div>
            <div className={styles.card}>
              <h4>GOAT主题特权</h4>
              <p>NFT徽章、钥匙皮肤（通过$ORDER兑换）</p>
            </div>
            <div className={styles.card}>
              <h4>GOAT挑战系列</h4>
              <p>Reddit/Twitter迷因大赛，奖池用$ORDER</p>
            </div>
          </div>
          
          <h3>商业叙事</h3>
          <div className={styles.quote}>
            "You&apos;re not just ordering a car. You&apos;re joining a movement — designed by Snoop, driven by you."
          </div>
          <div className={styles.quote}>
            "The first vehicle shaped by Reddit, powered by Snoop."
          </div>
          
          <h3>价值三倍放大</h3>
          <p>文化合作显著提升Order X三大价值渠道</p>
          <ul className={styles.list}>
            <li>车辆订单：$15M-25M（+50-75%）</li>
            <li>代币市场：$12M-20M（+50-65%）</li>
            <li>股权提升：$15M-30M（+200-300%）</li>
          </ul>
        </div>
      </section>

      {/* 核心创新与差异化 */}
      <section className={styles.section}>
        <h2>🔮 核心创新与差异化</h2>
        <div className={styles.content}>
          <div className={styles.fiveGrid}>
            <div className={styles.card}>
              <h4>社区即资格</h4>
              <p>真实参与直接转化为订单特权</p>
            </div>
            <div className={styles.card}>
              <h4>透明区块链</h4>
              <p>不是为投机，而是为信任建设</p>
            </div>
            <div className={styles.card}>
              <h4>迷因股逻辑</h4>
              <p>将社交能量引导至产品销售</p>
            </div>
            <div className={styles.card}>
              <h4>游戏化参与</h4>
              <p>每日签到、挑战和视觉反馈循环</p>
            </div>
            <div className={styles.card}>
              <h4>数据可视化</h4>
              <p>实时社区热图与个人进度视觉化</p>
            </div>
          </div>
          
          <blockquote className={styles.quote}>
            "This isn&apos;t expenditure—it&apos;s investment in the future of automotive community engagement."
          </blockquote>
        </div>
      </section>

      {/* 实施资源与投资回报 */}
      <section className={styles.section}>
        <h2>📋 实施资源与投资回报</h2>
        <div className={styles.content}>
          <h3>团队核心</h3>
          <p>社区负责人、技术PM、内容策略师、开发团队（前端/后端/区块链）</p>
          
          <h3>预算</h3>
          <p className={styles.highlight}>$190K-290K（90天实施）</p>
          <ul className={styles.list}>
            <li>技术开发：$80-120K</li>
            <li>社区运营：$40-60K</li>
            <li>营销与活动：$30-50K</li>
            <li>代币基础设施：$20-30K</li>
          </ul>
          
          <h3>早期资金需求（代币基础设施）</h3>
          <ul className={styles.list}>
            <li>网站+铸造UI：约$5,000</li>
            <li>信号灯积分基础设施（后端）：约$8,000</li>
            <li>智能合约审计：约$12,000</li>
            <li>可选流动性：$10,000-30,000</li>
          </ul>
          
          <h3>投资回报预测</h3>
          <ul className={styles.list}>
            <li>平均FX车辆价格：$22,000/辆</li>
            <li>预计订单量：6,000辆（保守）</li>
            <li>总收入：$132M（毛利约$66M）</li>
            <li>2年ROI：&gt;30倍初始投资</li>
          </ul>
          
          <h3>成功关键指标</h3>
          <ul className={styles.list}>
            <li>25,000+ 活跃社区成员</li>
            <li>3,000+ 车辆预订</li>
            <li>1,000+ 初始代币持有者</li>
          </ul>
          
          <blockquote className={styles.quote}>
            "$30M is not a fantasy—it&apos;s a conservative floor if we do this right."
          </blockquote>
        </div>
      </section>

      <footer className={styles.section}>
        <p className={styles.highlight}>
          © 2025 法拉第未来 | Order X 协议 v1.0 | "参与塑造未来"
        </p>
      </footer>
    </div>
  );
} 