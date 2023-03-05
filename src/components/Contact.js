import React from 'react'

const Contact = () => {
  return (
    <div className=' bg-gray-700'>
    <div class="grid grid-cols-2 divide-x">
  <div><section className="bg-white dark:bg-gray-900">
  <div class="p-6 bg-slate-200 border-4 ">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className=" mb-3 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">let's get electric.</h2>
      <h2 className=" mb-6 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">come say hello.</h2>
      <form action="#" className="space-y-8">
      <div>
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 ">Your Name *</label>
              <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="enter name" required/>
          </div>

          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email *</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@gmail.com" required/>
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject *</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
              <div class="form-group form-check text-center mb-6">
              <button id="button" type="submit" class="bg-indigo-600 shadow-xl hover:bg-indigo-500 text-white font-bold rounded-full p-4 w-48  mt-20">Submit</button>
            
        </div>
      
          </div>
        
      </form>
      
  </div>
</div>
</section></div>
<div className=' bg-gray-200'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.7909901104695!2d81.53577551417995!3d16.836721822885618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37b360a16cea5f%3A0xdeeb3716c10f73d1!2sNATIONAL%20INSTITUTE%20OF%20TECHNOLOGY%20ANDHRA%20PRADESH!5e0!3m2!1sen!2sin!4v1677679161436!5m2!1sen!2sin" class=" mt-40 w-6/12 h-full absolute rounded-lg" frameborder="0" allowfullscreen></iframe>
</div>
</div>    

    </div>
  )
}


export default Contact