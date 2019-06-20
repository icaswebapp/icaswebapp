import React from 'react'

export default (collection, Component) => {
    return collection.map((object, index) => {
        return <Component
            key={index} 
            object={object} 
            position={index}
        />
    })
}