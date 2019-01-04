<template>
<div id="wonderous-app">
  <appbar
    v-bind:categories="gameConfig.getCategories()"
    v-bind:currentTab="currentTab"
    v-on:open-drawer="toggleDrawer()">
  </appbar>
  <div class="mdc-top-app-bar--fixed-adjust">
    <drawer
      v-bind:open.sync="isDrawerOpen">
      <list-item
        icon="inbox">Inbox</list-item>
    </drawer>
    <score-sheet></score-sheet>
  </div>
</div>
</div>
</template>

<script>
import Player from "./logic/Player.js";
import GameConfig from "./logic/GameConfig.js";

import Appbar from "./components/Appbar.vue";
import Drawer from "./components/Drawer.vue";
import ListItem from "./components/ListItem.vue";
import ScoreSheet from "./components/ScoreSheet.vue";


let config = new GameConfig();
export default {
    name: 'wonderous-app',
    data: function() {
        return {
            message: "Hello!!",
            gameConfig: config,
            currentTab: "military",
            isDrawerOpen: false,
        };
    },
    components: {
        Appbar,
        Drawer,
        ListItem,
        ScoreSheet,
    },
    methods: {
        changeTab: function(event) {
            console.log(event);
            //this.currentTab = event;
            this.scoreFlik.selectCell('.'+event);
        },
        toggleDrawer: function() {
            this.isDrawerOpen = !this.isDrawerOpen;
        },
    },
    provide: function() {
        return {
            gameConfig: this.gameConfig,
        };
    },
    watch: {
        players: function () {
            this.$nextTick(function() {
                this.scoreFlik.resize();
            });
        }
    },
    mounted: function() {
        this.$nextTick(function() {          
            return;
        });
    },
};
</script>

<style lang="scss">
@import "@material/drawer/mdc-drawer";
@import "@material/list/mdc-list";

#wonderous-app, body {
    padding: 0;
    margin: 0;
}

.score-sheet-container {
    display: flex;
    width: 100%;
}

.total-score-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
}

.score-sheet-edit-scores {
    &:after {
        content: 'flickity';
        display: none;
    }
    
    @media screen and (min-width: 900px) {
        &:after {
            content: '';
        }
        
        overflow: auto;
        display: flex;
        flex-direction: row;
        flex-grow: 2;
    }
    flex-grow: 5;
}

.flickity-button {
    background: none;
    top: 1.3em;
}

.score-sheet-scores {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-grow: 4;
}

.player-row {
    height: 4em;
    border-top: 1px solid #444;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    padding-left: 0.3em;
    padding-right: 0.3em;
}

.edit-score-column {
    @media screen and (max-width: 700px) {
    }

    flex: 1 1 auto;
}

.header-row {
    font-weight: bold;
    text-align: center;
    padding-bottom:0.5em;
    padding-top: 0.5em;
    padding-left: 0.3em;
    padding-right: 0.3em;
}


.background-dark {
    color: white;
}

.sheet-column {
}

.player {
    .player-name{
        @media screen and (max-width: 900px) {
            font-size: 1.3em;
        }
        font-size: 2em;
    }
}

.table-scroll {
    overflow-x: auto;
}
table {
    min-width: 20em;
}

</style>
