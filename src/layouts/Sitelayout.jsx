import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Preloader from '../components/common/Preloader';
const Nav = lazy(() => import('../components/header/Nav'));
const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));

const Sitelayout = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Suspense fallback={<Preloader />}><Login /></Suspense>} />
                <Route path='/signup' element={<Suspense fallback={<Preloader />}><Signup /></Suspense>} />
            </Routes>
        </>
    )
}

export default Sitelayout
