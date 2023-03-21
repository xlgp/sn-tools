<template>
  <highlightjs
    class="highlightjs"
    autodetect
    :code="code"
    :language="language"
    @click="copy(code)"
  />
</template>
<script setup lang="ts">
import "highlight.js/lib/common";
import "highlight.js/styles/atom-one-dark.css";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import { useClipboard } from "@vueuse/core";

const { code, language } = defineProps({
  code: { type: String },
  language: { type: String, default: "javascript" },
});

const { text, copy, copied, isSupported } = useClipboard({ source: code });

const highlightjs = hljsVuePlugin.component;

watch(copied, (newValue) => {
  if (newValue) ElMessage.success("已复制");
});
</script>
<style scoped>
.highlightjs {
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
<style>
pre > code {
  border-radius: 4px;
}
</style>
