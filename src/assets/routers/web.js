import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import loadable from '@loadable/component';
import { AuthProvider } from '../hooks/useAuth';
import {ProtectedLayout} from '../components/protectedLayout';

const HomeComponent = loadable(() => import('../pages/home/index'));
const PopularPage   = loadable(() => import('../pages/popular/index'));
const ComingPage    = loadable(() => import('../pages/up-coming/index'));
const SearchPage    = loadable(() => import('../pages/search/index'));
const DetailPage    = loadable(() => import('../pages/detail/index'));
const ErrorPage     = loadable(() => import('../pages/error/index'));
const LoginPage     = loadable(() => import('../pages/login/index'));

function RouterComponent() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/Popular" element={<PopularPage />} />
            <Route path="/Upcoming" element={
                // login cho page upcoming
                <ProtectedLayout>
                  <ComingPage />
                </ProtectedLayout>
              }/> 
            
            <Route path="/Search" element={<SearchPage />} />
            {/* detail/ten-phim~id */}
            {/* dung slug de xoa cac khoang trang trong ten phim */}
            <Route path="/Detail/:slup~:id" element={<DetailPage />} /> {/*: là sử dụng param */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
}

export default React.memo(RouterComponent);