import React, { Component } from 'react';
import PostForm from './PostForm';
import Post from './Post';
import Posts from './Posts';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Hero from '../components/Hero'
import NavBar from '../components/NavBar';

const Container = styled.div`
  max-width: 980px;
  margin: 0 auto;
`;

class Blog extends Component {
  render() {
    return (
      <div>
        <Hero header="Mexzon Blog" />
        <BrowserRouter>
        <div>
          <NavBar />
          <Container>
            <Switch>
              <Redirect
                from="/home"
                to="/create"
              />
              <Route
                path="/"
                exact
                component={Posts}
              />
              <Route
                path="/post/:id"
                exact
                strict
                component={Post}
              />
              <Route
                path="/create"
                exact
                component={PostForm}
              />
              <Redirect to="/" />
            </Switch>
          </Container>
        </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Blog;
