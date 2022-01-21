<template>
  <content-loader
    class="flex flex-col rounded px-4"
    width="100%"
    height="300px"
  >
    <div class="flex flex-row justify-between">
        <content-loader
        class="mt-3 rounded"
        width="10%"
        height="28px"
        animation-duration="2s"
        />

        <content-loader
        class="mt-3 rounded"
        width="10%"
        height="28px"
        animation-duration="2s"
        />
    </div>
    <content-loader
      class="mt-3 rounded"
      width="90%"
      height="28px"
      animation-duration="2.3s"
    />

    <content-loader
      class="mt-3 rounded"
      width="55%"
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
import ContentLoader from '../ContentLoader'
export default {
  components: { ContentLoader }
}
</script>

<style>

</style>
