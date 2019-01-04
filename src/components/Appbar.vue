<template>
<div class="appbar-container">
  <div class="appbar background-dark"
       v-bind:class="currentTab">
    <a class="title">
      Wonderous
    </a>
    <i class="fas fa-sliders-h action-icon"></i>
  </div>
</div>
</template>

<script>
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
    }
}
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

.appbar {
    overflow-x: hidden;
    width: 100%;
    box-shadow: 0px 0px 3px black;
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
