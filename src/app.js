/* ===================================================
   SBTI 阳光版 — app.js
   积极人格测试 · 15维度评分 · 25种人格类型
   =================================================== */

// ── Dimension Metadata ──
const DIM_META = {
  S1:  { name: 'S1 自尊自信',   model: '自我模型' },
  S2:  { name: 'S2 自我清晰度', model: '自我模型' },
  S3:  { name: 'S3 核心价值',   model: '自我模型' },
  E1:  { name: 'E1 依恋安全感', model: '情感模型' },
  E2:  { name: 'E2 情感投入度', model: '情感模型' },
  E3:  { name: 'E3 边界与依赖', model: '情感模型' },
  A1:  { name: 'A1 世界观倾向', model: '态度模型' },
  A2:  { name: 'A2 规则灵活度', model: '态度模型' },
  A3:  { name: 'A3 人生意义感', model: '态度模型' },
  Ac1: { name: 'Ac1 动机导向',  model: '行动驱力' },
  Ac2: { name: 'Ac2 决策风格',  model: '行动驱力' },
  Ac3: { name: 'Ac3 执行模式',  model: '行动驱力' },
  So1: { name: 'So1 社交主动性', model: '社交模型' },
  So2: { name: 'So2 人际边界感', model: '社交模型' },
  So3: { name: 'So3 表达与真实', model: '社交模型' },
};
const DIM_ORDER = ['S1','S2','S3','E1','E2','E3','A1','A2','A3','Ac1','Ac2','Ac3','So1','So2','So3'];

