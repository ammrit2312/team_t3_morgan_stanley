/**
 * @description This function concatenates the routes, thus eliminating the need of mentioning '/'
 * @returns {String} The concatenated route
 * @author ammrit2312 <amriteshc101@icloud.com>
 */
export function entirepath(...routes) {
    if (routes.length === 1) {
        return `/${routes[0]}`;
    }

    let entireRoute = "/";
    routes.forEach((route) => {
        entireRoute += `${route}/`;
    });
    return entireRoute;
}
