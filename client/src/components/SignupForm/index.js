const SignupForm = () => {

  return (
    <div>
      <div class="container hero is-fullheight has-background-signup is-fullhd  is-max-desktop">
        <div class="columns is-centered ">
          <div class="column is-half">
            <div class="content mx-6 my-6">
              <form class="box content signup-card">
                <h1 class="is-size-1 has-text-centered">Sign Up</h1>
                
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      id="signupUsername"
                      class="input"
                      type="text"
                      placeholder="Text input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Email</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      id="signupEmail"
                      class="input"
                      type="email"
                      placeholder="Email input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field">
                  <label class="label">Password</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      id="signupPwd"
                      class="input"
                      type="password"
                      placeholder="Password input"
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field has-text-centered">
                  <div class="control">
                    <button id="signup" class="button is-link" type="submit">
                      Sign Up!
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