// ── Questions (30道，正向积极题目) ──
const QUESTIONS = [
  { id:'q1',  dim:'S1', text:'我清楚地知道自己擅长什么，也清楚自己的价值。', options:[
    { label:'还在探索中，需要更多时间', value:1 },
    { label:'有时候能感受到', value:2 },
    { label:'是的，我很确定自己的价值', value:3 }
  ]},
  { id:'q2',  dim:'S1', text:'我觉得自己是有价值的，不需要别人来证明。', options:[
    { label:'有时候觉得自己不够好', value:1 },
    { label:'看情况', value:2 },
    { label:'我很认可自己', value:3 }
  ]},
  { id:'q3',  dim:'S2', text:'我对自己有比较清晰的认识，知道自己是什么性格的人。', options:[
    { label:'不太清晰', value:1 },
    { label:'有时清楚有时模糊', value:2 },
    { label:'我很了解自己', value:3 }
  ]},
  { id:'q4',  dim:'S2', text:'我内心有真正想要追求的东西。', options:[
    { label:'还没想清楚', value:1 },
    { label:'有一些模糊的方向', value:2 },
    { label:'我有明确的热爱和追求', value:3 }
  ]},
  { id:'q5',  dim:'S3', text:'我相信自己可以变得更好，也愿意为之努力。', options:[
    { label:'不太确定要不要努力', value:1 },
    { label:'有时候想', value:2 },
    { label:'是的，我在行动中', value:3 }
  ]},
  { id:'q6',  dim:'S3', text:'外界的评价不会影响我内心对自己的判断。', options:[
    { label:'还是会受一些影响', value:1 },
    { label:'偶尔会动摇', value:2 },
    { label:'我内心有稳定的自我认知', value:3 }
  ]},
  { id:'q7',  dim:'E1', text:'恋爱中，对方超过5小时没回消息，说自己身体不舒服，我会？', options:[
    { label:'内心很焦虑，担心出了什么事', value:1 },
    { label:'有点不安，但愿意给对方一些时间', value:2 },
    { label:'关心地问候，我相信ta会照顾好自己', value:3 }
  ]},
  { id:'q8',  dim:'E1', text:'在一段关系里，我经常担心对方会离开我。', options:[
    { label:'是的，这种担心比较强烈', value:1 },
    { label:'偶尔会有', value:2 },
    { label:'不会，我相信这段关系的价值', value:3 }
  ]},
  { id:'q9',  dim:'E2', text:'我对待感情是认真的，一旦开始就会全力以赴。', options:[
    { label:'不太确定自己能不能做到', value:1 },
    { label:'大多数时候是认真的', value:2 },
    { label:'是的，问心无愧', value:3 }
  ]},
  { id:'q10', dim:'E2', text:'当你遇到一个非常优秀、让你心动的人，你会？', options:[
    { label:'保持距离，不想太投入而受伤', value:1 },
    { label:'会欣赏，但也会保护自己', value:2 },
    { label:'勇敢珍惜，即使可能会受伤', value:3 }
  ]},
  { id:'q11', dim:'E3', text:'恋爱后，对象非常黏人，你感觉如何？', options:[
    { label:'我觉得很甜蜜，有人需要我', value:1 },
    { label:'都行，看情况', value:2 },
    { label:'我更喜欢有适度独立空间', value:3 }
  ]},
  { id:'q12', dim:'E3', text:'我在任何关系里都希望能保持一定的独立空间。', options:[
    { label:'我更需要依赖和亲密', value:1 },
    { label:'看情况', value:2 },
    { label:'是的，独立空间对我很重要', value:3 }
  ]},
  { id:'q13', dim:'A1', text:'我倾向于相信世界上还是好人多。', options:[
    { label:'不太相信，骗子太多了', value:1 },
    { label:'谨慎乐观', value:2 },
    { label:'是的，我相信善良的力量', value:3 }
  ]},
  { id:'q14', dim:'A1', text:'走在街上，一个小女孩递给你一根棒棒糖，你会？', options:[
    { label:'感觉有点奇怪，婉拒了', value:1 },
    { label:'收下并说谢谢，有点意外', value:2 },
    { label:'开心地收下，心里暖暖的', value:3 }
  ]},
  { id:'q15', dim:'A2', text:'快考试了，今晚有重要约定，但你觉得准备得很充分了，你会？', options:[
    { label:'去赴约，学习嘛不差这一晚', value:1 },
    { label:'请个假，两边都不得罪', value:2 },
    { label:'先认真考试，约定可以改期', value:3 }
  ]},
  { id:'q16', dim:'A2', text:'比起按部就班，我更喜欢随机应变、灵活应对。', options:[
    { label:'计划和秩序让我更安心', value:1 },
    { label:'两者结合最好', value:2 },
    { label:'是的，灵活让我更自在', value:3 }
  ]},
  { id:'q17', dim:'A3', text:'我做事情通常有明确的目标和计划。', options:[
    { label:'不太有，走一步看一步', value:1 },
    { label:'有时候有', value:2 },
    { label:'是的，我习惯规划', value:3 }
  ]},
  { id:'q18', dim:'A3', text:'人生有时会觉得没有意义，但我觉得体验本身就是意义。', options:[
    { label:'人生本质上没有意义', value:1 },
    { label:'也许吧，不确定', value:2 },
    { label:'我同意，过程本身就是意义', value:3 }
  ]},
  { id:'q19', dim:'Ac1', text:'我做一件事，更看重它能让我成长，而不是仅仅避免失败。', options:[
    { label:'我更在意别出问题', value:1 },
    { label:'两者都有', value:2 },
    { label:'是的，成长让我更兴奋', value:3 }
  ]},
  { id:'q20', dim:'Ac1', text:'遇到困难时，你更像？', options:[
    { label:'再等等看，也许会有转机', value:1 },
    { label:'调整一下方法再试试', value:2 },
    { label:'立刻找解决方案，我不服输', value:3 }
  ]},
  { id:'q21', dim:'Ac2', text:'我做决定比较果断，不会犹豫太久。', options:[
    { label:'我需要多考虑一会儿', value:1 },
    { label:'看事情大小', value:2 },
    { label:'是的，我能快速拍板', value:3 }
  ]},
  { id:'q22', dim:'Ac2', text:'此题没有题目，请盲选。', options:[
    { label:'相信直觉，选A', value:1 },
    { label:'选B，不解释', value:2 },
    { label:'C是我的命运', value:3 }
  ]},
  { id:'q23', dim:'Ac3', text:'别人说你"执行力很强"，你的感受是？', options:[
    { label:'被逼到墙角时确实效率很高', value:1 },
    { label:'有时候吧', value:2 },
    { label:'是的，事情本来就应该被落地', value:3 }
  ]},
  { id:'q24', dim:'Ac3', text:'我做事通常有计划，但也能接受计划被打乱。', options:[
    { label:'计划被打乱会让我很烦', value:1 },
    { label:'偶尔能接受', value:2 },
    { label:'是的，灵活调整是我的强项', value:3 }
  ]},
  { id:'q25', dim:'So1', text:'你因玩游戏认识了一些网友，他们邀请你线下见面，你会？', options:[
    { label:'有点紧张，还是先保持线上吧', value:1 },
    { label:'可以试试，我对人有好奇心', value:2 },
    { label:'会去！认识新朋友本身就是乐趣', value:3 }
  ]},
  { id:'q26', dim:'So1', text:'朋友带了一个你不认识的朋友一起来聚会，你通常会？', options:[
    { label:'跟熟人聊，不主动接触陌生人', value:1 },
    { label:'正常寒暄，但不太主动', value:2 },
    { label:'主动热情地打招呼，朋友的朋友也是朋友', value:3 }
  ]},
  { id:'q27', dim:'So2', text:'我和人相处需要有适当的边界，距离太近会让我不自在。', options:[
    { label:'不，我更喜欢亲密无间', value:1 },
    { label:'有时候会有这种感觉', value:2 },
    { label:'是的，边界感让我更自在', value:3 }
  ]},
  { id:'q28', dim:'So2', text:'我渴望和信任的人建立深度亲密的关系。', options:[
    { label:'是的，我追求深度连接', value:1 },
    { label:'看情况', value:2 },
    { label:'我更喜欢保持一定距离', value:3 }
  ]},
  { id:'q29', dim:'So3', text:'有时候你对某件事有不同看法，但最终没有说出来，通常是因为？', options:[
    { label:'我会说出来，即使不同意', value:1 },
    { label:'看场合和对象', value:2 },
    { label:'觉得说出来会让场面尴尬或伤害对方', value:3 }
  ]},
  { id:'q30', dim:'So3', text:'我在不同的人面前，表现出的自己会有差异。', options:[
    { label:'不会，我表里如一', value:1 },
    { label:'稍微有点，但核心一样', value:2 },
    { label:'是的，我会根据场合调整', value:3 }
  ]},
];

