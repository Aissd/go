// ==================== 核心配置区 - 你可以在这里修改分类数据 ====================
const goCategories = [
	{
		id: 'c-01',
		name: '启蒙吃子',
		icon: 'fa-hand-paper-o',
		color: 'from-blue-500 to-blue-700',
		subCategories: [
			{ name: '提子01', link: 'https://www.101weiqi.cn/book/5121/8973/' },
			{ name: '提子02', link: 'https://www.101weiqi.cn/book/5121/87089/' },
			{ name: '打吃的方向01', link: 'https://www.101weiqi.cn/book/5121/8988/' },
			{ name: '打吃的方向02', link: 'https://www.101weiqi.cn/book/27040/13623/' },
			{ name: '打吃的方向03', link: 'https://www.101weiqi.cn/book/27040/92810/' },
			{ name: '打吃的方向04', link: 'https://www.101weiqi.cn/book/27040/92811/' },
			{ name: '打吃的方向05', link: 'https://www.101weiqi.cn/book/27040/92812/' },
			{ name: '打吃的方向06', link: 'https://www.101weiqi.cn/book/27040/92813/' },
			{ name: '向一线方向打吃01', link: 'https://www.101weiqi.cn/book/25369/98794/' },
			{ name: '向己方方向打吃01', link: 'https://www.101weiqi.cn/book/25369/98795/' },
			{ name: '逃跑的方向01', link: 'https://www.101weiqi.cn/book/5121/10208/' },
			{ name: '逃跑的方向02', link: 'https://www.101weiqi.cn/book/27040/56490/' },
			{ name: '逃跑的方向03', link: 'https://www.101weiqi.cn/book/27040/56706/' },
			{ name: '逃跑的方向04', link: 'https://www.101weiqi.cn/book/27040/56707/' },
			{ name: '逃跑的方向05', link: 'https://www.101weiqi.cn/book/27040/56708/' },
			{ name: '逃跑的方向06', link: 'https://www.101weiqi.cn/book/5120/10329/' },
		]
	},
	{
		id: 'c-02',
		name: '启蒙手筋',
		icon: 'fa-map-o',
		color: 'from-green-500 to-green-700',
		subCategories: [
			{ name: '连接01', link: 'https://www.101weiqi.cn/book/27040/13617/' },
			{ name: '切断01', link: 'https://www.101weiqi.cn/book/25369/98793/' },
			{ name: '连接分断01', link: 'https://www.101weiqi.cn/book/5121/8976/' },
			{ name: '连接分断弱棋01', link: 'https://www.101weiqi.cn/book/5121/18723/' },
			{ name: '断点', link: 'https://www.101weiqi.cn/book/27040/13615/' },
			{ name: '真假断点01', link: 'https://www.101weiqi.cn/book/27040/13619/' },
			{ name: '真假断点02', link: 'https://www.101weiqi.cn/book/25369/133232/' },
			{ name: '棋筋与废子', link: 'https://www.101weiqi.cn/book/25369/75403/' },
			{ name: '可逃之子与应弃之子', link: 'https://www.101weiqi.cn/book/27040/13613/' },
		]
	},
	{
		id: 'c-03',
		name: '启蒙知识点',
		icon: 'fa-chess',
		color: 'from-purple-500 to-purple-700',
		subCategories: [
			{ name: '一块棋的概念', link: 'https://www.101weiqi.cn/book/27040/13612/' },
			{ name: '禁入点01', link: 'https://www.101weiqi.cn/book/5121/8974/' },
			{ name: '禁入点02', link: 'https://www.101weiqi.cn/book/5121/87440/' },
			{ name: '禁入点03', link: 'https://www.101weiqi.cn/book/27040/13610/' },
			{ name: '虎口01', link: 'https://www.101weiqi.cn/book/5121/12822/' },
			{ name: '虎口02', link: 'https://www.101weiqi.cn/book/27040/13618/' },
			{ name: '紧气与长气01', link: 'https://www.101weiqi.cn/book/5121/89562/' },
			{ name: '紧气与长气02', link: 'https://www.101weiqi.cn/book/5121/89563/' },
			{ name: '紧气与长气03', link: 'https://www.101weiqi.cn/book/25369/75476/' },
			{ name: '紧气01', link: 'https://www.101weiqi.cn/book/27040/97844/' },
			{ name: '长气01', link: 'https://www.101weiqi.cn/book/27040/97845/' },
			{ name: '好形与坏形01', link: 'https://www.101weiqi.cn/book/27040/97848/' },
			{ name: '好棋与坏棋01', link: 'https://www.101weiqi.cn/book/27040/97847/' },
			{ name: '提高观察力01', link: 'https://www.101weiqi.cn/book/5121/18131/' },
		]
	},
	{
		id: 'c-04',
		name: '吃子技巧',
		icon: 'fa-chess',
		color: 'from-blue-500 to-blue-700',
		subCategories: [
			{ name: '关门吃01', link: 'https://www.101weiqi.cn/book/5121/8977/' },
			{ name: '关门吃02', link: 'https://www.101weiqi.cn/book/5121/83268/' },
			{ name: '关门吃03', link: 'https://www.101weiqi.cn/book/27040/13626/' },
			{ name: '关门吃04', link: 'https://www.101weiqi.cn/book/25369/133228/' },
			{ name: '关门吃05', link: 'https://www.101weiqi.cn/book/3319/' },
			{ name: '双打吃01', link: 'https://www.101weiqi.cn/book/5121/8978/' },
			{ name: '双打吃02', link: 'https://www.101weiqi.cn/book/27040/13622/' },
			{ name: '双打吃03', link: 'https://www.101weiqi.cn/book/25369/98797/' },
			{ name: '双打吃04', link: 'https://www.101weiqi.cn/book/3318/' },
			{ name: '断吃01', link: 'https://www.101weiqi.cn/book/27040/13624/' },
			{ name: '断吃02', link: 'https://www.101weiqi.cn/book/25369/98796/' },
			{ name: '抱吃01', link: 'https://www.101weiqi.cn/book/5121/8979/' },
			{ name: '抱吃02', link: 'https://www.101weiqi.cn/book/27040/13625/' },
			{ name: '抱吃03', link: 'https://www.101weiqi.cn/book/25369/133229/' },
			{ name: '抱吃04', link: 'https://www.101weiqi.cn/book/3234/' },
			{ name: '征吃01', link: 'https://www.101weiqi.cn/book/5121/8980/' },
			{ name: '征吃02', link: 'https://www.101weiqi.cn/book/5121/101779/' },
			{ name: '征吃03', link: 'https://www.101weiqi.cn/book/5121/60066/' },
			{ name: '征吃04', link: 'https://www.101weiqi.cn/book/27040/13627/' },
			{ name: '枷吃01', link: 'https://www.101weiqi.cn/book/5121/8981/' },
			{ name: '枷吃02', link: 'https://www.101weiqi.cn/book/5121/85290/' },
			{ name: '枷吃03', link: 'https://www.101weiqi.cn/book/27040/13628/' },
			{ name: '枷吃04', link: 'https://www.101weiqi.cn/book/3320/5581/' },
			{ name: '倒扑01', link: 'https://www.101weiqi.cn/book/5121/8982/' },
			{ name: '倒扑02', link: 'https://www.101weiqi.cn/book/27040/97842/' },
			{ name: '倒扑03', link: 'https://www.101weiqi.cn/book/3324/' },
			{ name: '接不归01', link: 'https://www.101weiqi.cn/book/5121/8983/' },
			{ name: '接不归02', link: 'https://www.101weiqi.cn/book/27040/97841/' },
			{ name: '接不归03', link: 'https://www.101weiqi.cn/book/25369/10534/' },
			{ name: '接不归04', link: 'https://www.101weiqi.cn/book/3323/' },
			{ name: '一路线吃子01', link: 'https://www.101weiqi.cn/book/5120/8968/' },
			{ name: '二路线吃子01', link: 'https://www.101weiqi.cn/book/5120/8969/' },
		]
	},
	{
		id: 'c-05',
		name: '对杀',
		icon: 'fa-calculator',
		color: 'from-red-500 to-red-700',
		subCategories: [
			{ name: '基本对杀01', link: 'https://www.101weiqi.cn/book/5121/19320/' },
			// { name: '目数计算', link: './subpages/endgame-count.html' },
			// { name: '高级官子技巧', link: './subpages/endgame-advanced.html' }
		]
	},
	{
		id: 'c-06',
		name: '官子',
		icon: 'fa-calculator',
		color: 'from-red-500 to-red-700',
		subCategories: [
			{ name: '收官01', link: 'https://www.101weiqi.cn/book/2032/3764/' },
		]
	},
	// {
	// 	id: 'c-07',
	// 	name: '手筋',
	// 	icon: 'fa-magic',
	// 	color: 'from-yellow-500 to-yellow-700',
	// 	subCategories: [
	// 		{ name: '基础手筋', link: './subpages/tactics-basic.html' },
	// 		{ name: '高级手筋', link: './subpages/tactics-advanced.html' },
	// 		{ name: '手筋练习题', link: './subpages/tactics-exercise.html' }
	// 	]
	// },
	{
		id: 'c-08',
		name: '死活',
		icon: 'fa-heartbeat',
		color: 'from-pink-500 to-pink-700',
		subCategories: [
			{ name: '简单做眼与破眼01', link: 'https://www.101weiqi.cn/book/5121/8984/' },
			{ name: '眼与眼角01', link: 'https://www.101weiqi.cn/book/25369/75469/' },
			{ name: '真眼与假眼01', link: 'https://www.101weiqi.cn/book/25369/75468/' },
			{ name: '一点死一补活01', link: 'https://www.101weiqi.cn/book/3421/139327/' }
		]
	},
	{
		id: 'c-09',
		name: '打吃后的那个',
		icon: 'fa-heartbeat',
		color: 'from-pink-500 to-pink-700',
		subCategories: [
			{ name: '打吃后的征吃', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E5%BE%81%E5%90%83/' },
			{ name: '打吃后的双打吃', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E5%8F%8C%E6%89%93%E5%90%83/' },
			{ name: '打吃后的枷吃', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E6%9E%B7%E5%90%83/' },
			{ name: '打吃后的倒扑', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E5%80%92%E6%89%91/' },
			{ name: '打吃后的连接', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E8%BF%9E%E6%8E%A5/' },
			{ name: '打吃后的逃跑', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E9%80%83%E8%B7%91/' },
			{ name: '打吃后的抱吃', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E6%8A%B1%E5%90%83/' },
			{ name: '打吃后的关门吃', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E5%85%B3%E9%97%A8%E5%90%83/' },
			{ name: '打吃后的吃子', link: 'https://www.101weiqi.cn/mytag/%E6%89%93%E5%90%83%E5%90%8E%E7%9A%84%E5%90%83%E5%AD%90/' },
		]
	}
];
