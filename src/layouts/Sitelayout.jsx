import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../components/common/Preloader';
const Nav = lazy(() => import('../components/header/Nav'));
const Home = lazy(() => import('../pages/Home'));

const Sitelayout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                {/* <Route path='/' element={<Suspense fallback={<Preloader />}><Home /></Suspense>} /> */}
            </Routes>
        </>
    )
}

export default Sitelayout
