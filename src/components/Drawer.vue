<template>
<div>
  <aside
    ref="drawer-root"
    :class="classes"
    class="mdc-drawer mdc-drawer--modal">
    <div class="mdc-drawer__content">
      <nav class="mdc-list">
        <slot></slot>
      </nav>
    </div>
  </aside>
  <div
    class="mdc-drawer-scrim mdc-drawer-top-bar--fixed-adjust"
    @click="handleScrimClick"></div>
</div>
</template>

<script>
import {MDCModalDrawerFoundation} from '@material/drawer';
import {MDCListFoundation} from '@material/list';

import {createFocusTrapInstance} from '@material/drawer/util';

export default {
    name: 'drawer',
    data: function() {
        return {
            classes: {}
        };
    },
    props: ['open'],
    watch: {
        open: function(newOpen, oldOpen) {
            if (newOpen != oldOpen)
                newOpen ? this.foundation.open() : this.foundation.close();
        }
    },
    methods: {
        selectTab: function(id, event) {
            this.currentCategory = id
        },
        handleScrimClick: function() {
            this.foundation.handleScrimClick();
        }
    },
    mounted: function() {
        // Instantiation
        this.drawer_ = this.$refs['drawer-root'];
        
        this.focusTrap_ = createFocusTrapInstance(this.drawer_);

        this.foundation = new MDCModalDrawerFoundation({
            addClass: className => {
                this.$set(this.classes, className, true)
            },
            removeClass: className => {
                this.$delete(this.classes, className);
            },
            hasClass: className => {
                return this.drawer_.classList.contains(className);
            },
            elementHasClass: (element, className) => {
                return element.classList.contains(className);
            },
            saveFocus: () => {
                this.previousFocus_ = document.activeElement;
            },
            restoreFocus: () => {
                const previousFocus = this.previousFocus_ && this.previousFocus_.focus;
                if (this.drawer_.contains(document.activeElement) && previousFocus) {
                    this.previousFocus_.focus();
                }
            },
            focusActiveNavigationItem: () => {
                const activeNavItemEl = this.drawer_.querySelector(
                    `.${MDCListFoundation.cssClasses.LIST_ITEM_ACTIVATED_CLASS}`);
                if (activeNavItemEl) {
                    activeNavItemEl.focus();
                }
            },
            trapFocus: () => {
                this.focusTrap_.activate();
            },
            releaseFocus: () => {
                this.focusTrap_.deactivate();
            },
            notifyOpen: () => {
                this.$emit('update:open', true)
                this.$emit('open')
            },
            notifyClose: () => {
                this.$emit('update:open', false)
                this.$emit('close')
            },
        });
        
        this.foundation.init();

        this.drawer_.addEventListener(
            'transitionend',
            (evt) => this.foundation.handleTransitionEnd(evt));
        this.drawer_.addEventListener(
            'keydown',
            (evt) => this.foundation.handleKeydown(evt));

        this.foundation.open();
    },
}
</script>

<style lang="scss">
@import '../styles/variables';
@import '../styles/wonder-styles';

@import "@material/drawer/mdc-drawer";
@import "@material/top-app-bar/_variables";
@import "@material/elevation/mdc-elevation";

.mdc-drawer-scrim.mdc-drawer-top-bar--fixed-adjust {
    @media (max-width: $mdc-top-app-bar-mobile-breakpoint) {
        top: $mdc-top-app-bar-mobile-row-height;
    }

    top: $mdc-top-app-bar-row-height;
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
