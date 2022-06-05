import React from "react";
import { Suspense } from "react";

/**
 * 
 * @description This function returns the lazily loaded component
 * @param {Component} Component
 * @returns Lazy loaded component
 * @author ammrit2312 <amriteshc101@icloud.com>
 */
const Loadable = (Component) => (props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props} />
        </Suspense>
    );
}

export {Loadable};
