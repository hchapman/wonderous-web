<template>
<a class="mdc-list-item mdc-list-item--activated" href="#" aria-selected="true">
  <i class="material-icons mdc-list-item__graphic" aria-hidden="true">{{ icon }}</i>
  <span class="mdc-list-item__text"><slot></slot></span>
</a>
</template>

<script>
export default {
    name: 'list-item',
    props: ['icon'],
}
</script>

<style scoped lang="scss">

</style>