// ── 25种人格类型 ──
const TYPE_LIBRARY = {
  "STAR":  { code:"STAR",  cn:"闪耀者",  emoji:"🌟", intro:"你天生就是主角级别的存在！", desc:"STAR 型人格是自带光芒的那种人。不是张扬，是自然散发的引力——走进去的房间会因为你的存在而亮起来。你有自己的节奏，不被外界噪音带走。你相信自己也相信别人，是那种让人忍不住想靠近的温度源。你不需要成为别人期待的样子，因为你自己就已经很耀眼了。" },
  "RISE":  { code:"RISE",  cn:"破局者",  emoji:"🚀", intro:"你是那种把\"不可能\"变成\"试试看\"的人。", desc:"破局者从不被现状定义。别人说这事不行，你的第一反应是：为什么不行？你的字典里没有「认命」两个字，只有「再试一次」。你有一种神奇的能力——在别人抱怨的地方，你已经在想解决方案了。你不是在对抗世界，你是在和世界一起升级。" },
  "HEAL":  { code:"HEAL",  cn:"治愈者",  emoji:"🌿", intro:"你有一种让周围人都安心的力量。", desc:"治愈者是最稀缺的天赋之一。你不需要说什么大道理，你的存在本身就已经是一种安慰。你能感知到别人察觉不到的情绪波动，你愿意停下来倾听，你让身边的人觉得「我被看见了」。你的善良不是软弱，是一种经过选择的力量。" },
  "BLAZ":  { code:"BLAZ",  cn:"燃烧者",  emoji:"🔥", intro:"你内心的火焰从未熄灭过。", desc:"燃烧者的核心燃料是热情。你一旦认定一件事或一个人，就会全身心投入，不留后路。你讨厌敷衍和凑合，你追求极致。你身上有一种让人想要跟随的能量——不是因为你喊口号，而是因为你可以比任何人都先开始行动。" },
  "FLOW":  { code:"FLOW",  cn:"流动者",  emoji:"🌊", intro:"你像水一样，柔软却有无尽的渗透力。", desc:"流动者最厉害的地方在于适应。他们不强硬，不对抗，但也不软弱——他们只是找到了阻力最小的路径，然后持续前进。你有一种令人羡慕的能力：不被执念困住，不被情绪绑架，在任何环境里都能找到自己的节奏。" },
  "MOON":  { code:"MOON",  cn:"月光者",  emoji:"🌙", intro:"你不需要成为太阳，也能照亮黑夜。", desc:"月光者安静、深邃、有治愈力。你不需要成为全场焦点才能感到满足，你有自己的小宇宙和独特的审美感知。你的存在本身就是一种力量——在最黑的夜里提供最温柔、最可靠的光。跟你在一起，人们会不自觉地放下防备。" },
  "GROW":  { code:"GROW",  cn:"成长者",  emoji:"🌱", intro:"你的每一次\"失败\"都只是还没成功的故事。", desc:"成长者相信时间的力量。你不追求一夜成名的奇迹，你相信复利效应——每天进步一点点，累积起来就是惊人的跨越。你有韧性，有耐心，更重要的是，你有成长型思维：能力是可以培养的，而不只是天生的。" },
  "GUAR":  { code:"GUAR",  cn:"守护者",  emoji:"🛡️", intro:"你在，身边人就感觉有了靠山。", desc:"守护者是最可靠的存在。你不是用语言表达关心，你是那种关键时刻永远在场的人。你有肩膀，有担当，有让人安心的气场。别人有事第一个想到你，不是因为你最强，而是因为你是那种「有我在，你就放心吧」的人。" },
  "WIND":  { code:"WIND",  cn:"追风者",  emoji:"🌬️", intro:"你相信前方永远有值得遇见的人在等待。", desc:"追风者永远在路上。不是因为你不恋家，而是因为你相信更大的世界有更大的可能。你对未知保持开放态度，你的好奇心永远不会打烊。你是那种可以在陌生城市里一个人漫步也感到自在的人——孤独对你来说不是惩罚，是和自己相处的礼物。" },
  "WARM":  { code:"WARM",  cn:"温暖者",  emoji:"☀️", intro:"你让这个世界变得不那么冷了。", desc:"温暖者有一种让人想靠近的气场，就像冬天里的一杯热可可——不惊艳，但让人幸福。你不需要多闪耀，你的温度本身就是你最强大的能力。你善于发现别人的闪光点，你愿意给出真诚的赞美，你是朋友圈里的定海神针。" },
  "FIRE":  { code:"FIRE",  cn:"烈焰者",  emoji:"🔥", intro:"你的激情会感染身边的每一个人。", desc:"烈焰者不是在燃烧自己，是在点燃周围。你有自己的观点，有自己的态度，不随波逐流。你的热情是真的，你的愤怒也是真的——你活得非常真实。你是那种让人印象深刻的存在，因为你的能量密度太高了。" },
  "DEEP":  { code:"DEEP",  cn:"深邃者",  emoji:"🌌", intro:"你的灵魂比大多数人想象的都要丰富。", desc:"深邃者喜欢独处，不是因为社恐，是因为内在世界已经足够精彩。你有丰富的内心活动，有独特的审美，有深刻的思想。你不会被表面的热闹迷惑，你追求的是真正的理解与被理解。跟你深聊过的人，通常都会说一句：「没想到你这么有料。」" },
  "LUCK":  { code:"LUCK",  cn:"幸运者",  emoji:"🍀", intro:"你不是因为运气好，是因为你本身就是磁铁。", desc:"幸运者不是坐在家里等天上掉馅饼——是因为他们的心态和能量场，自然会吸引好的事情发生。你乐观，你愿意尝试，你相信可能性，所以机遇总是会找到你。你的人生里充满了「刚好」「碰巧」「没想到成了」——这背后不是运气，是你的开放心态在起作用。" },
  "HART":  { code:"HART",  cn:"勇敢者",  emoji:"⚔️", intro:"你选择了勇气，就已经赢了大多数人。", desc:"勇敢不是不害怕，而是害怕了还愿意往前走。勇敢者最珍贵的资产不是无畏，是对恐惧的诚实——我害怕了，但我不逃跑。你愿意为值得的事情冒险，你愿意为重要的人站出来，你不是莽撞，是因为你分得清什么时候该冲。" },
  "SHIN":  { code:"SHIN",  cn:"发光者",  emoji:"💎", intro:"你不需要羡慕别人的光，你自己就在发光。", desc:"发光者最大的特点是不需要外界认可来确认自己的价值。你知道自己有几斤几两，你知道自己的独特在哪里，你不会因为别人的一句否定就崩溃，也不会因为别人的一句夸奖就飘了。你活得很稳，很有根，很有自我。" },
  "SPARK": { code:"SPARK", cn:"星火者",  emoji:"✨", intro:"最微小的火苗，也能照亮最深的夜。", desc:"星火者相信积累的力量。你可能不是最强的，不是最快的，但你绝对是最坚持的之一。你有一种朴实无华的韧性——每天进步一点点，每天积累一点点，然后突然某一天回头看：哇，已经走了这么远。你的成功不是爆发，是持续燃烧的结果。" },
  "CALM":  { code:"CALM",  cn:"平静者",  emoji:"🧘", intro:"你的内心，有一种不动如山的力量。", desc:"平静者最难得的品质是在混乱中依然保持清醒。别人慌的时候你不慌，别人急的时候你稳如磐石。你不是没有情绪，而是你学会了和情绪共处，不被它带着走。跟你在一起，人们会觉得世界都安静了一点。" },
  "BOND":  { code:"BOND",  cn:"联结者",  emoji:"🤝", intro:"你有一种天赋，让陌生人也变成朋友。", desc:"联结者是人际磁场的天才。你不怯场，不设限，你相信人与人之间的连接是世界上最美好的事情之一。你的朋友列表很长，而且你真的在乎每一个人。你是那种能把聚会气氛带到高潮的人，也是那种能在深夜陪朋友聊到凌晨的人。" },
  "SOAR":  { code:"SOAR",  cn:"高飞者",  emoji:"🦅", intro:"你的翅膀，是自己长出来的。", desc:"高飞者不等待风来，你是那种自己就创造风口的人。你有野心，但你的野心是正道的——你想赢，但你想赢得漂亮。你不靠别人给你机会，你自己创造机会。你有一种鹰的视野：高处看世界，世界就很小；小处看自己，自己就很大。" },
  "WAVE":  { code:"WAVE",  cn:"浪潮者",  emoji:"🌊", intro:"你天生就懂得，顺势而为才是大智慧。", desc:"浪潮者不是随波逐流，是在看懂潮水方向之后选择最优路径。你聪明，灵活，善于变通。你知道什么时候该冲，什么时候该等。你有一种罕见的耐心——不是为了放弃而等，是为了等对的时机。" },
  "DAWN":  { code:"DAWN",  cn:"破晓者",  emoji:"🌅", intro:"你是那种让身边的人相信\"明天会更好\"的人。", desc:"破晓者永远有希望感。不是因为你没有经历过黑暗，而是因为你从黑暗里走出来过，你知道黎明真的会来。你是一种鼓舞者的存在——在你身边，人们会觉得事情没那么糟，明天没那么远，未来还是值得期待的。" },
  "MIND":  { code:"MIND",  cn:"思想者",  emoji:"🧠", intro:"你的大脑，是你最强大的武器。", desc:"思想者喜欢深度思考，你不会被表面信息牵着走。你有自己的判断框架，你会在关系中衡量利弊，在决策前收集足够信息。你最讨厌的就是脑子空空、随波逐流。你不一定是话最多的那个，但你说出来的话通常很有分量。" },
  "GLOW":  { code:"GLOW",  cn:"微光者",  emoji:"💡", intro:"不需要成为太阳，微光也足够温暖。", desc:"微光者有一种朴素的伟大。你不需要站在舞台中央才感到满足，你在角落里默默做好自己的事情，也能发出足够的光。你不追逐虚荣，你追求的是真实的影响。你是那种你看不见但离不开的人——你的价值，只有真正了解你的人才懂。" },
  "RADI":  { code:"RADI",  cn:"辐射者",  emoji:"🔆", intro:"你是一个行走的小太阳，走到哪里暖到哪里。", desc:"辐射者最大的资产是能量和热情。你是朋友圈里的发动机——你不在的时候群里死气沉沉，你一来大家就活跃起来了。你有一种让人放松的魅力，你让人相信世界还是很有趣的。你不是完美的，但是真实的；不是深沉的，但是快乐的。" },
  "SAGE":  { code:"SAGE",  cn:"智贤者",  emoji:"🧙", intro:"你活成了很多人想要但达不到的样子。", desc:"智贤者有一种稀缺的人生境界：见过世界运转的规则，但依然热爱生活。你不是出世，而是带着智慧入世——你知道什么重要，什么不重要，什么值得你花时间，什么可以直接忽略。你是那种越相处越让人敬佩的人，因为你的内在和外在是一致的。" },
};

