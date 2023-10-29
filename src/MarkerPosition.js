import React from 'react'
import { Marker, Popup, useMap } from 'react-leaflet'
import icon from './icon'
import { useEffect, useMemo } from 'react'

export const MarkerPosition = ({address}) => {
    const position = useMemo(() => {
        return [address.location.lat, address.location.lng]
    }, [address.location.lat, address.location.lng])

    const map = useMap();

  useEffect(() => {
    map.flyTo(position, 11, {
      animate:true
    })
  }, [map, position])

  return (
    <>
    <Marker icon={icon} position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
    </>
  )
}
