// import { iconPropType } from 'element-plus/utils'
export interface timelineDataData {
	id?: number;
	resumeId: number;
	key: null | number;
	title: string;
	content: string;
	time: string;
	type: number | null;
	center?: boolean;
	hollow?: boolean;
	icon?: object;
	color?: string;
}
