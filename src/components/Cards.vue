<template>
  <section id="Cards">
    <nav><a href="#Toc">Top</a></nav>
    <h2>Cards</h2>

    <Example>
      <div class="card">
        <main class="card-body">
          <h2>Card title</h2>
          <small class="text-muted">Sub-title</small>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
        </main>
        <footer class="card-footer">
          <div class="button-list">
            <button class="button">Hide</button>
            <button class="button button-filled">Show</button>
          </div>
        </footer>
      </div>
    </Example>

    <h3>Images</h3>
    <Example>
      <div class="card">
        <header class="card-header" style="height:180px;">
          <img class="card-header-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          <div class="card-header-overlay">
            <h2>Image overlay</h2>
            <div class="lead">With rich content</div>
          </div>
        </header>
        <main class="card-body">
          <h2>Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
        </main>
        <footer class="card-footer">
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
        <header class="card-header" style="height:180px;">
          <img class="card-header-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          <div class="card-header-overlay">Image overlay</div>
        </header>
        <main class="card-body">
          <h2>Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
        </main>
        <footer class="card-footer card-footer-right">
          <div class="button-list">
            <button class="button">Normal</button>
            <button class="button button-outline">Outline</button>
          </div>
        </footer>
      </div>
    </Example>

    <h3>Card list</h3>
    <Example>
      <div class="card-list">
        <div class="card">
          <main class="card-body">
            <h2>Card title 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </main>
          <footer class="card-footer">
            <button class="button button-filled button-shadow">Call to action 1</button>
          </footer>
        </div>
        <div class="card">
          <main class="card-body">
            <h2>Card title 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
            <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
          </main>
          <footer class="card-footer">
            <button class="button button-filled button-shadow">Call to action 2</button>
          </footer>
        </div>
      </div>
    </Example>

  </section>
</template>

<style lang="scss" scoped>
.card-header-image {
  background-color: $brand-info;
}
.card-header-overlay {
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-list {
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-auto-rows: auto;
}
</style>
