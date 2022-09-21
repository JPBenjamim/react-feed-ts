import styles from './App.module.css'

import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Siderbar'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFtb2ivkfRUtQ/profile-displayphoto-shrink_200_200/0/1660012319706?e=1666828800&v=beta&t=uYDAAQLhXPc8rZceIIz0lU_iKKDblZPqW44cmuCHpgE',
      name: 'Isis Aline Jablonski',
      role: 'Talent Acquisition '
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl:
        'https://media-exp1.licdn.com/dms/image/C4E03AQFe2WCzpviJrA/profile-displayphoto-shrink_200_200/0/1617574737577?e=1666828800&v=beta&t=OS8neRkZNoMbPb7Z9xEAI3JdZjgSO8WSKbQMEUeNP5Q',
      name: 'José Roberto',
      role: 'Senior Desenvolvedor Front End'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          ' Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-08-23 22:10:54')
  }
]
const algo = posts.map(post => {
  return 1
})

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}
