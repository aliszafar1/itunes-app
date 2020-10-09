import React from 'react';
import FilledStar from '../../assets/filled-star.png';
import EmptyStar from '../../assets/empty-star.png';

export default function (props:any) {
    const {isItemFavourite, onClick, style} = props;
    const src = isItemFavourite ? FilledStar : EmptyStar;
    return <img src={src} onClick={onClick} style={style} />
}