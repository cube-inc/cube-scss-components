<template>
  <section id="Forms">
    <nav><a href="#Toc">Top</a></nav>
    <h2>Forms</h2>
    <Example>
      <fieldset class="form-group">
        <label class="form-label">
          Input text
          <input type="text" class="form-control" placeholder="Type something">
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Input email
          <input type="email" class="form-control" placeholder="Type an email address">
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Input number
          <input type="number" class="form-control" placeholder="Type a number">
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Select
          <select class="form-control" required>
            <option value hidden>Choose an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Textarea
          <textarea class="form-control" placeholder="Type something…"></textarea>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">Input checkbox</label>
        <label class="form-label">
          <input type="checkbox" class="form-control">
          <span class="form-text">This is a checkbox</span>
        </label>
        <label class="form-label">
          <input type="checkbox" class="form-control">
          <span class="form-text">This is another checkbox</span>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">Input radio</label>
        <label class="form-label">
          <input type="radio" class="form-control" name="input-radio">
          <span class="form-text">This is a radio</span>
        </label>
        <label class="form-label">
          <input type="radio" class="form-control" name="input-radio">
          <span class="form-text">This is another radio</span>
        </label>
      </fieldset>
    </Example>

    <Example>
      <fieldset class="form-group">
        <label class="form-label">
          Input readonly
          <input type="text" class="form-control" value="This input is readonly" readonly>
        </label>
      </fieldset>
    </Example>

  </section>
</template>
