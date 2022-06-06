<template>
  <div id="panel" v-show="showPanel">
    <div class="mask" @click="hidePanel"></div>
    <div class="container">
      <div class="wrapper">
        <div class="short-line">
          <div></div>
          <div></div>
        </div>
        <div class="main">
          <div class="header">
            <div class="inner">背景主题</div>
          </div>
          <div class="body" v-if="showPanel">
            <Theme  :theme="theme" @switchTheme="switchTheme" />
            <div class="like">
              <p>
                已有
                <span>{{ likeTimes }}</span> 人点赞了哦！
              </p>
            </div>
          </div>
          <div class="footer">
            <div class="cursor" :data-title="likeBtnText" @click="likeSite"></div>
          </div>
        </div>
        <div class="long-line">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Theme from './components/Theme'
import { localSave, localRead } from '@/utils'
import images from '@/assets/images'

const { bg } = images

export default {
  name: 'Panel',
  components: { Theme },
  data() {
    return {
      theme: '',
      likeTimes: 0,
      isLikeSite: localRead('isLikeSite', false),
      currentInx: 1,
      lockSwiper: false,
    }
  },
  computed: {
    ...mapState({
      showPanel: (state) => state.showPanel,
    }),
    likeBtnText() {
      return this.isLikeSite ? "谢谢点赞 (●'◡'●)" : '点赞一下 (<ゝω・)☆'
    },
  },
  watch: {
    '$isMobile.value': {
      immediate: true,
      handler(val) {
        if (val) return
        this.initTheme()
      },
    },
  },
  mounted() {
    this.queryLike()
  },
  methods: {
    // 点赞数
    async queryLike() {
      this.likeTimes = await this.$store.dispatch('queryLike', 'getTimes')
    },
    // 点赞
    async likeSite() {
      if (this.isLikeSite) return
      this.likeTimes = await this.$store.dispatch('queryLike')
      this.isLikeSite = true
      localSave('isLikeSite', true)
    },
    // 初始化背景主题
    initTheme() {
      if (this.theme) return
      const theme = localRead('theme', 'touhou')
      this.setTheme(theme)
    },
    // 切换主题
    switchTheme(theme) {
      if (theme === this.theme) return
      this.setTheme(theme)
    },
    // 设置主题
    setTheme(theme) {
      this.theme = theme
      localSave('theme', theme)
      window.$('#bg').backstretch(bg[theme], {
        duration: 10000,
        alignY: 0,
        transition: 'fade',
        transitionDuration: 1000,
      })
    },
    // 关闭面板
    hidePanel() {
      this.$store.commit('setShowPanel', false)
      this.$nextTick(() => {
        this.currentInx = 1
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
