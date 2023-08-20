import React from 'react';
import Image from 'next/image';

const content13 = () => {
  return React.createElement(
    'section',
    { className: 'bg-white dark:bg-gray-900' },
    React.createElement(
      'div',
      { className: 'gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6' },
      React.createElement(
        'div',
        { className: 'font-light text-gray-500 sm:text-lg dark:text-gray-400' },
        React.createElement('h2', { className: 'mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white' }, "We didn't reinvent the wheel"),
        React.createElement('p', { className: 'mb-4' }, "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need."),
        React.createElement('p', null, "We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.")
      ),
      React.createElement(
        'div',
        { className: 'grid grid-cols-2 gap-4 mt-8' },
        React.createElement(Image, {
          className: 'w-full rounded-lg',
          src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          alt: 'office content 1',
          width: 387,
          height: 587
        }),
        React.createElement(Image, {
          className: 'mt-4 w-full lg:mt-10 rounded-lg',
          src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWgelHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          alt: 'office content 2',
          width: 387,
          height: 587
        })
      )
    )
  );
}

export default content13;
