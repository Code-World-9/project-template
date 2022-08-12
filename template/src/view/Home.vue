<script setup lang="ts">
import { ref, h } from "vue";
import { NSpace, NLayout, NLayoutSider, NMenu, NIcon } from "naive-ui";
import { BarChartOutline } from "@vicons/ionicons5";
import { Classification } from "@vicons/carbon";
import { CreditScoreTwotone } from "@vicons/material";
import type { MenuOption } from "naive-ui";
import SwitchTheme from "../components/SwitchTheme.vue"
const menuOptions: MenuOption[] = [
    {
        label: "项目起因",
        key: "class",
        router: "class",
        icon: () => h(NIcon, null, { default: () => h(Classification) }),
    },
    {
        label: "渲染模板",
        key: "scoreView",
        router: "scoreView",
        icon: () => h(NIcon, null, { default: () => h(BarChartOutline) }),
    },
    {
        label: "样式规范",
        key: "score",
        router: "score",
        icon: () => h(NIcon, null, { default: () => h(CreditScoreTwotone) }),
    },
    {
        label: "模块封装",
        key: "analysis",
        router: "analysis",
        icon: () => h(NIcon, null, { default: () => h(BarChartOutline) }),
    },
];
</script>

<template>
    <NLayout has-sider :native-scrollbar="false" style="height: 100%">
        <NLayoutSider :width="272" content-style="padding: 35px;" :native-scrollbar="false" class="left-sider">
            <div style="text-align: center">
                <img src="../assets/avatar.jpg" class="system-avatar" />
                <h3 class="system-title">Template</h3>
            </div>
            <NMenu class="system-menu" :options="menuOptions" />
        </NLayoutSider>
        <NLayout :native-scrollbar="false" embedded style="height: 100%">
            内容区域
        </NLayout>
        <NLayoutSider content-style="padding: 24px;" :native-scrollbar="false" class="right-sider">
            <SwitchTheme/>
        </NLayoutSider>
    </NLayout>
</template>

<style scoped lang="less">

.system-avatar {
    width: 35px;
    height: 35px;
    display: inline-block;
    border-radius: 5px;
}
.system-title {
    display: inline-block;
    vertical-align: top;
    height: 35px;
    line-height: 35px;
    margin-left: 15px;
}
.system-menu {
    margin: auto;
    margin-top: 20px;
    width: 160px;
}
.left-sider {
    box-shadow: 16px 0px 80px rgba(0, 0, 0, 0.05);
    height: 100%;
}
.right-sider {
    box-shadow: -16px 0px 80px rgba(0, 0, 0, 0.05);
    height: 100%;
}
</style>
<style lang="less">
.n-scrollbar-content {
    height: 100%;
}
</style>
