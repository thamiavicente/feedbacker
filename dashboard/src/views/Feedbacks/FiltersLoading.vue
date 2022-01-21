<template>
  <content-loader
    class="flex flex-col rounded px-4"
    width="100%"
    height="300px"
  >
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="28px"
      animation-duration="2s"
    />

    <content-loader
      class="mt-3 rounded"
      width="60%"
      height="28px"
      animation-duration="2.3s"
    />

    <content-loader
      class="mt-3 rounded"
      width="80%"
      height="28px"
      animation-duration="2.7s"
    />

    <content-loader
      class="mt-3 rounded"
      width="70%"
      height="28px"
      animation-duration="2.9s"
    />
  </content-loader>
</template>

<script>
import ContentLoader from '../../components/ContentLoader'

export default {
  components: { ContentLoader }
}
</script>

<style>

</style>
