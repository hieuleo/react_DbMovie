import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import { AuthProvider } from '../hooks/useAuth';
import {ProtectedLayout} from '../components/protectedLayout';
import HomeComponent from '../pages/home/index';
import PopularPage   from '../pages/popular/index';
import ComingPage    from '../pages/up-coming/index';
import SearchPage    from '../pages/search/index';
import DetailPage    from '../pages/detail/index';
import PersonPage    from '../pages/person/index';
import ReviewPage    from '../pages/review/index';
import ErrorPage     from '../pages/error/index';
import LoginPage     from '../pages/login/index';

function RouterComponent() {
    return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/react_DbMovie" element={<HomeComponent />} />
            {/* <Route path="/" element={<HomeComponent />} /> */}
            <Route path="/react_DbMovie/Popular" element={<PopularPage />} />
            <Route path="/react_DbMovie/Upcoming" element={
                // login cho page upcoming
                <ProtectedLayout>
                  <ComingPage />
                </ProtectedLayout>
              }/> 
            
            <Route path="/react_DbMovie/Search" element={<SearchPage />} />
            {/* detail/ten-phim~id */}
            {/* dung slug de xoa cac khoang trang trong ten phim */}
            <Route path="/react_DbMovie/Detail/:movieSlug" element={<DetailPage />} /> {/*: là sử dụng param */}
            <Route path="/react_DbMovie/Person/:personSlug" element={<PersonPage />} />
            <Route path="/react_DbMovie/Review/:reviewId" element={<ReviewPage />} />
            <Route path="/react_DbMovie/login" element={<LoginPage />} />
            <Route path="/react_DbMovie/*" element={<ErrorPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    );
}

export default React.memo(RouterComponent);
