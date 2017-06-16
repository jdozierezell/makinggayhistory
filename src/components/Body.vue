<template>
  <div id="body">
    <div class="port-link" v-for="port in portLinks" :key="port.id">
      <router-link v-if="port.type === 'internal'" :to="port.url">
        <div :style="{backgroundImage: `url(${port.img})`}" alt=""></div>
        <p>{{ port.title }}</p>
      </router-link>
      <a v-else :href="port.url" :target="port.type === 'external' ? '_blank' : '_self'">
        <div :style="{backgroundImage: `url(${port.img})`}" alt=""></div>
        <p>{{ port.title }}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'body',
  data() {
    return {
      portLinks: [
        {
          id: 1,
          type: 'external',
          img: require('assets/MGH_Megaphone-01.jpg'),
          url: 'http://makinggayhistory.com',
          title: 'Podcast',
        },
        {
          id: 2,
          type: 'external',
          img: require('assets/Stack-of-Rainbow-Cassettes.jpg'),
          url: 'http://archives.nypl.org/mss/17770',
          title: 'Archive',
        },
        {
          id: 3,
          type: 'external',
          img: require('assets/HUE-logo-new-191.png'),
          url: 'https://unerased.org',
          title: 'Education Partner',
        },
        {
          id: 4,
          type: 'external',
          img: require('assets/mgh_book.png'),
          url: 'http://ericmarcus.com/eric-marcus-books.php?epm=1_6',
          title: 'Book',
        },
        {
          id: 5,
          type: 'email',
          img: require('assets/IMG_4119.jpg'),
          url: 'mailto:carol@workman.com',
          title: 'Presentations',
        },
        // {
        //   id: 6,
        //   type: 'internal',
        //   img: require('assets/STONEWALL-FINAL-LOGO.jpg'),
        //   url: '/stonewall',
        //   title: 'Stonewall 50 Consortium',
        // },
        {
          id: 7,
          type: 'internal',
          img: require('assets/Eric-Marcus-Head-Shot-Med-Res-16.jpg'),
          url: '/about',
          title: 'About',
        },
        {
          id: 8,
          type: 'email',
          img: require('assets/email_me.jpg'),
          url: 'mailto:hello@makinggayhistory.org',
          title: 'Contact',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~styles/style.scss';

.port-link {
  flex: 0 0 columns(12);
  position: relative;
  overflow: hidden;
  grid-column: auto / span 12;
  @include responsive('medium') {
    flex: 0 0 columns(3);
    margin: 0.66%;
    grid-column: auto / span 3;
    @supports(display: grid) {
      margin: 0;
    }
  }
  div {
    width: 100%;
    padding-bottom: 100%;
    background-position: center;
    background-size: cover;
    filter: saturate(50%);
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-image: linear-gradient(transparent, transparent 75%, hsla(0, 0%, 0%, 0.4) 85%, hsla(0, 0%, 0%, 0.7) 95%);
      opacity: .6;
    }
    &:hover {
      filter: saturate(110%);
      transform: scale(1.1);
    }
  }
  p {
    position: absolute;
    width: 100%;
    margin: 0;
    bottom: 0.5rem;
    text-align: center;
    color: white;
    font-size: 1.4rem;
  }
}
</style>
