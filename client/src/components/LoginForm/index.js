import React, { useState } from 'react';
import Auth from '../../utils/auth'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const [ login, {error,data}] = useMutation(LOGIN_USER)

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
      const { data } = await login({
        variables: { ...formState }
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };




  return (
    <div>
      <div class="container hero is-fullheight has-background-primary-dark is-fullhd  is-max-desktop">
        <div class="columns is-centered ">
          <div class="column is-half">
            <div class="content mx-6 my-6">
            {data ? (
              <p>
                Success! You may now head{' '}
                <link to="/">back to the homepage.</link>
              </p>
            ) : (

              <form class="box py-6" onSubmit={handleFormSubmit}>
                <div class="field">
                  <label class="label">Email</label>
                  <div class="control">
                    <input
                      class="input"
                      type="email"
                      placeholder="e.g. alex@example.com"
                      name='email'
                      value={formState.email}
                      onChange={handleChange}
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
                      name='password'
                      value={formState.password}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <button class="button is-primary">Log In</button>
              </form>
               )}

                {error && (
                  <div className="my-3 p-3 bg-danger text-white">
                    {error.message}
                  </div>
                )}


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
