<template>
  <div id="gitalk" />
</template>

<script>
import Gitalk from 'gitalk'

export default {
  name: 'Comment',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  async mounted() {
    await this.$nextTick()
    this.renderGitalk()
  },
  methods: {
    renderGitalk() {
      const gitalk = new Gitalk({
        ...this.$config.gitalk,
        title: this.title,
      })
      gitalk.render('gitalk')
    },
  },
}
</script>
