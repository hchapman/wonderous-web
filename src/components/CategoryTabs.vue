<template>
<div class="category-tabs">
  <div class="tabs-container">
    <a
      class="tab background-dark"
      v-bind:class="category.id"
      v-for="category in categories"
      v-bind:href="'/#'+category.id"
      v-on:click="$emit('tab-selected', category.id); return false;">
      {{ category.toString() }}
    </a>
  </div>
</div>
</template>

<script>
export default {
    name: 'category-tabs',
    props: ['categories'],
}
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

.category-tabs {
    overflow-x: hidden;
    display: block;
    width: 100%;
    box-shadow: 0px 0px 3px black;
    position: relative;
    z-index: 5;   
}

.tabs-container {
    a.tab {
        text-align: center;
        padding: 1em;
        padding-top: 1em;
        padding-bottom: 1em;
        flex: 1 1 auto;
        text-decoration: none;
    }
    background: #aaa;
    display: flex;
    overflow-x: auto;
}

</style>
