import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useQuery, QueryClient } from 'react-query'
import styles from '../styles/Home.module.css'

const queryClient = new QueryClient();

export default function Home() {
  const { isLoading, err, data } = useQuery('test', () => axios('http://34.146.232.206//api/blue'))

  return (
    <>
      <div>{JSON.stringify(data)}</div>
    </>
  )
}

export const getServerSideProps = async (context) => {
  let result = {};

  // await fetch('http://localhost:8080/api/test')
  // .then((res) => {
  //   result = {}
  // })

  return {
    props: { result }
  }
};
