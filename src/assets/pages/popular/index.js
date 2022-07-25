import React from 'react';
import loadable from '@loadable/component'
const LayoutComponent = loadable(() => import('../../components/layout'));

const PopularPage = () => {
    return(
        <LayoutComponent>
            <p>this is a Popular page</p>
        </LayoutComponent>
    )
}


export default React.memo(PopularPage);