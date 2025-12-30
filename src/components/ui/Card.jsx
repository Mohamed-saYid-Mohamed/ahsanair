import React from 'react';
import { cn } from '../../lib/utils';

export const Card = ({ children, className, ...props }) => {
    return (
        <div
            className={cn("bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 p-6", className)}
            {...props}
        >
            {children}
        </div>
    );
};
