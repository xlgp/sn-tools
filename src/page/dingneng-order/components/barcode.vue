<template>
  <svg ref="barcodeRef"></svg>
</template>
<script setup lang="ts">
import JsBarcode from "jsbarcode";

const { code } = defineProps({
  code: { type: String, required: true },
});

const barcodeRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (barcodeRef.value) {
    init(barcodeRef.value, code);
  }
});

const init = (node: HTMLElement, text: string) => {
  JsBarcode(node, text, {
    displayValue: false,
    height: 60,
  });
};
</script>
