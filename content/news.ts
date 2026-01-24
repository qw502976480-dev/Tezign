
import { NAV_ARTICLES_EN } from './navArticles.en';
import { NAV_ARTICLES_ZH } from './navArticles.zh';

// Real News Content
const REAL_NEWS_ZH = {
  'ev-aigc-creator-conference': {
    title: '数字设计：AIGC 创建者大会 | 千名创建者的双向奔赴',
    subtitle: '特赞发起“双向互动最大化”的聚会，汇聚科研、艺术、商业与技术领袖，呈现全天不间断的 AIGC 内容盛宴。',
    date: '2023-05-08',
    dateISO: '2023-05-08',
    category: 'events',
    content: [
      { type: 'heading', text: '全天盛宴：千名创建者的集体狂欢' },
      { type: 'paragraph', text: '“数字设计：AIGC 创建者大会”圆满落幕。这场由特赞发起的盛会，集结了千名 AIGC 创建者，打造了一场“双向互动最大化”的思想聚会。全天不间断的内容输出，覆盖了从底层算力到上层应用，从学术科研到商业落地的全景图谱。' },
      { type: 'heading', text: '多维碰撞：20+ 主题重新定义 AIGC' },
      { type: 'paragraph', text: '大会设立了极其丰富的主题板块。在“AIGC与科研”中，科学家们探讨了 AI 如何迈向新科学革命；在“艺术启发”板块，来自央音与浙大的教授展示了 AI 如何“听见万物”与生成音乐；在“商业机会”与“创业投资”环节，红杉中国、高瓴创投等顶级机构投资人与创业者共话 AI 时代的变与不变。' },
      { type: 'paragraph', text: '特赞创始人范凌与微软加速器北亚区 CEO 周健在现场共同探讨了创业者机遇，并联合发布了“AIGC Entrepreneurship Program”，旨在为 AI 领域的创新者提供更强有力的支持。' },
      { type: 'heading', text: '创作者生态：人机协作的无限可能' },
      { type: 'paragraph', text: '在“AIGC与创作者”环节，特赞 MuseAI 负责人丁鑫栋发布了《Muse：AIGC 创作者的操作系统》，重新定义了新一代创作工具。同济大学副校长娄永琪教授则深刻发问《AIGC 时代，创造力何去何从》。' },
      { type: 'paragraph', text: '现场更汇聚了近 20 位先锋 Creators，从实验电影导演到虚拟空间架构师，他们通过精彩的 Demo 与分享，生动展示了 AIGC 如何赋能个体，让“人机协作”成为释放想象力的关键钥匙。' }
    ]
  },
  'ev-ceibs-tezign-summit': {
    title: '中欧 x 特赞 | 成功举办“AI+商业”进化论大会，发布双重磅白皮书',
    subtitle: '汇聚 700+ 企业决策者，首发《AI 时代的商业进化蓝图》与《内容+AI 驱动品牌增长》，深度解码 AI 落地范式。',
    date: '2025-03-21',
    dateISO: '2025-03-21',
    category: 'events',
    content: [
      { type: 'heading', text: '顶层设计与产业实践的双轮驱动' },
      { type: 'paragraph', text: '3月21日，中欧国际工商学院与特赞科技联合主办的“‘AI+商业’进化论”峰会在上海举行。活动发布了两份重磅白皮书：《AI is the New Oxygen: AI时代的商业进化蓝图》与《Content + AI Drives Brands’ Growth：内容+人工智能驱动品牌增长》。700余家企业决策者齐聚一堂，探讨 AI 如何重构商业范式。' },
      { type: 'heading', text: '院长致辞：AI 是新质生产力的核心引擎' },
      { type: 'paragraph', text: '中欧院长汪泓指出，AI 已成为国家战略性新兴产业的核心引擎。面对 DeepSeek 等技术突破与国际竞争挑战，中国亟需在产教融合中构建自主创新生态。中欧正将 AI 模块深度融入课程体系，打造“商业智慧+AI技术”的复合培养模式。' },
      { type: 'heading', text: '重磅发布一：AI 时代的商业进化蓝图' },
      { type: 'paragraph', text: '中欧王琪教授发布白皮书，提出企业 AI 应用要突破“重概念、轻实效”的误区。研究揭示领军企业正从工具级应用向生态级重构跃迁。AI 不仅是降本增效工具，更应嵌入企业决策闭环，实现深度协同与价值裂变。' },
      { type: 'heading', text: '重磅发布二：内容+AI 驱动品牌增长' },
      { type: 'paragraph', text: '特赞创始人范凌博士分享了品牌在 5 大经营场景、13 条内容链路上的实践。他强调 AI 是“革命的工具”，并提出了企业落地的四种路径：小步快跑（快速试错）、人本主义（赋能员工）、实用主义（注重结果）与全面拥抱（重构基础设施）。' },
      { type: 'heading', text: '跨界对谈：商业与技术的思维共振' },
      { type: 'paragraph', text: '峰会举行了四场高规格对谈。欧莱雅 CIO 赵枫、伊利数字中心总经理尚直虎、亚马逊云科技 CTO 刘亚霄、亿滋大中华区总裁范睿思等嘉宾，分别就 AI 加速拥抱、战略升级、技术底座革新及企业创新实践展开深度探讨。共识在于：AI 规模化的核心在于可扩展性（Scaling），且品牌需建立“AI 内容治理框架”以平衡效率与品牌价值。' }
    ]
  },
  'ev-wdcc-2025': {
    title: 'WDCC 2025 | 12个观点回看「创意的可计算性」',
    subtitle: '特赞亮相世界设计之都大会，范凌博士分享设计人工智能的 12 个关键思考，atypica.AI 入选十大时尚新品。',
    date: '2025-09-28',
    dateISO: '2025-09-28',
    category: 'events',
    content: [
      { type: 'heading', text: '设计无界，生生不息' },
      { type: 'paragraph', text: '2025年9月25日至28日，世界设计之都大会（WDCC2025）在上海举办。特赞科技携“创意的可计算性：设计人工智能”展区亮相，呈现人工智能如何赋能设计创意。同期“智能设计论坛”上，特赞创始人范凌博士分享了关于设计人工智能发展的 12 个核心观点。' },
      { type: 'heading', text: '核心观点：设计人工智能 2.0' },
      { type: 'paragraph', text: '范凌提出，设计人工智能已进入 2.0 阶段，特征是“应用为主”（90% 应用 vs 10% 研发）与“以用促研”。AI 应服务于设计师而非替代，它不再是挂在墙上的学科牌子，而是像地毯一样铺在地上的水平能力，赋能千行百业。' },
      { type: 'heading', text: '模拟：解决复杂问题的新范式' },
      { type: 'paragraph', text: '针对社会科学中的“复杂问题（Wicked Problems）”，生成式智能体提供了最佳解法——模拟。特赞旗下 atypica.AI 展示了如何通过模拟消费者行为，将市场研究成本降低 100 倍、速度提升 100 倍、覆盖群体增加 100 倍。' },
      { type: 'heading', text: '荣誉时刻' },
      { type: 'paragraph', text: '凭借在内容人工智能领域的先进实践，atypica.AI 入选 WDCC 2025“十大时尚新品”及“上海设计 100+”全球竞赛 TOP100，彰显了设计在技术革新产业基础层面的可持续发展实践。' }
    ]
  },
  'ev-design-ai-education-seminar': {
    title: '设计人工智能教育创新研讨会 | 四项发布与多方观点回顾',
    subtitle: '同济大学设计创意学院主办，汇聚学界与业界智慧，共商高校 AI 与设计教育结合的痛点难点。',
    date: '2025-07-26',
    dateISO: '2025-07-26',
    category: 'events',
    content: [
      { type: 'heading', text: '趋势与交叉：AI 重塑教育范式' },
      { type: 'paragraph', text: '2025年7月25-26日，由同济大学设计创意学院主办的“设计人工智能教育创新研讨会”顺利召开。同济大学副校长李翔宁、设计创意学院院长胡飞致辞，特赞创始人范凌做了题为《设计人工智能的教学与实践》的开场分享。' },
      { type: 'paragraph', text: '范凌提出，通过对“创意可计算性”的研究，设计创意的非理性部分反而能得到提升。教育应包容“异类”的探索精神，倡导在实践中与学生共同推进 AI 教育创新。来自复旦、交大、中传等高校的专家学者，围绕 AI 在商学、工程、广告等学科的交叉应用进行了深入探讨。' },
      { type: 'heading', text: '重磅发布一：人工智能与艺术创作教材' },
      { type: 'paragraph', text: '会上发布了《人工智能辅助艺术创作与设计应用基础》与《实战》两部新书。作为同济大学“十四五”规划重点教材，该套书构建了从技术原理到创意转化的系统知识框架，展示了 AI 工具如何协助艺术家和设计师实现流程优化。' },
      { type: 'heading', text: '重磅发布二：设计人工智能科研智能体' },
      { type: 'paragraph', text: '实验室发布了“设计人工智能科研智能体” (sheji.tezign.com)。该智能体聚焦高校师生在论文写作、课题申报中的需求，结合设计学科逻辑，提供从选题趋势分析到跨学科研究机会发现的智能辅助。' },
      { type: 'heading', text: '重磅发布三：创客松课程体系' },
      { type: 'paragraph', text: '设计人工智能实验室全新发布教学项目“创客松 101”。以“只有动手，才能创建未来”为理念，强调通过真实任务驱动教学。目前“创客松”已与 50+ 高校建立深度合作，惠及 10000+ 设计从业者与教育者。' },
      { type: 'heading', text: '建设与回响：一展一会的深度联动' },
      { type: 'paragraph', text: '同济设计学科带头人娄永琪在闭幕致辞中强调，教育应最大程度释放人的善意和潜能。本次研讨会与 WAIC 2025 “创意的可计算性”主题展形成有力呼应，全维度展示了“产业-学术-生态”的有机联动。' }
    ]
  },
  'ev-waic-2025': {
    title: 'WAIC 2025 | 特赞携手同济大学，呈现「创意的可计算性」产学研实践',
    subtitle: '7月26日-29日，特赞与同济大学设计创意学院联合参展，发布多款设计人工智能教学科研成果，打造智能体特别互动体验区。',
    date: '2025-07-29',
    dateISO: '2025-07-29',
    category: 'events',
    content: [
      { type: 'heading', text: '产学研深度融合：创意的可计算性' },
      { type: 'paragraph', text: '7月26日-29日，2025 世界人工智能大会（WAIC）在上海举办。特赞科技携手同济大学设计创意学院，以“创意的可计算性”为主线，通过展览、研讨、分享等多种形式，全方位呈现了产学研的专业声音与领先实践。展览旨在展示 AI 技术如何推动商业革新与社会进化，描绘产业、学术与生态的全景图谱。' },
      { type: 'heading', text: '视觉焦点：产教之树与全景描绘' },
      { type: 'paragraph', text: '在上海世博展览馆 H3 馆 D105 展位，特赞以三组极具视觉冲击力的“数字之树”为核心，共同勾勒出“产业-学术-生态”的融合全景。这一视觉装置不仅象征着 AI 生态的蓬勃生长，更承载了特赞与同济大学在设计人工智能领域的长期探索成果。' },
      { type: 'heading', text: '首度发布：设计人工智能科研成果' },
      { type: 'paragraph', text: '与大会展览相呼应，在同期举办的“设计人工智能教育创新研讨会”上，特赞与同济大学联合发布了多项重磅科研成果，包括设计人工智能教材、教学科研智能体以及创客松课程体系等。研讨会汇聚了学界与业界的智慧，共同探索 AI 与设计结合的未来人才培养创新路径，解决高校人工智能与设计教育结合的痛点。' },
      { type: 'heading', text: '沉浸体验：与商业研究智能体对话' },
      { type: 'paragraph', text: '展览现场特别设置了“智能体特别互动体验区”，重点展出了商业研究多智能体产品 atypica.AI。观众可以现场体验 atypica.AI 如何模拟消费者决策，通过真人智能体进行全自动访谈和分析。' },
      { type: 'paragraph', text: '从提出商业问题到获取洞察报告，数分钟内即可完成。这种“所见即所得”的互动体验，直观展示了人机协作在商业决策领域的巨大潜力与全新体验。' }
    ]
  },
  'ev-global-ai-hackathon': {
    title: '2025 全球 AI 黑客松 | AI 如何为真实场景带来价值？',
    subtitle: '特赞发起「为真实世界而创建」挑战赛，集结全球开发者 48 小时极速共创，五大获奖项目揭晓。atypica.AI 重磅升级亮相 WTCC。',
    date: '2025-10-27',
    dateISO: '2025-10-27',
    category: 'events',
    content: [
      { type: 'heading', text: '48小时人机共创：为真实世界而创建' },
      { type: 'paragraph', text: '2025年10月24日至26日，「全球AI黑客松」在2025 西岸国际科技消费嘉年华（WTCC）启幕。特赞科技 Tezign 发起，携手全球共建者带来一场面向全球的 AI 黑客松挑战赛。以 “AI for Real-World Impact（为真实世界而创建）” 为主题，吸引了来自全球的开发者、设计师、研究者与创业团队，在 48 小时高强度人机共创中，用 AI 开发出具备实际应用潜力的创新原型。' },
      { type: 'paragraph', text: '活动吸引了上百位来自全球各地的 AI 创建者参与，设立五大赛道，涵盖生产力、商业增长、创意生成、社会创新与 AI 治理。百万级奖金池、算力支持与孵化通道向参赛队伍开放，推动项目从原型到商业化落地。' },
      { type: 'heading', text: '五大奖项揭晓：从原型到商业落地' },
      { type: 'paragraph', text: '最终，五组项目脱颖而出，拿下四项专项奖和一项全场大奖：' },
      { type: 'paragraph', text: '• 「年度创建者奖」：企业隐私合规检测助手 (AI Privacy & Compliance Copilot)' },
      { type: 'paragraph', text: '• 「最佳场景落地奖」：Frozen Spark 让创意即刻看得见' },
      { type: 'paragraph', text: '• 「最佳技术突破奖」：DealMate 成交伙伴' },
      { type: 'paragraph', text: '• 「最佳创新表达奖」：Sheji 科研智能体' },
      { type: 'paragraph', text: '• 「最佳公共价值奖」：SmartEye 智眼' },
      { type: 'heading', text: 'atypica.AI 重磅升级：让 AI 走进决策体系' },
      { type: 'paragraph', text: '此外，在 WTCC 新品发布舞台，特赞旗下 atypica.AI 发布了多项重磅升级——真正具备理解、推理与判断能力的多智能体商业研究系统，让 AI 正式走进企业的知识与决策体系。' },
      { type: 'paragraph', text: '1. AI Persona（AI 角色模拟）：可基于访谈记录生成高度拟真的消费者角色，模拟真实用户的思考与选择。' },
      { type: 'paragraph', text: '2. AI Interview（AI 访谈系统）：让 AI 智能访谈员与真实用户和 AI 人设进行高并发专业访谈，自动完成提问追问与洞察提炼。' },
      { type: 'paragraph', text: '3. 研究模型升级：自动进行意图澄清，根据研究目标选择应用合适的商业分析框架（如 JTBD、STP、SWOT 等），生成结构更清晰、逻辑更完整的“Next Step”研究报告。' },
      { type: 'heading', text: '科技 CEO 对话：特赞的第十年' },
      { type: 'paragraph', text: '在 WTCC 特设的「科技 CEO 栏目」中，SMG 当家花旦陈辰对话特赞创始人兼 CEO 范凌博士。范凌提到，特赞早在 8 年前便已开始探索 AI 在内容场景中的应用。随着技术成熟，多模态模型的进步促使特赞重构了所有技术栈。' },
      { type: 'quote', text: '人工智能具备算力、算法和数据三大支柱，此外，应用场景也极为重要。目前，模型是通过公开数据进行训练的。然而，有相当一部分数据存在于企业场景中，即专有数据（proprietary data），这部分数据在特赞搭建的内容 + AI 系统中得到了高效管理和利用。', author: '范凌' },
      { type: 'paragraph', text: '“To Build & Create（创建）”是特赞的价值观。AI 不应止于算法生成，而应成为建设真实世界的力量。在 AI 加速重塑产业的今天，特赞将持续探索如何让 AI 的创造力，真正成为推动商业与社会进步的生产力。' }
    ]
  },
  'mp-wenhui-young-creators': {
    title: '文汇报 | 敢闯敢创的年轻人是上海的底气和未来',
    subtitle: '牢记习近平总书记嘱托，在人工智能创新图谱上深耕突破。特赞创始人范凌讲述如何助力上海成为 AI 技术与应用的全球标杆。',
    date: '2025-05-04',
    dateISO: '2025-05-04',
    category: 'media_press',
    content: [
      { type: 'heading', text: '牢记习近平总书记嘱托，在人工智能创新图谱上深耕突破' },
      { type: 'paragraph', text: '4月29日，习近平总书记在上海考察，来到位于徐汇区的上海“模速空间”大模型创新生态社区调研，同正在参加“下一代智能体的自主进化”主题沙龙的青年创新人才亲切交流。' },
      { type: 'paragraph', text: '从大学实验室里彻夜不熄的灯火，到科创园区内的组团头脑风暴，在上海的人工智能创新图谱上，有人深耕技术突破“卡脖子”难题，有人勇闯应用蓝海定义新场景。这些投身创新创业浪潮的年轻人，正是上海牢记总书记嘱托，不断增强科技创新策源功能和高端产业引领功能，加快建成具有全球影响力的科技创新高地的底气所在。' },
      { type: 'heading', text: '独角兽企业创始人的梦想：助力上海成为AI技术与应用的全球标杆' },
      { type: 'paragraph', text: '在位于徐汇滨江的“模速空间”大模型创新生态社区，特赞科技是人工智能“北斗七星”的七家标杆企业之一，它的创始人正是来自同济大学设计创意学院的范凌教授。2022年，这家“内容+AI（人工智能）”的独角兽企业，就“跑”出全球领先的速度。如今，特赞科技已完成D1轮融资，估值超过10亿美元。' },
      { type: 'paragraph', text: '给企业取名“特赞”，是因为范凌一直有一个梦想：这位长期在同济教学生做设计的年轻老师，希望能把科技引入到创意设计领域，所以，特赞的英文名叫Tezign，即Tech+Design，寓意“技术+设计”。' },
      { type: 'paragraph', text: '在他的带领下，特赞科技在人工智能赛道上成绩斐然：其内容生态已聚集10万+创作者，年调用AIGC（人工智能生成内容）模型超百万次；核心技术累计申请了160余项生成式AI发明专利、40余项软件著作权，并完成5项算法备案；支持200多家大中型企业实现内容数智化变革，包括为国际奥委会、联合国教科文组织、阿里巴巴等200余家组织和企业提供数智化解决方案。' },
      { type: 'quote', text: '放眼未来，我们希望让更多的设计师、创意人或者更广义的创作者能与AI共生、共荣、共创，助力上海成为人工智能技术与应用领域的全球标杆。', author: '范凌' },
      { type: 'paragraph', text: '如今细想，特赞科技这艘“设计AI战舰”的龙骨，早在8年前便在同济大学设计人工智能实验室铸就。作为国内首个设计学与人工智能交叉实验室，这里汇聚了30余名跨学科研究员。创新，刻在大学的基因里；活跃在大学里的年轻人，是创新的关键力量。' }
    ]
  },
  'mp-the-paper-ai-work': {
    title: '澎湃新闻 | 特赞科技范凌：现在AI主要是“说话”，接下来要“干活”了',
    subtitle: '深度对话“北斗七星”标杆企业：算力将从训练转向推理，AI 将从辅助对话走向解决复杂问题的“干活”时代。',
    date: '2025-05-12',
    dateISO: '2025-05-12',
    category: 'media_press',
    content: [
      { type: 'heading', text: 'AI 迈入闪耀时刻：徐汇“北斗七星”' },
      { type: 'paragraph', text: '4月29日，习近平总书记在上海考察“模速空间”。徐汇区已形成“北斗列阵”+“群星闪耀”的 AI 生态布局。特赞科技作为“北斗七星”标杆企业之一，是一家专注“内容+人工智能”的独角兽企业，致力于打造企业级内容人工智能平台。' },
      { type: 'heading', text: '从“左脑”到“右脑”：释放 AI 的创造力' },
      { type: 'paragraph', text: '特赞创始人范凌拥有哈佛博士学位，曾任教于伯克利。他提出，人有左脑（逻辑、更强）和右脑（人文、艺术）。目前 AI 大部分精力集中在“左脑”开发，而特赞致力于挖掘 AI 的“右脑”潜力——将科技引入创意领域，让内容创意与技术创新结合释放生产力。' },
      { type: 'heading', text: '未来趋势：AI 要开始“干活”了' },
      { type: 'quote', text: '现在的 AI 还是在“说话”，而不是“干活”。接下来 3~5 年，算力会更多被用在解决问题上。如果说以前是在 Training（训练）上，后边可能是在 Reasoning（推理）上。', author: '范凌' },
      { type: 'paragraph', text: '范凌认为，多模态大模型更是指能“调用各种工具”的多模态。谁能成功地让人类和工具实现高效协作，谁就能拥有源源不断的商业机会。AI 不可避免地将取代一部分“存量工作”，但也会创造更多“增量工作”。' },
      { type: 'heading', text: '关于数据主权与“知识寡头”的思考' },
      { type: 'paragraph', text: '范凌表达了对 AI 治理风险的关注。他从“公有云”信仰者转变为关注数据资产安全：企业和个人的私有数据如何保护？如何避免大模型形成“知识寡头”或“信息寡头”？特赞在短期内将加强技术能力，帮助企业将非结构化数据真正转化为私有的数据资产。' }
    ]
  },
  'mp-nextgen-tech-30': {
    title: 'NextGen Tech 30 | 特赞获评亚洲最具全球增长潜力科技企业',
    subtitle: '从数百家参选企业中脱颖而出，特赞凭借在人工智能领域的商业落地与全球化潜质，荣登 NextGen Tech 30 年度榜单。',
    date: '2025-09-17',
    dateISO: '2025-09-17',
    category: 'media_press',
    content: [
      { type: 'heading', text: '亚洲最具潜力：特赞入选 NextGen Tech 30' },
      { type: 'paragraph', text: '9月16日，由 Granite Asia、新加坡交易所（SGX Group）携手主权基金、投资机构及行业领袖共同发起的 NextGen Tech 30 年度榜单在新加坡正式揭晓。特赞科技 Tezign 凭借在 AI 领域的创新实践与显著的增长潜力，从数百家参选企业中脱颖而出，成功入选“亚洲最具全球增长潜力的高成长科技企业”。' },
      { type: 'heading', text: '权威背书：数百家提名，仅 30 家入选' },
      { type: 'paragraph', text: '该奖项由国际知名投资机构 Granite Asia 发起，是衡量亚洲新一代科技企业竞争力与发展潜能的重要风向标。榜单旨在表彰那些以突破性技术驱动商业创新、并具备全球成长潜力的公司。竞争异常激烈，最终仅有 30 家公司能获此殊荣。' },
      { type: 'heading', text: '评估维度 (Evaluation Criteria)' },
      { type: 'paragraph', text: '评审团涵盖顶级投资人、行业专家及政府代表，评估维度横跨：' },
      { type: 'paragraph', text: '• 创新力与技术突破' },
      { type: 'paragraph', text: '  企业是否构建了具有颠覆性的技术护城河与可持续的商业模式。' },
      { type: 'paragraph', text: '• 市场规模化能力' },
      { type: 'paragraph', text: '  考察技术在真实商业场景中的落地效率与可扩展性。' },
      { type: 'paragraph', text: '• 全球化潜质' },
      { type: 'paragraph', text: '  衡量企业跨越地域界限、服务全球客户的增长潜力。' },
      { type: 'heading', text: '长期价值的认可' },
      { type: 'paragraph', text: '入选 NextGen Tech 30 不仅是荣誉，更代表了资本市场与生态系统对特赞长期价值的认可。作为人工智能驱动创意与内容科技的领先企业，特赞在激烈竞争中脱颖而出，背后是多年来对 AI 技术与商业落地的持续投入。这也标志着特赞在以人工智能助力企业数字化转型的道路上，获得了国际视野的权威肯定。' }
    ]
  },
  'mp-gartner-cool-vendor': {
    title: 'Gartner | 国内唯一入选：特赞获评 2024 中国 GenAI 原生应用 Cool Vendor',
    subtitle: '作为生成式人工智能领域仅有的 3 家 Cool Vendors 之一，特赞凭借企业级智能体（GEA）系统带来的独特性与颠覆性潜力获此殊荣。',
    date: '2025-01-13',
    dateISO: '2025-01-13',
    category: 'media_press',
    content: [
      { type: 'heading', text: '国内唯一入选：特赞获评 Gartner Cool Vendor' },
      { type: 'paragraph', text: '近日，全球权威技术研究与咨询公司 Gartner 发布《Cool Vendors in GenAI Native Applications, China》（2024 中国生成式人工智能原生应用领域的酷厂商）。在竞争激烈的 GenAI 原生应用市场中，特赞科技 Tezign 脱颖而出，成为该领域仅有的 3 家 Cool Vendors 之一，也是国内唯一入选的企业级智能体（Enterprise Agent）解决方案提供商。' },
      { type: 'paragraph', text: 'Cool Vendors 是 Gartner 最具影响力的研究报告之一，以筛选标准严苛著称。入选公司必须提供“新颖、创新且具有未来颠覆性”的技术或服务。此次入选，是对特赞在利用 GEA（Generative Enterprise Agent）重塑企业生产力、构建企业级上下文（Context）方面创新实践的权威背书。' },
      { type: 'heading', text: '为什么酷 (Why Cool)' },
      { type: 'paragraph', text: 'Gartner 在报告中重点指出了特赞的独特性：特赞不仅仅提供工具，而是通过构建企业级智能体系统（GEA），将 GenAI 无缝集成到企业的核心业务流中。' },
      { type: 'paragraph', text: '特赞提供了一套融合了创意推理、数字资产管理（DAM）与智能分发的完整架构。通过利用企业存储在 DAM 中的现有内容沉淀“机构记忆”（Context），特赞使企业能够将静态的品牌资产转化为可被 AI 持续调用、复用的动态生产力。' },
      { type: 'paragraph', text: '利用先进的大语言模型（LLM）和多模态生成技术，特赞将传统劳动密集型的内容创作转变为自动化、可扩展的智能体工作流。这种方法使企业客户能够在扩大生产规模的同时，保持严格的品牌一致性，有效平衡了数量、成本和质量这三个关键挑战。' },
      { type: 'paragraph', text: '特赞的核心创新在于其通过 GEA 重塑了企业利用数字资产的方式。它不仅解决了预算敏感环境下的痛点，更有望重新定义企业如何利用 AI 挖掘其数字资产的深层价值。' },
      { type: 'heading', text: '谁应该关心 (Who Should Care)' },
      { type: 'paragraph', text: '• 首席营销官 (CMO)' },
      { type: 'paragraph', text: '  旨在为社交媒体和电商平台扩大内容生产规模，并授权一线团队使用符合品牌规范的内容。' },
      { type: 'paragraph', text: '• 销售或零售领导者' },
      { type: 'paragraph', text: '  希望利用高质量内容驱动线下流量和线上转化。' },
      { type: 'paragraph', text: '• 首席数字官 (CDO) / CIO' },
      { type: 'paragraph', text: '  有兴趣利用 AI 进行数字化转型，构建企业级智能基础设施的决策者。' },
      { type: 'heading', text: '行业趋势：从狂热走向务实' },
      { type: 'paragraph', text: 'Gartner 指出，GenAI 正从“期望膨胀期”走向“务实应用期”。企业不再满足于 AI 的噱头，而是关注其能为组织带来的实际价值。特赞的入选，正是因为其实实在在地解决了企业在 GenAI 落地过程中的具体业务问题——如何让 AI 懂业务、守规则、出结果。' }
    ]
  },
  'mp-peoples-daily-agent': {
    title: '人民日报 | 范凌：释放人工智能的“右脑”潜力',
    subtitle: '在“全国科技工作者日”特别策划中，特赞创始人范凌讲述如何通过技术与创意的结合，释放 AI 在人文、设计与艺术领域的潜力。',
    date: '2025-05-30',
    dateISO: '2025-05-30',
    category: 'media_press',
    content: [
      { type: 'heading', text: '弘扬科学家精神' },
      { type: 'paragraph', text: '习近平总书记指出，希望广大科技工作者自觉把学术追求融入建设科技强国的伟大事业，锐意进取、追求卓越，创造出无愧时代、不负人民的新业绩！' },
      { type: 'paragraph', text: '近年来，我国科技创新成果不断涌现，离不开广大科技工作者的协力潜心攻关。5月30日是第九个“全国科技工作者日”，人民日报采访了4位科技工作者，听他们讲述努力攻关、锐意创新的故事。' },
      { type: 'quote', text: '人工智能是年轻的事业，也是年轻人的事业。我们正在全面推进强国建设、民族复兴伟业，正是年轻一代展示才华、大显身手的好时候。', author: '习近平' },
      { type: 'heading', text: '释放人工智能的“右脑”潜力' },
      { type: 'paragraph', text: '华灯初上，上海徐汇区“模速空间”特赞科技实验室，一派繁忙景象，键盘的敲击声、热烈的讨论声此起彼伏。范凌正在和几名同济大学设计创意学院的研究生讨论最新产品的测试情况。这里不只是特赞科技公司的办公地点，也是同济大学设计人工智能实验室。在这里，一群年轻人专注于企业级内容人工智能平台的研发，帮助企业实现更高效的内容生产、分析、分发和管理。' },
      { type: 'paragraph', text: '我们是一家致力于人工智能赋能企业内容的公司，希望通过技术和创意的结合，搭建企业级内容人工智能平台。其中，最核心的技术是内容的理解和生成，就是把图文、视频等非结构化数据，用大语言模型进行推理、解析，最终产出用户需要的内容。' },
      { type: 'paragraph', text: '有研究显示，人的左脑控制逻辑运算，右脑则主导人文、设计、艺术。目前，人工智能大部分技术集中在“左脑”开发上，“右脑”的潜力还没有被充分挖掘出来。我们的努力方向，就是释放人工智能的“右脑”潜力，通过大量的数据积累，形成创意设计的基础开源数据集，促使人工智能平台更高效地理解并优化内容生产。' },
      { type: 'paragraph', text: '近年来，我们与同济大学联合成立了同济大学设计人工智能实验室，组建了涵盖设计学、计算机科学、认知科学、数字人文、管理科学等多个学科背景的研究团队，大家围绕“内容+人工智能”共同攻关。目前，团队已构建了多层次的教学体系，开发了30多个课程模块，把人工智能技术放到教学场景中，在优化技术的同时培养创新人才。' },
      { type: 'paragraph', text: '今年4月，在大家的共同努力下，我们发布了商业研究智能体 atypica.AI，通过模拟人类决策中的非结构化思维路径，实现开放式商业问题推演。' },
      { type: 'paragraph', text: '科技创新前景广阔，人工智能方兴未艾。持续拓展技术的边界，培养更多有创造力的年轻人，这是我们的努力方向。' }
    ]
  }
};

