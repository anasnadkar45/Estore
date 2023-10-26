import React, { useContext } from 'react'
import {FaUserTie } from 'react-icons/fa';
import myContext from '../../../context/data/myContext';
import Layout from '../../../components/layout/Layout';
import DashboardTab from './DashboardTab';

function Dashboard() {
    const context = useContext(myContext)
    const { mode, product, order, user,products} = context
    
  return (
    <Layout>
        <section className="text-gray-600 body-font mt-10 mb-10">
            <div className="container px-5 mx-auto mb-10 ">
                <div className="flex flex-wrap -m-4 text-center  justify-center">
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-200 ease-in-out">
                        <div className="  hover:shadow-grey-600 shadow-2xl  bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? '#1f2937' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{product.length}</h2>
                            <p className=" text-blue-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-200 ease-in-out">
                        <div className="  hover:shadow-grey-600 shadow-2xl bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? '#1f2937' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <div className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{order.length}</h2>
                            <p className=" text-blue-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Orders</p>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-200 ease-in-out">
                        <div className=" hover:shadow-grey-600 shadow-2xl bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? '#1f2937' : '', color: mode === 'dark' ? 'white' : '', }} >
                            <div className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{user.length}</h2>
                            <p className=" text-blue-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Users</p>
                        </div>
                    </div>
                    {/* <div className="p-4 md:w-1/4 sm:w-1/2 w-full hover:scale-110 transition duration-200 ease-in-out">
                        <div className=" hover:shadow-grey-600 shadow-2xl bg-gray-100 border-gray-300    px-4 py-3 rounded-xl" style={{ backgroundColor: mode === 'dark' ? '#1f2937' : '', color: mode === 'dark' ? 'white' : '', }}>
                            <div className="text-blue-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                                <FaUserTie size={50} />
                            </div>
                            <h2 className="title-font font-medium text-3xl text-black fonts1" style={{ color: mode === 'dark' ? 'white' : ''}}>{product.length}</h2>
                            <p className=" text-blue-600  font-bold" style={{ color: mode === 'dark' ? 'white' : ''}}>Total Products</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <DashboardTab/>
        </section>
    </Layout>
  )
}

export default Dashboard