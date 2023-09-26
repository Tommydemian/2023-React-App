import React, { useEffect } from 'react';
import { Counter } from '../components/Counter';
import axios from 'axios';
// useQuery
import {useQuery, useMutation} from '@tanstack/react-query';
// types
import { Post } from '../types/index';

const Collection: React.FC = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ['posts'], 
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.data as Post)
      .catch(error => console.log(error))
  });

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <Counter initialCount={0} />
      <div>
        {
          <div>
            <p>{data?.title}</p>
            <p>{data?.body}</p>
            <p>{data?.userId}</p>
            <p>{data?.id}</p>
          </div>
        }
      </div>
    </div>
  );
};

export default Collection;