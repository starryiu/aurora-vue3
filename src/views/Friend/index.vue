<template>
  <div id="friend">
    <Transition name="fade-transform" mode="out-in">
      <div class="page" v-if="!$lodash.isEmpty(friend)">
        <Quote :quote="$config.friendOpts.qoute" />
        <div class="me">
          <span>欢迎各位大佬交换友链 (づ￣ 3￣)づ</span>
          <span>★ Bio：{{ $config.nickname }}</span>
          <span>★ Motto：{{ $config.subtitle }}</span>
          <span>★ URL：{{ $config.siteUrl }}</span>
          <span>★ Avatar：<a :href="$config.aboutOpts.avatar" target="_blank">点击获取</a></span>
          <span>※ 以下友链按博主互访频率排序，并根据个人对博客内容喜好加权，博主将不定期更新排序并过滤阵亡名单。</span>
        </div>
        <ul class="content">
          <li v-for="item in friend" :key="item.name">
            <a :href="item.link" rel="noopener noreferrer" target="_blank">
              <Cover class="cover" :src="item.cover" :alt="item.name" :loadCover="true" />
              <div class="info">
                <img :src="item.avatar" alt />
                <span>{{ item.name }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <Loading v-else />
    </Transition>

    <Comment v-if="$config.friendOpts.enableComment && initComment" title="友链" />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Cover from '@/components/Cover'
import Quote from '@/components/Quote'
import Comment from '@/components/Comment'

export default {
  name: 'Friend',
  components: {
    Loading,
    Cover,
    Quote,
    Comment,
  },
  data() {
    return {
      friend: [],
      initComment: false,
      LOAD_INX: 100,
    }
  },
  async mounted() {
    await this.queryFriends()
    this.initComment = true
  },
  methods: {
    async queryFriends() {
      this.friend = await this.$store.dispatch('queryPage', { type: 'friend' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
