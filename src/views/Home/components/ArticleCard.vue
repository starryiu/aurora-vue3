<template>
  <article
    :class="{ cursor: true, active }"
    :key="post.id"
    ref="articleCard"
    @mouseenter="showTips(post)"
  >
    <router-link :to="{ name: 'post', params: { number: post.number } }">
      <div class="post-header">
        <Cover :src="post.cover.src" :alt="post.cover.title" :loadCover="true" />
        <div class="post-head">
          <h3>{{ post.title }}</h3>
          <span>{{ post.cover.title }}</span>
        </div>
      </div>
      <div class="post-body">
        <MarkDown :content="post.description" />
      </div>
      <div class="post-meta">
        <span>
          <i class="icon icon-calendar"></i>
          {{ post.created_at }}
        </span>
        <span>
          <i class="icon icon-fire"></i>
          热度{{ times[post.id] || 1 }}℃
        </span>
        <span>
          <i class="icon icon-bookmark-empty"></i>
          {{ post.milestone ? post.milestone.title : '未分类' }}
        </span>
        <span>
          <i class="icon icon-tag"></i>
          <span v-for="label in post.labels.slice(0, 2)" :key="label.id">{{ label.name }}</span>
        </span>
      </div>
    </router-link>
  </article>
</template>

<script>
import Cover from '@/components/Cover'
import MarkDown from '@/components/MarkDown'
export default {
  name: 'ArticleCard',
  components: {
    MarkDown,
    Cover,
  },
  props: {
    post: {
      type: Object,
      required: true,
    },
    times: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      active: false,
      observer: null,
    }
  },
  mounted() {
    this.observer = new IntersectionObserver((changes) => {
      for (const change of changes) {
        if (change.isIntersecting) {
          this.active = true
        } else {
          this.active = false
        }
      }
    })
    this.observer.observe(this.$refs.articleCard)
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    // 看板娘
    showTips(post) {
      const tips = `要去看看<span style="color: #b854d4"> ${post.title} </span>吗？`
      this.$store.dispatch('showTips', { tips })
    },
  },
}
</script>

<style lang="scss" scope>
article {
  transition: all 1s ease-in-out;
  transform: translateY(30px);
}
article.active {
  transform: translateY(0);
}
</style>