const REAL_NEWS_EN = {
  'ev-aigc-creator-conference': {
    title: 'Digital Design: AIGC Creator Conference | A Gathering of 1000+ Innovators',
    subtitle: 'Hosted by Tezign, maximizing two-way interaction among scientific, artistic, business, and tech leaders in a non-stop AIGC feast.',
    date: '2023-05-08',
    dateISO: '2023-05-08',
    category: 'events',
    content: [
      { type: 'heading', text: 'A Full-Day Feast: 1,000 Creators Gathering' },
      { type: 'paragraph', text: 'The "Digital Design: AIGC Creator Conference" recently concluded successfully. Initiated by Tezign, this grand event gathered over 1,000 AIGC creators for a meeting of "maximized two-way interaction." The non-stop content feast covered the full spectrum from underlying computing power to upper-layer applications, and from academic research to commercial implementation.' },
      { type: 'heading', text: 'Multidimensional Collision: 20+ Themes Redefining AIGC' },
      { type: 'paragraph', text: 'The conference featured an incredibly rich array of thematic sessions. In "AIGC & Science," scientists discussed how AI is moving towards a new scientific revolution. In "Artistic Inspiration," professors from CCOM and ZJU demonstrated how AI "hears everything" and generates music. In "Business Opportunities" and "Venture Capital," investors from top firms like Sequoia China and GL Ventures discussed the constants and changes in the AI era with entrepreneurs.' },
      { type: 'paragraph', text: 'Tezign Founder Fan Ling and Microsoft Accelerator North Asia CEO Zhou Jian explored opportunities for entrepreneurs and jointly launched the "AIGC Entrepreneurship Program" to provide stronger support for innovators in the AI field.' },
      { type: 'heading', text: 'Creator Ecosystem: Infinite Possibilities of Human-Machine Collaboration' },
      { type: 'paragraph', text: 'In the "AIGC & Creators" session, Ding Xindong, Head of Tezign MuseAI, released "Muse: The Operating System for AIGC Creators," redefining next-generation creative tools. Professor Lou Yongqi, Vice President of Tongji University, posed the profound question: "Where is Creativity Going in the AIGC Era?"' },
      { type: 'paragraph', text: 'The event also gathered nearly 20 pioneer Creators, from experimental film directors to virtual space architects. Through vivid demos and sharing, they demonstrated how AIGC empowers individuals, making "Human-Machine Collaboration" the key to unlocking imagination.' }
    ]
  },
  'ev-ceibs-tezign-summit': {
    title: 'CEIBS x Tezign | "AI + Business Evolution" Summit & Dual Whitepapers',
    subtitle: 'Gathering 700+ decision makers to decode AI implementation paradigms with blueprints for business evolution and brand growth.',
    date: '2025-03-21',
    dateISO: '2025-03-21',
    category: 'events',
    content: [
      { type: 'heading', text: 'Dual Drive of Top-Level Design and Industry Practice' },
      { type: 'paragraph', text: 'On March 21, the "AI + Business Evolution" summit, co-hosted by CEIBS and Tezign, was held in Shanghai. The event released two major whitepapers: "AI is the New Oxygen" and "Content + AI Drives Brands’ Growth". Over 700 enterprise decision-makers gathered to discuss how AI reconstructs business paradigms.' },
      { type: 'heading', text: 'Dean\'s Address: AI as the Core Engine' },
      { type: 'paragraph', text: 'CEIBS Dean Wang Hong emphasized that AI has become the core engine of strategic emerging industries. Facing technological breakthroughs like DeepSeek and international competition, China urgently needs to build an independent innovation ecosystem through industry-academia integration. CEIBS is integrating AI modules into its curriculum to create a "Business Wisdom + AI Technology" training model.' },
      { type: 'heading', text: 'Release 1: Blueprint for Business Evolution' },
      { type: 'paragraph', text: 'Professor Wang Qi released the whitepaper, stating that enterprise AI application must move beyond concepts to practical results. Leading companies are transitioning from tool-level applications to ecosystem-level restructuring. AI should be embedded into decision-making loops to achieve deep synergy and value fission.' },
      { type: 'heading', text: 'Release 2: Content + AI Drives Growth' },
      { type: 'paragraph', text: 'Tezign Founder Dr. Fan Ling shared practices across 13 content links in 5 operational scenarios. He emphasized AI as a "revolutionary tool" and outlined four implementation paths: Quick Wins, Human-Centric, Pragmatic, and Infrastructure Rebuild.' },
      { type: 'heading', text: 'Cross-Border Dialogues' },
      { type: 'paragraph', text: 'The summit featured four high-level dialogues with executives from L\'Oreal, Yili, AWS, and Mondelēz. Discussions focused on accelerating AI adoption, strategic upgrades, technological foundations, and innovation practices. The consensus was that AI scalability and content governance frameworks are key to successful implementation.' }
    ]
  },
  'ev-wdcc-2025': {
    title: 'WDCC 2025 | 12 Perspectives on "Computability of Creativity"',
    subtitle: 'Tezign at World Design Capital Conference. Dr. Fan Ling shares 12 key insights on Design AI. atypica.AI selected as Top 10 Fashion Innovation.',
    date: '2025-09-28',
    dateISO: '2025-09-28',
    category: 'events',
    content: [
      { type: 'heading', text: 'Design Beyond Boundaries' },
      { type: 'paragraph', text: 'From September 25-28, 2025, the World Design Capital Conference (WDCC2025) was held in Shanghai. Tezign presented the "Computability of Creativity: Design AI" exhibition, showcasing how AI empowers design creativity and extends the vitality of industries.' },
      { type: 'heading', text: 'Core Insights: Design AI 2.0' },
      { type: 'paragraph', text: 'Dr. Fan Ling shared 12 key insights at the "Intelligent Design Forum". He proposed that Design AI 2.0 is application-driven (90% Application vs 10% R&D), emphasizing "Use-driven Research". AI should serve designers rather than replace them, acting as a horizontal capability empowering various industries.' },
      { type: 'heading', text: 'The Computability of Creativity' },
      { type: 'paragraph', text: 'Human development is a process of making things computable. For "Wicked Problems" in social sciences, generative agents (like atypica.AI) offer the best solution through simulation, reducing market research costs by 100x and increasing speed by 100x.' },
      { type: 'heading', text: 'Honors & Awards' },
      { type: 'paragraph', text: 'With advanced practices in Content AI, Tezign\'s atypica.AI was selected as one of the "Top 10 Fashion Innovations" at WDCC 2025 and "Shanghai Design 100+" Top 100 globally, highlighting sustainable development practices in technology-driven industrial innovation.' }
    ]
  },
  'ev-design-ai-education-seminar': {
    title: 'Design AI Education Seminar | 4 Major Launches & Expert Insights',
    subtitle: 'Hosted by Tongji University D&I, gathering academic and industry wisdom to discuss the future of AI and design education.',
    date: '2025-07-26',
    dateISO: '2025-07-26',
    category: 'events',
    content: [
      { type: 'heading', text: 'Trends & Intersection: AI Reshaping Education' },
      { type: 'paragraph', text: 'On July 25-26, 2025, the "Design AI Education Innovation Seminar" was held at Tongji University. Dr. Fan Ling, Director of the Design AI Lab, shared insights on "Teaching and Practice of Design AI," emphasizing that studying the "computability of creativity" enhances the non-rational aspects of design.' },
      { type: 'heading', text: 'Launch 1: AI & Art Creation Textbooks' },
      { type: 'paragraph', text: 'Two new textbooks were released: "Fundamentals" and "Practice" of AI-Assisted Art Creation. Recommended by academicians, these books build a systematic framework from technical principles to creative transformation.' },
      { type: 'heading', text: 'Launch 2: Design AI Research Agent' },
      { type: 'paragraph', text: 'The lab unveiled the "Design AI Research Agent." Focusing on academic needs like thesis writing and topic selection, it combines design discipline logic to provide intelligent assistance in literature review and methodology.' },
      { type: 'heading', text: 'Launch 3: Hackathon Curriculum' },
      { type: 'paragraph', text: 'The "Makerthon 101" project was launched with the philosophy "Only by doing can we create the future." It emphasizes task-driven teaching and has already collaborated with 50+ universities.' },
      { type: 'heading', text: 'Echoes: Exhibition & Seminar Linkage' },
      { type: 'paragraph', text: 'Lou Yongqi, leader of the Tongji Design discipline, closed the event by stating that education should unleash human potential. This seminar echoed the "Computability of Creativity" exhibition at WAIC 2025, demonstrating the organic linkage of industry, academia, and ecosystem.' }
    ]
  },
  'ev-waic-2025': {
    title: 'WAIC 2025 | Tezign x Tongji University Present "Computability of Creativity"',
    subtitle: 'From July 26-29, Tezign and Tongji D&I showcased industry-academia practices, released AI design curriculum, and hosted agent interactive zones.',
    date: '2025-07-29',
    dateISO: '2025-07-29',
    category: 'events',
    content: [
      { type: 'heading', text: 'Deep Integration: The Computability of Creativity' },
      { type: 'paragraph', text: 'From July 26th to 29th, the 2025 World Artificial Intelligence Conference (WAIC) was held in Shanghai. Tezign Technology, in collaboration with Tongji University College of Design and Innovation, presented professional voices and leading practices under the theme "Computability of Creativity." Through exhibitions and seminars, the event showcased how AI technology drives business innovation and social evolution, depicting a panoramic view of industry, academia, and the ecosystem.' },
      { type: 'heading', text: 'Visual Focus: The Tree of Production & Education' },
      { type: 'paragraph', text: 'At Booth H3-D105 in the Shanghai World Expo Exhibition & Convention Center, Tezign created a visual centerpiece with three "Digital Trees," outlining the fusion of "Industry-Academia-Ecosystem." This installation symbolizes the flourishing AI ecosystem and carries the long-term exploration results of Tezign and Tongji University in Design AI.' },
      { type: 'heading', text: 'First Release: Design AI Research Outcomes' },
      { type: 'paragraph', text: 'Echoing the exhibition, multiple major research outcomes were released at the concurrent "Design AI Education Innovation Seminar," including Design AI textbooks, teaching research agents, and hackathon curriculum systems. The seminar gathered wisdom from academia and industry to explore innovative paths for talent cultivation combining AI and design.' },
      { type: 'heading', text: 'Immersive Experience: Dialogue with Business Research Agents' },
      { type: 'paragraph', text: 'A special "Agent Interactive Experience Zone" was set up at the exhibition, highlighting the commercial research multi-agent product, atypica.AI. Visitors could experience how atypica.AI simulates consumer decision-making and conducts fully automated interviews and analysis through realistic agents.' },
      { type: 'paragraph', text: 'From posing a business question to obtaining an insight report, the process takes only minutes. This "What You See Is What You Get" interaction intuitively demonstrated the immense potential and new experience of human-machine collaboration in business decision-making.' }
    ]
  },
  'ev-global-ai-hackathon': {
    title: '2025 Global AI Hackathon | AI for Real-World Impact',
    subtitle: 'Tezign hosted the "AI for Real-World Impact" challenge at WTCC 2025. Developers worldwide gathered for 48 hours of co-creation. atypica.AI unveiled major upgrades.',
    date: '2025-10-27',
    dateISO: '2025-10-27',
    category: 'events',
    content: [
      { type: 'heading', text: '48-Hour Co-Creation: AI for Real-World Impact' },
      { type: 'paragraph', text: 'From October 24 to 26, 2025, the "Global AI Hackathon" kicked off at the West Bund International Tech Consumption Carnival (WTCC). Hosted by Tezign, the event brought together global builders for a 48-hour challenge themed "AI for Real-World Impact." Developers, designers, researchers, and startups from around the world gathered to create innovative prototypes with practical application potential.' },
      { type: 'paragraph', text: 'The event attracted hundreds of AI creators and featured five major tracks: Productivity, Business Growth, Creative Generation, Social Innovation, and AI Governance. With a million-level prize pool, computing power support, and incubation channels, the hackathon aimed to push projects from prototypes to commercialization.' },
      { type: 'heading', text: 'Award Winners: From Prototype to Commercialization' },
      { type: 'paragraph', text: 'Five teams stood out, winning four special awards and one Grand Prize:' },
      { type: 'paragraph', text: '• Creator of the Year: AI Privacy & Compliance Copilot' },
      { type: 'paragraph', text: '• Best Scenario Implementation: Frozen Spark - Visualize Creativity Instantly' },
      { type: 'paragraph', text: '• Best Technical Breakthrough: DealMate' },
      { type: 'paragraph', text: '• Best Innovation Expression: Sheji Research Agent' },
      { type: 'paragraph', text: '• Best Public Value: SmartEye' },
      { type: 'heading', text: 'atypica.AI Upgrade: AI in Decision Systems' },
      { type: 'paragraph', text: 'At the WTCC product launch stage, Tezign unveiled major upgrades to atypica.AI—a multi-agent business research system with true understanding, reasoning, and judgment capabilities, officially bringing AI into enterprise knowledge and decision-making systems.' },
      { type: 'paragraph', text: '1. AI Persona: Generates highly realistic consumer personas based on interview records to simulate real user thinking and choices.' },
      { type: 'paragraph', text: '2. AI Interview: Enables AI interviewers to conduct high-concurrency professional interviews with real users and AI personas, automatically completing questioning and insight extraction.' },
      { type: 'paragraph', text: '3. Research Model Upgrade: Automatically clarifies intent, selects appropriate business analysis frameworks (like JTBD, STP, SWOT) based on research goals, and generates structured "Next Step" research reports.' },
      { type: 'heading', text: 'Tech CEO Dialogue: Tezign\'s 10th Year' },
      { type: 'paragraph', text: 'In the WTCC "Tech CEO" segment, SMG host Chen Chen engaged in a dialogue with Dr. Fan Ling, Founder and CEO of Tezign. Fan Ling mentioned that Tezign began exploring AI in content scenarios 8 years ago. With the maturity of technology, the progress of multimodal models has prompted a reconstruction of Tezign\'s tech stack.' },
      { type: 'quote', text: 'AI has three pillars: computing power, algorithms, and data. In addition, application scenarios are extremely important. Currently, models are trained on public data. However, a significant amount of data exists within enterprise scenarios—proprietary data. This data is efficiently managed and utilized in the Content + AI system built by Tezign.', author: 'Fan Ling' },
      { type: 'paragraph', text: '"To Build & Create" is Tezign\'s value. AI should not stop at algorithmic generation but become a force for building the real world. As AI accelerates industrial reshaping, Tezign will continue to explore how to turn AI creativity into productivity that drives business and social progress.' }
    ]
  },
  'mp-wenhui-young-creators': {
    title: 'Wenhui Daily | Young Creators Are Shanghai\'s Confidence and Future',
    subtitle: 'Bearing in mind General Secretary Xi Jinping\'s instructions to cultivate breakthroughs in AI. Tezign founder Fan Ling discusses how to help Shanghai become a global benchmark for AI technology and application.',
    date: '2025-05-04',
    dateISO: '2025-05-04',
    category: 'media_press',
    content: [
      { type: 'heading', text: 'Deepening Breakthroughs in the AI Innovation Landscape' },
      { type: 'paragraph', text: 'On April 29, General Secretary Xi Jinping visited Shanghai and inspected the "Model Speed Space" (Mosu Space) large model innovation ecosystem community in Xuhui District, engaging in cordial exchanges with young innovative talents participating in the "Autonomous Evolution of Next-Generation Agents" salon.' },
      { type: 'paragraph', text: 'From the lights burning all night in university laboratories to group brainstorming sessions in science and innovation parks, young people are cultivating breakthroughs in Shanghai\'s AI innovation landscape. These young people who have thrown themselves into the wave of innovation and entrepreneurship are the source of confidence for Shanghai to accelerate its build into a globally influential science and technology innovation center.' },
      { type: 'heading', text: 'The Dream of a Unicorn Founder: Helping Shanghai Become a Global AI Benchmark' },
      { type: 'paragraph', text: 'Located in the "Model Speed Space" in Xuhui West Bund, Tezign is one of the seven benchmark companies of the AI "Big Dipper". Its founder is Professor Fan Ling from the College of Design and Innovation at Tongji University. By 2022, this "Content + AI" unicorn enterprise had already run at a world-leading speed. Today, Tezign has completed Series D1 financing with a valuation exceeding $1 billion.' },
      { type: 'paragraph', text: 'The company was named "Tezign" because Fan Ling always had a dream: as a young teacher who had long taught students design at Tongji, he hoped to introduce technology into the field of creative design. Thus, the English name Tezign stands for Tech + Design.' },
      { type: 'paragraph', text: 'Under his leadership, Tezign has achieved remarkable results in the AI track: its content ecosystem has gathered over 100,000 creators, with annual calls to AIGC (AI-Generated Content) models exceeding one million; its core technology has accumulated over 160 generative AI invention patent applications and over 40 software copyrights; it supports over 200 large and medium-sized enterprises in achieving digital intelligence transformation of content, including providing solutions for organizations like the IOC, UNESCO, and Alibaba.' },
      { type: 'quote', text: 'Looking to the future, we hope to enable more designers, creatives, or creators in a broader sense to co-exist, co-prosper, and co-create with AI, helping Shanghai become a global benchmark for AI technology and application.', author: 'Fan Ling' },
      { type: 'paragraph', text: 'The keel of Tezign\'s "Design AI Battleship" was cast as early as 8 years ago in the Tongji University Design Artificial Intelligence Lab. As the first interdisciplinary laboratory of design and AI in China, it has gathered over 30 interdisciplinary researchers. Innovation is engraved in the genes of the university; young people active in the university are the key force of innovation.' }
    ]
  },
  'mp-the-paper-ai-work': {
    title: 'The Paper | Fan Ling: AI is currently mostly "talking", next it needs to "work"',
    subtitle: 'In-depth dialogue with "Big Dipper" benchmark enterprise: Computing power will shift from Training to Reasoning, and AI will move from conversation to solving complex problems.',
    date: '2025-05-12',
    dateISO: '2025-05-12',
    category: 'media_press',
    content: [
      { type: 'heading', text: 'AI\'s Shining Moment: Xuhui "Big Dipper"' },
      { type: 'paragraph', text: 'On April 29, General Secretary Xi Jinping inspected the "Model Speed Space" in Shanghai. Tezign Technology, as one of the "Big Dipper" benchmark enterprises in Xuhui\'s AI ecosystem, is a unicorn focused on "Content + AI", dedicated to building an enterprise-level content AI platform.' },
      { type: 'heading', text: 'From "Left Brain" to "Right Brain": Unleashing AI Creativity' },
      { type: 'paragraph', text: 'Fan Ling, founder of Tezign, holds a PhD from Harvard and taught at Berkeley. He proposes that while current AI focuses on "left brain" (logic, speed), Tezign is dedicated to tapping into AI\'s "right brain" potential (humanities, art). Tezign combines technology with creative design to unleash productivity.' },
      { type: 'heading', text: 'Future Trend: AI Needs to Start "Working"' },
      { type: 'quote', text: 'Current AI is still "talking" rather than "working". In the next 3-5 years, computing power will be increasingly used for problem-solving. It will shift from Training to Reasoning.', author: 'Fan Ling' },
      { type: 'paragraph', text: 'Fan Ling believes multimodal large models imply the ability to "invoke various tools". Those who successfully enable efficient collaboration between humans and tools will seize continuous commercial opportunities. While AI replaces some "stock work", it will create more "incremental work".' },
      { type: 'heading', text: 'Reflections on Data Sovereignty' },
      { type: 'paragraph', text: 'Fan Ling expressed concern over AI governance risks. He emphasizes data asset security: How to protect private data of enterprises and individuals? How to prevent large models from forming "knowledge oligarchs"? In the short term, Tezign aims to strengthen technical capabilities to help enterprises truly transform unstructured data into private data assets.' }
    ]
  },
  'mp-nextgen-tech-30': {
    title: 'NextGen Tech 30 | Tezign Named High-Growth Tech Company with Global Potential',
    subtitle: 'Selected from hundreds of nominees, Tezign joins the NextGen Tech 30 list for its commercial impact and global potential in Artificial Intelligence.',
    date: '2025-09-17',
    dateISO: '2025-09-17',
    category: 'media_press',
    content: [
      { type: 'heading', text: 'Top Asian Potential: Tezign Named to NextGen Tech 30' },
      { type: 'paragraph', text: 'On September 16, the NextGen Tech 30 annual list, jointly initiated by Granite Asia, SGX Group, sovereign funds, and industry leaders, was officially unveiled in Singapore. Tezign stood out from hundreds of nominees to be named one of "Asia\'s High-Growth Tech Companies with Global Potential," recognized for its innovation and impact in the AI sector.' },
      { type: 'heading', text: 'Authoritative Endorsement: 30 Selected from Hundreds' },
      { type: 'paragraph', text: 'Initiated by Granite Asia, this award serves as a critical bellwether for the competitiveness and development potential of Asia\'s next-generation tech companies. The list aims to honor companies that drive business innovation with breakthrough technologies and possess global growth potential. Amidst fierce competition, only 30 companies were selected.' },
      { type: 'heading', text: 'Evaluation Criteria' },
      { type: 'paragraph', text: 'The evaluation panel includes top-tier investors, industry experts, and government representatives, assessing dimensions such as:' },
      { type: 'paragraph', text: '• Innovation & Technological Breakthroughs' },
      { type: 'paragraph', text: '  Whether the company has built a disruptive technical moat and sustainable business model.' },
      { type: 'paragraph', text: '• Market Scalability' },
      { type: 'paragraph', text: '  Examining the scalability and efficiency of the business model in real-world scenarios.' },
      { type: 'paragraph', text: '• Global Potential' },
      { type: 'paragraph', text: '  Measuring the capability to grow across geographical boundaries and serve global clients.' },
      { type: 'heading', text: 'Recognition of Long-Term Value' },
      { type: 'paragraph', text: 'Being selected for NextGen Tech 30 represents recognition from the capital market and ecosystem of Tezign\'s long-term value. As a leading enterprise in AI-driven creative and content technology, Tezign\'s success is backed by years of continuous investment in AI technology and commercial implementation. This marks an authoritative international endorsement of Tezign\'s path in empowering enterprise digital transformation through AI.' }
    ]
  },
  'mp-gartner-cool-vendor': {
    title: 'Gartner | The Only Domestic Selection: Tezign Named 2024 Cool Vendor',
    subtitle: 'Selected as one of only three Cool Vendors, Tezign is recognized for its unique Enterprise Agent (GEA) system and disruptive potential.',
    date: '2025-01-13',
    dateISO: '2025-01-13',
    category: 'media_press',
    content: [
      { type: 'heading', text: 'One of Only 3: Tezign Named Gartner Cool Vendor' },
      { type: 'paragraph', text: 'Recently, Gartner, a globally renowned technological research and consulting firm, released "Cool Vendors in GenAI Native Applications, China". Amidst fierce competition, Tezign stands out as one of only three Cool Vendors listed, and the only selected provider of Enterprise Agent solutions.' },
      { type: 'paragraph', text: 'Cool Vendors is one of Gartner\'s most influential reports, known for its rigorous selection criteria. Selected companies must offer technologies or services that are "novel, innovative, and disruptive." This recognition serves as an authoritative endorsement of Tezign\'s innovative practices in reshaping enterprise productivity and building Enterprise Context via GEA (Generative Enterprise Agent).' },
      { type: 'heading', text: 'Why Cool' },
      { type: 'paragraph', text: 'Gartner highlights Tezign\'s uniqueness: Tezign provides more than just tools; it seamlessly integrates GenAI into core business workflows through a Generative Enterprise Agent (GEA) system.' },
      { type: 'paragraph', text: 'Tezign offers a complete architecture blending creative reasoning, Digital Asset Management (DAM), and intelligent distribution. By leveraging existing content stored in DAMs to precipitate "Institutional Memory" (Context), Tezign enables enterprises to transform static brand assets into dynamic productivity that AI can continuously access and reuse.' },
      { type: 'paragraph', text: 'Using advanced LLMs and multimodal generation technologies, Tezign transforms traditionally labor-intensive content creation into automated, scalable agent workflows. This approach allows enterprise clients to maintain strict brand consistency while scaling production, effectively balancing the key challenges of quantity, cost, and quality.' },
      { type: 'heading', text: 'Who Should Care' },
      { type: 'paragraph', text: '• Chief Marketing Officers (CMO)' },
      { type: 'paragraph', text: '  Aiming to scale content production for social media and e-commerce while empowering field teams with on-brand content.' },
      { type: 'paragraph', text: '• Sales or Retail Leaders' },
      { type: 'paragraph', text: '  Looking to use high-quality content to drive foot traffic and online conversions.' },
      { type: 'paragraph', text: '• Chief Digital Officers (CDO) / CIO' },
      { type: 'paragraph', text: '  Decision-makers interested in using AI for digital transformation and building enterprise-grade intelligent infrastructure.' },
      { type: 'heading', text: 'Industry Trend: From Hype to Pragmatism' },
      { type: 'paragraph', text: 'Gartner points out that GenAI is moving from the "Peak of Inflated Expectations" to "Pragmatic Application." Enterprises are no longer satisfied with AI gimmicks but focus on actual value. Tezign\'s selection is precisely because it solves concrete business problems in GenAI implementation—making AI understand business, follow rules, and deliver results.' }
    ]
  },
  'mp-peoples-daily-agent': {
    title: 'People\'s Daily | Fan Ling: Unleashing the "Right Brain" Potential of Artificial Intelligence',
    subtitle: 'Featured in the "National Science and Technology Workers Day" special, Tezign founder Fan Ling discusses combining technology and creativity to unlock AI\'s potential in humanities, design, and art.',
    date: '2025-05-30',
    dateISO: '2025-05-30',
    category: 'media_press',
    content: [
      { type: 'heading', text: 'Upholding the Spirit of Scientists' },
      { type: 'paragraph', text: 'General Secretary Xi Jinping has pointed out that vast numbers of science and technology workers should consciously integrate their academic pursuits into the great cause of building a strong nation in science and technology, forge ahead with determination, pursue excellence, and create new achievements worthy of the times and the people!' },
      { type: 'paragraph', text: 'In recent years, China\'s scientific and technological innovations have emerged continuously, thanks to the concerted efforts of countless workers. May 30th marks the ninth "National Science and Technology Workers Day." People\'s Daily interviewed four technology workers to hear their stories of tackling key problems and determined innovation.' },
      { type: 'quote', text: 'Artificial intelligence is a young cause, and it is also a cause for young people. We are comprehensively promoting the construction of a strong nation and the great cause of national rejuvenation. It is the right time for the younger generation to display their talents and skills.', author: 'Xi Jinping' },
      { type: 'heading', text: 'Unleashing the "Right Brain" Potential of AI' },
      { type: 'paragraph', text: 'As evening lights illuminate the city, the Tezign Technology Lab at the "Modu Space" in Xuhui District, Shanghai, bustles with activity. The sound of typing and heated discussions rises and falls. Fan Ling is discussing the latest product testing results with several graduate students from the College of Design and Innovation at Tongji University. This is not only the office of Tezign Technology but also the Design Artificial Intelligence Lab of Tongji University. Here, a group of young people focuses on the R&D of enterprise-level content AI platforms, helping businesses achieve more efficient content production, analysis, distribution, and management.' },
      { type: 'paragraph', text: '"We are a company dedicated to empowering enterprise content with AI, hoping to build an enterprise-level content AI platform through the combination of technology and creativity. The core technology lies in the understanding and generation of content—using large language models to reason and parse unstructured data like text, images, and videos, ultimately producing the content users need."' },
      { type: 'paragraph', text: 'Research shows that the human left brain controls logical operations, while the right brain dominates humanities, design, and art. Currently, most AI technologies focus on "left brain" development, while "right brain" potential has not been fully tapped. "Our direction is to unleash the \'right brain\' potential of AI. Through massive data accumulation, we form a foundational open-source dataset for creative design, prompting the AI platform to understand and optimize content production more efficiently."' },
      { type: 'paragraph', text: 'In recent years, Tezign and Tongji University jointly established the Design Artificial Intelligence Lab, assembling a research team with multidisciplinary backgrounds including design, computer science, cognitive science, digital humanities, and management science. The team tackles key problems around "Content + AI." Currently, the team has built a multi-level teaching system and developed over 30 course modules, bringing AI technology into teaching scenarios to cultivate innovative talent while optimizing technology.' },
      { type: 'paragraph', text: 'This April, through joint efforts, Tezign released the business research agent atypica.AI, which realizes open-ended business problem deduction by simulating the unstructured thinking paths in human decision-making.' },
      { type: 'paragraph', text: 'The prospects for technological innovation are broad, and AI is in the ascendant. Continuously expanding the boundaries of technology and cultivating more creative young people is our ongoing endeavor.' }
    ]
  }
};

