import { useState } from 'react';

export const Block = ({
    mouseEnterCallbak,
    options: { imgSrc, imgAlt, content, userData },
}) => {
    const [isActive, setActive] = useState(false);

    const mouseEnterHandler = () => {
        setActive(true);
        mouseEnterCallbak();
    };

    return (
        <div
            onMouseEnter={mouseEnterHandler}
            className={isActive ? 'active' : ''}
        >
            {imgSrc && imgAlt && <img src={imgSrc} alt={imgAlt} />}
            {content && <p>{content}</p>}
            {userData && (
                <address>
                    country: {userData.country}, street: {userData.street}
                </address>
            )}
        </div>
    );
};
