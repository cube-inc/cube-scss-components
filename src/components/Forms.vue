<template>
  <section id="Forms">
    <h2>Forms</h2>
    <Example>
      <fieldset class="form-group">
        <label class="form-label">
          Input text
          <input type="text" class="form-control" placeholder="Type something" />
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Input email
          <input type="email" class="form-control" placeholder="Type an email address" />
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Input number
          <input type="number" class="form-control" placeholder="Type a number" />
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
          <input type="checkbox" class="form-control" />
          <span class="form-text">This is a checkbox</span>
        </label>
        <label class="form-label">
          <input type="checkbox" class="form-control" />
          <span class="form-text">This is another checkbox with a very long text that should align nicely along the checkbox. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim expedita tempore soluta officiis similique. Deleniti adipisci alias modi harum illum laboriosam accusamus enim iste nesciunt? Aliquid reprehenderit magnam mollitia doloremque!</span>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">Input radio</label>
        <label class="form-label">
          <input type="radio" class="form-control" name="input-radio" />
          <span class="form-text">This is a radio</span>
        </label>
        <label class="form-label">
          <input type="radio" class="form-control" name="input-radio" />
          <span class="form-text">This is another radio</span>
        </label>
      </fieldset>
    </Example>

    <h3>Stacked</h3>
    <Example>
      <fieldset class="form-group">
        <label class="form-label">
          Stacked inputs
          <div class="form-group-stacked">
            <input type="text" class="form-control" placeholder="Input #1" />
            <input type="text" class="form-control" placeholder="Input #2" />
            <input type="text" class="form-control" placeholder="Input #3" />
          </div>
        </label>
      </fieldset>
    </Example>

    <h3>Inline</h3>
    <Example>
      <fieldset class="form-group">
        <label class="form-label">Inline inputs</label>
        <div class="form-group-inline">
          <input type="text" class="form-control" style="flex: 1 0 12em;" placeholder="flex: 1 0 12em" />
          <input type="text" class="form-control" style="flex: 1 0 12em;" placeholder="flex: 1 0 12em" />
          <input type="text" class="form-control" style="flex: 1 0 12em;" placeholder="flex: 1 0 12em" />
          <input type="text" class="form-control" style="flex: 1 0 12em;" placeholder="flex: 1 0 12em" />
          <input type="text" class="form-control" style="flex: 1 0 12em;" placeholder="flex: 1 0 12em" />
          <input type="text" class="form-control" style="flex: 1 0 12em;" placeholder="flex: 1 0 12em" />
        </div>
      </fieldset>
      <fieldset class="form-group form-group-stacked">
        <div class="form-group-inline">
          <label class="form-label" style="width: 8em">Email:</label>
          <input type="email" class="form-control" style="flex: 1 0 8em;" placeholder="john@doe" />
        </div>
        <div class="form-group-inline">
          <label class="form-label" style="width: 8em">Password:</label>
          <input type="password" class="form-control" style="flex: 1 0 8em;" placeholder="Type your password" />
        </div>
      </fieldset>
      <fieldset class="form-group">
        <div class="form-group-inline">
          <input type="number" class="form-control" style="flex: 1 0 8em;" placeholder="Input number with buttons" />
          <button class="button" style="flex: 0 0 4em;">-</button>
          <button class="button" style="flex: 0 0 4em;">+</button>
        </div>
      </fieldset>
    </Example>

    <h3>Readonly</h3>
    <Example>
      <fieldset class="form-group">
        <label class="form-label">
          Input readonly
          <input type="text" class="form-control" value="This input is readonly" readonly />
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Textarea
          <textarea class="form-control" readonly>This textarea is readonly</textarea>
        </label>
      </fieldset>
    </Example>

    <h3>Disabled</h3>
    <Example>
      <fieldset class="form-group">
        <label class="form-label">
          Input text
          <input type="text" class="form-control" placeholder="Type something" disabled />
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Input email
          <input type="email" class="form-control" placeholder="Type an email address" disabled />
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Input number
          <input type="number" class="form-control" placeholder="Type a number" disabled />
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Select
          <select class="form-control" required disabled>
            <option value hidden>Choose an option</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">
          Textarea
          <textarea class="form-control" placeholder="Type something…" disabled></textarea>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">Input checkbox</label>
        <label class="form-label">
          <input type="checkbox" class="form-control" disabled />
          <span class="form-text">This is a checkbox</span>
        </label>
        <label class="form-label">
          <input type="checkbox" class="form-control" disabled />
          <span class="form-text">This is another checkbox</span>
        </label>
      </fieldset>
      <fieldset class="form-group">
        <label class="form-label">Input radio</label>
        <label class="form-label">
          <input type="radio" class="form-control" name="input-radio" disabled />
          <span class="form-text">This is a radio</span>
        </label>
        <label class="form-label">
          <input type="radio" class="form-control" name="input-radio" disabled />
          <span class="form-text">This is another radio</span>
        </label>
      </fieldset>
    </Example>

    <h3>Form validation</h3>
    <p>
      The validation error highlights when the
      <code>input</code>, <code>select</code> or <code>textarea</code> element has a not empty <code>placeholder</code> attribute and you start writing something (the placeholder disappears)…
      <br />
    </p>
    <p>
      Since it works with the
      <code>:placeholder-shown</code> selector, this have no effect on <code>checkbox</code>, <code>radio</code> and <code>select</code> elements.
    </p>
    <p>
      If you want to highlight required fields after the user tries to submit the form, you have to add the
      <code>validate</code> class to <code>form</code> element or the element itself (see <a href="#formsShowRequired">Form validation, show required elements</a>).
    </p>
    <p>
      <Example>
        <form>
          <fieldset class="form-group form-group-stacked">
            <input type="text" class="form-control" placeholder="Text required, minlength 10" minlength="10" required />
            <input type="email" class="form-control" placeholder="Email required" required />
            <input type="password" class="form-control" placeholder="Password, at least 1 number, 1 uppercase and 1 lowercase, minlength 8" title="At least 1 number, 1 uppercase and 1 lowercase, minlength 8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required />
            <input type="number" class="form-control" placeholder="Number required, min 5, max 10" min="5" max="10" required />
            <select class="form-control" required>
              <option value hidden>Select required, no effect</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
            </select>
            <textarea class="form-control" placeholder="Textarea required, minlength 10" minlength="10" required></textarea>
            <label class="form-label">
              <input type="checkbox" class="form-control" required />
              <span class="form-text">Checkbox required, no effect</span>
            </label>
            <label class="form-label">
              <input type="radio" class="form-control" name="input-radio" required />
              <span class="form-text">Radio required, no effect</span>
            </label>
            <label class="form-label">
              <input type="radio" class="form-control" name="input-radio" required />
              <span class="form-text">Radio required, no effect</span>
            </label>
          </fieldset>
        </form>
      </Example>
    </p>
    <h3 id="formsShowRequired">Form validation, show required elements</h3>
    <p>
      Just add the
      <code>validate</code> class to the <code>form</code> element or the element itself…
    </p>
    <Example>
      <form class="validate">
        <fieldset class="form-group form-group-stacked">
          <input type="text" class="form-control" placeholder="Text required" required />
          <input type="email" class="form-control" placeholder="Email required" required />
          <input type="number" class="form-control" placeholder="Number required" required />
          <select class="form-control" required>
            <option value hidden>Select required</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
          </select>
          <textarea class="form-control" placeholder="Textarea required" required></textarea>
          <label class="form-label">
            <input type="checkbox" class="form-control" required />
            <span class="form-text">Checkbox required</span>
          </label>
          <label class="form-label">
            <input type="radio" class="form-control" name="input-radio" required />
            <span class="form-text">Radio required</span>
          </label>
          <label class="form-label">
            <input type="radio" class="form-control" name="input-radio" required />
            <span class="form-text">Radio required</span>
          </label>
        </fieldset>
      </form>
    </Example>
  </section>
</template>
