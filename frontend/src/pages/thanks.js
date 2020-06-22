import React from 'react';
import Layout from '../components/Layout';
import SEO from "../components/SEO"

const thanksPage = () => (
    <Layout>
        <SEO title="Thanks"/>
        <header className='contact__header'></header>
        <main className='contact__thanks'>
            <h1>Tak! Du vil blive kontaktet snarligt.</h1>
        </main>
    </Layout>
)

export default thanksPage