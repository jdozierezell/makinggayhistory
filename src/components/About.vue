<template>
  <div id="body">
    <div class="about-image">
      <img :src="aboutImg" />
    </div>
    <div class="about-copy">
      <p>Eric Marcus is the principal behind Making Gay History and is creator and host of the Making Gay History podcast. He is the author of a dozen books, including <em>Making Gay History</em>, <em>Is It A Choice?</em>, <em>Why Suicide?</em>, and <em>Breaking the Surface</em>, the #1 <em>New York Times</em> bestselling autobiography of Olympic diving champion Greg Louganis.</p>
      <router-link class="button" tag="div" to="/"><a>Back to Home</a></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutImg: require('../assets/Eric-Marcus-Head-Shot-Med-Res-16.jpg'),
    }
  },
}
</script>

<style lang="scss">
@import '~styles/style.scss';

.about-image {
  flex: 0 0 columns(12);
  margin-bottom: 0.4rem;
  grid-column: auto / span 12;
  @include responsive('medium') {
    flex: 0 0 columns(4);
    grid-column: 1 / 4;
    @supports(display: grid) {
      margin-bottom: 0;
    }
  }
}

.about-copy {
  flex: 0 0 columns(12);
  font-size: 1rem;
  line-height: 1.4em;
  grid-column: auto / span 12;
  @include responsive('medium') {
    flex: 0 0 columns(8);
    font-size: 1.4rem;
    grid-column: 4 / 12
  }
}

</style>
