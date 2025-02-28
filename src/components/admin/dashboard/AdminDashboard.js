import React from "react"
import '../../../scss/admin.scss'
import Footer from '../../common/Footer'
import Header from '../../common/Header'
import AdminTabMenu from '../AdminTabMenu'
import AdminCont1 from './AdminCont1'

const AdminDashboard = () => {

    return (
        <>
            <Header/>
            <div className="admin-wrap">
                <div className="center">
                    <AdminTabMenu/>
                    <div className="tab-contents">
                        <AdminCont1 />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AdminDashboard;
