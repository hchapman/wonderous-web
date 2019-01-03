<template>
<div class="category-tabs">
  <div class="tabs-container">
    <div
      class="tab background-primary"
      v-bind:class="[category.id, currentCategory == category.id ? 'tab-selected' : '']"
      v-bind:category="category"
      v-for="category in categories">
      <a
        v-bind:href="'/#'+category.id"
        v-on:click="selectTab(category.id, $event); $emit('tab-selected', category.id); return false;">
        {{ category.toString() }}
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'category-tabs',
    data: function() {
        return {
            currentCategory: 'military'
        };
    },
    props: ['categories'],
    methods: {
        selectTab: function(id, event) {
            this.currentCategory = id
        },
    }
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
    height: 2.5em;
}

.tabs-container {
    div.tab {
        @each $stage,$primarycolor in $stagecolors-primary {
            &.#{$stage}.tab-selected {
                background-color: saturate(darken($primarycolor, 10), 20);
            }
        }
        
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1 1 auto;
        a {
            text-decoration: none;
            color: white;
            text-shadow: 0 0 3px $text-shadow-color;
            padding: 0rem 1rem;
            font-size: 0.8rem
        }
        
        transition-property: background-color;
        transition-duration: 0.5s;    
    }
    background: #aaa;
    display: flex;
    overflow-x: auto;
}

</style>
