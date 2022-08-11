import { Suspense } from "react";
import { Box, Button, Spinner } from "@chakra-ui/react";
import { getPhotoById } from "services/photoService";
import { showToast } from "utils/toastUtils";

const App: React.FC = () => {
  const testFunction = async () => {
    try {
      const photoData = await getPhotoById("1");
      console.log("PHOTO DATA", photoData);
      showToast({ title: photoData.title, status: "success" });
    } catch (error) {
      console.log(`Error fetching photoData: ${error}`);
    }
  };

  return (
    // TODO: remove Suspense if no lazy loaded components
    <Suspense fallback={<Spinner />}>
      <Box>
        <Button onClick={testFunction}>Click me</Button>
      </Box>
    </Suspense>
  );
};

export default App;