// Explicit allowed list of Nav IDs to treat as product updates
const ALLOWED_NAV_IDS = ['gea', 'dam', 'muse', 'atypica', 'clipo', 'aiFullStack', 'creativeSku'];

// Helper to convert NavArticle to NewsItem format with filtering
const mapNavToNews = (articles: Record<string, any>) => {
  const mapped: Record<string, any> = {};
  Object.keys(articles).forEach(key => {
    // Only map if key is in the allowed list
    if (ALLOWED_NAV_IDS.includes(key)) {
      mapped[key] = {
        title: articles[key].title,
        subtitle: articles[key].subtitle,
        date: articles[key].date,
        dateISO: articles[key].date, // NavArticles already use YYYY-MM-DD
        category: 'product_updates', // Default category for core product pages
        content: articles[key].blocks
      };
    }
  });
  return mapped;
};

const NAV_NEWS_EN = mapNavToNews(NAV_ARTICLES_EN);
const NAV_NEWS_ZH = mapNavToNews(NAV_ARTICLES_ZH);

export const NEWS_TRANSLATIONS_EN = { ...REAL_NEWS_EN, ...NAV_NEWS_EN };
export const NEWS_TRANSLATIONS_ZH = { ...REAL_NEWS_ZH, ...NAV_NEWS_ZH };
