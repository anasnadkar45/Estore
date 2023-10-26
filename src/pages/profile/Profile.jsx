import React from 'react'
import Layout from '../../components/layout/Layout'

function profile() {
    
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);

    
    return (
        <Layout>
            <div className='container mx-auto px-20 md:px-20 py-12'>
                <h1 className='text-center text-2xl text-blue-600 font-bold pb-6'>Personal Information</h1>
                <form>
                    <div className='grid grid-cols-2 gap-4'>
                        <input value={user.email} label='name' placeholder='First Name' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]' />
                        <input label='name' placeholder='Last Name' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                        <input label='name' placeholder='Contact Number' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                        <input value={user.user.email} onChange={(e) => setName(e.target.value)} label='name' placeholder='Email' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                        <input label='name' placeholder='Address' className='bg-gray-50 border-2 border-gray-300 col-span-2 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                        <input label='name' placeholder='City' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                        <input label='name' placeholder='Postal/Zip Code' className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                        <input label='name' placeholder='State' className='bg-gray-50 border-2 border-gray-300 col-span-2 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                    </div>
                    <div className='flex justify-center gap-32 lg:gap-44 pt-10'>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">BACK</button>
                        <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
                    </div>
                </form>
                <div className='flex justify-center pt-8 gap-4 flex-col'>
                    <h1 className='text-center text-2xl text-blue-600 font-bold pb-2'>Reset Password</h1>
                    <input label='name' placeholder='State' className='bg-gray-50 border-2 border-gray-300 col-span-2 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                    <input label='name' placeholder='State' className='bg-gray-50 border-2 border-gray-300 col-span-2 text-gray-900 text-lg rounded-lg hover:border-blue-600 hover:border-[3px] block w-full h-14 p-2.5 focus:outline-none focus:border-blue-600 focus:border-[3px]'></input>
                    <div className='text-center'>
                        <button class=" text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 ">RESET</button>
                    </div>
                </div>
                <div className='flex justify-center gap-8 md:gap-40 lg:gap-40 pt-14 '>
                    <h1 className='self-center'>Delete Your Account?</h1>
                    <button class="text-white bg-red-700 hover:bg-red-800 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center">DELETE</button>
                </div>
            </div>

        </Layout>
    )
}

export default profile