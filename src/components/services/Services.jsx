import React from 'react'
import { services } from '../../constans'   // فرض کردم services اینجا export شده
import ServiceCard from '../../section/serviceCard/ServiceCard'

const Services = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((servi, index) => (
        <ServiceCard key={index} {...servi} />
      ))}
    </div>
  )
}

export default Services