// ── Normal Type Patterns (15维向量) ──
const NORMAL_TYPES = [
  { code:"STAR",  pattern:"HHH-HHH-MHH-HMH-HMH" },
  { code:"RISE",  pattern:"HHM-HMH-MHH-HHH-LHL" },
  { code:"HEAL",  pattern:"MMH-MHL-HMM-MMH-MHL" },
  { code:"BLAZ",  pattern:"HHH-HMH-MMH-HHH-MHM" },
  { code:"FLOW",  pattern:"MHM-MMH-MHM-HMH-HMH" },
  { code:"MOON",  pattern:"HMH-HHL-HMM-HMM-HLH" },
  { code:"GROW",  pattern:"HHM-HMH-MHH-HMH-MHM" },
  { code:"GUAR",  pattern:"HHH-HHM-HHH-HMH-MHL" },
  { code:"WIND",  pattern:"HMH-MHL-MHH-HMM-LMH" },
  { code:"WARM",  pattern:"MHM-HMM-HHM-MMH-MHL" },
  { code:"FIRE",  pattern:"HHM-HMH-MMH-HHH-LHM" },
  { code:"DEEP",  pattern:"HHL-HMH-MLH-MHM-LHH" },
  { code:"LUCK",  pattern:"HMH-MHL-HMH-HMM-MLH" },
  { code:"HART",  pattern:"HHM-HMH-HMH-HHH-MHL" },
  { code:"SHIN",  pattern:"HHM-HMH-MHH-HMH-MHL" },
  { code:"SPARK", pattern:"MHM-HMH-MMH-HMH-MHM" },
  { code:"CALM",  pattern:"HHL-LMH-LHH-HHM-LHL" },
  { code:"BOND",  pattern:"HHL-HMH-MMH-HHM-MLH" },
  { code:"SOAR",  pattern:"HHH-HMH-MMH-HHH-LHL" },
  { code:"WAVE",  pattern:"MHM-MMH-MHM-HMH-MHM" },
  { code:"DAWN",  pattern:"HHM-HMH-MHH-HMH-HMH" },
  { code:"MIND",  pattern:"HHL-HMH-MLH-MHM-LHH" },
  { code:"GLOW",  pattern:"MHM-HMH-MHH-MMH-MHL" },
  { code:"RADI",  pattern:"HHM-HMH-MMH-HHM-MLH" },
  { code:"SAGE",  pattern:"HHL-HMH-MLH-MHM-LHH" },
];

