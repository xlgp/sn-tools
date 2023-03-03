<template>
    <highlightjs id="highlightjs" autodetect :code="jsonCode" data-clipboard-target="#highlightjs" />
</template>
<script setup lang="ts">

import useTrack from "../composable/useTrack";
import 'highlight.js/lib/common';
import "highlight.js/styles/atom-one-dark.css"
import hljsVuePlugin from "@highlightjs/vue-plugin";
import ClipboardJS from "clipboard";

const highlightjs = hljsVuePlugin.component;
const { jsonCode } = useTrack();
onMounted(() => { new ClipboardJS("#highlightjs"); });
</script>
<style>
pre>code {
    border-radius: 4px;
}
</style>