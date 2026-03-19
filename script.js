// ==================== 页面渲染逻辑 ====================
document.addEventListener('DOMContentLoaded', () => {
	const container = document.getElementById('category-container');
	
	// 遍历配置数据生成分类卡片
	goCategories.forEach(category => {
		// 创建主卡片元素
		const card = document.createElement('div');
		card.className = 'bg-white rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden';
		card.style.marginBottom = '20px';
		// 卡片头部（一级分类）
		const cardHeader = document.createElement('div');
		cardHeader.className = `card-gradient ${category.color} text-white p-6 cursor-pointer flex justify-between items-center`;
		cardHeader.innerHTML = `
			<div class="flex items-center">
				<i class="fa ${category.icon} text-2xl mr-4"></i>
				<h2 class="text-xl font-bold">${category.name}</h2>
			</div>
			<i class="fa fa-chevron-down transition-transform duration-300" id="toggle-${category.id}"></i>
		`;
		
		// 二级分类容器
		const subCategoryContainer = document.createElement('div');
		subCategoryContainer.id = `sub-${category.id}`;
		subCategoryContainer.className = 'max-h-0 overflow-hidden transition-height';
		
		// 生成二级分类列表
		const subList = document.createElement('ul');
		subList.className = 'p-4 space-y-2';
		
		category.subCategories.forEach(sub => {
			const listItem = document.createElement('li');
			listItem.className = 'border-b border-gray-100 pb-2 last:border-0 last:pb-0';
			listItem.innerHTML = `
				<a href="${sub.link}" class="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-gray-700 hover:text-gray-900">
					<i class="fa fa-angle-right mr-2 text-gray-400"></i>
					${sub.name}
				</a>
			`;
			subList.appendChild(listItem);
		});
		
		subCategoryContainer.appendChild(subList);
		
		// 组装卡片
		card.appendChild(cardHeader);
		card.appendChild(subCategoryContainer);
		container.appendChild(card);
		
		// 绑定点击事件（展开/收起二级分类）
		cardHeader.addEventListener('click', () => {
			const subContainer = document.getElementById(`sub-${category.id}`);
			const toggleIcon = document.getElementById(`toggle-${category.id}`);
			
			if (subContainer.style.maxHeight === '0px' || !subContainer.style.maxHeight) {
				// subContainer.style.maxHeight = subContainer.scrollHeight + 'px';
				subContainer.style.maxHeight = '300px';
				subContainer.style.overflow = 'auto';
				toggleIcon.classList.add('rotate-180');
			} else {
				subContainer.style.maxHeight = '0px';
				toggleIcon.classList.remove('rotate-180');
			}
		});
	});
});
