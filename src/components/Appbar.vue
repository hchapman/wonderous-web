<template>
<header class="mdc-top-app-bar mdc-top-app-bar--fixed">
  <div class="wnd-appbar">
  <div class="mdc-top-app-bar__row"
       v-bind:class="currentTab">
    <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
      <a href="#"
         class="material-icons mdc-top-app-bar__navigation-icon"
         @click="$emit('open-drawer')">menu</a>
      <span class="mdc-top-app-bar__title">Wonderous</span>
    </section>
  </div>
  </div>
  <slot></slot>
</header>
</template>

<script>
import {MDCTopAppBar} from '@material/top-app-bar/index';

export default {
    name: 'appbar',
    data: function() {
        return {
            currentCategory: 'military'
        };
    },
    props: ['categories', 'currentTab'],
    methods: {
        selectTab: function(id, event) {
            this.currentCategory = id
        },
    },
    mounted: function() {
        // Instantiation
        this.topAppBarElement = document.querySelector('.mdc-top-app-bar');
        this.topAppBar = new MDCTopAppBar(this.topAppBarElement);
    },
}
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

@import "@material/top-app-bar/mdc-top-app-bar";
@import "@material/elevation/mdc-elevation";

.mdc-top-app-bar--fixed, .mdc-top-app-bar--fixed-scrolled {
    @include mdc-elevation(2);
}

.mdc-top-app-bar__row {
    @each $stage,$primarycolor in $stagecolors-primary {
        &.#{$stage} {
            transition-property: background-color;
            transition-duration: 0.5s;
            @include mdc-top-app-bar-fill-color($primarycolor);
        }
    }
}

.appbar {
    @include mdc-elevation(2);
    overflow-x: hidden;
    width: 100%;
    
    position: relative;
    z-index: 10;
    transition-property: background-color;
    transition-duration: 0.5s;
    height: 3.5rem;
}

.appbar {
    text-align: left;
    
    a.title {
        text-align: left;
        padding: 0rem 1rem;
        text-decoration: none;
        font-size: 1.4rem;
        flex: 1 1 auto;
    }
    
    .action-icon {
        padding: 0rem 1rem;
    }
    
    background: #aaa;   
    color: white;
    text-shadow: 0 0 3px $text-shadow-color;
    display: flex;
    align-items: center;
    overflow-x: none;
}

</style>
