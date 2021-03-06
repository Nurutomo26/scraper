export interface FacebookDownloader {
	id: string;
	thumbnail: string;
	duration: number;
	result: {
		size?: string;
		ext: string;
		url: string;
		quality?: string;
		vcodec?: string;
		fid: string;
		isVideo: boolean;
		isAudio: boolean;
	}[];
}

export interface FacebookDownloaderV2 {
	id?: string;
	title: string;
	description: string;
	thumbnail: string;
	result: {
		quality: string;
		url: string;
	}[];
}
export interface FacebookDownloaderV3 {
	title: string;
	thumbnail?: string;
	result: {
		quality?: string;
		url: string;
		isAudio: boolean;
		isVideo: boolean;
	}[];
}
export interface GoogleIt {
	info: {
		title?: string;
		type?: string;
		description?: string;
		image?: string[];
	};
	articles: {
		header: string;
		title: string;
		url: string;
		description: string;
	}[];
}

interface IinstagramDownloader { url: string }
export type InstagramDownloader = IinstagramDownloader & {
	thumbnail: string;
};
export type InstagramDownloaderV2 = IinstagramDownloader & {
	thumbnail: string;
	sourceUrl?: string
};
export type InstagramDownloaderV4 = IinstagramDownloader & {
	thumbnail: string;
}
export type InstagramDownloaderV5 = IinstagramDownloader & {
	thumbnail: string;
	ext: string;
};
interface IinstagramStory {
	user: {
		username: string;
		profilePicUrl: string;
	},
	results: {
		thumbnail: string;
		url: string;
		type: string;
		isVideo: boolean;
	}[]
}
export type InstagramStory = IinstagramStory
export type InstagramStoryv2 = IinstagramStory & {
	user: {
		id: string;
		fullName: string;
		biography: string;
		followers: number;
		following: number;
	};
	results: {
		sourceUrl: string;
		fileType: string;
	}[]
}
export type InstagramStalk = {
	name: string;
	username: string;
	avatar: string;
	description: string;
	postsH: string;
	posts: number;
	followersH: string;
	followers: number;
	followingH: string;
	following: number;
}

interface ItiktokDownloader {
	author: {
		nickname: string;
	};
	video: {
		[Key: string]: string;
	}
}
export type TiktokDownloader = ItiktokDownloader & {
	description: string;
	video: {
		no_watermark: string;
		no_watermark2: string;
		no_watermark_raw: string;
	}
}
export type TiktokDownloaderv2 = ItiktokDownloader & {
	author: {
		unique_id: string;
		avatar: string;
	};
	video: {
		no_watermark: string;
		no_watermark_hd: string
	};
};
export type TiktokDownloaderv3 = ItiktokDownloader & {
	author: {
		avatar: string;
	};
	description: string;
	video: {
		no_watermark: string;
		no_watermark2: string;
	};
	music: string;
}

