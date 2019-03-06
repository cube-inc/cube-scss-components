<template>
  <section id="ListGroup">
    <nav><a href="#Toc">Top</a></nav>

    <h2>List group</h2>
    <Example>
      <ul class="list-group">
        <li class="list-group-item">
          <div class="list-group-item-body">Basic</div>
        </li>
        <li class="list-group-item">
          <a>
            <div class="list-group-item-body">Clickable</div>
          </a>
        </li>
        <li class="list-group-item">
          <div class="list-group-item-header">
            <div>With accessory</div>
            <div class="list-group-item-accessory">
              <a class="action">Action</a>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="list-group-item-header">
            <div>With accessory list</div>
            <div class="list-group-item-accessory list-group-item-accessory-list">
              <button class="action" disabled>Disabled button</button>
              <a class="action">Link</a>
            </div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="list-group-item-header">
            <div class="list-group-item-accessory">
              <input type="checkbox" class="form-control">
            </div>
            <div>With accessory to the left</div>
          </div>
        </li>
        <li class="list-group-item">
          <div class="list-group-item-header">
            <h4>Rich content</h4>
          </div>
          <div class="list-group-item-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio perferendis nesciunt voluptatum, sequi molestias aut tempore temporibus quod non delectus dicta odit, cum eaque quos neque sapiente, dolores ut id.</div>
          <div class="list-group-item-footer">
            <div>This is a footer…</div>
            <div>With <strong>formatted</strong> text.</div>
          </div>
        </li>
        <li class="list-group-item">
          <a>
            <div class="list-group-item-header">
              <h4>Clickable rich content</h4>
            </div>
            <div class="list-group-item-body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio perferendis nesciunt voluptatum, sequi molestias aut tempore temporibus quod non delectus dicta odit, cum eaque quos neque sapiente, dolores ut id.</div>
          </a>
        </li>
        <li class="list-group-item">
          <a>
            <div class="list-group-item-header">
              <h4>Clickable header</h4>
              <div class="list-group-item-accessory">
                <div class="text-muted">•••</div>
              </div>
            </div>
          </a>
          <div class="list-group-item-container">
            <div class="list-group-item-body">
              <p>This is usefull with <code>.list-group-item-container</code> you can collapse with your own javascript (not provided here)…</p>
            </div>
            <div class="list-group-item-footer">cube-scss-components v{{ $root.$options.version }}</div>
          </div>
        </li>
      </ul>
    </Example>

  </section>
</template>
