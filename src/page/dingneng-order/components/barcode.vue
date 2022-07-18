<template>
  <svg ref="barcodeRef"></svg>
</template>
<script setup lang="ts">
import JsBarcode from "jsbarcode";

const { code } = defineProps({
  code: { type: String, required: true },
});

const barcodeRef = ref<HtmlElement>(null);

onMounted(() => {
  if (barcodeRef) {
    init(barcodeRef.value, code);
  }
});

watch(
  () => code,
  (code) => {
    console.log(barcodeRef, code);
    init(barcodeRef.value, code);
  }
);

const init = (node: HtmlElement, text: string) => {
  JsBarcode(node, text, {
    displayValue: false,
    height: 60,
  });
};
</script>
