import React from 'react'

function FooterLinks() {
  return (
    <footer className="mt-20 pb-6 ">
    <div className="flex gap-3 text-sm justify-center text-gray-600 dark:text-slate-200">
      <a href="/curriculum/.pdf" className="hover:text-black">RESUME</a>
      <span>/</span>
      <a href="mailto:joao.khalaf@gmail.com" className="hover:text-black">MAIL</a>
      <span>/</span>
      <a href="https://x.com/kh4lf_" className="hover:text-black">TWITTER</a>
      <span>/</span>
      <a href="https://www.linkedin.com/in/joaokhalaf/" className="hover:text-black">LINKEDIN</a>
      <span>/</span>
      <a href="https://github.com/jkhlf" className="hover:text-black">GITHUB</a>
    </div>
  </footer>
  )
}

export default FooterLinks