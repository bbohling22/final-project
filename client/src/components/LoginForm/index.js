const LoginForm = () => {
  return (
    <div>
      <div class="container hero is-fullheight has-background-primary-dark is-fullhd  is-max-desktop">
        <div class="columns is-centered ">
          <div class="column is-half">
            <div class="content mx-6 my-6">
              <form class="box py-6">
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="e.g. alex@example.com"
                    />
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control">
                    <input
                      class="input"
                      type="password"
                      placeholder="********"
                    />
                  </div>
                </div>

                <button class="button is-primary">Log In</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
