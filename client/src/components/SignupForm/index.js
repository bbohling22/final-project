import React, { useState } from 'react';
import Auth from '../../utils/auth'
import { useMutation } from '@apollo/client';
import { ADD_USER } from "../../utils/mutations";


const SignupForm = () => {
    const [formState, setFormState] = useState({
      username: '',
      email: '',
      password: '',
    });

    const [ addUser, {error, data}] = useMutation(ADD_USER)
  
    const handleChange = (event) => {
      const {name, value} = event.target;

      setFormState({
        ...formState, [name]: value
    });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
        // execute addUser mutation and pass in variable data from form
        const { data } = await addUser({
          variables: { ...formState }
        });
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
    



  return (
    <div>
      <div class="container hero is-fullheight has-background-signup is-fullhd  is-max-desktop">
        <div class="columns is-centered ">
          <div class="column is-half">
            <div class="content mx-6 my-6">

              
            {data ? (
              <p>
                Success! You may now head{' '}
                <link to="/">back to the homepage.</link>
              </p>
              ) : (
              <form class="box content signup-card"
                onSubmit={handleFormSubmit}   
               >
               
              
                <h1 class="is-size-1 has-text-centered">Sign Up</h1>
                
                <div class="field">
                  <label class="label">Username</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      id="signupUsername"
                      class="input"
                      type="text"
                      placeholder="Username is required"
                      required
                      name="username"
                      value={formState.username}
                      onChange={handleChange}
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
                      placeholder="Email is required"
                      required
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
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
                      placeholder="Password is required"
                      required
                      name="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                  </div>
                </div>

                <div class="field has-text-centered">
                  <div class="control">
                    <button id="signup" class="button is-link" type="submit"
                    
                    >
                      Sign Up!
                    </button>
                  </div>
                </div>
                
              </form>
               )}
            </div>
            {error && <div>Signup Failed</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
