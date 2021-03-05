<script setup lang="ts">
import { ref } from 'vue'
import { Device } from 'mediasoup-client'

const name = ref('')
const device = new Device()

name.value = device.handlerName
</script>

<template>
  <div>
    Handler from Mediasoup: {{ name }}
  </div>
</template>
