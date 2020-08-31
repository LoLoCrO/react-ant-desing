import React from 'react';

const Home = (props) => {

    const { pageName } = props;

    return (
        <div>{pageName}</div>
    );
}

export default Home;