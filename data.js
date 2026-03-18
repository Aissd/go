// ==================== 核心配置区 - 你可以在这里修改分类数据 ====================
const goCategories = [
	{
		id: 'capture',
		name: '启蒙吃子',
		icon: 'fa-hand-paper-o',
		color: 'from-blue-500 to-blue-700',
		subCategories: [
			{ id: 'capture-basic', name: '扭羊头', link: 'https://www.101weiqi.cn/mytag/%E6%89%AD%E7%BE%8A%E5%A4%B4/' },
			{ id: 'capture-advanced', name: '一口气吃子01', link: 'https://www.101weiqi.cn/book/5121/8973/' },
			{ id: 'capture-exercise', name: '一口气吃子02', link: 'https://www.101weiqi.cn/book/5121/87089/' }
		]
	},
	{
		id: 'layout',
		name: '启蒙手筋',
		icon: 'fa-map-o',
		color: 'from-green-500 to-green-700',
		subCategories: [
			{ id: 'layout-opening', name: '连接01', link: 'https://www.101weiqi.cn/mytag/%E8%BF%9E%E6%8E%A5/' },
			{ id: 'layout-territory', name: '切断01', link: 'https://www.101weiqi.cn/mytag/%E5%88%87%E6%96%AD/' },
			{ id: 'layout-joseki', name: '连接分断01', link: 'https://www.101weiqi.cn/book/5121/8976/' }
		]
	},
	{
		id: 'midgame',
		name: '启蒙知识点',
		icon: 'fa-chess',
		color: 'from-purple-500 to-purple-700',
		subCategories: [
			{ id: 'midgame-attack', name: '禁入点01', link: 'https://www.101weiqi.cn/book/5121/8974/' },
			{ id: 'midgame-defense', name: '禁入点02', link: 'https://www.101weiqi.cn/book/5121/87440/' },
			{ id: 'midgame-fight', name: '虎口', link: 'https://www.101weiqi.cn/book/5121/12822/' }
		]
	},
	{
		id: 'endgame',
		name: '官子',
		icon: 'fa-calculator',
		color: 'from-red-500 to-red-700',
		subCategories: [
			{ id: 'endgame-basic', name: '官子基础', link: './subpages/endgame-basic.html' },
			{ id: 'endgame-count', name: '目数计算', link: './subpages/endgame-count.html' },
			{ id: 'endgame-advanced', name: '高级官子技巧', link: './subpages/endgame-advanced.html' }
		]
	},
	{
		id: 'tactics',
		name: '手筋',
		icon: 'fa-magic',
		color: 'from-yellow-500 to-yellow-700',
		subCategories: [
			{ id: 'tactics-basic', name: '基础手筋', link: './subpages/tactics-basic.html' },
			{ id: 'tactics-advanced', name: '高级手筋', link: './subpages/tactics-advanced.html' },
			{ id: 'tactics-exercise', name: '手筋练习题', link: './subpages/tactics-exercise.html' }
		]
	},
	{
		id: 'life-death',
		name: '死活',
		icon: 'fa-heartbeat',
		color: 'from-pink-500 to-pink-700',
		subCategories: [
			{ id: 'life-death-basic', name: '基础死活型', link: './subpages/life-death-basic.html' },
			{ id: 'life-death-advanced', name: '复杂死活题', link: './subpages/life-death-advanced.html' },
			{ id: 'life-death-training', name: '死活特训', link: './subpages/life-death-training.html' }
		]
	}
];