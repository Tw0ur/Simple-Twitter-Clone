import React from 'react'
import {ComponentWithCustomTitle} from './ComponentWithCustomTitle';

const Loading = ({handleReload, setShouldRedirect}) => {
    ComponentWithCustomTitle("Twitter", true);
    React.useEffect(() => {
        const storedShouldRedirect = localStorage.getItem('shouldRedirect');
        if (storedShouldRedirect) {
            setShouldRedirect(true);
            localStorage.removeItem('shouldRedirect'); // Удаляем сохраненное состояние после использования
        }
        const handleBeforeUnload = (event) => {

            event.preventDefault();
            event.returnValue = '';
            handleReload()
        };

        window.addEventListener('beforeunload', handleBeforeUnload);

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);
    return (
        <div className="onLoadMain">
            <div className="onLoadButton" onClick={handleReload}>
                Пожалуйства перезапустите страницу
            </div>
        </div>
    );
};

export default Loading