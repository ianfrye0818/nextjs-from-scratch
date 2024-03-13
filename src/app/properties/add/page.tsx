import React from 'react';
import AddPropertyForm from './add-property-form';

export default function AddPropertyPage() {
  return (
    <section className='bg-blue-50'>
      <div className='md:container m-auto lg:max-w-2xl md:py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <AddPropertyForm />
        </div>
      </div>
    </section>
  );
}
