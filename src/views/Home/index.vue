<template>
  <div id="home">
    <Transition name="fade-transform" mode="out-in">
      <div v-if="posts.length">
        <div class="content">
          <template v-for="post in posts" :key="post.id">
            <ArticleCard class="cursor" :post="post" :times="times"></ArticleCard>
          </template>
        </div>
        <div class="btn-group" v-if="!isDisabledPrev || !isDisabledNext">
          <Pagination
            :loading="loading"
            :isDisabledPrev="isDisabledPrev"
            :isDisabledNext="isDisabledNext"
            @handlePage="queryPosts"
          />
        </div>
      </div>
      <Loading v-else />
    </Transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loading from '@/components/Loading'
import Pagination from '@/components/Pagination'
import ArticleCard from './components/ArticleCard'

export default {
  name: 'Home',
  components: {
    Loading,
    Pagination,
    ArticleCard,
  },
  data() {
    return {
      loading: false,
      page: 0,
      pageSize: 10,
      posts: [],
      list: [],
      times: {},
    }
  },
  computed: {
    ...mapState({
      totalCount: (state) => state.totalCount,
    }),
    maxPage() {
      return Math.ceil(this.totalCount / this.pageSize)
    },
    isDisabledPrev() {
      return this.page <= 1
    },
    isDisabledNext() {
      return this.page >= this.maxPage
    },
  },
  async created() {
    if (!this.totalCount) {
      await this.$store.dispatch('queryArchivesCount')
    }
    await this.queryPosts()
  },
  methods: {
    // 获取文章列表
    async queryPosts(type = 'next') {
      if (this.loading) return
      const queryPage = type === 'prev' ? this.page - 1 : this.page + 1
      this.page = queryPage
      this.LOAD_INX = 4

      if (this.list[queryPage]) {
        this.scrollTop(() => {
          this.posts = this.list[queryPage]
        })
        return
      }

      this.loading = true
      const posts = await this.$store.dispatch('queryPosts', {
        page: queryPage,
        pageSize: this.pageSize,
      })
      this.loading = false

      this.scrollTop(() => {
        this.posts = posts
        this.list[queryPage] = posts
      })

      // 获取文章热度
      const ids = posts.map((o) => o.id)
      const hot = await this.$store.dispatch('queryHot', { ids })
      this.times = { ...this.times, ...hot }
    },
    // 滚动到顶部
    scrollTop(cb) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      const delayTime = this.$isMobile.value ? 200 : 0
      setTimeout(cb, 800 + delayTime)
    },
  },
}
</script>

<style lang="scss" scope>
@import "./index.scss";
</style>
