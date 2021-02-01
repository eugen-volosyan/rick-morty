<template>
  <div class="home">
   rick and morty 
   <caracter-block />
  </div>
</template>

<script>
import CaracterBlock from '@/components/CaracterBlock.vue';

export default {
  name: 'rick-and-morty-list',
  components: {
    CaracterBlock,
  }
}
</script>
