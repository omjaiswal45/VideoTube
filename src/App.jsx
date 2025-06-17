
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import Store from './Utils/store';
import { Provider, useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import MainContainer from './Components/MainContainer';
import WatchPage from './Components/WatchPage';
import SearchResultsPage from './Components/SearchResultsPage';

const AppLayout = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div className={darkMode ? 'bg-black text-white min-h-screen' : 'bg-white text-black min-h-screen'}>
      <Head />       
      <Outlet />     
    </div>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />,
        children: [
          { path: '/', element: <MainContainer /> },
          { path: 'watch', element: <WatchPage /> },
          { path: "results", element: <SearchResultsPage /> },
        ],
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={Store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;

