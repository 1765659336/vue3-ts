<!-- 卡片 -->
<template>
	<el-card
		:style="{
			'--operation--icon--number--': cardData.headerOperationArr.length
		}"
	>
		<div ref="FatherNode">
			<div
				class="header-title-container"
				v-if="cardData.headerTitle || cardData.headerOperationArr"
			>
				<span class="header-title-container-title">{{
					cardData.headerTitle
				}}</span>
				<div ref="iconOperation" class="icon-container">
					<template v-for="item in cardData.headerOperationArr" :key="item">
						<el-icon v-if="item === 'add'" @click="headerAdd"
							><slot name="addIcon"><CirclePlusFilled /></slot
						></el-icon>
						<el-icon v-if="item === 'delete'" @click="headerDelete"
							><slot name="deleteIcon"><DeleteFilled /></slot
						></el-icon>
						<el-icon v-if="item === 'update'" @click="headerUpdate"
							><slot name="updateIcon"><EditPen /></slot
						></el-icon>
					</template>
				</div>
			</div>
			<div>
				<slot name="content"></slot>
			</div>
		</div>
	</el-card>
</template>

<script lang="ts" setup>
import { ElCard, ElIcon } from 'element-plus';
import {
	CirclePlusFilled,
	DeleteFilled,
	EditPen
} from '@element-plus/icons-vue';

import { onMounted, ref, Ref } from 'vue';
import { headerOperationArrItem } from './data';

const iconOperation: Ref<HTMLDivElement | null> = ref(null);
const FatherNode: Ref<HTMLDivElement | null> = ref(null);

const cardData = defineProps({
	// 头部标题
	headerTitle: {
		type: String,
		default: ''
	},
	// 头部操作按钮组
	headerOperationArr: {
		type: Array,
		validator: function (value: Array<headerOperationArrItem>) {
			return value.every((element: headerOperationArrItem) =>
				['add', 'update', 'delete'].includes(element)
			);
		},
		default: []
	},
	// 是否开启移入移出显示隐藏icon
	isDynamicIcon: {
		type: Boolean,
		default: false
	}
});

const $myemit = defineEmits(['headerAdd', 'headerUpdate', 'headerDelete']);

// icon显示与隐藏
const isOpenIconDisplay = function () {
	if (cardData.isDynamicIcon) {
		if (iconOperation && iconOperation) {
			iconOperation.value.style.opacity = 0;
			FatherNode.value.onmouseenter = function () {
				iconOperation.value.style.opacity = 1;
			};
			FatherNode.value.onmouseleave = function () {
				iconOperation.value.style.opacity = 0;
			};
		}
	}
};

onMounted(() => {
	isOpenIconDisplay();
});

// 头新增按钮的回调
const headerAdd = function () {
	$myemit('headerAdd');
};

// 头删除按钮的回调
const headerDelete = function () {
	$myemit('headerDelete');
};

// 头更新按钮的回调
const headerUpdate = function () {
	$myemit('headerUpdate');
};
</script>


<style lang="less" scoped>
@import url('./index.less');
</style>
