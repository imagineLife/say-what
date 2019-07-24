import type {PropsType} from './flow';
import React from 'react';
import './Para.css';

export default function Para({compClass, text}: PropsType) {
    return (
		<p className={compClass} >{text}</p>
    );
}
