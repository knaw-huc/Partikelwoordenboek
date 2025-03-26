import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouteObject, RouterProvider} from 'react-router-dom';
import {
  App,
  Search,
  Detail as BrowserDetail,
  createSearchLoader,
  createDetailLoader,
  searchUtils,
  SearchParams
} from '@knaw-huc/browser-base-react';
import Facets from "./components/facets";
import ListItem from "./components/listItem";
import Detail from "./components/detail";
import EntityLoader from "./misc/entityLoader";
import PageHeader from "./misc/pageHeader";
import {BASE_URL} from "./misc/config";

// @ts-ignore
import './index.css';
import './assets/css/style.css';
const title = 'Entiteitenbrowser';
const shortTitle = 'Entiteitenbrowser';
const searchLoader = createSearchLoader(searchUtils.getSearchObjectFromParams, BASE_URL + '/browse', 30);
const detailLoader = createDetailLoader(id => BASE_URL + `/get_detail/${id}`);

const pageHeader = <PageHeader/>;


const routeObject: RouteObject = {
  path: '/',
  element: <App header={pageHeader}/>,
  children: [{
    index: true,
    loader: async ({request}) => searchLoader(new URL(request.url).searchParams),
    element: <Search title={title} pageLength={10} withPaging={true}
                     hasIndexPage={false} showSearchHeader={false} updateDocumentTitle={false}
                     searchParams={SearchParams.PARAMS} FacetsComponent={Facets} ResultItemComponent={ListItem}/>
  },
    {
      path: '/detail/:id',
      loader: async ({params}) => detailLoader(params.id as string),
      element: <BrowserDetail title={title} updateDocumentTitle={false} DetailComponent={Detail}/>
    }
  ]
};


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <RouterProvider router={createBrowserRouter([routeObject])}/>
);
