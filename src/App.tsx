import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import { DrawerMenu } from "./shared/components/Drawer-Menu/DrawerMenu";

export default function App() {

    return (
            <BrowserRouter>
                <DrawerMenu>
                    <AppRoutes/>
                </DrawerMenu>
            </BrowserRouter>
    );
}


