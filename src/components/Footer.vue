<template>
  <div id="footer">
    &copy; {{ date }} Eric Marcus
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss">
@import '~styles/style.scss';

  #footer {
    text-align: center;
    padding: 2rem;
    margin-top: 2rem;
    border-top: 1px solid $megaphone;
  }
</style>
