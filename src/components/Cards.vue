<template>
  <section id="Cards">
    <h2>Cards</h2>

    <Example>
      <div class="card">
        <header class="card-header">
          <h1 class="card-header-title">Title</h1>
        </header>
        <main class="card-body">
          <div>This is a body</div>
        </main>
        <footer class="card-footer">
          <div>This is a footer</div>
        </footer>
      </div>
    </Example>

    <h3>Images</h3>
    <Example>
      <div class="card">
        <header class="card-header" style="height:180px;">
          <img class="card-header-image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
          <div class="card-header-overlay">Image overlay</div>
        </header>
        <main class="card-body">
          <div>This is a body</div>
        </main>
        <footer class="card-footer">
          <div>This is a footer</div>
        </footer>
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
          <div>This is a body</div>
        </main>
        <footer class="card-footer">
          <div>This is a footer</div>
        </footer>
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
  justify-content: center;
  align-items: center;
}
</style>
