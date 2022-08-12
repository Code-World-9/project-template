<script setup lang="ts">
import { darkTheme } from "naive-ui";
import emitter from "./event/event";
import { ref } from "vue";
import { BuiltInGlobalTheme } from "naive-ui/es/themes/interface";
let curTheme = ref<BuiltInGlobalTheme | undefined>(undefined);
let themeVal = ref("light");
emitter.on("on-switch-theme", (theme: unknown) => {
    themeVal.value = theme as string;
    curTheme.value = theme === "dark" ? darkTheme : undefined;
});
</script>

<template>
    <n-config-provider :data-theme="themeVal" :theme="curTheme" :locale="zhCN" :date-locale="dateZhCN" style="width:100%;height:100%">
        <n-message-provider>
            <n-dialog-provider>
                <global />
                <router-view />
            </n-dialog-provider>
        </n-message-provider>
    </n-config-provider>
</template>

<style scoped>
</style>
<style lang="less">
@import "./style/index.less";
</style>