// ── Dimension Explanations (L/M/H三级) ──
const DIM_EXPLANATIONS = {
  S1:  { L:"你偶尔会质疑自己的价值，其实你比自己以为的更值得被喜欢。", M:"你的自信会波动，但总体趋势在上升，这已经很棒了。", H:"你有稳定的自尊，不轻易被外界声音打乱节奏，这是难得的品质。" },
  S2:  { L:"还在探索自己本身就是一件很勇敢的事，慢慢来，你会有答案的。", M:"你对自己有部分了解，继续挖掘，你会发现更多有趣的自己。", H:"你对自己有清晰的认识，这种自我觉察力是成长最好的起点。" },
  S3:  { L:"没有既定目标也没关系，有时候活在当下本身就是意义。", M:"你想往上走，但也懂得享受沿途的风景，这已经很成熟了。", H:"你内心有明确的方向感，这份内驱力会带你走很远。" },
  E1:  { L:"在感情里缺乏安全感是可以理解的，过去的经历给你的课题，你值得被好好爱着。", M:"你有时会担心，有时会信任，这才是真实的关系状态。", H:"你愿意信任，这本身就是很大的勇气，也是建立深度关系的基础。" },
  E2:  { L:"感情投入少一点也是一种保护自己的方式，你不需要强迫自己快速投入。", M:"你的投入程度刚刚好，既不会让自己受伤太深，也不会错过真心。", H:"你愿意全情投入，这份真诚是非常珍贵的能力。" },
  E3:  { L:"喜欢依赖和被依赖，说明你是一个重视关系深度的人，这很美好。", M:"你能在独立和依赖之间找到平衡，这是很高的情商。", H:"你有健康的边界感，懂得保护自己的空间，这说明你很成熟。" },
  A1:  { L:"谨慎是智慧，但偶尔也给自己一个相信的机会，好人确实存在。", M:"你既不天真也不冷漠，保持着难得的平衡感。", H:"你相信善良和美好，这份信念本身就是一种力量。" },
  A2:  { L:"喜欢规则和秩序，说明你是一个可靠、有责任感的人。", M:"你能在原则和变通之间找到平衡点，这是很成熟的表现。", H:"你灵活、不死板，能在变化中快速调整，这种适应力很赞。" },
  A3:  { L:"偶尔觉得生活没意义是正常的，每个人都会有这样的时刻。", M:"你有时能找到意义，有时又迷失，但这就是真实的人生。", H:"你内心有方向感，这份意义感会支撑你走过低潮。" },
  Ac1: { L:"谨慎不是坏事，它让你在行动前多了一层思考。", M:"你既想成功也不想失败，这种平衡感很正常。", H:"你更看重成长和成果，这种内驱力会让你持续进步。" },
  Ac2: { L:"深思熟虑说明你认真对待每一个决定，这不是犹豫，是负责。", M:"你能在思考和行动之间找到平衡，已经很不错了。", H:"你做决定很果断，这种决断力是稀缺的品质。" },
  Ac3: { L:"在压力下爆发也是一种能力，很多人连这点都做不到呢。", M:"你的执行力有波动，但关键时候你靠得住。", H:"你有很强的推进力，事情不落地你心里就不踏实，这让你一直往前走。" },
  So1: { L:"慢热不是缺点，你只是需要更多时间来判断是否值得信任。", M:"你的社交有弹性，该出手时你会出手。", H:"你主动开放，愿意让新的人走进你的生活，这种开放度很珍贵。" },
  So2: { L:"渴望深度连接说明你内心是火热的，这很美好。", M:"你能在亲密和独立之间灵活切换，这是情商高的表现。", H:"你有清晰的边界感，知道谁能靠近，这是一种成熟的社交能力。" },
  So3: { L:"表里如一是一种珍贵的品质，你的简单本身就是一种力量。", M:"你在真实和得体之间找到平衡，这需要智慧。", H:"你能在不同场合展现不同面向，这是很强的适应力和情商。" },
};

