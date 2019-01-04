<template>
<div class="category-tabs">
  <div class="mdc-tab-bar" role="tablist">
    <div class="mdc-tab-scroller">
      <div class="mdc-tab-scroller__scroll-area">
        <div class="mdc-tab-scroller__scroll-content">
          <button class="wnd-tab mdc-tab background-primary" role="tab"
                  v-for="(category, index) in categories"
                  v-bind:class="[index === 0 ? 'mdc-tab--active' : '', category.id ]"
                  v-bind:md-label="category.toString()"
                  v-bind:href="'#'+category.id"
                  v-bind:key="category.id"
                  v-on:click="selectTab(category.id, $event); $emit('tab-selected', category.id); return false;"
                  v-bind:tabindex="[ index === 0 ? 0 : -1 ]">
            <span class="mdc-tab__content">
              <span class="mdc-tab__text-label">{{ category.toString() }}</span>
            </span>
            <span class="wnd-tab-indicator mdc-tab-indicator"
                  v-bind:class="{'mdc-tab-indicator--active': index === 0}">
              <span class="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
            </span>
            <span class="mdc-tab__ripple"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {MDCTabBar} from '@material/tab-bar';

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
    },
    mounted: function () {
        this.tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
    },
}
</script>

<style lang="scss">
$mdc-theme-on-surface: white;
$mdc-theme-primary: white;

@import "@material/tab-bar/mdc-tab-bar";
@import "@material/tab-scroller/mdc-tab-scroller";
@import "@material/tab-indicator/mdc-tab-indicator";
@import "@material/tab/mdc-tab";

@import "@material/elevation/mdc-elevation";

@import '../styles/_variables';
@import '../styles/wonder-styles';

.category-tabs {
    @include mdc-elevation(2);
    @media screen and (min-width: 900px) {
        display: none;
    }
    overflow-y: hidden;
    overflow-x: hidden;
    display: block;
    width: 100%;

    position: fixed;
    height: 48px;
    z-index: 1;
}

.mdc-tab-bar {

}

.mdc-tab {
    z-index: 0;
}
.mdc-tab--active {
    z-index: 1;
}

/* .wnd-tab { */
/*     @include mdc-tab-text-label-color(white); */
/* } */
/* .wnd-tab-indicator { */
/*     @include mdc-tab-indicator-underline-color(white); */
/* } */

.tabs-container {
    overflow-x: auto;
}

</style>
