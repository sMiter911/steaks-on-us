import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Steaks</span>
              <span>On Us</span>
            </h1>
            <h2>Eat Like a Man</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Steaks on Us :)</p>
      </footer>
    </div>
  )
}