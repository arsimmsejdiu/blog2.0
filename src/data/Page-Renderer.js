import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PageNotFound from '../components/PageNotFouns';

const generatePage = (page) => {
    const component = () => require(`../pages/${page}`).default;
    try {
        return React.createElement(component())
    } catch (error) {
        console.warn(error);
        return React.createElement(() => <PageNotFound />)
    }
}

export default function PageRenderer() {
    const {
        params: { page }
    } = useRouteMatch()
    return generatePage(page);
}