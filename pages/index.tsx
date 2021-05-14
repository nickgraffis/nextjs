import { ThemeProvider } from 'next-themes'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export default function Home({ allPostsData }) {
  return ( <ThemeProvider attribute="class">
      <div className="min-h-screen h-full w-screen dark:bg-nosferatu">
        <div className="flex flex-col mx-auto items-center max-w-2xl min-h-screen px-8 md:px-0 lg:px-0">
          <div className="w-full flex flex-col items-start">
            <p className="text-5xl lg:text-7xl md:text-7xl font-bold text-left mb-4 mt-6 text-gray-800 dark:text-cullen">
              Hi
            </p>
            <p className="text-lg text-left mb-6 dark:text-cullen">
              I'm nick graffis
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
