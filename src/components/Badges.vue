<template>
  <section id="Badges">
    <nav><a href="#Toc">Top</a></nav>

    <h2>Badges</h2>
    <Example>
      <p><span class="badge">99</span> .badge</p>
      <p><span class="badge badge-success">1</span> .badge-success</p>
      <p><span class="badge badge-info">2</span> .badge-info</p>
      <p><span class="badge badge-warning">3</span> .badge-warning</p>
      <p><span class="badge badge-danger">4</span> .badge-danger</p>
    </Example>

    <h3>Variables</h3>
    <Style lang="scss">
      $badge-size: 24px !default;
      $badge-font-size: $font-size-sm !default;
      $badge-border-radius: 50% !default;
      $badge-color: $text-color !default;
      $badge-bg-color: mix(rgba($text-color,.35), white) !default;
      $badge-success-bg-color: $brand-success !default;
      $badge-success-color: white !default;
      $badge-info-bg-color: $brand-info !default;
      $badge-info-color: white !default;
      $badge-warning-bg-color: $brand-warning !default;
      $badge-warning-color: white !default;
      $badge-danger-bg-color: $brand-danger !default;
      $badge-danger-color: white !default;
    </Style>
  </section>
</template>
