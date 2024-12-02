import React from 'react';
import { MainLayout } from 'modules/layouts';
import { ProductsSection } from 'components/ProductsSection';

const Front = () => {
    return (
        <MainLayout>
            <ProductsSection />
        </MainLayout>
    )
}

export { Front };
