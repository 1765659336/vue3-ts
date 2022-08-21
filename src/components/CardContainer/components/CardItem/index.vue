<!-- 卡片 -->
<template>
	<div
		ref="FatherNode"
		:style="{
			'--operation--icon--number--': cardItemData.headerOperationArr.length
		}"
	>
		<div class="header-content-container">
			<div>
				<slot name="title"></slot>
			</div>
			<div ref="iconOperation" class="icon-container">
				<template v-for="item in cardItemData.headerOperationArr" :key="item">
					<el-icon v-if="item === 'add'" @click="contentAdd"
						><slot name="addIcon"><CirclePlusFilled /></slot
					></el-icon>
					<el-icon v-if="item === 'delete'" @click="contentDelete"
						><slot name="deleteIcon"><DeleteFilled /></slot
					></el-icon>
					<el-icon v-if="item === 'update'" @click="contentUpdate"
						><slot name="updateIcon"><EditPen /></slot
					></el-icon>
				</template>
			</div>
		</div>
		<div>
			<slot name="content"></slot>
		</div>
		<el-divider v-if="cardItemData.isShowDivider" />
	</div>
</template>

<script lang="ts" setup name="CardItem">
import { onMounted, ref, Ref } from 'vue';
import { headerOperationArrItem } from '../../data';
import { ElIcon, ElDivider } from 'element-plus';
import {
	CirclePlusFilled,
	DeleteFilled,
	EditPen
} from '@element-plus/icons-vue';

const iconOperation: Ref<HTMLDivElement | null> = ref(null);
const FatherNode: Ref<HTMLDivElement | null> = ref(null);

const cardItemData = defineProps({
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
	},
	// 是否显示分割线
	isShowDivider: {
		type: Boolean,
		default: false
	}
});

const $myemit = defineEmits(['contentAdd', 'contentUpdate', 'contentDelete']);

// icon显示与隐藏
const isOpenIconDisplay = function () {
	if (cardItemData.isDynamicIcon) {
		if (iconOperation && iconOperation && FatherNode) {
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
const contentAdd = function () {
	$myemit('contentAdd');
};

// 头删除按钮的回调
const contentDelete = function () {
	$myemit('contentDelete');
};

// 头更新按钮的回调
const contentUpdate = function () {
	$myemit('contentUpdate');
};
</script>


<style lang="less" scoped>
@import url('./index.less');
</style>
