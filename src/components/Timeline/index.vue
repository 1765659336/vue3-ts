<!-- 时间轴 -->
<template>
	<el-timeline
		class="jlg-timeline-container"
		:style="{
			'--timeline-container--width--': timelineWidth,
			'--timeline-container--height--': timelineHeight
		}"
	>
		<el-timeline-item
			v-for="(item, index) in timelineData.data"
			:key="index"
			:icon="item.icon ? item.icon : Location"
			:color="item.color ? item.color : iconColorArr[index % 4]"
			:center="item.center"
			size="large"
			:hollow="item.hollow"
		>
			<div class="timestamp">
				<div class="year">
					{{ returnYearMD(item[timelineData.timeRecord], 0, 1) }}
				</div>
				<div class="monthAndDay">
					{{ returnYearMD(item[timelineData.timeRecord], 1, 3,'/') }}
				</div>
			</div>
			<div class="flex-container">
				<div class="title">{{ item[timelineData.titleRecord] }}</div>
				<div
					class="checkdetails"
					@click="checkDetails(item)"
					v-if="item[isShowCheckDetailsRecord]"
				>
					查看详情
				</div>
			</div>
			<div class="content">{{ item[timelineData.contentRecord] }}</div>
		</el-timeline-item>
	</el-timeline>
</template>

<script lang="ts" setup>
import { Location } from '@element-plus/icons-vue';
import { ElTimeline, ElTimelineItem } from 'element-plus';
import { PropType } from 'vue';
import { timelineDataData } from './data';
import {returnYearMD} from 'src/lib/common';

const iconColorArr = ['#ff8d50', '#d25151', '#0a8b75', '#45a0fe'];
const timelineData = defineProps({
	// 时间轴数据
	data: {
		type: Object as PropType<timelineDataData>
	},
	// 内容字段
	contentRecord: {
		type: String,
		default: 'content'
	},
	// 时间字段
	timeRecord: {
		type: String,
		default: 'time'
	},
	// 标题字段
	titleRecord: {
		type: String,
		default: 'title'
	},
	// 时间轴的宽度
	timelineWidth: {
		type: String,
		default: '100%'
	},
	// 时间轴的高度
	timelineHeight: {
		type: String,
		default: '100%'
	},
	// 判断是否显示查看详情的字段
	isShowCheckDetailsRecord: {
		type: String,
		default: 'status'
	}
});
const $myemit = defineEmits(['checkDetails']);

// 查看详情
const checkDetails = function (item: timelineDataData) {
	$myemit('checkDetails', item);
};
</script>

<style lang="less" scoped>
@import url('./index.less');
</style>
