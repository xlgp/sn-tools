<template>
    <highlightjs autodetect :code="jsonCode" />
</template>
<script setup lang="ts">

import useTrack from "../composable/useTrack";
import 'highlight.js/lib/common';
import "highlight.js/styles/atom-one-dark.css"
import hljsVuePlugin from "@highlightjs/vue-plugin";

const highlightjs = hljsVuePlugin.component;
const { jsonCode } = useTrack();
</script>
<style>
pre>code {
    border-radius: 4px;
}
</style>