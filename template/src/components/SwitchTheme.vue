<script setup lang="ts">
import { ref } from "vue";
import { DarkTheme20Regular } from "@vicons/fluent";
import emitter from "../event/event";

let theme = ref("dark");
const switchTheme = () => {
    theme.value = theme.value == "dark" ? "light" : "dark";
    emitter.emit("on-switch-theme", theme.value);
};
switchTheme();
</script>

<template>
    <!-- 最开始需要适配两种主题，这写了两套样式，更具主题动态切换class。 -->
    <!-- <div @click="switchTheme" :class="['theme-wrap', theme == 'light' ? 'light-to-dark':'dark-to-light']"> -->
    <!-- 采用css变量动态切换后，只需要一套样式，动态加载css变量即可 -->
    <div @click="switchTheme" class="theme-wrap">
        <span>换个风格</span>
        <n-icon size="20" class="theme-icon">
            <DarkTheme20Regular />
        </n-icon>
    </div>
</template>
<style scoped lang="less">
.theme-wrap {
    background: var(--theme-bg-color);
    outline: none;
    cursor: pointer;
    border: none;
    font-family: inherit;
    position: relative;
    letter-spacing: 0.05rem;
    font-weight: 700;
    font-size: 15px;
    overflow: hidden;
    user-select: none;
    text-align: center;
    padding: 10px 30px;
    margin: auto;
    border-radius: 5px;
    box-shadow: 1px 1px 5px;
    span,
    .theme-icon {
        color: var(--theme-text-color);
        position: relative;
        z-index: 10;
        transition: color 0.2s;
    }
    &:hover {
        .theme-icon,
        span {
            color: var(--theme-text-hover-color);
        }
    }
}

.theme-wrap::before,
.theme-wrap::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.theme-wrap::before {
    background: var(--theme-before-bg-color);
    content: "";
    width: 120%;
    left: -10%;
    transform: skew(30deg);
    // transform: translate3d(-100%, 0, 0);
    transition: transform 0.2s cubic-bezier(0.3, 1, 0.8, 1);
}

.theme-wrap:hover::before {
    transform: translate3d(100%, 0, 0);
}
.theme-icon {
    vertical-align: sub;
    margin-left: 10px;
}
</style>
