import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'
import { PhosphorLogo } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <Avatar
          src="https://media-exp1.licdn.com/dms/image/C4D03AQHYMKfffq6NuA/profile-displayphoto-shrink_800_800/0/1658537663986?e=1666224000&v=beta&t=4nlFDE4tUFSs8zE0IrAmPMjvYKt5U9wQAQcbH6mU4LM"
        />
        <strong>Jonas Benjamim</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
