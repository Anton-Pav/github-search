import React from 'react';
import { useSearchUsersQuery } from '../store/github/github.api';
import s from './HomePage.module.css';

function HomePage() {
    const {isLoading, isError, data} =  useSearchUsersQuery('anton')

    return (
        <div className={s.homePage}>
            {isError && <p className={s.textError}>Something went wrong...</p>}
        </div>
    );
}

export {HomePage};