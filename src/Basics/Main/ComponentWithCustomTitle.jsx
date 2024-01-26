import React, {useEffect} from 'react';

export const ComponentWithCustomTitle = (customTitle, verify) => {
    useEffect(() => {
        // Установить заголовок при монтировании компонента
        document.title = "X"
        const previousTitle = document.title; // Сохранить предыдущий заголовок
        if (document.title !== `${customTitle} / ${previousTitle}`) {

            verify ? document.title = customTitle : document.title = `${customTitle} / ${previousTitle}`; // Установить новый заголовок
        }
        // Функция для восстановления предыдущего заголовка при размонтировании компонента
        return () => {
            document.title = previousTitle;
        };
    }, [customTitle, verify]);
    return (<></>)

};
