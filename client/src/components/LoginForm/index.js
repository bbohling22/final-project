import React, { useState } from 'react';
import Auth from '../../utils/auth'
import { useQuery } from '@apollo/client';

const LoginForm = () => {
  // const [formState, setFormState] = useState({
  //   username: '',
  //   email: '',
  //   password: '',
  // });

  // const [ addUser, {error}] = useMutation(ADD_USER)

  // const handleChange = (event) => {
  //   const {name, value} = event.target;

  //   setFormState({
  //     ...formState, [name]: value
  // });
  // };




  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     // execute addUser mutation and pass in variable data from form
  //     const { data } = await user({
  //       variables: { ...formState }
  //     });
  //     Auth.login(data.addUser.token);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };




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