// ── App State ──
const state = {
  shuffledQuestions: [],
  answers: {},          // { qId: value }
};

// ── DOM References ──
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ── Screen Navigation ──
function showScreen(name) {
  $$('.screen').forEach(el => el.classList.remove('active'));
  $(`#screen-${name}`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Fisher-Yates Shuffle ──
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Render Questions ──
function renderQuestions() {
  const list = $('#questionList');
  list.innerHTML = '';

  state.shuffledQuestions.forEach((q, idx) => {
    const card = document.createElement('article');
    card.className = 'question';
    card.dataset.id = q.id;

    const optCode = ['A','B','C'];
    card.innerHTML = `
      <div class="question-meta">
        <span class="badge">第 ${idx + 1} 题</span>
        <span class="dim-label">✨ 悄悄测</span>
      </div>
      <div class="question-title">${q.text}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <div class="option${state.answers[q.id] === opt.value ? ' selected' : ''}" data-value="${opt.value}" data-id="${q.id}">
            <div class="option-dot"></div>
            <span class="option-text">${opt.label}</span>
            <span class="option-code">${optCode[i]}</span>
          </div>
        `).join('')}
      </div>
    `;
    list.appendChild(card);

    // Staggered reveal animation
    setTimeout(() => card.classList.add('visible'), 40 * idx);

    // Option click
    card.querySelectorAll('.option').forEach(el => {
      el.addEventListener('click', () => {
        card.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        state.answers[el.dataset.id] = Number(el.dataset.value);
        updateProgress();
      });
    });
  });
}

// ── Update Progress ──
function updateProgress() {
  const total = state.shuffledQuestions.length;
  const done = state.shuffledQuestions.filter(q => state.answers[q.id] !== undefined).length;
  const pct = total ? (done / total) * 100 : 0;

  $('#progressFill').style.width = pct + '%';
  $('#progressText').textContent = `${done} / ${total}`;

  const btn = $('#submitBtn');
  const isComplete = done === total && total > 0;
  btn.disabled = !isComplete;
  btn.classList.toggle('ready', isComplete);

  const hint = $('#testHint');
  if (!isComplete) {
    const msgs = [
      [1,  '每一道题都是认识自己的机会 ✨'],
      [6,  '继续，你做得很好 🌟'],
      [16, '快完成了，看见自己 💫'],
      [21, '就差一点了，答案没有对错 🌟'],
      [26, '马上完成！ 🌈'],
    ];
    const msg = [...msgs].reverse().find(([t]) => done >= t);
    hint.textContent = msg ? msg[1] : '每一道题都是认识自己的机会 ✨';
  } else {
    hint.textContent = '全部完成！准备好看见自己了吗？ ✨';
  }
}

// ── Scoring ──
function scoreToLevel(score) {
  if (score <= 3) return 'L';
  if (score === 4) return 'M';
  return 'H';
}
function levelNum(l) { return { L:1, M:2, H:3 }[l]; }
function parsePattern(p) { return p.replace(/-/g,'').split('').map(levelNum); }

function computeResult() {
  // Raw scores per dimension
  const raw = {};
  DIM_ORDER.forEach(d => raw[d] = 0);
  QUESTIONS.forEach(q => {
    if (state.answers[q.id] !== undefined)
      raw[q.dim] += Number(state.answers[q.id]);
  });

  // Level per dimension
  const levels = {};
  DIM_ORDER.forEach(d => levels[d] = scoreToLevel(raw[d]));

  // User vector
  const userVec = DIM_ORDER.map(d => levelNum(levels[d]));

  // Match against NORMAL_TYPES
  const ranked = NORMAL_TYPES.map(t => {
    const patVec = parsePattern(t.pattern);
    let dist = 0, exact = 0;
    for (let i = 0; i < 15; i++) {
      const d = Math.abs(userVec[i] - patVec[i]);
      dist += d;
      if (d === 0) exact++;
    }
    const sim = Math.max(0, Math.round((1 - dist / 30) * 100));
    return { ...t, ...TYPE_LIBRARY[t.code], raw, levels, dist, exact, sim };
  });

  ranked.sort((a, b) => {
    if (a.dist !== b.dist) return a.dist - b.dist;
    return b.exact - a.exact;
  });

  return { raw, levels, ranked, best: ranked[0] };
}

// ── Render Result ──
function renderResult() {
  const r = computeResult();
  const t = r.best;

  $('#resultEmoji').textContent = t.emoji;
  $('#resultCode').textContent = t.code;
  $('#resultCN').textContent = t.cn;
  $('#resultSub').textContent = t.intro;
  $('#resultMatch').textContent = `匹配度 ${t.sim}% · 精准命中 ${t.exact}/15 维`;
  $('#resultDesc').textContent = t.desc;

  // Dimension list
  const dimList = $('#dimList');
  dimList.innerHTML = DIM_ORDER.map(dim => {
    const lv = r.levels[dim];
    const raw = r.raw[dim];
    const expl = DIM_EXPLANATIONS[dim][lv];
    return `
      <div class="dim-item" data-dim="${dim}">
        <div class="dim-item-top">
          <span class="dim-item-name">${DIM_META[dim].name}</span>
          <span class="dim-level ${lv}">${lv}</span>
          <span class="dim-item-score">${raw}分</span>
        </div>
        <p>${expl}</p>
      </div>
    `;
  }).join('');

  showScreen('result');

  // Stagger reveal dims
  $$('.dim-item').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 800 + 50 * i);
  });
}

// ── Start Test ──
function startTest() {
  state.answers = {};
  state.shuffledQuestions = shuffle(QUESTIONS);
  renderQuestions();
  updateProgress();
  showScreen('test');
}

// ── Event Bindings ──
$('#startBtn').addEventListener('click', startTest);
$('#backIntroBtn').addEventListener('click', () => showScreen('intro'));
$('#submitBtn').addEventListener('click', renderResult);
$('#restartBtn').addEventListener('click', startTest);
$('#toTopBtn').addEventListener('click', () => showScreen('intro'));
