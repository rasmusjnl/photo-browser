import App from "App";
import { Routes, Route, Navigate } from "react-router-dom";
import PhotoDetailsPage from "pages/photoDetails/PhotoDetailsPage";
import PhotosPage from "pages/photos/PhotosPage";

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="photos" element={<PhotosPage />} />
        <Route path="photos/:id" element={<PhotoDetailsPage />} />
        <Route index element={<Navigate to="photos" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default CustomRoutes;
