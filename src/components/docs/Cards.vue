<template>
  <section id="Cards">
    <h2>Cards</h2>

    <Example>
      <div class="card">
        <main class="card-body">
          <h3 class="card-title">Card title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
        <footer class="card-footer text-muted">
          <small>{{ $root.$options.name }} v{{ $root.$options.version }}</small>
        </footer>
      </div>
    </Example>

    <h3>Hover</h3>
    <Example>
      <a class="card card-hover">
        <main class="card-body">
          <h3 class="card-title">Card title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
        <footer class="card-footer text-muted">
          <small>{{ $root.$options.name }} v{{ $root.$options.version }}</small>
        </footer>
      </a>
    </Example>

    <h3>Media</h3>
    <Example>
      <div class="card">
        <header class="card-header">
          <h3>Card header</h3>
          <RatingStar :rating="3.6" />
        </header>
        <aside class="card-media" style="height: 30vh;">
          <img class="card-media-image" :src="`${randomPhotoUrl}?random=media&_grayscale&blur=5`" style="opacity:.75;" />
          <div class="card-media-overlay">
            <h2>
              Overlay
              <div class="small">With content</div>
            </h2>
          </div>
        </aside>
        <main class="card-body">
          <h4 class="card-title">Card title</h4>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
        <footer class="card-footer card-footer-space-between">
          <div>
            <strong>$1,150</strong>
            <small class="text-muted"> per month</small>
            <div class="small text-muted">Sub-info here</div>
          </div>
          <button class="button button-filled button-shadow button-secondary">Filled</button>
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
          <h2 class="card-title">Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
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
          <h2 class="card-title">Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
      </div>
    </Example>

    <h3>Card shadow – hover</h3>
    <Example>
      <a class="card card-borderless card-shadow card-hover">
        <header class="card-media" style="height: 40vh;">
          <img class="card-media-image" :src="`${randomPhotoUrl}?random=shadow-hover`" />
        </header>
        <main class="card-body">
          <h2 class="card-title">Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
      </a>
    </Example>

    <h3>Card list</h3>
    <Example>
      <div class="card-list card-list-example">
        <div class="card">
          <main class="card-body">
            <h2 class="card-title">Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
          <footer class="card-footer">
            <button class="button button-filled button-shadow">Call to action</button>
          </footer>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="card-title">Card 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="card-title">Card 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
          <footer class="card-footer">
            <small class="text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</small>
          </footer>
        </div>
      </div>
    </Example>
    <h6>CSS</h6>
    <pre class="code">.card-list-example > .card {
  flex: 280px;
}</pre>

    <h3>Card grid</h3>
    <Example>
      <div class="card-grid card-grid-example">
        <div class="card">
          <main class="card-body">
            <h2 class="card-title">Card 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="card-title">Card 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
        </div>
        <div class="card">
          <main class="card-body">
            <h2 class="card-title">Card 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          </main>
          <footer class="card-footer">
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </footer>
        </div>
      </div>
    </Example>
    <h6>CSS</h6>
    <pre class="code">.card-grid-example {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}</pre>
  </section>
</template>

<script>
import RatingStar from '../RatingStar.vue'

export default {
  components: {
    RatingStar
  },
  computed: {
    randomPhotoUrl: () => `https://picsum.photos/1920/1080/`
  }
}
</script>

<style lang="scss" scoped>
@import '~@/scss/variables';
.card-media-overlay {
  color: white;
  background-color: rgba($info, 0.25);
}
.card-list-example {
  > .card {
    flex: 280px;
  }
}
.card-grid-example {
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}
</style>
