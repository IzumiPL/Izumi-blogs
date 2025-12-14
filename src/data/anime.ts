// 本地番剧数据配置
export type AnimeItem = {
	title: string;
	status: "watching" | "completed" | "planned";   // 观看, 已完成, 计划中
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
};

const localAnimeList: AnimeItem[] = [
	{
		title: "孤独摇滚",
		status: "completed",
		rating: 9.5,
		cover: "/assets/anime/gdyg.png",
		description: "null",
		episodes: "12 episodes",
		year: "2022",
		genre: ["音乐", "日常", "乐队"],
		studio: "null",
		link: "https://www.bilibili.com/bangumi/media/md28339735",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2024-02",
		endDate: "2024-03",
	},
    {
        title: "魔女之旅",
        status: "completed",
        rating: 9.6,
        cover: "/assets/anime/mnzl.png",
        description: "伊蕾娜可爱捏🥰",
        episodes: "12 episodes",
        year: "2020",
        genre: ["魔法", "奇幻", "架空"],
        studio: "null",
        link: "https://www.bilibili.com/bangumi/media/md28229881",
        progress: 12,
        totalEpisodes: 12,
        startDate: "2023-05",
        endDate: "2023-08",
    },
    {
        title: "中二病也要谈恋爱",
        status: "completed",
        rating: 9.9,
        cover: "/assets/anime/zebyytla.png",
        description: "六花是我老婆😘",
        episodes: "13 episodes",
        year: "2012",
        genre: ["校园", "恋爱", "搞笑"],
        studio: "null",
        link: "https://www.bilibili.com/bangumi/media/md4340",
        progress: 13,
        totalEpisodes: 13,
        startDate: "2023-07",
        endDate: "2023-08",
    },
    {
        title: "葬送的芙莉莲",
        status: "completed",
        rating: 9.5,
        cover: "/assets/anime/zsdfll.png",
        description: "None",
        episodes: "28 episodes",
        year: "2023",
        genre: ["奇幻", "治愈", "冒险"],
        studio: "null",
        link: "https://www.bilibili.com/bangumi/media/md21087073",
        progress: 28,
        totalEpisodes: 28,
        startDate: "2023-11",
        endDate: "2023-12",
    },
];

export default localAnimeList;
