<template>
  <section id="Cards">
    <h2>Cards</h2>

    <Example>
      <div class="card">
        <main class="card-body">
          <h3 class="title">Card title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <h4>Another title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <a :href="randomPhotoUrl" target="_blank">{{ randomPhotoUrl }}</a>
        </main>
        <footer class="card-footer">
          <div class="button-list">
            <button class="button button-filled">Complete</button>
            <button class="button button-text">Learn more</button>
          </div>
        </footer>
      </div>
    </Example>

    <h3>Hover</h3>
    <Example>
      <a class="card card-hover">
        <main class="card-body">
          <h3 class="title">Card title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <h4>Another title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <a :href="randomPhotoUrl" target="_blank">{{ randomPhotoUrl }}</a>
        </main>
        <footer class="card-footer">
          <div class="button-list">
            <button class="button button-filled">Complete</button>
            <button class="button button-text">Learn more</button>
          </div>
        </footer>
      </a>
    </Example>

    <h3>Media</h3>
    <Example>
      <div class="card">
        <header class="card-header">
          <h3>Card title</h3>
        </header>
        <aside class="card-media" style="height: 30vh;">
          <img class="card-media-image" :src="`${randomPhotoUrl}?random=media&grayscale&blur=10`" style="opacity:.15;" />
          <div class="card-media-overlay">
            <h2>Overlay</h2>
            <p class="lead">With rich content</p>
          </div>
        </aside>
        <main class="card-body">
          <h4 class="title">My sub title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
        <footer class="card-footer card-footer-space-between">
          <div>
            <strong>$1,150</strong>
            <small class="text-muted"> per month</small>
            <div class="small text-muted">Sub-info here</div>
          </div>
          <button class="button button-filled button-shadow">Filled</button>
        </footer>
      </div>
    </Example>

    <h3>Borderless card</h3>
    <Example :dark="true">
      <div class="card card-borderless">
        <header class="card-media" style="height: 40vh;">
          <img class="card-media-image" :src="`${randomPhotoUrl}?random=borderless`" />
        </header>
        <main class="card-body">
          <h2 class="title">Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
        </main>
        <footer class="card-footer">
          <div class="button-list">
            <button class="button button-filled">Outline</button>
            <button class="button button-text">Text</button>
          </div>
        </footer>
      </div>
    </Example>

    <h3>Card shadow</h3>
    <Example>
      <div class="card card-borderless card-shadow">
        <header class="card-media" style="height: 40vh;">
          <img class="card-media-image" :src="`${randomPhotoUrl}?random=shadow`" />
        </header>
        <main class="card-body">
          <h2 class="title">Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
      </div>
    </Example>

    <h3>Card shadow – hover</h3>
    <Example>
      <a class="card card-borderless card-shadow card-hover">
        <header class="card-media" style="height: 40vh;">
          <img class="card-media-image" :src="`${randomPhotoUrl}?random=shadow`" />
        </header>
        <main class="card-body">
          <h2 class="title">Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
      </a>
    </Example>

    <h3>Card list</h3>
    <Example>
      <div class="card-list">
        <div class="card">
          <main class="card-body">
            <h2 class="title">Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </main>
          <footer class="card-footer">
            <button class="button button-filled button-shadow">Call to action 1</button>
          </footer>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="title">Card 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="title">Card 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
          <footer class="card-footer">
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </footer>
        </div>
      </div>
    </Example>

    <h3>Card grid</h3>
    <p>In this example <code>.card-grid-example</code> equals: <code class="code-block">.card-grid-example { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }</code></p>
    <Example>
      <div class="card-grid card-grid-example">
        <div class="card">
          <main class="card-body">
            <h2 class="title">Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </main>
          <footer class="card-footer">
            <button class="button button-filled button-shadow">Call to action 1</button>
          </footer>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="title">Card 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="title">Card 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
          <footer class="card-footer">
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </footer>
        </div>
      </div>
    </Example>
  </section>
</template>

<script>
export default {
  computed: {
    randomPhotoUrl: () => `https://picsum.photos/1920/1080/`
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variables';
.card-media-overlay {
  background-color: rgba($info, 0.5);
}
.card-list {
  > .card {
    max-width: 300px;
  }
}
.card-grid-example {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