export interface TiktokFyp {
	id: string;
	desc: string;
	createdTime: Date;
	video: {
		id: string;
		height: number;
		width: number;
		duration: number;
		ratio: string;
		cover: string;
		originCover: string;
		dynamicCover: string;
		playAddr: string;
		downloadAddr: string;
		shareCover: string[];
		reflowCover: string;
		bitrate: number;
		encodedType: string;
		format: string;
		videoQuality: string;
		encodeUserTag: string;
		codecType: string;
		definition: string;
	};
	author: {
		id: string;
		uniqueId: string;
		nickname: string;
		avatarThumb: string;
		avatarMedium: string;
		avatarLarger: string;
		signature: string;
		verified: boolean;
		secUid: string;
		secret: boolean;
		ftc: boolean;
		relation: number;
		openFavorite: boolean;
		commentSetting: number;
		duetSetting: number;
		stitchSetting: number;
		privateAccount: boolean;
		isADVirtual: boolean;
	};
	music: {
		id: string;
		title: string;
		playUrl: string;
		coverThumb: string;
		coverMedium: string;
		coverLarge: string;
		authorName: string;
		original: boolean;
		duration: number;
		album: string;
	};
	challenges?: {
		id: string;
		title: string;
		desc: string;
		profileThumb: string;
		profileMedium: string;
		profileLarger: string;
		coverThumb: string;
		coverMedium: string;
		coverLarger: string;
		isCommerce: boolean;
	}[];
	stats: {
		diggCount: number;
		shareCount: number;
		commentCount: number;
		playCount: number;
	};
	duetInfo: {
		duetFromId: string;
	};
	originalItem: boolean;
	officalItem: boolean;
	textExtra?: {
		awemeId: string;
		start: number;
		end: number;
		hashtagName: string;
		hashtagId: string;
		type: 1;
		userId: string;
		isCommerce: boolean;
		userUniqueId: string;
		secUid: string;
		subType: number;
	}[];
	secret: boolean;
	forFriend: boolean;
	digged: boolean;
	itemCommentStatus: number;
	showNotPass: boolean;
	vl1: boolean;
	itemMute: boolean;
	authorStats: {
		followingCount: number;
		followerCount: number;
		heartCount: number;
		videoCount: number;
		diggCount: number;
		heart: number;
	};
	privateItem: boolean;
	duetEnabled: boolean;
	stitchEnabled: boolean;
	shareEnabled: boolean;
	isAd: boolean;
	duetDisplay: number;
	stitchDisplay: number;
}

interface ItwitterDownloader {
	quality: string;
	type: string;
	url: string;
}
export type TwitterDownloader = ItwitterDownloader & {
	isVideo: boolean;
}
export type TwitterDownloaderv2 = ItwitterDownloader

export interface YoutubeSearch {
	video: {
		authorName: string;
		authorAvatar?: string;
		videoId: string;
		url: string;
		thumbnail: string;
		title: string;
		description?: string;
		publishedTime: string;
		durationH: string;
		durationS: number;
		duration: string;
		viewH: string;
		view: string;
		type: 'video';
	}[];
	channel: {
		channelId: string;
		url: string;
		channelName: string;
		avatar: string;
		isVerified: boolean;
		subscriberH: string;
		subscriber: string;
		videoCount: number;
		description: string;
		type: 'channel';
	}[];
	playlist: {
		playlistId: string;
		title: string;
		thumbnail: string;
		video: {
			videoId: string;
			title: string;
			durationH: string;
			duration: string;
		}[];
		type: 'mix';
	}[];
}

export type YoutubeVideoOrAudio = {
	[key: string]: {
		quality: string;
		fileSizeH: string;
		fileSize: number;
		download (): Promise<string>;
	};
};
export interface YoutubeDownloader {
	id: string;
	v_id?: string;
	thumbnail: string;
	title: string;
	video: YoutubeVideoOrAudio;
	audio: YoutubeVideoOrAudio;
}

export type YoutubeVideoOrAudioV3 = {
	[key: string]: {
		quality: string;
		fileSizeH?: string;
		fileSize?: number;
		download (): Promise<string>;
	};
};
export type YoutubeDownloaderV3 = {
	id: string;
	thumbnail: string;
	title: string;
	video: YoutubeVideoOrAudioV3;
	audio: YoutubeVideoOrAudioV3;
}

export interface GroupWA {
	url: string;
	subject: string;
}

export interface Aiovideodl {
	url: string;
	title: string;
	thumbnail: string;
	duration?: null;
	source: string;
	medias?: {
		url: string;
		quality: string;
		extension: string;
		size: number;
		formattedSize: string;
		videoAvailable: boolean;
		audioAvailable: boolean;
		chunked: boolean;
		cached: boolean;
	}[] | null;
}

export interface Savefrom {
	id: string;
	url?: ({
		url: string;
		ext: string;
		type: string;
		name: string;
		quality?: number;
		subname?: string;
	})[] | null;
	meta: {
		title: string;
		source: string;
	};
	video_quality?: (string)[] | null;
	thumb: string;
	sd: {
		url: string;
		format?: string;
	};
	hd?: {
		url: string;
		format: string;
	};
	hosting: string;
}
