
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import Store from './Utils/store';
import { Provider, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      { path: "/",
         element: <MainContainer /> },
      { path: "watch", 
        element: <WatchPage /> },
    ],
  },
]);

const AppContent = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
};

function App() {
  return (
    <Provider store={Store}>
      <AppContent />
    </Provider>
  );
}

export default App;

