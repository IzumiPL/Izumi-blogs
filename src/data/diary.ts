// 日记数据配置
// 用于管理日记页面的数据
export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}


// 示例日记数据
const diaryData: DiaryItem[] = [
    {
        id: 0,
        content: "第一次用公子的百万核爆!",
        date: "2023-11-08T00:00:00Z",
        images: getDirItemsByNumber("/images/diary/GenShin", "jpg", 1)
    },
    {
        id: 1,
        content: "Phigros第一次AP",
        date: "2024-03-17T00:00:00Z",
        images: getDirItemsByNumber( "/images/diary/Phingros/AP_1/", "jpg", 1),
    },
    {
        id: 2,
        content: "又取得了两个AP🥰",
        date: "2024-05-12T00:00:00Z",
        images: getDirItemsByNumber("/images/diary/Phingros/AP_2/", "jpg", 2),
    },
    {
        id: 3,
        content: "肝了3天终于解锁了战役的所有迷彩",
        date: "2024-12-10T00:00:00Z",
        images: getDirItemsByNumber("/images/diary/Call of Duty/Camouflage/", "png", 4),
    },
];

function getDirItemsByNumber(dir: string, suffix: string, count: number) {
    let items = [];
    for (let i = 0; i < count; i++) {
        items.push(`${dir}/${i}.${suffix}`);
    }
    return items
}

// 获取日记统计数据
export const getDiaryStats = () => {
	const total = diaryData.length;
	const hasImages = diaryData.filter(
		(item) => item.images && item.images.length > 0,
	).length;
	const hasLocation = diaryData.filter((item) => item.location).length;
	const hasMood = diaryData.filter((item) => item.mood).length;

	return {
		total,
		hasImages,
		hasLocation,
		hasMood,
		imagePercentage: Math.round((hasImages / total) * 100),
		locationPercentage: Math.round((hasLocation / total) * 100),
		moodPercentage: Math.round((hasMood / total) * 100),
	};
};

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = diaryData.sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取最新的日记
export const getLatestDiary = () => {
	return getDiaryList(1)[0];
};

// 根据ID获取日记
export const getDiaryById = (id: number) => {
	return diaryData.find((item) => item.id === id);
};

// 获取包含图片的日记
export const getDiaryWithImages = () => {
	return diaryData.filter((item) => item.images && item.images.length > 0);
};

// 根据标签筛选日记
export const getDiaryByTag = (tag: string) => {
	return diaryData
		.filter((item) => item.tags?.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	diaryData.forEach((item) => {
		if (item.tags) {
			item.tags.forEach((tag) => tags.add(tag));
		}
	});
	return Array.from(tags).sort();
};

export default diaryData;
