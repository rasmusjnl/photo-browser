import { Routes, Route, Navigate } from "react-router-dom";
import App from "App";
import PhotoDetails from "pages/photos/PhotoDetails";
import PhotosPage from "pages/photos/PhotosPage";
import AlbumPage from "pages/albums/AlbumsPage";
import AlbumPhotos from "pages/albums/AlbumPhotos";
import HomePage from "pages/home/HomePage";
import MainPage from "pages/main/MainPage";

// TODO: review routing regarding filters
const CustomRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="/" element={<MainPage />}>
          <Route path="photos" element={<PhotosPage />} />
          <Route path="albums" element={<AlbumPage />} />
          <Route path="albums/:id" element={<AlbumPhotos />} />
        </Route>
        <Route path="photos/:id" element={<PhotoDetails />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default CustomRoutes;
