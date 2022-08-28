import React from 'react'
import { data } from '../../../lib/data'

const Display = ({item}) => {
return (
      <div>
        <h1>{item?.id}</h1>
        <h1>{item?.name}</h1>
        {/* <Image src={`/${item.image}`} alt="Vercel Logo" width={400} height={400} /> */}
        <p>{item?.description}</p>
                            
    </div>
  )
}

export default Display

export const getStaticPaths = () => {
    const paths = data.map(item => ({
        params: {
            id: String(item.id)
        }
    }))
    return {
        paths, 
        fallback: 'blocking'
    }
}

export const getStaticProps = ({params}) => {
    // const query = await fetch(`http://localhost:3000/display/${id}`);
    // if id == data.id
    // const data = data

    return {
        props: {
            item: {
                id: params.id,
                // name: params.name,
                // // image: params.image,
                // description: params.description

            }
        }
    }
}