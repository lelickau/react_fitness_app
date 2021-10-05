import React from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import Sidebar from '../../components/sidebar/Sidebar';

function HomePage(props) {
    return (
        <div>
            <HeaderTitle title={'Profile'} />
            <Sidebar />
        </div>
    );
}

export default HomePage;