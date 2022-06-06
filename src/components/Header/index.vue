<template>
  <header>
    <router-link class="title" to="/">{{ $config.title }}</router-link>
    <span class="subtitle">{{ $config.subtitle }}</span>
    <nav>
      <router-link v-for="menu in displayMenu" :key="menu.path" :to="menu.path">
        <i :class="['icon', `icon-${menu.icon}`]"></i>
        {{ menu.title }}
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    const { archiveOpts, categoryOpts, tagOpts, inspirationOpts, songOpts, friendOpts, aboutOpts } = this.$config
    return {
      menu: [
        { path: '/', display: true, icon: 'shop', title: '首页' },
        { path: '/archive', display: archiveOpts.display, icon: 'inbox', title: '归档' },
        { path: '/category', display: categoryOpts.display, icon: 'bookmark-empty', title: '分类' },
        { path: '/tag', display: tagOpts.display, icon: 'tag', title: '标签' },
        { path: '/song', display: songOpts.display, icon: 'pencil', title: '歌单' },
        { path: '/inspiration', display: inspirationOpts.display, icon: 'comment', title: '灵感' },
        { path: '/friend', display: friendOpts.display, icon: 'heart', title: '友链' },
        { path: '/about', display: aboutOpts.display, icon: 'universal-access', title: '关于' },
      ],
    }
  },
  computed: {
    displayMenu() {
      return this.menu.filter((o) => o.display)
    },
  },
}
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>
