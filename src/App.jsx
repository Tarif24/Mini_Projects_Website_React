import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AIChatBot from "./components/AI_Chat_Bot/AIChatBot";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/aichatbot" element={<AIChatBot />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
