import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AIChatBot from "./components/AI_Chat_Bot/AIChatBot";
import RAGChatBot from "./components/RAG_Chat_Bot/RAGChatBot";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/aichatbot" element={<AIChatBot />} />
                <Route path="/ragchatbot" element={<RAGChatBot />} />
            </Route>
        )
    );

    return <RouterProvider router={router} />;
}

export default App;
