import React, { useState } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"

var moment = require('moment');

const Item = (props) => {
  const { index, item } = props;
  const [ open, setOpen ] = useState(false)

  return (
    <>
      <div key={index} className="col-span-3">
        <div onClick={() => setOpen(true)} className="bg-white cursor-pointer rounded shadow-sm hover:shadow transition duration-300 ease-in-out">
          <div className="p-6 h-32 flex bg-gray-200 rounded-t">
            <h4 className="font-medium truncate mt-auto">{item.title}</h4>
          </div>
          <div className="p-6">
            <p className="truncate">{item.descriptionShort}</p>
            <div className="grid grid-cols-6 gap-px border-t mt-4">
              <div className="col-span-3 pt-4 leading-none">
                <span className="block text-xs font-semibold">Category</span>
                <span className="text-xs">{item.category}</span>
              </div>
              <div className="col-span-3 pt-4 leading-none">
                <span className="block text-xs font-semibold">Last updated</span>
                <span className="text-xs">{moment(item.added).fromNow()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        open &&
          <>
            <Helmet
              bodyAttributes={{
                class: 'overflow-hidden'
              }}
            />
            <div key={index} className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-start">
              <div className="absolute top-0 bottom-0 left-0 right-0 bg-blue-900 bg-opacity-25" onClick={() => setOpen(false)} />
              <div className="bg-white lg:rounded shadow-xl z-10 lg:m-8 lg:max-w-4xl w-full overflow-hidden">
                <div className="px-6 py-4 bg-gray-100 flex items-center">
                  <h4 className="text-3xl">{item.title}</h4>
                  <span className="ml-auto px-3 py-1 rounded-full bg-gray-200">{item.category}</span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h5 className="font-medium mb-1">Description</h5>
                    <p>{item.descriptionLong}</p>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Meta Information</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">API Endpoint</span>
                        {item.apiEndpoint ? <a href={item.apiEndpoint} target="_blank" className="truncate block">{item.apiEndpoint}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">API Website</span>
                        {item.apiWebsite ? <a href={item.apiWebsite} target="_blank" className="truncate block">{item.apiWebsite}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">Docs URL</span>
                        {item.apiDocsUrl ? <a href={item.apiDocsUrl} target="_blank" className="truncate block">{item.apiDocsUrl}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">ToS URL</span>
                        {item.apiTosUrl ? <a href={item.apiTosUrl} target="_blank" className="truncate block">{item.apiTosUrl}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">Architecture</span>
                        {item.apiArchitecture ? <span className="block">{item.apiArchitecture}</span> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">Request Formats</span>
                        {item.apiRequestFormats ? <span className="block">{item.apiRequestFormats}</span> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 border rounded">
                        <span className="text-sm font-semibold text-gray-700 block">Response Formats</span>
                        {item.apiResponseFormats ? <span className="block">{item.apiResponseFormats}</span> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t p-6 flex items-center">
                  <Link to="/" className="px-5 py-2 inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium rounded">
                    Visit Website
                  </Link>
                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default Item
