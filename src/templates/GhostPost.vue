<template>
    <Layout>
        <div class="post-title">
            <h1 class="post-title__text">
                {{ $page.post.title }}
            </h1>

            <PostMeta :post="$page.post"/>

        </div>

        <div class="post content-box">
            <div class="post__header">
                <g-image alt="Cover image" v-if="$page.post.cover_image" :src="$page.post.cover_image"/>
            </div>

            <div class="post__content" v-html="$page.post.content"/>

            <div class="post__footer">
                <PostTags :post="$page.post"/>
            </div>
        </div>

        <div class="post-comments">
            <div id="remark42"></div>
        </div>

        <Author class="post-author"/>
    </Layout>
</template>

<script>
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author.vue'

export default {
    components: {
        Author,
        PostMeta,
        PostTags
    },
    mounted() {
        insertScript('comments-script', document.body);
        const remark42 = window.REMARK42;
        if (remark42) {
            remark42.destroy();
            remark42.createInstance(window.remark_config);
        }
    },
    metaInfo() {
        return {
            title: this.$page.post.title,
            meta: [
                {
                    name: 'description',
                    content: this.$page.post.description
                }
            ]
        }
    }
}

// This function will insert the usual <script> tag of
// Remark42 into the specified DOM location (parentElement)
const insertScript = (id, parentElement) => {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.id = id;
    // Now the actual config and script-fetching function:
    script.innerHTML = `
    var remark_config = {
        host: 'https://remark.maxvamp.com',
        site_id: 'vampstories',
        theme: document.documentElement.classList.contains('dark') ? 'dark' : 'light'
    };
    !function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);`;
    parentElement.appendChild(script);
};
</script>

<page-query>
query Post ($path: String!) {
  post: ghostPost (path: $path) {
    title
    path
    date: published_at (format: "D. MMMM YYYY")
    tags {
      id
      title: name
      path
      slug
    }
    description: excerpt
    content: html
    cover_image: feature_image
  }
}
</page-query>

<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

.post {

  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;

    img {
      width: 100%;
    }

    &:empty {
      display: none;
    }
  }

  &__content {
    h2:first-child {
      margin-top: 0;
    }

    p:first-of-type {
      color: var(--title-color);
    }

    img {
      width: calc(100% + var(--space) * 2);
      margin-left: calc(var(--space) * -1);
      display: block;
      max-width: none;
    }
  }
}

.post-comments {
  margin: 10px auto;
  max-width: var(--content-width);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>
