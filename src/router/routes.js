import {NewsRoute, ThemeRoute} from "../utils/routes.js";
import {News} from "../pages/news.jsx";
import {Themes} from "../pages/themes.jsx"
export const routes = [
    {
        path: NewsRoute,
        Component: News
    },
    {
        path: ThemeRoute,
        Component: Themes
    },

]