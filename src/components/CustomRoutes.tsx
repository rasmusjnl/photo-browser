import { Routes, Route, Navigate } from "react-router-dom";
import App from "App";
import PhotoDetails from "pages/photos/PhotoDetails";
import PhotosPage from "pages/photos/PhotosPage";
import AlbumPage from "pages/albums/AlbumsPage";
import AlbumPhotos from "pages/albums/AlbumPhotos";

const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="photos" element={<PhotosPage />} />
        <Route path="photos/:id" element={<PhotoDetails />} />

        <Route path="albums" element={<AlbumPage />} />
        <Route path="albums/:id" element={<AlbumPhotos />} />

        <Route index element={<Navigate to="photos" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default CustomRoutes;
