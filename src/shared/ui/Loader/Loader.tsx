import './Loader.scss';
import { memo } from 'react';

interface LoaderProps {
    className?: string
}

export const Loader = memo(({ className }: LoaderProps) => (
    <div className="lds-spinner">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
));
