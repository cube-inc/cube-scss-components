<template>
  <section id="Cards">
    <h2>Cards</h2>

    <Example>
      <div class="card">
        <header class="card-header">
          <h1 class="card-header-title">Card header</h1>
        </header>
        <main class="card-body">
          <h2>Card title</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae qui culpa placeat! Velit in consequuntur maiores totam, distinctio a! Ipsam explicabo assumenda repellendus quae aliquid ducimus expedita dolor non architecto!</p>
          <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
        </main>
        <footer class="card-footer">This is a footer</footer>
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
          <div class="small text-muted">{{ $root.$options.name }} v{{ $root.$options.version }}</div>
        </main>
        <footer class="card-footer">This is a footer</footer>
      </div>
    </Example>

    <h3>Borderless card</h3>
    <Example>
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
        <footer class="card-footer">This is a footer</footer>
      </div>
    </Example>

  </section>
</template>

<style lang="scss" scoped>
.card-header-image {
  appearance: none;
  background-color: $brand-info;
  border: 0 none;
}
.card-header-overlay {
  color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
