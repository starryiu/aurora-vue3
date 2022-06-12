<template>
  <div id="song">
    <Transition name="fade-transform" mode="out-in">
      <div class="page" v-if="!$lodash.isEmpty(song)">
        <Quote :quote="$config.songOpts.qoute" />
        <ul class="content">
          <li v-for="item in song" :key="item.name">
            <div class="info">
              <a class="song-container" :href="item.link" target="_blank" rel="noreferrer noopener">
                <div class="song">
                  <img :src="item.cover" :alt="item.name" />
                </div>
              </a>
              <div>
                <h3>{{ item.name }}</h3>
                <p>作者：{{ item.author }}</p>
                <p>出版时间：{{ item.published }}</p>
                <p>类型：{{ item.progress }}</p>
                <p>
                  <span>笔记：</span>
                  <a v-if="item.postLink" :href="item.postLink" target="_blank" rel="noopener noreferrer">
                    {{ item.postTitle }}
                  </a>
                  <span v-else>暂无</span>
                </p>
                <p>
                  <span>推荐指数：</span>
                  <span></span>
                  <i class="icon icon-star" v-for="i in parseInt(item.rating)" :key="`star-${i}`"></i>
                </p>
              </div>
            </div>
            <p class="description"><MarkDown :content="item.description" /></p>
          </li>
        </ul>
      </div>
      <Loading v-else />
    </Transition>

    <Comment v-if="$config.songOpts.enableComment && initComment" title="书单" />
  </div>
</template>

<script>
import Loading from '@/components/Loading'
import Quote from '@/components/Quote'
import Comment from '@/components/Comment'
import MarkDown from '@/components/MarkDown'

export default {
  name: 'Song',
  components: {
    Loading,
    Quote,
    Comment,
    MarkDown,
  },
  data() {
    return {
      song: [],
      initComment: false,
    }
  },
  async mounted() {
    await this.querySongs()
    this.initComment = true
  },
  methods: {
    async querySongs() {
      this.song = await this.$store.dispatch('queryPage', { type: 'song' })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
