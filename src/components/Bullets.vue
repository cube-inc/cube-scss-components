<template>
  <section id="Bullets">
    <nav><a href="#Toc">Top</a></nav>
    <h2>Bullets</h2>
    <Example>
      <p><span class="bullet"></span> .bullet</p>
      <p><span class="bullet bullet-success"></span> .bullet-success</p>
      <p><span class="bullet bullet-info"></span> .bullet-info</p>
      <p><span class="bullet bullet-warning"></span> .bullet-warning</p>
      <p><span class="bullet bullet-danger"></span> .bullet-danger</p>
    </Example>

    <h3>Variables</h3>
    <Style lang="scss">
      $bullet-size: 10px !default;
      $bullet-color: mix(rgba($text-color,.6), white) !default;
      $bullet-success-color: $brand-success !default;
      $bullet-info-color: $brand-info !default;
      $bullet-warning-color: $brand-warning !default;
      $bullet-danger-color: $brand-danger !default;
    </Style>
  </section>
</template>
