<template>
  <div id="app">
    <vue-header></vue-header>
    <main>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <vue-footer></vue-footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    'vue-header': Header,
    'vue-footer': Footer,
  },
};
</script>

<style lang="scss">
@import '~styles/style.scss';

body {
  margin: 0;
}

#app {
  box-sizing: border-box;
  font-family: $lato;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

#body {
  width: columns(10);
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1rem;
}

img,
figure {
  max-width: 100%;
  height: auto;
  @media(max-width: 375px) {
    width: 100% !important;
  }
}

#site-navigation a:before {
  width: 40%;
  height: 4px;
  left: 1rem;
}

.page__title {
  @include standard_content();
  @include font-size($pageTitleSize);
  padding: 0 2rem;
  margin: 0 auto 1rem;
  text-align: center;
  width: 100%;
}

.page__sub {
  @extend .page__title;
  @include font-size($headerSize);
}

.clear {
  clear: both;
}

.fadeIn, .fadeOut {
  animation-duration: 0.3s
}

.button {
  margin-top: 2.8rem;
  a {
    color: $white;
    border: 1px solid $white;
    border-radius: 0.45rem;
    background-color: $megaphone;
    font-size: 1.4rem;
    text-decoration: none;
    text-align: center;
    transition: all 0.2s ease-in-out;
    padding: 1rem 1.5rem;
  }
  &:hover a {
      border: 1px solid $megaphone;
      background-color: $white;
      color: $megaphone;
  }
}

p {
  margin-top: 1.4rem;
  margin-bottom: 1.4rem;
}

</style>
