<template>
  <header id="masthead" class="site-header" role="banner">
    <div class="site-branding">
      <div class="site-branding__wrapper">
        <a class="site-link" href="http://makinggayhistory.org">
          <h1 class="site-title">MAKING
            <br>GAY
            <br>
            <span id="history--h">H</span>
            <span id="history--i">I</span>
            <span id="history--s">S</span>
            <span id="history--t">T</span>
            <span id="history--o">O</span>
            <span id="history--r">R</span>
            <span id="history--y">Y</span>
          </h1>
          <p class="site-description">Bringing the voices of queer history to life through intimate conversations with LGBTQ champions, heroes, and witnesses to history.<br /><br />
          “Can’t know where we’re going if we don’t know where we’ve been.”</p>
        </a>
      </div>
    </div>
    <!-- .site-branding -->
  </header>
</template>

<script>
export default {
  name: 'header',
}
</script>

<style lang="scss" scoped>
@import '~styles/style.scss';

#masthead {
  background-color: rgba(34, 34, 34, 0.6);
  background-blend-mode: overlay;
  background-image: url(../assets/kameny1950s.jpeg);
  background-size: cover;
  background-position: 44% 0%;
  background-attachment: fixed;
  text-align: center;
  width: 100vw;
  height: 68vh;
  min-height: 30vw;
  display: table;
  background-repeat: no-repeat;
  margin-bottom: 2rem;
}

.site-branding {
  vertical-align: middle;
  display: table-cell;
}

.site-branding__wrapper {
  @include columns(10);
  margin: 0 auto;
  @include responsive('medium') {
    @include columns(6);
  }
}

.site-link {
  color: $white;
  display: block;
  text-decoration: none;
  &:hover {
    color: $white;
  }
}

.site-title {
  @include font-size($pageTitleSize);
  font-family: $baskerville;
  font-weight: 400;
  margin: 0;
  padding: 0;
  @include responsive('medium') {
    @include font-size($titleSize);
    line-height: $titleSize + 0.4rem;
  }
  #history--h {
    color: $violet;
  }
  #history--i {
    color: $blue;
  }
  #history--s {
    color: $sky;
  }
  #history--t {
    color: $green;
  }
  #history--o {
    color: $yellow;
  }
  #history--r {
    color: $orange;
  }
  #history--y {
    color: $red;
  }
  .site-sub {
    @include font-size($headerSize);
    vertical-align: text-top;
    @include responsive('medium') {
      @include font-size($pageTitleSize);
    }
  }
}

.site-description {
  @include responsive('medium') {
    @include font-size($subheaderSize);
  }
}

.site-comingSoon {
  @include font-size($subheaderSize);
  color: $white;
  font-family: $baskerville;
  margin-top: 2.5rem;
  @include responsive('medium') {
    @include font-size($headerSize);
  }
}

.menu-toggle {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.main-navigation {
  display: none;
}

.mm-listview {
  font-size: 1rem;
}

.mm-listview>li>a {
  padding: 1rem 1rem 1rem 2rem;
}

.fa::before {
  float: left;
  width: 0.5rem;
  margin-top: 1rem;
  padding-left: 2rem;
}

.main-navigation ul li.fa.fa-lg a {
  font-size: 1rem;
  font-family: $lato;
}

.search-form>form {
  padding: 1rem 2rem 1rem 1rem;
  input {
    width: 100%;
    height: 2.4rem;
    padding-left: 1rem;
  }
}

.search-submit {
  display: none;
}
</style>
