import React, { useState } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import Image from "./image"

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
                <span className="block text-xs font-semibold">Last update</span>
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
            <div key={index} className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-start overflow-scroll">
              <div className="fixed top-0 bottom-0 left-0 right-0 bg-blue-900 bg-opacity-25" onClick={() => setOpen(false)} />
              <div className="bg-white lg:rounded shadow-xl z-10 lg:m-8 lg:max-w-3xl w-full overflow-hidden">
                <div className="p-6 bg-blue-900 text-white">
                  <h4 className="text-3xl leading-tight">{item.title}</h4>
                  <span className="text-xs opacity-50">
                    <span className="font-semibold">Last update:</span>&nbsp;
                    <span>{moment(item.added).fromNow()}</span>
                  </span>
                </div>
                <div className="p-6 bg-blue-100 text-blue-900 grid grid-cols-9 gap-6">
                  <div className="col-span-6">
                    <h5 className="text-sm font-semibold text-blue-800 block">Description</h5>
                    <p>{item.descriptionLong}</p>
                  </div>
                  <div className="col-span-3">
                    <div>
                      <ul>
                        <li className="mb-3">
                          <span className="text-sm font-semibold text-blue-800 block">Category</span>
                          <span>{item.category}</span>
                        </li>
                        <li className="mb-3">
                          <span className="text-sm font-semibold text-blue-800 block mb-1">Tags</span>
                          {
                            item.tags ? (
                              <div className="flex -m-px flex-wrap">
                                {
                                  item.tags.map((tag, index) => (
                                    <span className="inline capitalize bg-blue-200 bg-opacity-75 text-blue-900 m-px px-2 py-1 text-sm rounded">{tag}</span>
                                  ))
                                }
                              </div>
                            )
                              :
                              <span className="text-gray-500 block">Not defined.</span>
                          }
                        </li>
                        {item.apiWebsite && 
                          <a href={item.apiWebsite} target="_blank" className="px-5 py-2 inline-block bg-teal-500 hover:bg-teal-600 text-white font-medium rounded">
                            Visit Website
                          </a>
                        }
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="grid gap-6 p-6">
                  <div>
                    <h5 className="font-medium mb-2 text-lg">Meta Information</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                      <li className="p-4 bg-gray-200 bg-opacity-50 rounded">
                        <span className="text-sm font-semibold text-gray-700 block">API Endpoint</span>
                        {item.apiEndpoint ? <a href={item.apiEndpoint} target="_blank" className="truncate block">{item.apiEndpoint}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 bg-gray-200 bg-opacity-50 rounded">
                        <span className="text-sm font-semibold text-gray-700 block">API Website</span>
                        {item.apiWebsite ? <a href={item.apiWebsite} target="_blank" className="truncate block">{item.apiWebsite}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 bg-gray-200 bg-opacity-50 rounded">
                        <span className="text-sm font-semibold text-gray-700 block">Docs URL</span>
                        {item.apiDocsUrl ? <a href={item.apiDocsUrl} target="_blank" className="truncate block">{item.apiDocsUrl}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 bg-gray-200 bg-opacity-50 rounded">
                        <span className="text-sm font-semibold text-gray-700 block">ToS URL</span>
                        {item.apiTosUrl ? <a href={item.apiTosUrl} target="_blank" className="truncate block">{item.apiTosUrl}</a> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                      <li className="p-4 bg-gray-200 bg-opacity-50 rounded">
                        <span className="text-sm font-semibold text-gray-700 block">Architecture</span>
                        {item.apiArchitecture ? <span className="block">{item.apiArchitecture}</span> : <span className="text-gray-500 block">Not defined.</span>}
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-lg">Request Formats</h5>
                    {
                      item.apiRequestFormats ? (
                        <div className="bg-gray-200 bg-opacity-50 p-4 rounded">
                          <div className="flex -m-px">
                            {
                              item.apiRequestFormats.map((tag, index) => (
                                <span className="inline capitalize bg-blue-200 bg-opacity-75 text-blue-900 m-px px-3 py-1 rounded">{tag}</span>
                              ))
                            }
                          </div>
                        </div>
                      )
                        :
                        <span className="text-gray-500 block">Not defined.</span>
                    }
                  </div>
                  <div>
                    <h5 className="font-medium mb-2 text-lg">Response Formats</h5>
                    {
                      item.apiResponseFormats ? (
                        <div className="bg-gray-200 bg-opacity-50 p-4 rounded">
                          <div className="flex -m-px">
                            {
                              item.apiResponseFormats.map((tag, index) => (
                                <span className="inline capitalize bg-blue-200 bg-opacity-75 text-blue-900 m-px px-3 py-1 rounded">{tag}</span>
                              ))
                            }
                          </div>
                        </div>
                      )
                        :
                        <span className="text-gray-500 block">Not defined.</span>
                    }
                  </div>
                </div>
              </div>
            </div>
          </>
      }
    </>
  )
}

export default Item
