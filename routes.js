const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
};
const routes = {
    404: "/404.html",
    "/": "/index.html",
    "/service": "service.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('main-page').innerHTML = html;
    if (path === '/') {
        // Optionally clear the main-page div for home route
        document.getElementById('main-page').innerHTML = '';
    }
};
window.onpopstate = handleLocation;
window.route = route;

handleLocation();
export default routes;
