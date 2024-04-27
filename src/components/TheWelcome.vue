<script setup>
// Gallery
import { ref, onMounted } from 'vue'
import { PhotoService } from '@/service/PhotoService'

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data))
})

const images = ref()
const responsiveOptions = ref([
  {
    breakpoint: '1300px',
    numVisible: 4
  },
  {
    breakpoint: '575px',
    numVisible: 1
  }
])
</script>

<template>
  <!-- Gallery -->
  <div class="card">
    <GalleriaPrime
      :value="images"
      :responsiveOptions="responsiveOptions"
      :numVisible="5"
      containerStyle="max-width: 640px"
      :circular="true"
      :autoPlay="true"
      :transitionInterval="4000"
      :showItemNavigators="true"
      :showItemNavigatorsOnHover="true"
      :showThumbnails="false"
    >
      <template #item="slotProps">
        <img
          :src="slotProps.item.itemImageSrc"
          :alt="slotProps.item.alt"
          style="width: 100%; display: block"
        />
      </template>
    </GalleriaPrime>
  </div>
</template>
