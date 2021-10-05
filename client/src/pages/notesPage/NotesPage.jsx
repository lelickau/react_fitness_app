import React from 'react';
import HeaderTitle from '../../components/headerTitle/HeaderTitle';
import Sidebar from '../../components/sidebar/Sidebar';

function NotesPage(props) {
    return (
        <div>
            <HeaderTitle title={'Notes'} />
            <Sidebar />
        </div>
    );
}

export default NotesPage;