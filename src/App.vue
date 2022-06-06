<template>
  <vue-progress-bar></vue-progress-bar>
  <transition name="header-transform" mode="out-in">
    <Header v-show="showHeader"></Header>
  </transition>
  <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade-transform" mode="out-in">
        <keep-alive :exclude="['Post']" :max="10">
          <component :is="Component" />
        </keep-alive>
        </transition>
      </router-view>
  </main>
  <Footer></Footer>
  <Panel></Panel>
  <ScrollTop></ScrollTop>
</template>

<script>
import { debounce as __debounce} from 'lodash'
import Header from '@/components/Header'
import Panel from '@/components/Panel'
import Footer from '@/components/Footer'
import ScrollTop from '@/components/ScrollTop'
import { getLocation, isMobile } from '@/utils'

export default {
  components:{
    Header,
    Panel,
    Footer,
    ScrollTop
  },
  data(){
    return{
      showHeader: true,
    }
  },
    watch: {
    $route: {
      immediate: true,
      handler(val) {
        if (this.$isMobile.value) {
          this.showHeader = val.name !== 'post'
        }
        if (val.name === 'post') {
          setTimeout(this.scrollTop, 500)
        }
      },
    },
    '$isMobile.value': {
      immediate: true,
      handler(val) {
        if (val) {
          this.showHeader = this.$route && this.$route.name !== 'post'
        } else {
          this.showHeader = true
        }
      },
    },
  },
  created() {
    this.initProgress()
    this.visitorStatistics()
  },
  mounted() {
    this.$Progress.finish()
    window.addEventListener('resize', this.handleResize)
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },
    methods: {
    // 窗口监听
    handleResize:__debounce(function() {
      this.$isMobile.value = isMobile()
    },300),
    // 注册顶部进度条
    initProgress() {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()
        next()
      })
      this.$router.afterEach(() => {
        this.$Progress.finish()
      })
    },
    // 统计访客来源
    visitorStatistics() {
      const referrer = getLocation(document.referrer)
      const hostname = referrer.hostname || '直接访问'
      this.$store.dispatch('visitorStatistics', hostname)
    },
    // 滚动到顶部
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },

}
</script>

<style lang="scss" scope>
#app {
  position: relative;

  @include pc-layout {
    padding-bottom: 100px;
  }

  @include sp-layout {
    padding-bottom: 60px;
  }
  .main {
    margin: 0 auto;
    max-width: $page-desktop;
    user-select: text;
  }
}
</style>
