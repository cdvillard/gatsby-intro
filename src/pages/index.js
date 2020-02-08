import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
export default () => (
  <Layout>
    <h1>Hello Gatsby! Let's build a SaaS!</h1>
    <p>Let's try and level up, shall we?</p>
    <Link to="/about">Learn about me!</Link>
  </Layout>
);
